import { AnimatedCopy } from "@/components/site/animated-copy";
import Link from "next/link";
import { foundingStatement } from "@/lib/company-data";
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
        <div className="company-founding">
          <p>
            <AnimatedCopy>{foundingStatement}</AnimatedCopy>
          </p>
          <Link href="/about" className="fcl-button is-secondary">
            Read more about Felix
          </Link>
        </div>
        <div className="@container min-w-0">
          <blockquote className="m-0 text-[clamp(14px,6.5cqw,48px)] font-bold leading-[1.25] tracking-tight text-white">
            <AnimatedCopy>
              <span className="block whitespace-nowrap">We advise, we design,</span>{" "}
              <span className="block whitespace-nowrap">
                we assess and we <span className="text-brand">deliver.</span>
              </span>
            </AnimatedCopy>
          </blockquote>
          <dl className="mt-8! mb-0! grid grid-cols-1 gap-6 min-[480px]:grid-cols-3">
            {[
              { value: 400, label: "Projects" },
              { value: 100, label: "Customers" },
              { value: 15, label: "Years" },
            ].map(({ value, label }) => (
              <div key={label} className="flex min-w-0 flex-col items-center border border-white p-4 text-center text-white">
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
        </div>
      </div>
    </section>
  );
}
