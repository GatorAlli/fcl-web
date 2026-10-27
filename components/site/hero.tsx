"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slideTitles = [
  "INTELLIGENT BUILDINGS. EXCEPTIONAL CONTROL.",
  "PRECISE CONTROL. PROVEN ENGINEERING.",
  "CONNECTED SYSTEMS. CONFIDENT OPERATIONS.",
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("");
  const heroRef = useRef<HTMLElement>(null);
  function showSlide(index: number) {
    const next = (index + 3) % 3;
    setCurrent(next);
    setStatus(`Slide ${next + 1} of 3: ${slideTitles[next]}`);
  }
  useEffect(() => {
    const hero = heroRef.current!;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    let frame = 0;
    function pause() {
      clearInterval(timer);
    }
    function restart() {
      pause();
      if (
        !motion.matches &&
        !document.hidden &&
        !hero.matches(":hover") &&
        !hero.contains(document.activeElement)
      ) {
        timer = setInterval(() => setCurrent((value) => (value + 1) % 3), 7000);
      }
    }
    function afterFocus() {
      frame = requestAnimationFrame(restart);
    }
    hero.addEventListener("mouseenter", pause);
    hero.addEventListener("mouseleave", restart);
    hero.addEventListener("focusin", pause);
    hero.addEventListener("focusout", afterFocus);
    document.addEventListener("visibilitychange", restart);
    motion.addEventListener("change", restart);
    restart();
    return () => {
      pause();
      cancelAnimationFrame(frame);
      hero.removeEventListener("mouseenter", pause);
      hero.removeEventListener("mouseleave", restart);
      hero.removeEventListener("focusin", pause);
      hero.removeEventListener("focusout", afterFocus);
      document.removeEventListener("visibilitychange", restart);
      motion.removeEventListener("change", restart);
    };
  }, [current]);
  return (
    <>
      <section
        className="hero"
        ref={heroRef}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            showSlide(current + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
        aria-roledescription="carousel"
        aria-label="Engineering solutions"
        tabIndex={0}
      >
        <div className="hero-slides">
          <div
            className={current === 0 ? "hero-slide is-active" : "hero-slide"}
            inert={current !== 0}
            aria-hidden={current !== 0}
            data-slide="0"
            role="group"
            aria-roledescription="slide"
            aria-label="1 of 3"
          >
            <Image
              src="/assets/hero-building.jpg"
              width="2400"
              height="1600"
              alt="Contemporary glass buildings viewed from below"
              preload
              unoptimized
            />
            <div className="hero-copy">
              <h1>
                INTELLIGENT BUILDINGS.
                <br />
                EXCEPTIONAL CONTROL.
              </h1>
              <p>Integrated engineering for the way your building works.</p>
              <a className="button button-green" href="#solutions">
                Explore our solutions
              </a>
            </div>
          </div>
          <div
            className={current === 1 ? "hero-slide is-active" : "hero-slide"}
            inert={current !== 1}
            aria-hidden={current !== 1}
            data-slide="1"
            role="group"
            aria-roledescription="slide"
            aria-label="2 of 3"
          >
            <Image
              src="/assets/hero-industrial.jpg"
              width="2200"
              height="1467"
              alt="Industrial engineering and precision metalwork"
              unoptimized
            />
            <div className="hero-copy">
              <h2>
                PRECISE CONTROL.
                <br />
                PROVEN ENGINEERING.
              </h2>
              <p>
                Automation, energy controls and safety. Designed to work
                together.
              </p>
              <a className="button button-green" href="#solutions">
                Discover our expertise
              </a>
            </div>
          </div>
          <div
            className={current === 2 ? "hero-slide is-active" : "hero-slide"}
            inert={current !== 2}
            aria-hidden={current !== 2}
            data-slide="2"
            role="group"
            aria-roledescription="slide"
            aria-label="3 of 3"
          >
            <Image
              src="/assets/hero-transport.jpg"
              width="2200"
              height="1467"
              alt="Rail transport infrastructure"
              unoptimized
            />
            <div className="hero-copy">
              <h2>
                CONNECTED SYSTEMS.
                <br />
                CONFIDENT OPERATIONS.
              </h2>
              <p>Supporting essential infrastructure across Bangladesh.</p>
              <a className="button button-green" href="#projects">
                See our reference projects
              </a>
            </div>
          </div>
        </div>
        <button
          className="slide-arrow previous"
          onClick={() => showSlide(current - 1)}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
        <button
          className="slide-arrow next"
          onClick={() => showSlide(current + 1)}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
        <div className="hero-bottom">
          <div className="slide-dots" aria-label="Choose a slide">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={current === index ? "is-active" : ""}
                aria-label={`Show slide ${index + 1}`}
                aria-current={current === index ? "true" : undefined}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
        </div>
        <span
          className="sr-only slide-status"
          aria-live="polite"
          aria-atomic="true"
        >
          {status}
        </span>
      </section>
    </>
  );
}
