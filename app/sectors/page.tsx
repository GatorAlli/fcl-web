import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/company-profile";
import { Breadcrumbs, PageIntro, Photo } from "@/components/site/page-parts";
export const metadata: Metadata = { title: "Sectors | Felix Controls Limited" };
export default function Sectors() {
  return (
    <PageCanvas id="main">
      <Breadcrumbs items={[{ label: "Sectors" }]} />
      <PageIntro
        label="UNDERSTANDING YOUR BUSINESS"
        title="Sectors we work in."
        image="sector-commercial"
        text="New construction, renovation or a system upgrade: every environment has its own requirements. We build our approach around yours."
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
              alt={`${s.title} illustration from the company profile`}
            />
            <h2>
              <AnimatedCopy>{s.title}</AnimatedCopy>
            </h2>
            <p>
              <AnimatedCopy>{s.text}</AnimatedCopy>
            </p>
          </Link>
        ))}
      </div>
    </PageCanvas>
  );
}
