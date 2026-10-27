import Image from "next/image";

export function Hero() {
  return (
    <>
      <section
        className="hero"
        aria-roledescription="carousel"
        aria-label="Engineering solutions"
        tabIndex={0}
      >
        <div className="hero-slides">
          <div
            className="hero-slide is-active"
            data-slide="0"
            role="group"
            aria-roledescription="slide"
            aria-label="1 of 3"
          >
            <Image
              src="/assets/hero-building.jpg"
              width="2400"
              height="1600"
              alt="Contemporary glass buildings viewed from below"
              preload
              unoptimized
            />
            <div className="hero-copy">
              <h1>
                INTELLIGENT BUILDINGS.
                <br />
                EXCEPTIONAL CONTROL.
              </h1>
              <p>Integrated engineering for the way your building works.</p>
              <a className="button button-green" href="#solutions">
                Explore our solutions
              </a>
            </div>
          </div>
          <div
            className="hero-slide"
            data-slide="1"
            role="group"
            aria-roledescription="slide"
            aria-label="2 of 3"
            inert
            aria-hidden="true"
          >
            <Image
              src="/assets/hero-industrial.jpg"
              width="2200"
              height="1467"
              alt="Industrial engineering and precision metalwork"
              unoptimized
            />
            <div className="hero-copy">
              <h2>
                PRECISE CONTROL.
                <br />
                PROVEN ENGINEERING.
              </h2>
              <p>
                Automation, energy controls and safety. Designed to work
                together.
              </p>
              <a className="button button-green" href="#solutions">
                Discover our expertise
              </a>
            </div>
          </div>
          <div
            className="hero-slide"
            data-slide="2"
            role="group"
            aria-roledescription="slide"
            aria-label="3 of 3"
            inert
            aria-hidden="true"
          >
            <Image
              src="/assets/hero-transport.jpg"
              width="2200"
              height="1467"
              alt="Rail transport infrastructure"
              unoptimized
            />
            <div className="hero-copy">
              <h2>
                CONNECTED SYSTEMS.
                <br />
                CONFIDENT OPERATIONS.
              </h2>
              <p>Supporting essential infrastructure across Bangladesh.</p>
              <a className="button button-green" href="#projects">
                See our reference projects
              </a>
            </div>
          </div>
        </div>
        <button className="slide-arrow previous" aria-label="Previous slide">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
        <button className="slide-arrow next" aria-label="Next slide">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
        <div className="hero-bottom">
          <div className="slide-dots" aria-label="Choose a slide">
            <button
              className="is-active"
              aria-label="Show slide 1"
              aria-current="true"
            ></button>
            <button aria-label="Show slide 2"></button>
            <button aria-label="Show slide 3"></button>
          </div>
        </div>
        <span
          className="sr-only slide-status"
          aria-live="polite"
          aria-atomic="true"
        ></span>
      </section>
    </>
  );
}
