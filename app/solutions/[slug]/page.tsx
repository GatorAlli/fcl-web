import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/company-profile";
import { profileSolutions } from "@/lib/profile-content";
import { manufacturers } from "@/lib/official-sites";
import { Breadcrumbs, Photo } from "@/components/site/page-parts";
import { ProductGallery } from "@/components/site/product-gallery";
import { ProfileProse } from "@/components/site/profile-prose";
import { ManufacturerLinks } from "@/components/site/manufacturer-links";
import { technologyContext } from "@/lib/technology-context";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const copy = profileSolutions[slug];
  return {
    title: `${copy?.title ?? "Solution"} | Felix Controls Limited`,
    description: copy?.paragraphs[0],
  };
}
export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  const copy = profileSolutions[slug];
  const primary = manufacturers[copy.brands[0]];
  const context = technologyContext[slug];
  return (
    <PageCanvas id="main" className="solution-article profile-article">
      <header className="solution-detail-intro fcl-container">
        <div className="solution-meta-row">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: solution.short },
            ]}
          />
          <div className="solution-technology manufacturer-names">
            {copy.brands.map((id) => (
              <a
                key={id}
                href={manufacturers[id].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {manufacturers[id].name}
              </a>
            ))}
          </div>
        </div>
        <h1>
          <AnimatedCopy>{copy.title}</AnimatedCopy>
        </h1>
        <div className="solution-hero-media">
          <Photo
            name={solution.image}
            alt={`${solution.short} — learn more from ${primary.name}`}
            href={primary.href}
            priority
          />
        </div>
      </header>
      <section
        className="fcl-container profile-content-section solution-overview-layout"
        aria-label={copy.title}
      >
        <div className="solution-overview-copy">
          <ProfileProse paragraphs={copy.paragraphs} bullets={copy.bullets} />
          <ManufacturerLinks
            brands={
              slug === "building-management"
                ? [...copy.brands, "trane"]
                : copy.brands
            }
          />
        </div>
        {context && (
          <Photo
            name={
              slug === "security"
                ? "solution-entry"
                : slug === "building-management"
                  ? "solution-bms"
                  : context.image
            }
            alt={
              slug === "security"
                ? "An access-controlled office entrance, shown as an illustrative application"
                : context.caption
            }
            className="solution-overview-photo"
          />
        )}
      </section>
      <ProductGallery slug={slug} />
    </PageCanvas>
  );
}
