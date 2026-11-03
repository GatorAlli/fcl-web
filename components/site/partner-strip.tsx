"use client";
import { useState } from "react";
import Image from "next/image";
import { asset, partners } from "@/lib/company-profile";

export function PartnerStrip() {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`partner-strip${paused ? " is-paused" : ""}`}>
      <div className="partner-strip-track">
        {[0, 1].map((copy) => (
          <div
            className="partner-strip-group"
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {partners.map(({ name, logo }) => (
              <Image
                key={logo}
                src={asset(`partner-${logo}`)}
                alt={copy ? "" : name}
                width={135}
                height={70}
                unoptimized
              />
            ))}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="sr-only partner-motion-control"
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? "Resume partner logos" : "Pause partner logos"}
      >
        {paused ? "Resume partner logos" : "Pause partner logos"}
      </button>
    </div>
  );
}
