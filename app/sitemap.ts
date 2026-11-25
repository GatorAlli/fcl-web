import type { MetadataRoute } from "next";
import { solutions, sectors, referenceProjects } from "@/lib/company-profile";
import { canonicalSiteUrl } from "@/lib/site-metadata";

// Opt into one static response without a route segment config.
export function generateStaticParams() {
  return [{}];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/services",
    "/solutions",
    "/sectors",
    "/partners",
    "/clients",
    "/projects",
    "/contact",
    "/careers",
    "/resources",
    "/privacy",
    "/terms",
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...sectors.map((s) => `/sectors/${s.slug}`),
    ...referenceProjects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({
    url: canonicalSiteUrl(path),
  }));
}
