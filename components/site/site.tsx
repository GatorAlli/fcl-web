"use client";

import { useState, type MouseEvent } from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { Company } from "./company";
import { Services } from "./services";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Dialogs } from "./dialogs";
import { ScrollEffects } from "./scroll-effects";

export function Site() {
  const [filter, setFilter] = useState("all");
  const [dialog, setDialog] = useState<string | null>(null);

  // Keep the mockup's section links and preview actions in one place.
  function handleAction(event: MouseEvent<HTMLDivElement>) {
    const target = (event.target as Element).closest<HTMLElement>(
      "[data-open], [data-filter], [data-project-filter], [data-service], .search-toggle",
    );
    if (!target) return;
    if (target.dataset.open) setDialog(target.dataset.open);
    if (target.classList.contains("search-toggle")) setDialog("search-dialog");
    const projectFilter = target.dataset.filter ?? target.dataset.projectFilter;
    if (projectFilter) setFilter(projectFilter);
    if (target.dataset.service) {
      const service = document.getElementById(
        target.dataset.service,
      ) as HTMLDetailsElement | null;
      if (service) service.open = true;
    }
  }

  return (
    <div className="contents" onClick={handleAction}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollEffects />
      <Header />
      <main id="main">
        <Hero />
        <Company />
        <Services />
        <Projects filter={filter} />
        <Contact />
      </main>
      <Footer />
      <Dialogs active={dialog} onClose={() => setDialog(null)} />
    </div>
  );
}
