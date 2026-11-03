import { AnimatedCopy } from "@/components/site/animated-copy";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import imageManifest from "@/public/assets/brochure/manifest.json";
import { projectPhotography } from "@/lib/project-photography";
import { asset, photoAlt, type Solution } from "@/lib/company-profile";
import { DisplayText } from "./display-text";
export function EditorialSection({
  title,
  headingId,
  id,
  className = "",
  action,
  children,
}: {
  title: string;
  headingId: string;
  id?: string;
  className?: string;
  action?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`fcl-container fcl-section editorial-module ${className}`}
      aria-labelledby={headingId}
    >
      {action ? (
        <header className="module-heading">
          <h2 className="module-title" id={headingId}>
            <DisplayText text={title} />
          </h2>
          <Link
            href={action.href}
            className="section-action"
            aria-label={`${action.label}: ${title}`}
          >
            {action.label}
          </Link>
        </header>
      ) : (
        <h2 className="module-title" id={headingId}>
          <DisplayText text={title} />
        </h2>
      )}
      <div className="module-body">{children}</div>
    </section>
  );
}
export function Photo({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const original = imageManifest.find((entry) => entry.file === name + ".webp");
  const official = projectPhotography[name];
  const contextual = asset(name).includes("/photography/");
  if (!contextual && !original && !official) return null;
  return (
    <div
      className={
        "fcl-photo " +
        (contextual ? "context-photo " : "documentary-photo ") +
        className
      }
      style={contextual || official ? undefined : { maxWidth: original?.width }}
      data-source-page={official ? undefined : original?.pdfPage}
    >
      <Image
        src={asset(name)}
        alt={alt === "" ? "" : (photoAlt(name) ?? alt)}
        width={official?.width ?? (contextual ? 1800 : original!.width)}
        height={official?.height ?? (contextual ? 1200 : original!.height)}
        unoptimized
        preload={priority}
      />
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const parent = [...items].reverse().find((item) => item.href);
  if (!parent) return null;
  return (
    <nav className="fcl-return-nav" aria-label="Section navigation">
      <Link href={parent.href!}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M19 12H5m6-6-6 6 6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All {parent.label.toLowerCase()}
      </Link>
    </nav>
  );
}
export function PageIntro({
  title,
  text,
  image,
  tone = "paper",
  navigation,
}: {
  label: string;
  title: string;
  text: string;
  image?: string;
  tone?: "paper" | "charcoal";
  navigation?: ReactNode;
}) {
  return (
    <div className={`page-intro-band is-${tone}`}>
      <header
        className={`fcl-page-intro fcl-container ${image ? "has-image" : ""}`}
      >
        <div className="fcl-intro-copy">
          {navigation}
          <h1>
            <DisplayText text={title.replace(/\.+$/, "")} />
          </h1>
          <p className="fcl-intro-lead">
            <AnimatedCopy>{text}</AnimatedCopy>
          </p>
        </div>
        {image && (
          <Photo
            name={image}
            alt={photoAlt(image) ?? "Engineering systems"}
            priority
          />
        )}
      </header>
    </div>
  );
}
export function SolutionLinks({ items }: { items: Solution[] }) {
  return (
    <div
      className={`solution-link-gallery ${items.length === 1 ? "is-single" : ""}`}
    >
      {items.map((s) => (
        <Link key={s.slug} href={`/solutions/${s.slug}`}>
          <Photo name={s.image} alt="" />
          <div>
            <small>
              <AnimatedCopy>{s.partner}</AnimatedCopy>
            </small>
            <h3>
              <AnimatedCopy>{s.short}</AnimatedCopy>
            </h3>
            <p>
              <AnimatedCopy>{s.description}</AnimatedCopy>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
