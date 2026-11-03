"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function TextEntrances() {
  const pathname = usePathname();
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          if (element.contains(document.activeElement)) continue;
          const animation = element.animate(
            [
              { clipPath: "inset(0 0 100%)", transform: "translateY(.25em)" },
              {
                clipPath: "inset(-.2em -.08em -.25em)",
                transform: "translateY(0)",
              },
            ],
            { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 },
    );
    const frame = requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>(
          "main :is(h1,h2,h3,h4,p,dt,dd,li,legend,small,figcaption,label,address,a), .global-footer :is(p,address,a,.fcl-label,.footer-data-label)",
        )
        .forEach((element) => {
          if (
            element.closest(
              ".hero,.project-sector-carousel,[role='listbox']",
            ) ||
            (element.matches("a,small") &&
              element.parentElement?.closest("p,li,dd,dt,figcaption,label")) ||
            element.querySelector(".display-copy,img,h1,h2,h3,p") ||
            element.classList.contains("sr-only")
          )
            return;
          observer.observe(element);
        });
    });
    function stop() {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    }
    motion.addEventListener("change", stop);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      motion.removeEventListener("change", stop);
    };
  }, [pathname]);
  return null;
}
