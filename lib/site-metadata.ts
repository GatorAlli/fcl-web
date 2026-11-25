import type { Metadata } from "next";

export const siteName = "Felix Controls Limited";
export const siteOrigin = "https://felixbd.com";
export const siteTagline = "Engineering Better Buildings";
export const homeTitle = `${siteName} | ${siteTagline}`;
export const homeDescription =
  "Felix Controls Limited. Building management, automation, fire safety and integrated engineering solutions in Bangladesh since 2010.";

const shareImage = {
  url: `${siteOrigin}/assets/felix-social-preview.jpg`,
  width: 1200,
  height: 630,
  alt: "Felix Controls Limited logo and Engineering Better Buildings beside a glass office building",
};

export const siteShareMetadata = {
  openGraph: {
    type: "website",
    siteName,
    title: homeTitle,
    description: homeDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [shareImage],
  },
} satisfies Pick<Metadata, "openGraph" | "twitter">;

export function canonicalSiteUrl(path: string) {
  return new URL(path.replace(/\/?$/, "/"), siteOrigin).href;
}

// Search results cut long snippets, so end on a whole sentence or word.
export function summarize(text: string, limit = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;

  const cut = clean.slice(0, limit);
  const sentenceEnd = cut.lastIndexOf(". ");
  if (sentenceEnd >= limit / 2) return cut.slice(0, sentenceEnd + 1);

  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "")}…`;
}

export function sitePageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = canonicalSiteUrl(path);
  const fullTitle = path === "/" ? homeTitle : `${title} | ${siteName}`;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...siteShareMetadata.openGraph,
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      ...siteShareMetadata.twitter,
      title: fullTitle,
      description,
    },
  };
}
