import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/lib/company-profile";
import { Breadcrumbs, PageIntro, Photo } from "@/components/site/page-parts";
export const metadata: Metadata = {
  title: "Solutions & Systems | Felix Controls Limited",
};
export default function Solutions() {
  return (
    <PageCanvas id="main">
      <Breadcrumbs items={[{ label: "Solutions" }]} />
      <PageIntro
        label="OUR EXPERTISE"
        title="Solutions & systems."
        image="control-room"
        text="Building management, industrial automation, connected spaces and field products. Explore our eleven specialist systems."
      />
      <div className="fcl-container solution-index">
        {[
          "Building & industrial systems",
          "Connected spaces",
          "Safety & security",
          "HVAC & field products",
        ].map((group) => (
          <section key={group} className="solution-group">
            <h2>
              <AnimatedCopy>{group}</AnimatedCopy>
            </h2>
            <div className="solution-editorial-grid">
              {solutions
                .filter((s) => s.group === group)
                .map((s) => (
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="solution-editorial"
                    key={s.slug}
                  >
                    <Photo
                      name={s.image}
                      alt={`${s.partner} systems pictured in the Felix Company Profile`}
                    />
                    <span className="fcl-label">{s.partner}</span>
                    <h3>
                      <AnimatedCopy>{s.title}</AnimatedCopy>
                    </h3>
                    <p>
                      <AnimatedCopy>{s.intro}</AnimatedCopy>
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </PageCanvas>
  );
}
