export function Services() {
  return (
    <>
      <section
        className="solutions-section content-container section-space"
        id="solutions"
        aria-labelledby="solutions-heading"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">SOLUTIONS &amp; SERVICES</span>
            <h2 id="solutions-heading">
              The complete building.
              <br />
              Considered as one.
            </h2>
          </div>
          <p>
            Specialist systems, thoughtfully integrated.
            <br />
            From a single control point to an entire facility.
          </p>
        </div>
        <div className="service-list">
          <details id="building-management">
            <summary>
              <span className="service-number">01</span>
              <h3>Building Management Systems</h3>
              <span className="service-type">MONITOR · CONTROL · OPTIMIZE</span>
              <span className="expand-icon" aria-hidden="true"></span>
            </summary>
            <div className="service-description">
              <p>
                Integrated monitoring and control of building services,
                including HVAC, energy and equipment. We design, install and
                commission systems that give facilities teams a clear view of
                their building.
              </p>
              <span>Honeywell · Siemens · Trane</span>
            </div>
          </details>
          <details id="hvac">
            <summary>
              <span className="service-number">02</span>
              <h3>HVAC &amp; Energy Controls</h3>
              <span className="service-type">COMFORT WITH EFFICIENCY</span>
              <span className="expand-icon" aria-hidden="true"></span>
            </summary>
            <div className="service-description">
              <p>
                HVAC control products, variable frequency drives, sensors,
                valves and actuators. Coordinated engineering for comfortable
                indoor conditions and efficient building operations.
              </p>
              <span>Belimo · Danfoss · S+S Regeltechnik · Tecofi</span>
            </div>
          </details>
          <details id="fire-security">
            <summary>
              <span className="service-number">03</span>
              <h3>Fire Safety &amp; Security</h3>
              <span className="service-type">
                PROTECT PEOPLE &amp; PROPERTY
              </span>
              <span className="expand-icon" aria-hidden="true"></span>
            </summary>
            <div className="service-description">
              <p>
                Fire detection and protection, access control and integrated
                security management. Systems designed around the safety
                requirements and operational needs of your facility.
              </p>
              <span>Fike · RBH Access</span>
            </div>
          </details>
          <details id="automation">
            <summary>
              <span className="service-number">04</span>
              <h3>Home &amp; Lighting Automation</h3>
              <span className="service-type">SPACES THAT RESPOND</span>
              <span className="expand-icon" aria-hidden="true"></span>
            </summary>
            <div className="service-description">
              <p>
                Control lighting, entertainment and connected systems through an
                integrated interface. Residential and commercial lighting
                solutions tailored to the way each space is used.
              </p>
              <span>Control4 · Lutron</span>
            </div>
          </details>
          <details id="parking">
            <summary>
              <span className="service-number">05</span>
              <h3>Parking Guidance Systems</h3>
              <span className="service-type">SMARTER ARRIVALS</span>
              <span className="expand-icon" aria-hidden="true"></span>
            </summary>
            <div className="service-description">
              <p>
                Parking guidance and management systems that help drivers locate
                available spaces and help operators manage parking facilities.
              </p>
              <span>ParkHelp</span>
            </div>
          </details>
          <details id="pharmaceutical">
            <summary>
              <span className="service-number">06</span>
              <h3>Pharmaceutical Solutions</h3>
              <span className="service-type">
                CONTROL CRITICAL ENVIRONMENTS
              </span>
              <span className="expand-icon" aria-hidden="true"></span>
            </summary>
            <div className="service-description">
              <p>
                Building management, environmental monitoring and HVAC controls
                for pharmaceutical facilities. Our reference projects include
                Beximco, Square, Eskayef, DBL and Beacon Pharmaceuticals.
              </p>
              <span>Integrated building &amp; environmental controls</span>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
