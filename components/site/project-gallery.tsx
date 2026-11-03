"use client";
import { useSearchParams } from "next/navigation";
import { ProjectShowcase } from "./project-showcase";
export function ProjectGallery() {
  const params = useSearchParams();
  function update(key: string, value: string) {
    const next = new URLSearchParams(window.location.search);
    next.delete("q");
    if (value && value !== "all") next.set(key, value);
    else next.delete(key);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${next.size ? `?${next}` : ""}`,
    );
  }
  return (
    <div className="fcl-container project-gallery">
      <ProjectShowcase
        category={params.get("category") ?? "all"}
        onCategoryChange={(value) => update("category", value)}
        headingLevel={2}
      />
    </div>
  );
}
