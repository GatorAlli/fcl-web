import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site-metadata";

// Opt into one static response without a route segment config.
export function generateStaticParams() {
  return [{}];
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
