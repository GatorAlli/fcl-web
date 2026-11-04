import { serviceStages } from "@/lib/company-profile";
import { AnimatedCopy } from "@/components/site/animated-copy";
import { Hero } from "@/components/site/hero";
import { Company } from "@/components/site/company";
import { HomeExpertise } from "@/components/site/home-expertise";
import { HomeSectors } from "@/components/site/home-sectors";
import { Photo, EditorialSection } from "@/components/site/page-parts";
import { HomeProjectShowcase } from "@/components/site/project-showcase";
import { ClientStrip, PartnerStrip } from "@/components/site/partner-strip";
import Link from "next/link";
import { DisplayText } from "@/components/site/display-text";


export default function Home() {
  return (
    <main id="main" className="studio-home">
      <Hero />
      <div className="home-content-layer">
        <Company />
        <section
          className="fcl-container fcl-section home-partners"
          aria-labelledby="home-partners-heading"
        >
          <div className="module-heading">
            <h2 id="home-partners-heading" className="module-title">
              <DisplayText text="Technology partners" />
            </h2>
            <Link href="/partners" className="section-action">
              Meet our partners
            </Link>
          </div>
          <PartnerStrip />
        </section>

        <HomeExpertise />

        <HomeSectors />

        <EditorialSection
          title="Reference projects"
          headingId="selected-work-title"
          id="projects"
          className="selected-work"
          action={{ href: "/projects", label: "All projects" }}
        >
          <p>
            <AnimatedCopy>
              From Dhaka Metro Rail to hospitals and pharmaceutical facilities.
            </AnimatedCopy>
          </p>
          <HomeProjectShowcase />
        </EditorialSection>

        <section
          className="fcl-container fcl-section home-partners home-clients"
          aria-labelledby="home-clients-heading"
        >
          <div className="module-heading">
            <h2 id="home-clients-heading" className="module-title">
              <DisplayText text="Our clients" />
            </h2>
            <Link href="/clients" className="section-action">
              Meet our clients
            </Link>
          </div>
          <ClientStrip />
        </section>

        <div className="delivery-band">
          <EditorialSection
            title="Engineering services"
            headingId="delivery-heading"
            className="delivery-section"
            action={{ href: "/services", label: "Learn more" }}
          >
            <Photo
              name="engineering-design"
              href="/services"
              alt="Engineering drawings and project plans"
              className="delivery-image"
            />
            <div className="delivery-content">
              <p>
                <AnimatedCopy>
                  Design & implement a high-performance solution
                </AnimatedCopy>
              </p>
              <ol className="delivery-steps">
                {serviceStages.map((step) => (
                  <li key={step.title}>
                    <AnimatedCopy>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </AnimatedCopy>
                  </li>
                ))}
              </ol>
            </div>
          </EditorialSection>
        </div>
      </div>
    </main>
  );
}
