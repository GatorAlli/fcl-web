import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageIntro, Photo } from "@/components/site/page-parts";
export const metadata: Metadata = { title: "Careers | Felix Controls Limited" };
export default function Careers() {
  return (
    <PageCanvas id="main">
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <PageIntro
        label="CAREERS AT FELIX"
        title="Careers at Felix."
        text="Work across building systems, industrial automation and engineering services."
        image="engineering-team"
        tone="charcoal"
      />
      <section className="careers-layout fcl-container fcl-section">
        <div>
          <Photo
            name="engineering-design"
            alt="Architectural drawings and technical plans"
          />
        </div>
        <div>
          <h2>
            <AnimatedCopy>Engineering across disciplines</AnimatedCopy>
          </h2>
          <p>
            <AnimatedCopy>
              Our work spans building management, automation, HVAC controls,
              fire protection, security, lighting and parking systems. Projects
              call for technical understanding, collaboration and care in
              delivery.
            </AnimatedCopy>
          </p>
          <Link href="/services" className="fcl-link">
            Explore how we work
          </Link>
          <div className="career-enquiry">
            <h3>
              <AnimatedCopy>Interested in working with us?</AnimatedCopy>
            </h3>
            <p>
              <AnimatedCopy>
                No specific vacancies are listed here. Contact our team to ask
                about current opportunities and how to apply.
              </AnimatedCopy>
            </p>
            <a
              className="fcl-button"
              href="mailto:info@felixbd.com?subject=Career%20enquiry"
            >
              Ask about opportunities
            </a>
          </div>
        </div>
      </section>
    </PageCanvas>
  );
}
