import { AnimatedCopy } from "@/components/site/animated-copy";
import { sitePageMetadata } from "@/lib/site-metadata";
import { PageCanvas } from "@/components/site/page-canvas";
import { PageIntro } from "@/components/site/page-parts";
import { brochure, profilePages } from "@/lib/company-profile";
export const metadata = sitePageMetadata(
  "/resources",
  "Company Profile & Resources",
  "Download the Felix Controls Limited company profile for technical illustrations, client references and photographs of engineering projects.",
);
export default function Resources() {
  return (
    <PageCanvas id="main">
      <PageIntro
        label="Resources"
        title="Company Profile 2025"
        text="The original twenty-page profile, including company information, technical illustrations, client references and actual project photographs."
      />
      <section className="fcl-container fcl-section">
        <a
          className="fcl-button"
          href={brochure}
          download
          data-analytics-event="brochure_download_click"
        >
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
