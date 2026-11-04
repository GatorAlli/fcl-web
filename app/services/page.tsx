import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { serviceStages } from "@/lib/company-profile";
import { Breadcrumbs, PageIntro, Photo } from "@/components/site/page-parts";
export const metadata: Metadata = {
  title: "Engineering Services & Support | Felix Controls Limited",
};
export default function Services() {
  return (
    <PageCanvas id="main">
      <Breadcrumbs items={[{ label: "Services" }]} />
      <PageIntro
        label="ENGINEERING, IMPLEMENTATION & SUPPORT"
        title="Engineering services."
        text="A complete service package for building systems, with engineering responsibility at every stage."
        image="sector-industry"

        tone="charcoal"
      />
      <div className="fcl-container service-process">
        {serviceStages.map((stage, i) => (
          <section key={stage.title} className="process-stage">
            <div>
              <h2>
                <AnimatedCopy>{stage.title}</AnimatedCopy>
              </h2>
              <p>
                <AnimatedCopy>{stage.text}</AnimatedCopy>
              </p>
              {i === 0 && (
                <Link className="fcl-link" href="/solutions">
                  Explore our technical expertise
                </Link>
              )}
            </div>
            <Photo
              name={
                ["engineering-design", "control-room", "valve-installation"][i]
              }
              alt={
                [
                  "Engineering design shown in the Company Profile",
                  "Control room shown in the Company Profile",
                  "Valve installation shown in the Company Profile",
                ][i]
              }
            />
          </section>
        ))}
      </div>
      <section className="detail-capability-band">
        <div className="fcl-container fcl-section detail-explanation">
          <div>
            <h2>
              <AnimatedCopy>Our engineering resources</AnimatedCopy>
            </h2>
            <p>
              <AnimatedCopy>
                Our Company Profile identifies the resources behind our delivery
                and service approach.
              </AnimatedCopy>
            </p>
          </div>
          <ul className="capability-list">
            {[
              "Trained and experienced technical team",
              "24/7 service support arrangement",
              "Dedicated service support team",
              "Dedicated transportation facility",
              "Tools and equipment",
              "Available spare parts",
            ].map((item) => (
              <li key={item}>
                <AnimatedCopy>{item}</AnimatedCopy>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageCanvas>
  );
}
