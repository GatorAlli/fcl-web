"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DisplayText } from "./display-text";
const slides = [
  { name: "architecture", label: "Building management and automation" },
  { name: "industry", label: "Industrial automation and process control" },
  { name: "living", label: "Home automation and lighting control" },
];
export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    function update() {
      clearInterval(timer);
      if (!paused && !motion.matches && !document.hidden)
        timer = setInterval(
          () => setCurrent((value) => (value + 1) % slides.length),
          3000,
        );
    }
    update();
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      clearInterval(timer);
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [paused]);
  function show(direction: number) {
    setPaused(true);
    setCurrent((value) => (value + direction + slides.length) % slides.length);
  }
  return (
    <section className="hero" aria-label="Felix building automation imagery">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.name}
            className={"hero-slide" + (index === current ? " is-active" : "")}
            aria-hidden={index !== current}
          >
            <Image
              src={"/assets/hero/" + slide.name + ".webp"}
              alt={slide.label}
              fill
              sizes="100vw"
              preload={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="hero-motion-toggle"
        aria-label={paused ? "Resume image slideshow" : "Pause image slideshow"}
        onClick={() => setPaused((value) => !value)}
      />
      <div className="hero-copy fcl-container">
        <h1>
          <DisplayText text="Intelligent Building" />
          <br className="hero-desktop-break" />
          <DisplayText text="Automation Engineering." />
        </h1>
        <p>
          Building management, automation, energy controls and safety systems.
        </p>
        <Link className="fcl-button" href="/solutions">
          Explore solutions
        </Link>
      </div>
      <div className="hero-controls" aria-label="Slideshow controls">
        {[-1, 1].map((direction) => (
          <button
            type="button"
            key={direction}
            aria-label={direction === -1 ? "Previous image" : "Next image"}
            onClick={() => show(direction)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path
                d={
                  direction === -1
                    ? "M19 12H5m6-6-6 6 6 6"
                    : "M5 12h14m-6-6 6 6-6 6"
                }
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </section>
  );
}
