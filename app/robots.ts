import type { MetadataRoute } from "next";

// Opt into one static response without a route segment config.
export function generateStaticParams() {
  return [{}];
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://felixbd.com/sitemap.xml",
  };
}
