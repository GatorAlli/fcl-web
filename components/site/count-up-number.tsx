"use client";

import { useEffect, useRef, useState } from "react";

export function CountUpNumber({ value }: { value: number }) {
  const element = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(value);

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    if (!element.current || motion.matches) return;

    setCount(1);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1600, 1);
          setCount(1 + Math.floor((value - 1) * progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(element.current);

    const stop = () => {
      if (!motion.matches) return;
      observer.disconnect();
      cancelAnimationFrame(frame);
      setCount(value);
    };
    motion.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", stop);
    };
  }, [value]);

  return (
    <span ref={element} className="tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{count}</span>
    </span>
  );
}
