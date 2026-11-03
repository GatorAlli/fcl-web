"use client";
import { AnimatedCopy } from "@/components/site/animated-copy";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectPhotography } from "@/lib/project-photography";
import {
  asset,
  projectCategories,
  referenceProjects,
} from "@/lib/company-profile";
const options = projectCategories.slice(1);
export function ProjectShowcase({
  category,
  onCategoryChange,
  headingLevel = 3,
  preview = false,
}: {
  category: string;
  onCategoryChange: (value: string) => void;
  headingLevel?: 2 | 3;
  preview?: boolean;
}) {
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const keyboardFocus = useRef(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const [outgoing, setOutgoing] = useState<typeof referenceProjects | null>(
    null,
  );
  const selected = options.findIndex(([value]) => value === category);
  const centerIndex = selected < 0 ? Math.floor(options.length / 2) : selected;
  const valid = selected < 0 ? "all" : options[selected][0];
  const label = selected < 0 ? "All projects" : options[selected][1];
  const matches = referenceProjects.filter(
    (project) => valid === "all" || project.category === valid,
  );
  const featured = ["mrt-line-6", "beximco", "evercare", "bays-edgewater"];
  const visible = preview
    ? valid === "all"
      ? matches.filter((project) => featured.includes(project.slug))
      : matches.slice(0, 3)
    : matches;
  const Heading = headingLevel === 2 ? "h2" : "h3";
  useEffect(() => () => clearTimeout(fadeTimer.current), []);
  useEffect(() => {
    if (keyboardFocus.current && selected >= 0) {
      buttons.current[selected]?.focus({ preventScroll: true });
      keyboardFocus.current = false;
    }
  }, [selected]);
  function select(index: number, keyboard = false) {
    const next = (index + options.length) % options.length;
    if (next === selected) return;
    clearTimeout(fadeTimer.current);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOutgoing(visible);
      fadeTimer.current = setTimeout(() => setOutgoing(null), 220);
    }
    keyboardFocus.current = keyboard && next !== selected;
    onCategoryChange(options[next][0]);
  }
  function cards(items: typeof referenceProjects) {
    return (
      <ul className="project-photo-grid" data-project-count={items.length}>
        {items.map((project) => (
          <li key={project.slug}>
            <AnimatedCopy>
              <Link
                className="project-photo-card"
                href={"/projects/" + project.slug}
              >
                <div className="project-photo-frame">
                  <Image
                    src={asset(project.image)}
                    width={projectPhotography[project.image]?.width ?? 315}
                    height={projectPhotography[project.image]?.height ?? 154}
                    alt=""
                    unoptimized
                  />
                </div>
                <div className="project-photo-caption">
                  <Heading>{project.title}</Heading>
                  <p>{project.description}</p>
                </div>
              </Link>
            </AnimatedCopy>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="project-showcase" data-project-category={valid}>
      <div className="project-sector-carousel">
        <button
          type="button"
          className="project-sector-arrow"
          aria-label="Previous project sector"
          aria-controls={id}
          onClick={() => select(centerIndex - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m14 5-7 7 7 7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div
          className="project-sector-window"
          role="group"
          aria-label="Project sectors"
          onKeyDown={(event) => {
            let next: number;
            if (event.key === "ArrowRight") next = centerIndex + 1;
            else if (event.key === "ArrowLeft") next = centerIndex - 1;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = options.length - 1;
            else return;
            event.preventDefault();
            select(next, true);
          }}
        >
          {options.map(([value, name], index) => {
            const half = Math.floor(options.length / 2);
            const offset =
              ((index - centerIndex + options.length + half) % options.length) -
              half;
            const distance = Math.abs(offset);
            return (
              <button
                type="button"
                key={value}
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                className="project-sector-name"
                data-distance={distance}
                tabIndex={index === centerIndex ? 0 : -1}
                style={
                  {
                    "--sector-offset": offset,
                    "--sector-scale": [1, 0.8, 0.6][distance],
                    "--sector-y": `${distance * 6}px`,
                    "--sector-angle": `${offset === 0 ? 0 : offset > 0 ? -16 : 16}deg`,
                    "--sector-opacity": [1, 0.65, 0.4][distance],
                    zIndex: 10 - distance,
                  } as CSSProperties
                }
                aria-pressed={selected === index}
                aria-controls={id}
                onClick={() => select(index)}
              >
                {name}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="project-sector-arrow"
          aria-label="Next project sector"
          aria-controls={id}
          onClick={() => select(centerIndex + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m10 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      <div id={id} role="region" aria-label={label}>
        <p className="sr-only" role="status">
          {label}: {visible.length} displayed references
        </p>
        <div className="project-result-stage">
          {outgoing && (
            <div className="project-outgoing" aria-hidden="true" inert>
              {cards(outgoing)}
            </div>
          )}
          <div className="project-incoming" key={valid}>
            {cards(visible)}
          </div>
        </div>
      </div>
    </div>
  );
}
export function HomeProjectShowcase() {
  const [category, setCategory] = useState("all");
  return (
    <ProjectShowcase
      category={category}
      onCategoryChange={setCategory}
      preview
    />
  );
}
