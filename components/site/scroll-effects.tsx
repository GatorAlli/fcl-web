"use client";

import { useEffect, useRef } from "react";

export function ScrollEffects() {
  const progressRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollFrame = 0;
    let progressFrame = 0;
    const animations = new Set<Animation>();

    function cancelScroll() {
      cancelAnimationFrame(scrollFrame);
    }
    function scrollToSection(destination: number) {
      cancelScroll();
      const maximum = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const target = Math.max(0, Math.min(maximum, destination));
      const start = window.scrollY;
      const distance = target - start;
      if (motion.matches || Math.abs(distance) < 2) {
        window.scrollTo({ top: target, behavior: "instant" });
        return;
      }
      const duration = Math.min(640, 280 + Math.abs(distance) * 0.16);
      const started = performance.now();
      function step(now: number) {
        const progress = Math.min(1, (now - started) / duration);
        window.scrollTo({
          top: start + distance * (1 - Math.pow(1 - progress, 4)),
          behavior: "instant",
        });
        scrollFrame = progress < 1 ? requestAnimationFrame(step) : 0;
      }
      scrollFrame = requestAnimationFrame(step);
    }
    function followLink(event: globalThis.MouseEvent) {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (
        !link ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const hash = link.getAttribute("href")!;
      const target =
        hash === "#"
          ? null
          : document.getElementById(decodeURIComponent(hash.slice(1)));
      if (hash !== "#" && !target) return;
      event.preventDefault();
      const offset =
        parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        ) || 0;
      const top = target
        ? window.scrollY + target.getBoundingClientRect().top - offset
        : 0;
      if (window.location.hash !== hash) history.pushState(null, "", hash);
      scrollToSection(top);
      if (link.classList.contains("skip-link") && target) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
    }
    function updateProgress() {
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${available > 0 ? Math.min(1, window.scrollY / available) : 0})`;
      if (backRef.current) backRef.current.hidden = window.scrollY < 550;
      progressFrame = 0;
    }
    function queueProgress() {
      if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
    }
    function backToTop() {
      scrollToSection(0);
      document
        .querySelector<HTMLAnchorElement>(".brand")
        ?.focus({ preventScroll: true });
    }
    function keydown(event: KeyboardEvent) {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
          " ",
        ].includes(event.key)
      )
        cancelScroll();
    }
    function finishReveals() {
      animations.forEach((animation) => animation.cancel());
    }
    function motionChanged() {
      cancelScroll();
      if (motion.matches) finishReveals();
    }
    const observer =
      "IntersectionObserver" in window && !motion.matches
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                observer?.unobserve(entry.target);
                if (motion.matches) return;
                const animation = entry.target.animate(
                  [
                    { clipPath: "inset(0 0 100% 0)" },
                    { clipPath: "inset(0 0 0 0)" },
                  ],
                  { duration: 640, easing: "cubic-bezier(.22,1,.36,1)" },
                );
                animations.add(animation);
                animation.finished.then(
                  () => animations.delete(animation),
                  () => animations.delete(animation),
                );
              });
            },
            { threshold: 0.12 },
          )
        : null;
    document
      .querySelectorAll(".project-image")
      .forEach((image) => observer?.observe(image));
    const back = backRef.current;
    back?.addEventListener("click", backToTop);
    document.addEventListener("click", followLink);
    window.addEventListener("scroll", queueProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("keydown", keydown);
    window.addEventListener("beforeprint", finishReveals);
    motion.addEventListener("change", motionChanged);
    updateProgress();
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
    return () => {
      cancelScroll();
      cancelAnimationFrame(progressFrame);
      finishReveals();
      observer?.disconnect();
      back?.removeEventListener("click", backToTop);
      document.removeEventListener("click", followLink);
      window.removeEventListener("scroll", queueProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("beforeprint", finishReveals);
      motion.removeEventListener("change", motionChanged);
    };
  }, []);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <button
        ref={backRef}
        className="back-top icon-button"
        aria-label="Back to top"
        hidden
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m5 15 7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
