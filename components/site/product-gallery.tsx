import { AnimatedCopy } from "@/components/site/animated-copy";
import Image from "next/image";
import { isDocumentaryImage } from "@/lib/media-policy";
import {
  asset,
  brochure,
  solutions,
  solutionGalleries,
} from "@/lib/company-profile";
import imageManifest from "@/public/assets/brochure/manifest.json";
export function ProductGallery({ slug }: { slug: string }) {
  const items = (solutionGalleries[slug] ?? []).filter((item) =>
    isDocumentaryImage(item.image),
  );
  const page = solutions.find((solution) => solution.slug === slug)?.page;
  if (items.length === 0) return null;
  return (
    <section className="fcl-container fcl-section product-gallery-section">
      <h2>
        <AnimatedCopy>Technology references</AnimatedCopy>
      </h2>
      <div className="product-gallery-content">
        <div className="product-gallery">
          {items.map((item) => {
            const original = imageManifest.find(
              (entry) => entry.file === `${item.image}.webp`,
            );
            const width = original?.width ?? 400;
            const height = original?.height ?? 300;
            return (
              <figure key={item.image}>
                <Image
                  src={asset(item.image)}
                  alt={item.caption}
                  width={width}
                  height={height}
                  style={{ maxWidth: width }}
                  unoptimized
                />
                <figcaption>
                  <AnimatedCopy>{item.caption}</AnimatedCopy>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <p className="product-gallery-note">
          <AnimatedCopy>
            Original technology illustrations from the company profile.
            <a
              className="fcl-link"
              href={`${brochure}#page=${page ?? 1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View original page
            </a>
          </AnimatedCopy>
        </p>
      </div>
    </section>
  );
}
