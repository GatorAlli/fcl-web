import Image from "next/image";
import { projects, projectFilters } from "@/lib/site-content";

export function Projects({ filter }: { filter: string }) {
  return (
    <section
      className="projects-section section-space"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="content-container">
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
          {projectFilters.map(([value, label]) => (
            <button
              key={value}
              className={filter === value ? "is-active" : ""}
              data-filter={value}
              aria-pressed={filter === value}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {projects.map((project, index) => (
            <article
              className="project"
              key={project.title}
              data-category={project.category}
              hidden={
                filter !== "all" &&
                !project.category.split(" ").includes(filter)
              }
            >
              <div className="project-image">
                <Image
                  src={`/assets/${project.image}`}
                  width={462}
                  height={336}
                  alt={project.alt}
                  loading="lazy"
                  unoptimized
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-meta">
                {project.label} <span>{project.system}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <p className="project-note">
          Selected references from our company profile.{" "}
          <button className="text-link" data-open="profile-dialog">
            View company profile
          </button>
        </p>
      </div>
    </section>
  );
}
