import Image from "next/image";

export function Header() {
  return (
    <>
      <header className="site-header">
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
              aria-expanded="false"
              aria-controls="solutions-menu"
            >
              Solutions &amp; Services{" "}
              <span className="chevron" aria-hidden="true"></span>
            </button>
            <button
              className="nav-link dropdown-toggle"
              aria-expanded="false"
              aria-controls="projects-menu"
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
            <button
              className="icon-button theme-toggle"
              aria-label="Switch to dark mode"
              aria-pressed="false"
            >
              <svg className="moon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.6 14.6A9 9 0 0 1 9.4 3.4 9 9 0 1 0 20.6 14.6Z" />
              </svg>
              <svg className="sun" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
              </svg>
            </button>
            <button
              className="icon-button mobile-toggle"
              aria-label="Open navigation"
              aria-controls="mobile-nav"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="mega-menu" id="solutions-menu" hidden>
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
        <div className="mega-menu" id="projects-menu" hidden>
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
          hidden
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
