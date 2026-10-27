"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export function Header() {
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  function close() {
    setMenu(null);
    setMobileOpen(false);
  }
  useEffect(() => {
    function outside(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) close();
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const toggle = headerRef.current?.querySelector<HTMLButtonElement>(
        mobileOpen ? ".mobile-toggle" : `[aria-controls="${menu}"]`,
      );
      close();
      toggle?.focus();
    }
    const breakpoint = window.matchMedia("(max-width: 900px)");
    document.addEventListener("click", outside);
    document.addEventListener("keydown", escape);
    breakpoint.addEventListener("change", close);
    return () => {
      document.removeEventListener("click", outside);
      document.removeEventListener("keydown", escape);
      breakpoint.removeEventListener("change", close);
    };
  }, [menu, mobileOpen]);
  return (
    <>
      <header
        ref={headerRef}
        className={menu ? "site-header menu-is-open" : "site-header"}
        onClick={(event) => {
          if ((event.target as Element).closest("a, .search-toggle")) close();
        }}
        onBlur={(event) => {
          if (
            event.relatedTarget &&
            !event.currentTarget.contains(event.relatedTarget)
          )
            setMenu(null);
        }}
      >
        <div className="nav-shell">
          <a
            href="#"
            className="brand"
            aria-label="Felix Controls Limited, home"
          >
            <Image
              src="/assets/felix-logo-transparent.png"
              width="270"
              height="250"
              alt="Felix"
              unoptimized
            />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <button
              className="nav-link dropdown-toggle"
              aria-expanded={menu === "solutions-menu"}
              aria-controls="solutions-menu"
              onClick={() =>
                setMenu(menu === "solutions-menu" ? null : "solutions-menu")
              }
            >
              Solutions &amp; Services{" "}
              <span className="chevron" aria-hidden="true"></span>
            </button>
            <button
              className="nav-link dropdown-toggle"
              aria-expanded={menu === "projects-menu"}
              aria-controls="projects-menu"
              onClick={() =>
                setMenu(menu === "projects-menu" ? null : "projects-menu")
              }
            >
              Reference Projects{" "}
              <span className="chevron" aria-hidden="true"></span>
            </button>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
          </nav>
          <div className="nav-actions">
            <a href="#contact" className="nav-cta">
              Discuss your project
            </a>
            <button
              className="icon-button search-toggle"
              aria-label="Search website"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="6.8" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
            <ThemeToggle />
            <button
              className="icon-button mobile-toggle"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-controls="mobile-nav"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div
          className="mega-menu"
          id="solutions-menu"
          hidden={menu !== "solutions-menu"}
        >
          <div className="menu-inner">
            <div className="menu-intro">
              <span className="eyebrow">SOLUTIONS &amp; SERVICES</span>
              <h2>
                Every system.
                <br />
                Working together.
              </h2>
              <p>
                Engineering, integration and support for the complete building
                lifecycle.
              </p>
            </div>
            <div className="menu-links">
              <a href="#building-management" data-service="building-management">
                Building Management Systems
              </a>
              <a href="#hvac" data-service="hvac">
                HVAC &amp; Energy Controls
              </a>
              <a href="#fire-security" data-service="fire-security">
                Fire Safety &amp; Security
              </a>
              <a href="#automation" data-service="automation">
                Home &amp; Lighting Automation
              </a>
              <a href="#parking" data-service="parking">
                Parking Guidance Systems
              </a>
              <a href="#pharmaceutical" data-service="pharmaceutical">
                Pharmaceutical Solutions
              </a>
            </div>
          </div>
        </div>
        <div
          className="mega-menu"
          id="projects-menu"
          hidden={menu !== "projects-menu"}
        >
          <div className="menu-inner">
            <div className="menu-intro">
              <span className="eyebrow">REFERENCE PROJECTS</span>
              <h2>
                Built on experience.
                <br />
                Proven in practice.
              </h2>
              <p>
                Supporting the places where Bangladesh lives, works and moves.
              </p>
            </div>
            <div className="menu-links">
              <a href="#projects" data-project-filter="industrial">
                Industrial
              </a>
              <a href="#projects" data-project-filter="commercial">
                Commercial
              </a>
              <a href="#projects" data-project-filter="transport">
                Transport
              </a>
              <a href="#projects" data-project-filter="pharmaceuticals">
                Pharmaceuticals
              </a>
              <a href="#projects" data-project-filter="all">
                All reference projects
              </a>
            </div>
          </div>
        </div>
        <nav
          className="mobile-nav"
          id="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!mobileOpen}
        >
          <details>
            <summary>Solutions &amp; Services</summary>
            <a href="#building-management" data-service="building-management">
              Building Management Systems
            </a>
            <a href="#hvac" data-service="hvac">
              HVAC &amp; Energy Controls
            </a>
            <a href="#fire-security" data-service="fire-security">
              Fire Safety &amp; Security
            </a>
            <a href="#automation" data-service="automation">
              Home &amp; Lighting Automation
            </a>
            <a href="#parking" data-service="parking">
              Parking Guidance Systems
            </a>
            <a href="#pharmaceutical" data-service="pharmaceutical">
              Pharmaceutical Solutions
            </a>
          </details>
          <details>
            <summary>Reference Projects</summary>
            <a href="#projects" data-project-filter="industrial">
              Industrial
            </a>
            <a href="#projects" data-project-filter="commercial">
              Commercial
            </a>
            <a href="#projects" data-project-filter="transport">
              Transport
            </a>
            <a href="#projects" data-project-filter="pharmaceuticals">
              Pharmaceuticals
            </a>
          </details>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
      </header>
    </>
  );
}
