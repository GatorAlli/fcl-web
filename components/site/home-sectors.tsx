"use client";
import { AnimatedCopy } from "@/components/site/animated-copy";

import { useState } from "react";
import Link from "next/link";
import { sectors } from "@/lib/company-profile";
import { Photo, EditorialSection } from "./page-parts";
import { BrandSelect } from "./brand-select";

const sectorOptions = sectors.map((item) => ({
  value: item.slug,
  label: item.title,
}));

export function HomeSectors() {
  const [selected, setSelected] = useState(sectors[0].slug);
  const sector = sectors.find((item) => item.slug === selected) ?? sectors[0];
  return (
    <EditorialSection
      title="Sectors"
      headingId="markets-heading"
      className="home-markets"
      action={{ href: "/sectors", label: "All sectors" }}
    >
      <div className="market-feature">
        <Photo href={`/sectors/${sector.slug}`} name={sector.image} alt={sector.title} />
        <div className="market-feature-copy">
          <BrandSelect
            id="home-sector-select"
            label="Choose your sector"
            items={sectorOptions}
            value={selected}
            onValueChange={setSelected}
            tone="dark"
          />
          <div
            className="market-feature-detail"
            aria-live="polite"
            aria-atomic="true"
          >
            <h3>
              <AnimatedCopy>{sector.title}</AnimatedCopy>
            </h3>
            <p>
              <AnimatedCopy>{sector.text}</AnimatedCopy>
            </p>
            <Link href={`/sectors/${sector.slug}`} className="section-action">
              Explore this sector
            </Link>
          </div>
        </div>
      </div>
    </EditorialSection>
  );
}
