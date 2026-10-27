"use client";

import { useState, type MouseEvent } from "react";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Company } from "@/components/site/company";
import { Services } from "@/components/site/services";
import { Projects } from "@/components/site/projects";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Dialogs } from "@/components/site/dialogs";
import { ScrollEffects } from "@/components/site/scroll-effects";

export default function Home() {
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
