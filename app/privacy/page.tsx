import { PageCanvas } from "@/components/site/page-canvas";
import { PageIntro } from "@/components/site/page-parts";
import { sitePageMetadata } from "@/lib/site-metadata";

const description =
  "Learn how Felix Controls Limited handles website enquiries and optional analytics, and how to manage your preferences or ask about your information.";

export const metadata = sitePageMetadata(
  "/privacy",
  "Privacy Policy",
  description,
);

export default function PrivacyPolicy() {
  return (
    <PageCanvas id="main">
      <PageIntro
        label="Privacy"
        title="Privacy Policy"
        text="How Felix Controls Limited handles information when you browse felixbd.com or get in touch."
        tone="charcoal"
      />
      <article className="fcl-container fcl-section">
        <div className="profile-copy space-y-10">
          <section>
            <h2 className="mb-3 text-xl font-bold">Website visits</h2>
            <p>
              When you load a page, your browser sends technical information
              such as your IP address, browser information and the requested
              page to the systems that deliver the site. Those systems use the
              request to serve the page.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Enquiries</h2>
            <p>
              The enquiry form uses your entries to prepare an email draft in
              your browser. You can copy the draft or open it in your email app.
              Your email app sends the draft when you choose to send it. We use
              the information you send to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Optional analytics</h2>
            <p>
              When analytics is available and you select{" "}
              <strong>Accept analytics</strong>, we use Google Analytics 4 to
              understand page visits and interactions such as contact clicks and
              company profile downloads. Google Analytics may use cookies on
              your device. The site’s analytics events omit enquiry fields and
              email drafts.
            </p>
            <p>
              If you accept analytics, Cloudflare Web Analytics helps us
              understand page traffic and how quickly pages load.
            </p>
            <p className="flex flex-wrap gap-x-6">
              <a
                className="fcl-link"
                href="https://support.google.com/analytics/answer/6004245"
              >
                About Google Analytics data
              </a>
              <a
                className="fcl-link"
                href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/"
              >
                About Cloudflare Web Analytics data
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Your analytics choice</h2>
            <p>
              Your browser stores your choice for future visits. Open{" "}
              <strong>Cookie Settings</strong> in the footer at any time and
              select <strong>Reject analytics</strong> to stop optional
              analytics measurement on subsequent page loads. You can also clear
              website data in your browser to remove the saved choice or
              analytics cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Privacy questions</h2>
            <p>
              Email{" "}
              <a
                href="mailto:info@felixbd.com"
                className="underline underline-offset-4"
              >
                info@felixbd.com
              </a>{" "}
              if you have a privacy question or want to make a request about
              your personal information.
            </p>
          </section>
        </div>
      </article>
    </PageCanvas>
  );
}
