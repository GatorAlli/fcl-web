import Image from "next/image";

export function Projects() {
  return (
    <>
      <section
        className="projects-section section-space"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">REFERENCE PROJECTS</span>
              <h2 id="projects-heading">
                Engineering you can see.
                <br />
                Experience you can trust.
              </h2>
            </div>
            <p>
              From metro stations to pharmaceutical facilities,
              <br />
              our work supports Bangladesh’s built environment.
            </p>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter reference projects"
          >
            <button className="is-active" data-filter="all" aria-pressed="true">
              All projects
            </button>
            <button data-filter="industrial" aria-pressed="false">
              Industrial
            </button>
            <button data-filter="commercial" aria-pressed="false">
              Commercial
            </button>
            <button data-filter="transport" aria-pressed="false">
              Transport
            </button>
            <button data-filter="pharmaceuticals" aria-pressed="false">
              Pharmaceuticals
            </button>
          </div>
          <div className="project-grid" aria-live="polite">
            <article className="project" data-category="transport">
              <div className="project-image">
                <Image
                  src="/assets/project-mrt.jpg"
                  width="462"
                  height="336"
                  alt="Dhaka MRT Line 6 train at a metro station"
                  loading="lazy"
                  unoptimized
                />
                <span>01</span>
              </div>
              <div className="project-meta">
                TRANSPORT <span>BUILDING MANAGEMENT</span>
              </div>
              <h3>Dhaka Metro Rail</h3>
              <p>Station BMS, MRT Line 6 CP 05</p>
            </article>
            <article
              className="project"
              data-category="pharmaceuticals industrial"
            >
              <div className="project-image">
                <Image
                  src="/assets/project-beximco.jpg"
                  width="462"
                  height="336"
                  alt="Beximco Pharmaceuticals facility"
                  loading="lazy"
                  unoptimized
                />
                <span>02</span>
              </div>
              <div className="project-meta">
                PHARMACEUTICALS <span>INDUSTRIAL</span>
              </div>
              <h3>Beximco Pharmaceuticals PLC</h3>
              <p>Pharmaceutical facility</p>
            </article>
            <article className="project" data-category="commercial">
              <div className="project-image">
                <Image
                  src="/assets/project-edgewater.jpg"
                  width="462"
                  height="336"
                  alt="Bay’s Edgewater commercial building"
                  loading="lazy"
                  unoptimized
                />
                <span>03</span>
              </div>
              <div className="project-meta">
                COMMERCIAL <span>BUILDING SYSTEMS</span>
              </div>
              <h3>Bay’s Edgewater</h3>
              <p>Commercial development</p>
            </article>
          </div>
          <p className="project-note">
            Selected references from our company profile.{" "}
            <button className="text-link" data-open="profile-dialog">
              View company profile
            </button>
          </p>
        </div>
      </section>
    </>
  );
}
