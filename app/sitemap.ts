import type { MetadataRoute } from "next";
import { solutions, sectors, referenceProjects } from "@/lib/company-profile";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
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
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...sectors.map((s) => `/sectors/${s.slug}`),
    ...referenceProjects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: `https://www.felixbd.com${path}` }));
}
