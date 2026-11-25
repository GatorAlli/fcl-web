import { PolicyPage, type PolicySection } from "@/components/site/policy-page";
import { sitePageMetadata } from "@/lib/site-metadata";

const description =
  "Learn how Felix Controls Limited handles website enquiries and optional analytics, and how to manage your preferences or ask about your information.";

export const metadata = sitePageMetadata(
  "/privacy",
  "Privacy Policy",
  description,
);

const sections: PolicySection[] = [
  {
    id: "website-visits",
    title: "Website visits",
    body: (
      <>
        <p>
          When you load a page, your browser sends technical information such as
          your IP address, browser information and the requested page to the
          systems that deliver the site. Those systems use the request to serve
          the page.
        </p>
      </>
    ),
  },
  {
    id: "enquiries",
    title: "Enquiries",
    body: (
      <>
        <p>
          The enquiry form uses your entries to prepare an email draft in your
          browser. You can copy the draft or open it in your email app. Your
          email app sends the draft when you choose to send it. We use the
          information you send to respond to your enquiry.
        </p>
      </>
    ),
  },
  {
    id: "optional-analytics",
    title: "Optional analytics",
    body: (
      <>
        <p>
          When analytics is available and you select{" "}
          <strong>Accept analytics</strong>, we use Google Analytics 4 to
          understand page visits and interactions such as contact clicks and
          company profile downloads. Google Analytics may use cookies on your
          device. The site’s analytics events omit enquiry fields and email
          drafts.
        </p>
        <p>
          If you accept analytics, Cloudflare Web Analytics helps us understand
          page traffic and how quickly pages load.
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
      </>
    ),
  },
  {
    id: "analytics-choice",
    title: "Your analytics choice",
    body: (
      <>
        <p>
          Your browser stores your choice for future visits. Open{" "}
          <strong>Cookie Settings</strong> in the footer at any time and select{" "}
          <strong>Reject analytics</strong> to stop optional analytics
          measurement on subsequent page loads. You can also clear website data
          in your browser to remove the saved choice or analytics cookies.
        </p>
      </>
    ),
  },
  {
    id: "privacy-questions",
    title: "Privacy questions",
    body: (
      <>
        <p>
          Email{" "}
          <a
            href="mailto:info@felixbd.com"
            className="underline underline-offset-4"
          >
            info@felixbd.com
          </a>{" "}
          if you have a privacy question or want to make a request about your
          personal information.
        </p>
      </>
    ),
  },
];

const summary = [
  "Loading a page sends technical information, such as your IP address, to the systems that deliver the site.",
  "The enquiry form prepares an email draft in your browser. It is sent only when you send it from your email app.",
  "Google Analytics and Cloudflare Web Analytics are used only if you accept analytics.",
  "You can reject analytics at any time through Cookie Settings in the footer.",
];

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="How Felix Controls Limited handles information when you browse felixbd.com or get in touch."
      sections={sections}
      summary={summary}
    />
  );
}
