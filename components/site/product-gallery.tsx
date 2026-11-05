import Image from "next/image";
import { profileSolutions } from "@/lib/profile-content";
import { manufacturers } from "@/lib/official-sites";
import { solutionPhotography } from "@/lib/solution-photography";
import media from "@/public/assets/photography/solution-media.json";

export function ProductGallery({ slug }: { slug: string }) {
  const photo = solutionPhotography[slug];
  if (!photo) return null;
  const primary = manufacturers[profileSolutions[slug].brands[0]];
  const dimensions = media.find((item) => item.name === photo.file)!;
  return (
    <section
      className="fcl-container profile-content-section solution-photo-section"
      aria-label={`${primary.name} technology photography`}
    >
      <figure
        className="solution-full-photo"
        style={{
          maxWidth: Math.min(
            dimensions.deliveredWidth,
            dimensions.deliveredWidth < dimensions.deliveredHeight ? 640 : 1100,
          ),
        }}
      >
        <a
          href={primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="product-reference-link"
          aria-label={`Learn more about ${primary.name}`}
        >
          <Image
            src={`/assets/photography/${photo.file}.webp`}
            alt={photo.alt}
            width={dimensions.deliveredWidth}
            height={dimensions.deliveredHeight}
            unoptimized
          />
        </a>
        <figcaption className="product-reference-caption">
          <span>{primary.name}</span>
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="fcl-link"
          >
            Learn more
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
