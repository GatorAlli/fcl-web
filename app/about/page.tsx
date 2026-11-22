import { AnimatedCopy } from "@/components/site/animated-copy";
import type { Metadata } from "next";
import { PageCanvas } from "@/components/site/page-canvas";
import { ProfileProse } from "@/components/site/profile-prose";
import { profileAbout, profileReasons } from "@/lib/profile-content";
import { DisplayText } from "@/components/site/display-text";
import { LeadershipProfile } from "@/components/site/leadership-profile";
import { director, managingDirector } from "@/lib/leadership";
import { companyPurpose, companyResources } from "@/lib/company-data";
import { brochure } from "@/lib/company-profile";

export const metadata: Metadata = {
  title: "About Felix | Felix Controls Limited",
};

export default function About() {
  return (
    <PageCanvas
      id="main"
      className="fcl-container about-data-page profile-article"
    >
      {/* Leadership: photo left (Managing Director), photo right (Director) */}
      <section aria-label="Leadership">
        <LeadershipProfile member={managingDirector} photoSide="left" />
        <LeadershipProfile member={director} photoSide="right" />
      </section>

      {/* Who we are: centred heading, full-width copy */}
      <section className="pt-10 pb-6" aria-labelledby="who-we-are">
        <header className="about-opening !mb-0 !min-h-0 !pb-0 text-center">
          <p className="section-label">
            <AnimatedCopy>About Felix</AnimatedCopy>
          </p>
          <h1 id="who-we-are" className="!mb-0 !pb-0">
            <DisplayText text="Who we are ?" />
          </h1>
        </header>
        <div className="profile-content-section mx-auto !mt-4 max-w-5xl !pt-0 [&_.profile-copy]:!max-w-none [&_p]:!max-w-none">
          <ProfileProse paragraphs={profileAbout} />
        </div>
      </section>

      {/* --- REMAINDER OF ORIGINAL PAGE CONTENT (100% UNTOUCHED) --- */}
      <section aria-label="Mission, vision and objective">
        {companyPurpose.map(([title, text]) => (
          <div className="about-data-row" key={title}>
            <h2>
              <AnimatedCopy>{title}</AnimatedCopy>
            </h2>
            <p>
              <AnimatedCopy>{text}</AnimatedCopy>
            </p>
          </div>
        ))}
      </section>
      <section className="about-data-row">
        <h2>
          <AnimatedCopy>Resources and capabilities</AnimatedCopy>
        </h2>
        <ul className="resource-facts">
          {companyResources.map((fact) => (
            <li key={fact}>
              <AnimatedCopy>{fact}</AnimatedCopy>
            </li>
          ))}
        </ul>
      </section>
      <section className="about-data-row">
        <h2>
          <AnimatedCopy>Reasons to Choose Felix</AnimatedCopy>
        </h2>
        <div className="prose about-team-statement">
          {profileReasons.map((reason) => (
            <div key={reason.title}>
              <h3>
                <AnimatedCopy>{reason.title}</AnimatedCopy>
              </h3>
              <ProfileProse paragraphs={[reason.text]} />
            </div>
          ))}
        </div>
      </section>
      <section className="about-data-row profile-statement">
        <h2>
          <AnimatedCopy>Profile statement</AnimatedCopy>
        </h2>
        <figure>
          <blockquote>
            <AnimatedCopy>
              “One of the leading system integrators in Bangladesh”
            </AnimatedCopy>
          </blockquote>
        </figure>
      </section>
      <section className="about-data-row profile-download-row">
        <h2>
          <AnimatedCopy>Download</AnimatedCopy>
        </h2>
        <div>
          <a href={brochure} download className="fcl-button">
            Company Profile 2025 (PDF)
          </a>
        </div>
      </section>
    </PageCanvas>
  );
}
