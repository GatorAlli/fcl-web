import { AnimatedCopy } from "@/components/site/animated-copy";
import Link from "next/link";
import { solutions, solutionGroups } from "@/lib/company-profile";
import { Photo, EditorialSection } from "./page-parts";

export function HomeExpertise() {
  return (
    <EditorialSection
      title="Solutions & services"
      headingId="expertise-heading"
      id="solutions"
      className="expertise-section"
      action={{ href: "/solutions", label: "Learn more" }}
    >
      <figure className="expertise-image">
        <Photo href="https://www.control4.com/" name="home-automation" alt="Contemporary residential interior" />
      </figure>
      <div className="expertise-index">
        {solutionGroups.map(([key, label]) => (
          <section key={key}>
            <h3>
              <AnimatedCopy>{label}</AnimatedCopy>
            </h3>
            <ul>
              {solutions
                .filter((s) => s.group === key)
                .map((s) => (
                  <li key={s.slug}>
                    <AnimatedCopy>
                      <Link href={`/solutions/${s.slug}`}>{s.short}</Link>
                    </AnimatedCopy>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </EditorialSection>
  );
}
