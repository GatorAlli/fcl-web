import Image from "next/image";
import { isDocumentaryImage } from "@/lib/media-policy";
import { asset, solutionGalleries } from "@/lib/company-profile";
import { profileSolutions } from "@/lib/profile-content";
import { manufacturers } from "@/lib/official-sites";
import imageManifest from "@/public/assets/brochure/manifest.json";
import { Photo } from "./page-parts";
import { technologyContext } from "@/lib/technology-context";
import { ManufacturerLinks } from "./manufacturer-links";

export function ProductGallery({ slug }: { slug: string }) {
  const items = (solutionGalleries[slug] ?? []).filter((item) => isDocumentaryImage(item.image));
  const copy = profileSolutions[slug];
  const primary = manufacturers[copy.brands[0]];
  const context = technologyContext[slug];
  if (items.length === 0) return null;
  return (
    <section className="fcl-container profile-content-section" aria-label={`${primary.name} products`}>
      <div className="product-reference-grid">
        {items.map((item) => {
          const original = imageManifest.find((entry) => entry.file === `${item.image}.webp`);
          const width = original?.width ?? 400;
          const height = original?.height ?? 300;
          return (
            <article key={item.image} className="product-reference-card">
              <a className="product-reference-link" href={primary.href} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${primary.name}: ${item.caption}`}>
                <div className="product-image-well" data-panorama={width / height > 2.8}>
                  <Image src={asset(item.image)} alt={item.caption} width={width} height={height} style={{ maxWidth: width, maxHeight: height }} unoptimized />
                </div>
                <div className="product-reference-caption">
                  <span>{primary.name}</span>
                  <span className="fcl-link">Learn more</span>
                </div>
              </a>
              {slug === "building-management" && item.image === "bms-controllers" && (
                <ManufacturerLinks brands={["trend", "trane"]} />
              )}
            </article>
          );
        })}
        {context && (
          <article className="product-reference-card">
            <Photo name={context.image} alt={context.caption} href={primary.href} />
            <div className="product-reference-caption">
              <span>{primary.name}</span>
              <a href={primary.href} target="_blank" rel="noopener noreferrer" className="fcl-link" aria-label={`Learn more about ${primary.name}`}>Learn more</a>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
