export function Dialogs() {
  return (
    <>
      <dialog id="search-dialog" aria-labelledby="search-heading">
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
        />
        <div className="search-results" aria-live="polite"></div>
      </dialog>
      <dialog id="contact-dialog" aria-labelledby="contact-title">
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
          <button className="text-link copy-email">Copy email</button>
          <span>PHONE</span>
          <strong>+880 1713080002</strong>
        </div>
        <p className="demo-note">
          Website preview. Contact links will be connected in the final website.
        </p>
        <p className="copy-status sr-only" role="status"></p>
      </dialog>
      <dialog id="careers-dialog" aria-labelledby="careers-title">
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
      </dialog>
      <dialog id="profile-dialog" aria-labelledby="profile-title">
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
      </dialog>
      <dialog id="privacy-dialog" aria-labelledby="privacy-title">
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
          information. Your display preference is saved in this browser.
        </p>
        <p className="demo-note">
          The final privacy policy will be added before launch.
        </p>
      </dialog>
    </>
  );
}
