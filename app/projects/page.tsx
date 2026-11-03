import { AnimatedCopy } from "@/components/site/animated-copy";
import { Suspense } from "react";
import type { Metadata } from "next";
import { ProjectGallery } from "@/components/site/project-gallery";
import Link from "next/link";
import { DisplayText } from "@/components/site/display-text";
export const metadata: Metadata = {
  title: "Reference Projects | Felix Controls Limited",
};
export default function Projects() {
  return (
    <main id="main" className="project-index-page">
      <header className="fcl-container project-index-intro">
        <h1>
          <DisplayText text="Reference projects" />
        </h1>
        <div className="project-index-description">
          <p>
            <AnimatedCopy>
              Transport, pharmaceuticals, healthcare, commercial developments
              and institutions.
            </AnimatedCopy>
          </p>
          <Link href="/clients" className="section-action">
            Our clients
          </Link>
        </div>
      </header>
      <Suspense
        fallback={
          <div className="fcl-container gallery-loading" role="status">
            Loading reference projects…
          </div>
        }
      >
        <ProjectGallery />
      </Suspense>
    </main>
  );
}
