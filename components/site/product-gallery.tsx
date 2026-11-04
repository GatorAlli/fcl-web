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
import { Photo } from "@/components/site/page-parts";
import { technologyContext } from "@/lib/technology-context";
export function ProductGallery({ slug }: { slug: string }) {
  const items = (solutionGalleries[slug] ?? []).filter((item) =>
    isDocumentaryImage(item.image),
  );
  const page = solutions.find((solution) => solution.slug === slug)?.page;
  const context = technologyContext[slug];
  if (items.length === 0) return null;
  return (
    <section className="fcl-container fcl-section product-gallery-section">
      <header className="product-gallery-heading">
        <h2>
          <AnimatedCopy>Technology references</AnimatedCopy>
        </h2>
        <a
          className="section-action"
          href={`${brochure}#page=${page ?? 1}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Company Profile
        </a>
      </header>
      <div className="product-gallery-layout">
        <div className="product-gallery" data-item-count={items.length}>
          {items.map((item) => {
            const original = imageManifest.find(
              (entry) => entry.file === `${item.image}.webp`,
            );
            const width = original?.width ?? 400;
            const height = original?.height ?? 300;
            return (
              <figure key={item.image}>
                <div
                  className="product-image-well"
                  data-panorama={width / height > 2.8}
                >
                  <Image
                    src={asset(item.image)}
                    alt={item.caption}
                    width={width}
                    height={height}
                    style={{ maxWidth: width, maxHeight: height }}
                    unoptimized
                  />
                </div>
                <figcaption>
                  <AnimatedCopy>{item.caption}</AnimatedCopy>
                </figcaption>
              </figure>
            );
          })}
        </div>
        {context && (
          <figure
            className="technology-context"
            data-fit={context.fit ?? "cover"}
          >
            <Photo name={context.image} alt={context.caption} />
            <figcaption>
              <AnimatedCopy>{context.caption}</AnimatedCopy>
            </figcaption>
          </figure>
        )}
      </div>
      <p className="product-gallery-note">
        <AnimatedCopy>
          Product artwork is from the Felix Company Profile. Supporting images
          are illustrative.
        </AnimatedCopy>
      </p>
    </section>
  );
}
