"use client";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export function DisplayText({ text }: { text: string }) {
  const element = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState("visible");
  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !element.current
    )
      return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    setPhase("waiting");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPhase("entered");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 },
    );
    observer.observe(element.current);
    const stop = () => {
      if (motion.matches) {
        setPhase("visible");
        observer.disconnect();
      }
    };
    motion.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", stop);
    };
  }, []);
  return (
    <span
      ref={element}
      className={`display-copy${phase === "entered" ? " has-entered" : ""}${phase === "waiting" ? " is-waiting" : ""}`}
    >
      <span className="sr-only">{text}</span>
      {text.split(/\s+/).map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className="copy-word"
            aria-hidden="true"
            style={
              {
                "--word-delay": `${Math.min(index, 6) * 55}ms`,
              } as CSSProperties
            }
          >
            <span>{word}</span>
          </span>
          {index < text.split(/\s+/).length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
