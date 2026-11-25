import { readFile, writeFile, access, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const [target, directory, staticBuildDirectory] = process.argv.slice(2);
const staticExport = target === "--static";
const exportDirectory = directory ?? "out";
const base = staticExport
  ? "https://felixbd.com"
  : (target ?? "http://localhost:3000");
const buildDirectory =
  (staticExport ? staticBuildDirectory : directory) ?? ".next";
const manifest = JSON.parse(
  await readFile(resolve(buildDirectory, "prerender-manifest.json"), "utf8"),
);
const routes = Object.keys(manifest.routes).filter(
  (route) =>
    !route.startsWith("/_") &&
    !route.includes("[") &&
    !route.endsWith(".txt") &&
    !route.endsWith(".xml") &&
    !route.endsWith(".ico"),
);
const routeKey = (path) => path.replace(/\/$/, "") || "/";
const generatedRoutes = new Set(routes.map(routeKey));
const errors = [];
const checked = [];
const assets = new Set();
const links = new Set();
const filmPages = new Map();
const pageIds = new Map();
const fragments = [];
let imagesChecked = 0;

function localFile(path, root = exportDirectory) {
  return resolve(root, "." + decodeURIComponent(path));
}

function exportedPage(route) {
  const path = routeKey(route);
  return readFile(
    localFile(path === "/" ? "/index.html" : path + "/index.html"),
    "utf8",
  ).catch((error) => {
    if (path === "/" || error.code !== "ENOENT") throw error;
    return readFile(localFile(path + ".html"), "utf8");
  });
}

const siteOrigins = new Set([
  new URL(base).origin,
  "https://felixbd.com",
  "https://www.felixbd.com",
]);

let cursor = 0;
async function worker() {
  while (cursor < routes.length) {
    const route = routes[cursor++];
    try {
      const response = staticExport
        ? null
        : await fetch(new URL(route, base), {
            signal: AbortSignal.timeout(45000),
          });
      const html = response ? await response.text() : await exportedPage(route);
      if (response && response.status !== 200)
        errors.push(`${route}: HTTP ${response.status}`);
      if (!html.includes("<main") || !html.includes('id="main"'))
        errors.push(`${route}: main landmark missing`);
      if (!/<title>[^<]+<\/title>/.test(html))
        errors.push(`${route}: title missing`);
      for (const [, film] of html.matchAll(/data-film="([^"]+)"/g)) {
        const pages = filmPages.get(film) ?? new Set();
        pages.add(route);
        filmPages.set(film, pages);
        if (film === "engineering")
          errors.push(`${route}: rejected video is still assigned`);
      }
      const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
      pageIds.set(
        routeKey(route),
        new Set(
          [...markup.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
        ),
      );
      for (const tag of markup.matchAll(/<img\b(?:[^">]|"[^"]*")*>/gi)) {
        imagesChecked++;
        if (!/\salt="[^"]*"/.test(tag[0]))
          errors.push(`${route}: image missing alt text`);
      }
      for (const [, value] of markup.matchAll(/\s(?:href|src)="([^"<>]+)"/g)) {
        const url = new URL(
          value.replaceAll("&amp;", "&"),
          new URL(route === "/" ? route : routeKey(route) + "/", base),
        );
        if (!siteOrigins.has(url.origin)) continue;
        if (
          url.pathname.startsWith("/assets/") ||
          url.pathname.startsWith("/downloads/")
        )
          assets.add(url.pathname);
      }
      for (const [, value] of markup.matchAll(/<a\b[^>]*?\shref="([^"]+)"/gi)) {
        const url = new URL(
          value.replaceAll("&amp;", "&"),
          new URL(route === "/" ? route : routeKey(route) + "/", base),
        );
        if (!siteOrigins.has(url.origin)) continue;
        links.add(url.pathname);
        if (url.hash && generatedRoutes.has(routeKey(url.pathname))) {
          fragments.push({
            route,
            pathname: routeKey(url.pathname),
            fragment: decodeURIComponent(url.hash.slice(1)),
          });
        }
      }
      checked.push(response ? { route, status: response.status } : { route });
    } catch (error) {
      errors.push(`${route}: ${error.message}`);
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
for (const asset of assets) {
  try {
    await access(localFile(asset, staticExport ? exportDirectory : "public"));
  } catch {
    errors.push(`Missing public asset: ${asset}`);
  }
}
for (const href of links) {
  if (href.startsWith("/assets/") || href.startsWith("/downloads/")) continue;
  if (!generatedRoutes.has(routeKey(href))) {
    try {
      await access(localFile(href, staticExport ? exportDirectory : "public"));
      if (!staticExport) {
        const response = await fetch(new URL(href, base));
        if (!response.ok)
          errors.push(`Public destination ${href}: HTTP ${response.status}`);
      }
    } catch {
      errors.push(
        `Internal destination has no generated route or public file: ${href}`,
      );
    }
  }
}
for (const { route, pathname, fragment } of fragments) {
  if (!pageIds.get(pathname)?.has(fragment)) {
    const message = `${route}: missing anchor ${pathname}#${fragment}`;
    if (!errors.includes(message)) errors.push(message);
  }
}
for (const [film, pages] of filmPages) {
  if (pages.size > 1)
    errors.push(`Repeated video ${film}: ${[...pages].join(", ")}`);
  try {
    await access(resolve(`public/assets/films/${film}.mp4`));
  } catch {
    errors.push(`Missing assigned film: ${film}`);
  }
}
const pdfPath = "/downloads/felix-company-profile.pdf";
const pdf = staticExport ? null : await fetch(new URL(pdfPath, base));
const pdfBytes = pdf
  ? Buffer.from(await pdf.arrayBuffer())
  : await readFile(localFile(pdfPath)).catch(() => Buffer.alloc(0));
const profileDownloadValid =
  (!pdf || (pdf.ok && pdf.headers.get("content-type")?.includes("pdf"))) &&
  pdfBytes.subarray(0, 5).toString() === "%PDF-";
if (!profileDownloadValid) errors.push("Profile download is not a valid PDF.");
const report = {
  mode: staticExport ? "static export" : "HTTP",
  routes: checked.sort((a, b) => a.route.localeCompare(b.route)),
  publicAssets: assets.size,
  internalDestinations: links.size,
  imagesChecked,
  films: Object.fromEntries(
    [...filmPages].map(([film, pages]) => [film, [...pages]]),
  ),
  profileDownloadStatus: pdf?.status,
  profileDownloadValid,
  errors,
};
const reportPath = "references/analysis/frontend-verification.json";
await mkdir(dirname(reportPath), { recursive: true });
await writeFile(reportPath, JSON.stringify(report, null, 2));
console.log(
  JSON.stringify(
    {
      pages: checked.length,
      publicAssets: assets.size,
      internalDestinations: links.size,
      imagesChecked,
      profileDownloadStatus: pdf?.status,
      profileDownloadValid,
      errors,
    },
    null,
    2,
  ),
);
if (errors.length) process.exitCode = 1;
