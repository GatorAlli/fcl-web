import { AnimatedCopy } from "@/components/site/animated-copy";
import Link from "next/link";
import { foundingStatement } from "@/lib/company-data";
import { Photo } from "./page-parts";
import { DisplayText } from "./display-text";
import { CountUpNumber } from "./count-up-number";
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
          <dl className="my-8! grid grid-cols-1 gap-6 min-[480px]:grid-cols-3">
            {[
              { value: 400, label: "Projects" },
              { value: 100, label: "Customers" },
              { value: 15, label: "Years" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col border-t border-white pt-5 text-white">
                <dt className="mt-3 text-xs font-bold uppercase tracking-[0.14em]">
                  {label}
                </dt>
                <dd className="-order-1 m-0 text-[clamp(36px,3.5vw,56px)] font-bold leading-none tracking-tight">
                  <CountUpNumber value={value} />
                  <span className="text-[0.6em]">+</span>
                </dd>
              </div>
            ))}
          </dl>
          <Link href="/about" className="fcl-button is-secondary">
            Read more about Felix
          </Link>
        </div>
      </div>
    </section>
  );
}
