import { AnimatedCopy } from "@/components/site/animated-copy";
import type { Metadata } from "next";
import { PageCanvas } from "@/components/site/page-canvas";
import { CompanyDataSheet } from "@/components/site/company-data-sheet";
import { DisplayText } from "@/components/site/display-text";
import {
  foundingStatement,
  companyPurpose,
  companyResources,
} from "@/lib/company-data";
import { brochure } from "@/lib/company-profile";
export const metadata: Metadata = {
  title: "About Felix | Felix Controls Limited",
};
export default function About() {
  return (
    <PageCanvas id="main" className="fcl-container about-data-page">
      <header className="about-opening">
        <p className="section-label">
          <AnimatedCopy>About Felix</AnimatedCopy>
        </p>
        <h1>
          <DisplayText text={foundingStatement} />
        </h1>
      </header>
      <section className="about-data-row company-record">
        <h2>
          <AnimatedCopy>Company record</AnimatedCopy>
        </h2>
        <CompanyDataSheet />
      </section>
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
          <AnimatedCopy>Why Felix</AnimatedCopy>
        </h2>
        <div className="prose about-team-statement">
          <h3>
            <AnimatedCopy>Committed experts, not “consultants”.</AnimatedCopy>
          </h3>
          <p>
            <AnimatedCopy>
              We work alongside our customers to put engineering into practice.
            </AnimatedCopy>
          </p>
          <p>
            <AnimatedCopy>
              Our team is multi-skilled across HVAC control, building
              automation, SCADA, fire detection and suppression, security, home
              automation and lighting, and parking.
            </AnimatedCopy>
          </p>
          <p>
            <AnimatedCopy>
              Every staff member is involved in customer support.
            </AnimatedCopy>
          </p>
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
