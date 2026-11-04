import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import { manufacturers } from "@/lib/official-sites";
import { profilePartnerCopy, profilePartnerIntro } from "@/lib/profile-content";
import { CompanyLogo } from "@/components/site/company-logo";
import { partners } from "@/lib/company-profile";
import { Breadcrumbs, PageIntro } from "@/components/site/page-parts";
export const metadata: Metadata = {
  title: "Technology Partners | Felix Controls Limited",
};
export default function Partners() {
  return (
    <PageCanvas id="main" className="profile-article">
      <Breadcrumbs items={[{ label: "Partners" }]} />
      <PageIntro
        label="TECHNOLOGY"
        title="Our Partners"
        text={profilePartnerIntro}
        image="control-room"
        tone="charcoal"
      />
      <div className="partner-directory fcl-container fcl-section">
        {partners.map((p) => (
          <article key={p.logo}>
            <a className="partner-logo-well" href={manufacturers[p.logo].href} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${p.name}`}>
              <CompanyLogo
                name={"partner-" + p.logo}
                width={220}
                height={114}
                alt={p.name}
              />
            </a>
            <div>
              <h2>
                <AnimatedCopy>{p.name}</AnimatedCopy>
              </h2>
              <p>
                <AnimatedCopy>{profilePartnerCopy[p.logo]}</AnimatedCopy>
              </p>
            </div>
            <a className="section-action" href={manufacturers[p.logo].href} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${p.name}`}>
              Learn more
            </a>
          </article>
        ))}
      </div>
    </PageCanvas>
  );
}
