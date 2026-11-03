"use client";
import { AnimatedCopy } from "@/components/site/animated-copy";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  brochure,
  solutions,
  sectors,
  referenceProjects,
  solutionGroups,
  projectCategories,
} from "@/lib/company-profile";
import { DirectionIcon } from "./direction-icon";
import { TextEntrances } from "./text-entrances";

export function ActionChevron() {
  return (
    <svg
      className="action-chevron"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function NavLabel({ children }: { children: React.ReactNode }) {
  return <span className="nav-label">{children}</span>;
}
function ProjectDirectory({ close }: { close: () => void }) {
  function navigate(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = new URL(event.currentTarget.href);
    if (
      window.location.pathname.replace(/\/$/, "") === "/projects" &&
      target.pathname.replace(/\/$/, "") === "/projects" &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      event.preventDefault();
      window.history.replaceState(null, "", target.pathname + target.search);
    }
    close();
  }
  return (
    <nav
      className="project-menu-directory"
      aria-label="Explore project references"
    >
      <Link
        href="/projects"
        className="project-menu-heading"
        onClick={navigate}
      >
        All projects
      </Link>
      <Link href="/clients" className="project-menu-heading" onClick={navigate}>
        Clients
      </Link>
      <div className="project-menu-sectors">
        {projectCategories.slice(1).map(([value, label]) => {
          return (
            <Link
              href={`/projects?category=${value}`}
              key={value}
              onClick={navigate}
            >
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
const searchItems = [
  ...solutions.map((s) => ({
    title: s.title,
    href: `/solutions/${s.slug}`,
    type: "Solution",
    text: `${s.partner} ${s.description} ${s.capabilities.join(" ")}`,
  })),
  ...sectors.map((s) => ({
    title: s.title,
    href: `/sectors/${s.slug}`,
    type: "Sector",
    text: s.text,
  })),
  ...referenceProjects.map((p) => ({
    title: p.title,
    href: `/projects/${p.slug}`,
    type: "Project",
    text: `${p.category} ${p.description}`,
  })),
  ...[
    ["About Felix", "/about"],
    ["Engineering services", "/services"],
    ["Technology partners", "/partners"],
    ["Our clients", "/clients"],
    ["Company profile & resources", "/resources"],
    ["Contact our team", "/contact"],
    ["Careers", "/careers"],
  ].map(([title, href]) => ({ title, href, type: "Company", text: title })),
];

export function StudioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const router = useRouter();
  const [menu, setMenu] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const referenceContent = useRef<HTMLDivElement>(null);
  const [referenceHeight, setReferenceHeight] = useState(0);
  const close = () => setMenu(null);
  function openProjects() {
    if (pathname.replace(/\/$/, "") === "/projects") {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      router.push("/projects");
    }
    setMenu(menu === "projects" ? null : "projects");
  }
  useEffect(() => {
    const element = referenceContent.current;
    if (!element) return;
    const observer = new ResizeObserver(() =>
      setReferenceHeight(element.getBoundingClientRect().height),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    delete document.documentElement.dataset.theme;
    try {
      localStorage.removeItem("felix-theme");
    } catch {}
  }, []);
  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (!header.current?.contains(e.target as Node)) setMenu(null);
    };
    const wheel = (e: WheelEvent) => {
      if (
        menu === "projects" &&
        Math.abs(e.deltaY) > 8 &&
        !header.current?.contains(e.target as Node)
      )
        setMenu(null);
    };
    const touchMove = (e: TouchEvent) => {
      if (menu === "projects" && !header.current?.contains(e.target as Node))
        setMenu(null);
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menu) {
        setMenu(null);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("click", outside);
    document.addEventListener("wheel", wheel, { passive: true });
    document.addEventListener("touchmove", touchMove, { passive: true });
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", outside);
      document.removeEventListener("wheel", wheel);
      document.removeEventListener("touchmove", touchMove);
      document.removeEventListener("keydown", escape);
    };
  }, [menu]);
  useEffect(() => {
    if (searchOpen && !dialog.current?.open) {
      dialog.current?.showModal();
      dialog.current?.querySelector("input")?.focus();
    }
    if (!searchOpen && dialog.current?.open) dialog.current?.close();
  }, [searchOpen]);
  const matches = searchItems.filter((i) =>
    `${i.title} ${i.text}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <TextEntrances />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={"studio-header " + (menu ? "is-expanded" : "")}
        ref={header}
      >
        <div className="studio-nav">
          <Link
            className="studio-brand brand"
            href="/"
            aria-label="Felix Controls Limited, home"
            onClick={close}
          >
            <Image
              src="/assets/felix-logo-web.png"
              width={270}
              height={250}
              alt="Felix Controls Limited"
              unoptimized
            />
          </Link>
          <div className="studio-nav-right">
            <nav className="studio-primary" aria-label="Main navigation">
              <Link
                href="/"
                onClick={close}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                <NavLabel>Home</NavLabel>
              </Link>
              {[
                ["solutions", "Solutions & Services"],
                ["projects", "Reference Projects"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  aria-expanded={menu === key}
                  aria-controls={
                    key === "projects" ? "reference-menu" : "studio-menu"
                  }
                  onClick={(e) => {
                    menuButton.current = e.currentTarget;
                    if (key === "projects") openProjects();
                    else setMenu(menu === key ? null : key);
                  }}
                  className={
                    pathname.startsWith(`/${key}`) ||
                    (key === "solutions" && pathname === "/services") ||
                    (key === "projects" && pathname === "/clients")
                      ? "current"
                      : ""
                  }
                >
                  <NavLabel>{label}</NavLabel>
                  <DirectionIcon className="nav-dropdown-arrow" />
                </button>
              ))}
              <Link
                href="/about"
                onClick={close}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                <NavLabel>About</NavLabel>
              </Link>
              <a
                href="/contact"
                className="nav-contact"
                onClick={close}
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                <NavLabel>Contact</NavLabel>
              </a>
            </nav>
            <div className="studio-tools">
              <button
                className="studio-icon"
                ref={searchButton}
                aria-label="Search website"
                onClick={() => {
                  close();
                  setSearchOpen(true);
                }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m16 16 5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <button
                className="studio-menu-toggle"
                aria-label={menu ? "Close menu" : "Open menu"}
                aria-expanded={Boolean(menu)}
                aria-controls={
                  menu === "projects" ? "reference-menu" : "studio-menu"
                }
                onClick={(e) => {
                  menuButton.current = e.currentTarget;
                  setMenu(menu ? null : "all");
                }}
              >
                <span className={menu ? "open" : ""}>
                  <i />
                  <i />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="studio-menu"
          className="studio-menu"
          hidden={!menu || menu === "projects"}
        >
          <div className="studio-menu-inner">
            <div className="studio-menu-content">
              {menu === "all" && (
                <nav
                  className="mobile-primary-links"
                  aria-label="Main navigation"
                >
                  <Link href="/" onClick={close}>
                    Home
                  </Link>
                  <Link href="/solutions" onClick={close}>
                    Solutions & Services
                  </Link>
                  <Link
                    href="/projects"
                    onClick={(event) => {
                      event.preventDefault();
                      openProjects();
                    }}
                  >
                    Reference Projects
                  </Link>
                  <Link href="/about" onClick={close}>
                    About
                  </Link>
                  <a href="/contact" className="mobile-contact" onClick={close}>
                    Contact
                  </a>
                </nav>
              )}
              {(menu === "solutions" || menu === "all") && (
                <>
                  <div className="menu-overview">
                    {menu === "solutions" && (
                      <h2>
                        <AnimatedCopy>Solutions & services</AnimatedCopy>
                      </h2>
                    )}
                    <nav
                      className="menu-overview-links"
                      aria-label="Explore solutions and sectors"
                    >
                      {menu === "solutions" && (
                        <Link href="/solutions" onClick={close}>
                          All solutions
                        </Link>
                      )}
                      <Link href="/services" onClick={close}>
                        Engineering services
                      </Link>
                      <Link href="/sectors" onClick={close}>
                        Sectors
                      </Link>
                    </nav>
                  </div>
                  <div className="menu-capability-groups">
                    {solutionGroups.map(([key, label]) => (
                      <section key={key}>
                        <h3>
                          <AnimatedCopy>{label}</AnimatedCopy>
                        </h3>
                        <ul>
                          {solutions
                            .filter((item) => item.group === key)
                            .map((item) => (
                              <li key={item.slug}>
                                <AnimatedCopy>
                                  <Link
                                    href={`/solutions/${item.slug}`}
                                    onClick={close}
                                  >
                                    {item.short}
                                  </Link>
                                </AnimatedCopy>
                              </li>
                            ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </>
              )}
              {menu === "all" && <ProjectDirectory close={close} />}
              {(menu === "company" || menu === "all") && (
                <div className="menu-company-links">
                  {[
                    ["/partners", "Our partners"],
                    ["/clients", "Our clients"],
                    ["/careers", "Careers"],
                    ["/resources", "Resources"],
                  ].map(([href, label]) => (
                    <Link key={href} href={href} onClick={close}>
                      {label}
                    </Link>
                  ))}
                  <a href={brochure} download onClick={close}>
                    Company profile <span>PDF </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          id="reference-menu"
          className={`reference-menu ${menu === "projects" ? "is-open" : ""}`}
          aria-hidden={menu !== "projects"}
          inert={menu !== "projects"}
        >
          <div className="reference-menu-clip">
            <div className="reference-menu-content" ref={referenceContent}>
              <ProjectDirectory close={close} />
            </div>
          </div>
        </div>
      </header>
      <div
        className={`studio-page ${pathname === "/contact" ? "contact-route" : ""}`}
        style={
          {
            "--reference-menu-height":
              menu === "projects" ? `${referenceHeight}px` : "0px",
          } as CSSProperties
        }
      >
        {children}
      </div>
      <footer className="global-footer">
        {pathname === "/" && (
          <section
            className="home-contact-feature"
            aria-labelledby="home-contact-heading"
          >
            <div className="fcl-container">
              <div className="contact-feature-heading">
                <div>
                  <h2 id="home-contact-heading">
                    <AnimatedCopy>Talk to our engineers</AnimatedCopy>
                  </h2>
                  <p>
                    <AnimatedCopy>
                      Planning a new building, upgrading a system or looking
                      for technical support? Tell us what you need.
                    </AnimatedCopy>
                  </p>
                </div>
                <Link href="/contact" className="contact-feature-action">
                  Discuss
                  <br />
                  your project
                  <DirectionIcon />
                </Link>
              </div>
            </div>
          </section>
        )}
        <div className="fcl-container footer-directory">
          <div>
            <Link
              href="/"
              className="footer-logo"
              aria-label="Felix Controls Limited, home"
            >
              <Image
                src="/assets/felix-logo-web.png"
                width={270}
                height={250}
                alt="Felix Controls Limited"
                unoptimized
              />
            </Link>
            <span className="fcl-label">Felix Controls Limited</span>
            <Link href="/about">About Felix</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div>
            <span className="fcl-label">Navigation</span>
            <Link href="/solutions">Solutions</Link>
            <Link href="/sectors">Sectors</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Reference projects</Link>
            <Link href="/resources">Browse company profile</Link>
            <a href={brochure} download>
              Download company profile
            </a>
          </div>
          <div>
            <span className="fcl-label">Sectors</span>
            {sectors
              .filter((item) =>
                [
                  "commercial",
                  "healthcare",
                  "industry",
                  "residential",
                  "life-sciences",
                ].includes(item.slug),
              )
              .map((item) => (
                <Link key={item.slug} href={`/sectors/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            <Link href="/sectors">All sectors</Link>
          </div>
          <div className="footer-business-details">
            <span className="fcl-label">Contact</span>
            <span className="footer-data-label">Email</span>
            <a href="mailto:info@felixbd.com">info@felixbd.com</a>
            <span className="footer-data-label">Contact number</span>
            <a className="footer-primary-phone" href="tel:+8801713080002">
              +880 1713080002
            </a>
            <span className="footer-data-label">Address</span>
            <address>
              <AnimatedCopy>
                113/B, Tejgaon Industrial Area
                <br />
                Dhaka 1208, Bangladesh
              </AnimatedCopy>
            </address>
          </div>
        </div>
      </footer>
      <dialog
        className="studio-search"
        ref={dialog}
        aria-labelledby="site-search-title"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setSearchOpen(false);
          }
        }}
        onClose={() => {
          setSearchOpen(false);
          searchButton.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const r = e.currentTarget.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              e.currentTarget.close();
          }
        }}
      >
        <div className="search-top">
          <h2 id="site-search-title">
            <AnimatedCopy>Search Felix</AnimatedCopy>
          </h2>
          <button
            className="studio-icon"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          >
            ×
          </button>
        </div>
        <label className="sr-only" htmlFor="site-search">
          Search solutions, sectors and projects
        </label>
        <div className="search-field">
          <input
            id="site-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search solutions, sectors, projects…"
            type="search"
            autoComplete="off"
          />
          {query && <button onClick={() => setQuery("")}>Clear</button>}
        </div>
        <p className="fcl-muted" role="status">
          <AnimatedCopy>
            {query
              ? `${matches.length} results`
              : "Explore our solutions, sectors and reference projects."}
          </AnimatedCopy>
        </p>
        <div className="search-results">
          {matches.length ? (
            matches.map((i) => (
              <Link
                href={i.href}
                key={i.href}
                onClick={() => setSearchOpen(false)}
              >
                <span>
                  <small>
                    <AnimatedCopy>{i.type}</AnimatedCopy>
                  </small>
                  {i.title}
                </span>
              </Link>
            ))
          ) : (
            <div className="search-empty">
              <h3>
                <AnimatedCopy>No matches found</AnimatedCopy>
              </h3>
              <p>
                <AnimatedCopy>
                  Try “lighting”, “HVAC” or a project name.
                </AnimatedCopy>
              </p>
              <button className="fcl-link" onClick={() => setQuery("")}>
                Clear search
              </button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
