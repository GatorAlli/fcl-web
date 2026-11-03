import { AnimatedCopy } from "@/components/site/animated-copy";
import Link from "next/link";
import { foundingStatement } from "@/lib/company-data";
import { Photo } from "./page-parts";
import { DisplayText } from "./display-text";
export function Company() {
  return (
    <section
      className="fcl-container fcl-section home-company"
      id="about"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">
        <DisplayText text="About Felix" />
      </h2>
      <div className="company-opening">
        <Photo
          name="controls"
          alt="Industrial electrical control cabinet with controllers, wiring and relays"
        />
        <div className="company-founding">
          <p>
            <AnimatedCopy>{foundingStatement}</AnimatedCopy>
          </p>
          <p className="company-track-record">
            <AnimatedCopy>
              400+ projects, 100+ customers, 15+ years
            </AnimatedCopy>
          </p>
          <Link href="/about" className="fcl-button is-secondary">
            Read more about Felix
          </Link>
        </div>
      </div>
    </section>
  );
}
