import { AnimatedCopy } from "@/components/site/animated-copy";
import { Hero } from "@/components/site/hero";
import { Company } from "@/components/site/company";
import { HomeExpertise } from "@/components/site/home-expertise";
import { HomeSectors } from "@/components/site/home-sectors";
import { Photo, EditorialSection } from "@/components/site/page-parts";
import { HomeProjectShowcase } from "@/components/site/project-showcase";
import { PartnerStrip } from "@/components/site/partner-strip";
import Link from "next/link";
import { DisplayText } from "@/components/site/display-text";

const process = [
  {
    title: "Plan & design",
    text: "Define the requirements, coordinate the systems and specify the equipment.",
  },
  {
    title: "Install & commission",
    text: "Bring the design into operation through installation, integration and testing.",
  },
  {
    title: "Maintain & support",
    text: "Keep the system working with technical support and ongoing maintenance.",
  },
];

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

        <div className="delivery-band">
          <EditorialSection
            title="Engineering services"
            headingId="delivery-heading"
            className="delivery-section"
            action={{ href: "/services", label: "Learn more" }}
          >
            <Photo
              name="engineering-design"
              alt="Engineering drawings and project plans"
              className="delivery-image"
            />
            <div className="delivery-content">
              <p>
                <AnimatedCopy>
                  Design, installation, commissioning and long-term technical
                  support.
                </AnimatedCopy>
              </p>
              <ol className="delivery-steps">
                {process.map((step) => (
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
