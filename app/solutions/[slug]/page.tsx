import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions, sectors } from "@/lib/company-profile";
import { Breadcrumbs, Photo } from "@/components/site/page-parts";
import { ProductGallery } from "@/components/site/product-gallery";
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((s) => s.slug === slug);
  return {
    title: `${s?.title ?? "Solution"} | Felix Controls Limited`,
    description: s?.description,
  };
}
export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = solutions.find((s) => s.slug === slug);
  if (!s) notFound();
  const relevantSectors = sectors.filter((sector) =>
    sector.solutions.includes(s.slug),
  );
  return (
    <PageCanvas id="main" className="solution-article">
      <header className="solution-detail-intro fcl-container">
        <div className="solution-meta-row">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: s.short },
            ]}
          />
          <p className="solution-technology">
            <AnimatedCopy>
              <span>Technology:</span> {s.partner}
            </AnimatedCopy>
          </p>
        </div>
        <h1>
          <AnimatedCopy>{s.title}</AnimatedCopy>
        </h1>
        <div className="solution-hero-media">
          <p className="solution-standfirst">
            <AnimatedCopy>{s.intro}</AnimatedCopy>
          </p>
          <Photo
            name={s.image}

            alt={`${s.short} application environment`}
            priority
          />
        </div>
      </header>
      <section className="solution-specification fcl-container">
        <div className="solution-overview">
          <h2>
            <AnimatedCopy>System overview</AnimatedCopy>
          </h2>
          <p>
            <AnimatedCopy>{s.description}</AnimatedCopy>
          </p>
        </div>
        <div className="solution-capabilities">
          <h2>
            <AnimatedCopy>Capabilities</AnimatedCopy>
          </h2>
          <ul>
            {s.capabilities.map((capability) => (
              <li key={capability}>
                <AnimatedCopy>{capability}</AnimatedCopy>
              </li>
            ))}
          </ul>
        </div>
        <div className="solution-applications">
          <h2>
            <AnimatedCopy>Applications</AnimatedCopy>
          </h2>
          <ul className="application-links">
            {s.applications.map((application) => {
              const sector = relevantSectors.find((item) =>
                item.title.toLowerCase().startsWith(application.toLowerCase()),
              );
              return (
                <li key={application}>
                  <AnimatedCopy>
                    {sector ? (
                      <Link href={`/sectors/${sector.slug}`}>
                        {application}
                      </Link>
                    ) : (
                      application
                    )}
                  </AnimatedCopy>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <ProductGallery slug={s.slug} />
    </PageCanvas>
  );
}
