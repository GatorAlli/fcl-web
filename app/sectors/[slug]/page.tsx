import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileProse } from "@/components/site/profile-prose";
import { profileSectorFocus } from "@/lib/profile-content";
import { sectors, solutions } from "@/lib/company-profile";
import {
  Breadcrumbs,
  PageIntro,
  SolutionLinks,
} from "@/components/site/page-parts";
export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/sectors/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = sectors.find((s) => s.slug === slug);
  return {
    title: `${s?.title ?? "Sector"} | Felix Controls Limited`,
    description: s?.text,
  };
}
export default async function SectorPage({
  params,
}: PageProps<"/sectors/[slug]">) {
  const { slug } = await params;
  const s = sectors.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <PageCanvas id="main" className="sector-article profile-article">
      <PageIntro
        label="Sectors"
        title={s.title}
        text={s.text}
        image={s.image}
        imageHref={`/solutions/${s.solutions[0]}`}

        navigation={
          <Breadcrumbs
            items={[{ label: "Sectors", href: "/sectors" }, { label: s.title }]}
          />
        }
      />
      <section className="fcl-container profile-content-section" aria-label="Our approach">
        <ProfileProse
          paragraphs={["Whether it concerns a system upgrade, renovation or new construction, we always focus on:"]}
          bullets={profileSectorFocus}
        />
      </section>
      <section className="fcl-container fcl-section">
        <div className="fcl-section-top">
          <h2>
            <AnimatedCopy>Relevant solutions</AnimatedCopy>
          </h2>
        </div>
        <SolutionLinks
          items={solutions.filter((solution) =>
            s.solutions.includes(solution.slug),
          )}
        />
      </section>
    </PageCanvas>
  );
}
