import { manufacturers } from "@/lib/official-sites";

export function ManufacturerLinks({ brands }: { brands: string[] }) {
  return (
    <div className="manufacturer-links">
      {brands.map((id) => {
        const brand = manufacturers[id];
        return (
          <a
            key={id}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="section-action"
            aria-label={
              brands.length > 1 ? undefined : `Learn more about ${brand.name}`
            }
          >
            Learn more{brands.length > 1 ? ` — ${brand.name}` : ""}
          </a>
        );
      })}
    </div>
  );
}
