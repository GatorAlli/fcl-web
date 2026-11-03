import { readFile, writeFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const base = process.argv[2] ?? "http://localhost:3000";
const buildDirectory = process.argv[3] ?? ".next";
const manifest = JSON.parse(
  await readFile(resolve(buildDirectory, "prerender-manifest.json"), "utf8"),
);
const routes = Object.keys(manifest.routes).filter(
  (route) =>
    !route.startsWith("/_") &&
    !route.includes("[") &&
    !route.endsWith(".txt") &&
    !route.endsWith(".xml"),
);
const routeKey = (path) => path.replace(/\/$/, "") || "/";
const generatedRoutes = new Set(routes.map(routeKey));
const errors = [];
const checked = [];
const assets = new Set();
const links = new Set();
const filmPages = new Map();
let cursor = 0;
async function worker() {
  while (cursor < routes.length) {
    const route = routes[cursor++];
    try {
      const response = await fetch(new URL(route, base), {
        signal: AbortSignal.timeout(45000),
      });
      const html = await response.text();
      if (response.status !== 200)
        errors.push(`${route}: HTTP ${response.status}`);
      if (!html.includes("<main") || !html.includes('id="main"'))
        errors.push(`${route}: main landmark missing`);
      if (!/<title>[^<]+<\/title>/.test(html))
        errors.push(`${route}: title missing`);
      for (const [, film] of html.matchAll(/data-film="([^"]+)"/g)) {
        const pages = filmPages.get(film) ?? new Set();
        pages.add(route);
        filmPages.set(film, pages);
        if (film === "engineering") errors.push(`${route}: rejected video is still assigned`);
      }
      for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
        const href = match[1].replaceAll("&amp;", "&");
        if (href.startsWith("/assets/") || href.startsWith("/downloads/"))
          assets.add(href);
        if (
          href.startsWith("/") &&
          !href.startsWith("/_next/") &&
          !href.startsWith("//")
        )
          links.add(href.split(/[?#]/)[0] || "/");
      }
      checked.push({ route, status: response.status });
    } catch (error) {
      errors.push(`${route}: ${error.message}`);
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
for (const asset of assets) {
  try {
    await access(
      resolve(`public${decodeURIComponent(asset.split(/[?#]/)[0])}`),
    );
  } catch {
    errors.push(`Missing public asset: ${asset}`);
  }
}
for (const href of links) {
  if (href.startsWith("/assets/") || href.startsWith("/downloads/")) continue;
  if (!generatedRoutes.has(routeKey(href))) {
    try {
      await access(resolve(`public${decodeURIComponent(href)}`));
      const response = await fetch(new URL(href, base));
      if (!response.ok) errors.push(`Public destination ${href}: HTTP ${response.status}`);
    } catch {
      errors.push(`Internal destination has no generated route or public file: ${href}`);
    }
  }
}
for (const [film, pages] of filmPages) {
  if (pages.size > 1) errors.push(`Repeated video ${film}: ${[...pages].join(", ")}`);
  try { await access(resolve(`public/assets/films/${film}.mp4`)); }
  catch { errors.push(`Missing assigned film: ${film}`); }
}
const pdf = await fetch(new URL("/downloads/felix-company-profile.pdf", base));
if (!pdf.ok || !pdf.headers.get("content-type")?.includes("pdf"))
  errors.push("Profile download is not a valid PDF response.");
const report = {
  routes: checked.sort((a, b) => a.route.localeCompare(b.route)),
  publicAssets: assets.size,
  internalDestinations: links.size,
  films: Object.fromEntries([...filmPages].map(([film, pages]) => [film, [...pages]])),
  profileDownloadStatus: pdf.status,
  errors,
};
await writeFile(
  "references/analysis/frontend-verification.json",
  JSON.stringify(report, null, 2),
);
console.log(
  JSON.stringify(
    {
      pages: checked.length,
      publicAssets: assets.size,
      internalDestinations: links.size,
      profileDownloadStatus: pdf.status,
      errors,
    },
    null,
    2,
  ),
);
if (errors.length) process.exitCode = 1;
