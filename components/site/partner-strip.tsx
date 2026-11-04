"use client";
import { useState } from "react";
import { CompanyLogo } from "./company-logo";
import { clients, partners } from "@/lib/company-profile";

type Logo = { name: string; id: string };

function LogoStrip({
  logos,
  label,
  slow = false,
}: {
  logos: Logo[];
  label: string;
  slow?: boolean;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`partner-strip${paused ? " is-paused" : ""}`}>
      <div className={`partner-strip-track${slow ? " [animation-duration:256s]!" : ""}`}>
        {[0, 1].map((copy) => (
          <div
            className="partner-strip-group"
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {logos.map(({ name, id }) => (
              <CompanyLogo
                key={id}
                name={id}
                alt={copy ? "" : name}
                width={150}
                height={78}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="sr-only partner-motion-control"
        onClick={() => setPaused((value) => !value)}
        aria-label={`${paused ? "Resume" : "Pause"} ${label} logos`}
      >
        {paused ? `Resume ${label} logos` : `Pause ${label} logos`}
      </button>
    </div>
  );
}

export function PartnerStrip() {
  return (
    <LogoStrip
      label="partner"
      logos={partners.map(({ name, logo }) => ({
        name,
        id: `partner-${logo}`,
      }))}
    />
  );
}

export function ClientStrip() {
  return (
    <LogoStrip
      label="client"
      slow
      logos={Array.from({ length: 64 }, (_, index) => ({
        name: clients[index] ?? "Client reference from Company Profile",
        id: `client-${String(index + 1).padStart(2, "0")}`,
      }))}
    />
  );
}
