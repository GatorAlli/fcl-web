import { AnimatedCopy } from "@/components/site/animated-copy";
import type { Metadata } from "next";
import { PageCanvas } from "@/components/site/page-canvas";
import { PageIntro } from "@/components/site/page-parts";
import { brochure, profilePages } from "@/lib/company-profile";
export const metadata: Metadata = {
  title: "Company Profile & Resources | Felix Controls Limited",
};
export default function Resources() {
  return (
    <PageCanvas id="main">
      <PageIntro
        label="Resources"
        title="Company Profile 2025"
        text="The original twenty-page profile, including company information, technical illustrations, client references and actual project photographs."
      />
      <section className="fcl-container fcl-section">
        <a className="fcl-button" href={brochure} download>
          Download Company Profile 2025 (PDF)
        </a>
        <ol className="profile-resource-list">
          {profilePages.map((page, index) => (
            <li key={page.title + "-" + index}>
              <AnimatedCopy>
                <h2>
                  <a
                    href={brochure + "#page=" + (index + 1)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {page.title}
                  </a>
                </h2>
                <p>{page.summary}</p>
              </AnimatedCopy>
            </li>
          ))}
        </ol>
      </section>
    </PageCanvas>
  );
}
