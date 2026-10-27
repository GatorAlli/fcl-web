export function Contact() {
  return (
    <>
      <section
        className="contact-section content-container section-space"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div>
          <span className="eyebrow">LET’S BUILD SOMETHING THAT WORKS.</span>
          <h2 id="contact-heading">
            Your next project.
            <br />
            Our engineering expertise.
          </h2>
          <button className="button button-green" data-open="contact-dialog">
            Talk to our team
          </button>
        </div>
        <div className="contact-details">
          <span className="eyebrow">FIND US IN DHAKA</span>
          <address>
            Felix Controls Limited
            <br />
            113/B, Tejgaon Industrial Area
            <br />
            Dhaka 1208, Bangladesh
          </address>
          <p>
            info@felixbd.com
            <br />
            +880 1713080002
          </p>
          <button className="text-link" data-open="careers-dialog">
            Build your career with Felix
          </button>
        </div>
      </section>
    </>
  );
}
