import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { referenceProjects, brochure } from "@/lib/company-profile";
import { Breadcrumbs, Photo } from "@/components/site/page-parts";
import { projectPhotography } from "@/lib/project-photography";
export function generateStaticParams() {
  return referenceProjects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = referenceProjects.find((p) => p.slug === slug);
  return { title: `${p?.title ?? "Project"} | Felix Controls Limited` };
}
export default async function Project({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = referenceProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next =
    referenceProjects[
      (referenceProjects.indexOf(project) + 1) % referenceProjects.length
    ];
  return (
    <PageCanvas id="main" className="project-reference-page">
      <article className="project-reference-article fcl-container">
        <div className="project-reference-copy">
          <Breadcrumbs
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />
          <h1>
            <AnimatedCopy>{project.title}</AnimatedCopy>
          </h1>
          <p className="project-reference-description">
            <AnimatedCopy>{project.description}</AnimatedCopy>
          </p>
          <dl>
            <dt>
              <AnimatedCopy>Sector</AnimatedCopy>
            </dt>
            <dd>
              <AnimatedCopy>{project.category}</AnimatedCopy>
            </dd>
          </dl>
          <div className="project-source-links">
            <Link href="/services" className="fcl-link">
              Engineering services
            </Link>
            <a
              className="fcl-link"
              href={`${brochure}#page=19`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View original reference
            </a>
          </div>
        </div>
        <div className="project-reference-media">
          <figure>
            <Photo name={project.image} alt={project.title} priority />
            <figcaption>
              <AnimatedCopy>
                {projectPhotography[project.image] ? (
                  <>
                    {projectPhotography[project.image].enhanced
                      ? "Enhanced original from "
                      : "Project photograph from "}
                    <a
                      href={projectPhotography[project.image].source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projectPhotography[project.image].credit}
                    </a>
                    {projectPhotography[project.image].licenseUrl && (
                      <>
                        {" under "}
                        <a
                          href={projectPhotography[project.image].licenseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {projectPhotography[project.image].license}
                        </a>
                        {"; resized and converted to WebP"}
                      </>
                    )}
                    .
                  </>
                ) : (
                  "Original project image from the Felix company profile."
                )}
              </AnimatedCopy>
            </figcaption>
          </figure>
        </div>
      </article>
      <div className="fcl-container project-next">
        <Link href="/projects" className="fcl-link">
          All projects
        </Link>
        <Link href={`/projects/${next.slug}`}>
          <span className="fcl-label">Next reference</span>
          <h2>
            <AnimatedCopy>{next.title}</AnimatedCopy>
          </h2>
        </Link>
      </div>
    </PageCanvas>
  );
}
