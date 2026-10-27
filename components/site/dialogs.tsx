"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { services, projects } from "@/lib/site-content";

type DialogProps = { active: string | null; onClose: () => void };

function PreviewDialog({
  id,
  labelledBy,
  active,
  onClose,
  children,
}: DialogProps & { id: string; labelledBy: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current!;
    if (active === id && !dialog.open) {
      dialog.showModal();
      if (id === "search-dialog")
        dialog.querySelector<HTMLInputElement>("input")?.focus();
    } else if (active !== id && dialog.open) dialog.close();
  }, [active, id]);
  return (
    <dialog
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(event) => {
        const dialog = event.currentTarget;
        if ((event.target as Element).closest(".close-dialog")) dialog.close();
        else if (event.target === dialog) {
          const box = dialog.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            dialog.close();
        }
      }}
    >
      {children}
    </dialog>
  );
}

const searchItems = [
  ...services.map((service) => ({
    title: service.title,
    type: "Solution",
    href: `#${service.id}`,
    service: service.id,
    category: undefined,
    keywords: `${service.description} ${service.partners}`,
  })),
  ...projects.map((project, index) => ({
    title: project.title,
    type: "Project",
    href: "#projects",
    service: undefined,
    category: project.category.split(" ")[0],
    keywords: `${String(index + 1).padStart(2, "0")} ${project.label} ${project.system} ${project.description}`,
  })),
  {
    title: "About Felix Controls Limited",
    type: "Company",
    href: "#about",
    keywords: "engineering company profile",
    service: undefined,
    category: undefined,
  },
  {
    title: "Contact our team",
    type: "Contact",
    href: "#contact",
    keywords: "phone email address Dhaka",
    service: undefined,
    category: undefined,
  },
];

export function Dialogs({ active, onClose }: DialogProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const matches = searchItems.filter((item) =>
    `${item.title} ${item.keywords}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(active));
    return () => document.body.classList.remove("modal-open");
  }, [active]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("info@felixbd.com");
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <PreviewDialog
        id="search-dialog"
        labelledBy="search-heading"
        active={active}
        onClose={onClose}
      >
        <div className="dialog-header">
          <span className="eyebrow">FELIX CONTROLS LIMITED</span>
          <button
            className="icon-button close-dialog"
            aria-label="Close search"
          >
            ×
          </button>
        </div>
        <h2 id="search-heading">What are you looking for?</h2>
        <label className="sr-only" htmlFor="site-search">
          Search services and projects
        </label>
        <input
          id="site-search"
          type="search"
          placeholder="Search services and projects…"
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="search-results" aria-live="polite">
          {matches.length ? (
            matches.map((item) => (
              <a
                key={item.title}
                href={item.href}
                data-service={item.service}
                data-project-filter={item.category}
                onClick={onClose}
              >
                <span>{item.title}</span>
                <small>{item.type}</small>
              </a>
            ))
          ) : (
            <p>No results found. Try “HVAC”, “lighting” or “metro”.</p>
          )}
        </div>
      </PreviewDialog>
      <PreviewDialog
        id="contact-dialog"
        labelledBy="contact-title"
        active={active}
        onClose={onClose}
      >
        <div className="dialog-header">
          <span className="eyebrow">START A CONVERSATION</span>
          <button
            className="icon-button close-dialog"
            aria-label="Close contact details"
          >
            ×
          </button>
        </div>
        <h2 id="contact-title">
          Good engineering starts
          <br />
          with a conversation.
        </h2>
        <p>
          Tell our team about your building, your requirements and where you
          need support.
        </p>
        <div className="dialog-contact">
          <span>EMAIL</span>
          <strong>info@felixbd.com</strong>
          <button className="text-link copy-email" onClick={copyEmail}>
            {copied ? "Email copied ✓" : "Copy email"}
          </button>
          <span>PHONE</span>
          <strong>+880 1713080002</strong>
        </div>
        <p className="demo-note">
          Website preview. Contact links will be connected in the final website.
        </p>
        <p
          className={copyError ? "copy-status" : "copy-status sr-only"}
          role="status"
        >
          {copyError
            ? "Please select and copy info@felixbd.com."
            : copied
              ? "Email address copied."
              : ""}
        </p>
      </PreviewDialog>
      <PreviewDialog
        id="careers-dialog"
        labelledBy="careers-title"
        active={active}
        onClose={onClose}
      >
        <div className="dialog-header">
          <span className="eyebrow">CAREERS</span>
          <button
            className="icon-button close-dialog"
            aria-label="Close careers"
          >
            ×
          </button>
        </div>
        <h2 id="careers-title">
          Build your career
          <br />
          with Felix.
        </h2>
        <p>
          Interested in engineering, systems integration or project delivery?
          Contact our team at <strong>info@felixbd.com</strong> to introduce
          yourself.
        </p>
        <p className="demo-note">
          The careers page is a placeholder in this landing-page preview.
        </p>
      </PreviewDialog>
      <PreviewDialog
        id="profile-dialog"
        labelledBy="profile-title"
        active={active}
        onClose={onClose}
      >
        <div className="dialog-header">
          <span className="eyebrow">COMPANY PROFILE</span>
          <button
            className="icon-button close-dialog"
            aria-label="Close company profile"
          >
            ×
          </button>
        </div>
        <h2 id="profile-title">
          An experienced
          <br />
          engineering partner.
        </h2>
        <p>
          Founded in December 2010, Felix Controls Limited provides integrated
          building management, HVAC controls, automation, fire protection and
          security systems in Bangladesh.
        </p>
        <p>15+ years of experience. 100+ customers. 400+ projects.</p>
        <p className="demo-note">
          The company-profile download will be connected in the final website.
        </p>
      </PreviewDialog>
      <PreviewDialog
        id="privacy-dialog"
        labelledBy="privacy-title"
        active={active}
        onClose={onClose}
      >
        <div className="dialog-header">
          <span className="eyebrow">WEBSITE PREVIEW</span>
          <button
            className="icon-button close-dialog"
            aria-label="Close privacy information"
          >
            ×
          </button>
        </div>
        <h2 id="privacy-title">Your privacy.</h2>
        <p>
          This local mockup does not submit forms or collect visitor
          information.
        </p>
        <p className="demo-note">
          The final privacy policy will be added before launch.
        </p>
      </PreviewDialog>
    </>
  );
}
