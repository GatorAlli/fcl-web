import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { CompanyLogo } from "@/components/site/company-logo";
import { partners } from "@/lib/company-profile";
import { Breadcrumbs, PageIntro } from "@/components/site/page-parts";
export const metadata: Metadata = {
  title: "Technology Partners | Felix Controls Limited",
};
export default function Partners() {
  return (
    <PageCanvas id="main">
      <Breadcrumbs items={[{ label: "Partners" }]} />
      <PageIntro
        label="TECHNOLOGY"
        title="Our partners."
        text="The technology partners featured in our Company Profile support our work across buildings, industry and connected spaces."
        image="control-room"
        tone="charcoal"
      />
      <div className="partner-directory fcl-container fcl-section">
        {partners.map((p) => (
          <article key={p.logo}>
            <div className="partner-logo-well">
              <CompanyLogo
                name={"partner-" + p.logo}
                width={220}
                height={114}
                alt={p.name}
              />
            </div>
            <div>
              <h2>
                <AnimatedCopy>{p.name}</AnimatedCopy>
              </h2>
              <p>
                <AnimatedCopy>{p.description}</AnimatedCopy>
              </p>
            </div>
            <Link className="fcl-link" href={`/solutions/${p.solution}`}>
              Explore solution
            </Link>
          </article>
        ))}
      </div>
    </PageCanvas>
  );
}
