import { services } from "@/lib/site-content";

export function Services() {
  return (
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
        {services.map((service, index) => (
          <details id={service.id} key={service.id}>
            <summary>
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <span className="service-type">{service.tagline}</span>
              <span className="expand-icon" aria-hidden="true" />
            </summary>
            <div className="service-description">
              <p>{service.description}</p>
              <span>{service.partners}</span>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
