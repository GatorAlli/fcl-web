import { PageCanvas } from "@/components/site/page-canvas";
import { PageIntro } from "@/components/site/page-parts";
import { sitePageMetadata } from "@/lib/site-metadata";

const description =
  "Read the terms for using the Felix Controls Limited website, including information about project enquiries, website content and third-party links.";

export const metadata = sitePageMetadata(
  "/terms",
  "Terms of Service",
  description,
);

export default function TermsOfService() {
  return (
    <PageCanvas id="main">
      <PageIntro
        label="Terms"
        title="Terms of Service"
        text="These terms apply to the use of felixbd.com, the Felix Controls Limited website."
        tone="charcoal"
      />
      <article className="fcl-container fcl-section">
        <div className="profile-copy space-y-10">
          <section>
            <h2 className="mb-3 text-xl font-bold">Website information</h2>
            <p>
              The website presents Felix Controls Limited’s services, solutions,
              products and reference projects. Before specifying equipment or
              making a project decision, confirm suitability, technical details
              and availability with Felix Controls Limited or the relevant
              manufacturer.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Project enquiries</h2>
            <p>
              You can use the website to find our contact details and prepare an
              enquiry draft. Any supply, installation or engineering work is
              subject to the scope and terms agreed separately for that project.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Use of the website</h2>
            <p>
              Use the website lawfully and respect the rights of others. Avoid
              interfering with the site or another visitor’s ability to use it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">
              Materials and external links
            </h2>
            <p>
              Images, logos and documents may belong to Felix Controls Limited
              or to third parties. Obtain any permission needed from the
              relevant rights holder before reproducing or distributing their
              materials.
            </p>
            <p>
              Links to manufacturers and other third parties provide access to
              their own resources. Those websites have their own terms and
              privacy practices.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">
              Questions about these terms
            </h2>
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
          </section>
        </div>
      </article>
    </PageCanvas>
  );
}
