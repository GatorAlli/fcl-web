import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { CompanyLogo } from "@/components/site/company-logo";
import { brochure, clients } from "@/lib/company-profile";
import { DisplayText } from "@/components/site/display-text";
import { Photo } from "@/components/site/page-parts";
export const metadata: Metadata = {
  title: "Client References | Felix Controls Limited",
};
export default function Clients() {
  return (
    <PageCanvas id="main" className="clients-page">
      <header className="fcl-container clients-masthead with-film">
        <div>
          <h1>
            <DisplayText text="Our clients" />
          </h1>
          <div className="clients-intro-row">
            <p>
              <AnimatedCopy>
                From industry and healthcare to banking, hospitality and
                commercial buildings.
              </AnimatedCopy>
            </p>
            <Link href="/projects" className="section-action">
              Reference projects
            </Link>
          </div>
        </div>
        <Photo
          name="control-room"
          alt="Electrical controls in an industrial environment"
          priority
          className="clients-masthead-film"
        />
      </header>
      <div className="clients-reference-band">
        <section
          className="fcl-container client-logo-board"
          aria-label="Complete client reference board from the Company Profile"
        >
          {Array.from({ length: 64 }, (_, i) => (
            <div key={i}>
              <CompanyLogo
                name={`client-${String(i + 1).padStart(2, "0")}`}
                width={150}
                height={78}
                alt={clients[i] ?? "Client reference from Company Profile"}
              />
            </div>
          ))}
        </section>
      </div>
      <section className="fcl-container profile-download-row">
        <p>
          <AnimatedCopy>
            Client references from the Felix Controls Company Profile.
          </AnimatedCopy>
        </p>
        <a
          href={`${brochure}#page=6`}
          className="fcl-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View original references
        </a>
      </section>
    </PageCanvas>
  );
}
