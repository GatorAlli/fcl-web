import { PolicyPage, type PolicySection } from "@/components/site/policy-page";
import { sitePageMetadata } from "@/lib/site-metadata";

const description =
  "Read the terms for using the Felix Controls Limited website, including information about project enquiries, website content and third-party links.";

export const metadata = sitePageMetadata(
  "/terms",
  "Terms of Service",
  description,
);

const sections: PolicySection[] = [
  {
    id: "website-information",
    title: "Website information",
    body: (
      <>
        <p>
          The website presents Felix Controls Limited’s services, solutions,
          products and reference projects. Before specifying equipment or making
          a project decision, confirm suitability, technical details and
          availability with Felix Controls Limited or the relevant manufacturer.
        </p>
      </>
    ),
  },
  {
    id: "project-enquiries",
    title: "Project enquiries",
    body: (
      <>
        <p>
          You can use the website to find our contact details and prepare an
          enquiry draft. Any supply, installation or engineering work is subject
          to the scope and terms agreed separately for that project.
        </p>
      </>
    ),
  },
  {
    id: "use-of-the-website",
    title: "Use of the website",
    body: (
      <>
        <p>
          Use the website lawfully and respect the rights of others. Avoid
          interfering with the site or another visitor’s ability to use it.
        </p>
      </>
    ),
  },
  {
    id: "materials-and-links",
    title: "Materials and external links",
    body: (
      <>
        <p>
          Images, logos and documents may belong to Felix Controls Limited or to
          third parties. Obtain any permission needed from the relevant rights
          holder before reproducing or distributing their materials.
        </p>
        <p>
          Links to manufacturers and other third parties provide access to their
          own resources. Those websites have their own terms and privacy
          practices.
        </p>
      </>
    ),
  },
  {
    id: "questions",
    title: "Questions about these terms",
    body: (
      <>
        <p>
          Contact Felix Controls Limited at{" "}
          <a
            href="mailto:info@felixbd.com"
            className="underline underline-offset-4"
          >
            info@felixbd.com
          </a>
          .
        </p>
      </>
    ),
  },
];

const summary = [
  "Confirm suitability, technical details and availability before making a project decision.",
  "Supply, installation and engineering work follows the scope and terms agreed for each project.",
  "Use the website lawfully and avoid interfering with it or with other visitors.",
  "Get any permission needed before reusing images, logos or documents.",
];

export default function TermsOfService() {
  return (
    <PolicyPage
      title="Terms of Service"
      intro="These terms apply to the use of felixbd.com, the Felix Controls Limited website."
      sections={sections}
      summary={summary}
    />
  );
}
