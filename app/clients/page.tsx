import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { brochure, asset, clients } from "@/lib/company-profile";
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
              <Image
                src={asset(`client-${String(i + 1).padStart(2, "0")}`)}
                width={90}
                height={45}
                alt={clients[i] ?? "Client reference from Company Profile"}
                unoptimized
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
