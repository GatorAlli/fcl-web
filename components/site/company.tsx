import Image from "next/image";

export function Company() {
  return (
    <>
      <section
        className="company-panel"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="company-inner content-container">
          <div className="company-copy">
            <span className="eyebrow">FELIX CONTROLS LIMITED</span>
            <h2 id="about-heading">
              We advise. We design.
              <br />
              We assess. <span>We deliver.</span>
            </h2>
            <p>
              Better buildings begin with the right engineering. Since 2010, we
              have brought building management, automation, fire protection and
              security systems together for clients across Bangladesh.
            </p>
            <p>
              From initial planning to commissioning and ongoing support, our
              engineers take responsibility for the complete system.
            </p>
            <a href="#solutions" className="text-link light-link">
              Meet your engineering partner
            </a>
          </div>
          <dl className="company-stats">
            <div>
              <dt>
                15<span>+</span>
              </dt>
              <dd>Years of experience</dd>
            </div>
            <div>
              <dt>
                400<span>+</span>
              </dt>
              <dd>Projects delivered</dd>
            </div>
            <div>
              <dt>
                100<span>+</span>
              </dt>
              <dd>Customers served</dd>
            </div>
            <div>
              <dt>2010</dt>
              <dd>Established in Bangladesh</dd>
            </div>
          </dl>
        </div>
        <div className="partner-caption content-container">
          <span className="eyebrow">GLOBAL TECHNOLOGY. LOCAL EXPERTISE.</span>
        </div>
        <div
          className="partner-billboard"
          tabIndex={0}
          aria-label="Our technology partners. Animation pauses while focused."
        >
          <div className="partner-track">
            <div className="partner-group">
              <Image
                src="/assets/partner-honeywell.png"
                width="273"
                height="74"
                alt="Honeywell"
                unoptimized
              />
              <Image
                src="/assets/partner-siemens.png"
                width="228"
                height="62"
                alt="Siemens"
                unoptimized
              />
              <Image
                src="/assets/partner-trane.png"
                width="217"
                height="83"
                alt="Trane"
                unoptimized
              />
              <Image
                src="/assets/partner-control4.png"
                width="247"
                height="81"
                alt="Control4"
                unoptimized
              />
              <Image
                src="/assets/partner-lutron.png"
                width="270"
                height="69"
                alt="Lutron"
                unoptimized
              />
              <Image
                src="/assets/partner-fike.png"
                width="173"
                height="78"
                alt="Fike"
                unoptimized
              />
              <Image
                src="/assets/partner-danfoss.png"
                width="226"
                height="78"
                alt="Danfoss"
                unoptimized
              />
              <Image
                src="/assets/partner-rbh.png"
                width="180"
                height="111"
                alt="RBH Access"
                unoptimized
              />
              <Image
                src="/assets/partner-belimo.png"
                width="238"
                height="74"
                alt="Belimo"
                unoptimized
              />
              <Image
                src="/assets/partner-ss.png"
                width="219"
                height="106"
                alt="S+S Regeltechnik"
                unoptimized
              />
              <Image
                src="/assets/partner-tecofi.png"
                width="226"
                height="76"
                alt="Tecofi"
                unoptimized
              />
              <Image
                src="/assets/partner-parkhelp.png"
                width="235"
                height="69"
                alt="ParkHelp"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
