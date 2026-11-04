import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { profileSectorIntro } from "@/lib/profile-content";
import { sectors } from "@/lib/company-profile";
import { Breadcrumbs, PageIntro, Photo } from "@/components/site/page-parts";
export const metadata: Metadata = { title: "Sectors | Felix Controls Limited" };
export default function Sectors() {
  return (
    <PageCanvas id="main">
      <Breadcrumbs items={[{ label: "Sectors" }]} />
      <PageIntro
        label="UNDERSTANDING YOUR BUSINESS"
        title="Understanding Your Business Needs"
        image="sector-commercial"
        imageHref="/sectors/commercial"
        text={profileSectorIntro}
      />
      <div className="sector-index fcl-container fcl-section">
        {sectors.map((s) => (
          <Link
            href={`/sectors/${s.slug}`}
            className="sector-tile"
            key={s.slug}
          >
            <Photo
              name={s.image}
              alt={`${s.title} illustration from the Company Profile`}
            />
            <h2>
              <AnimatedCopy>{s.title}</AnimatedCopy>
            </h2>
          </Link>
        ))}
      </div>
    </PageCanvas>
  );
}
