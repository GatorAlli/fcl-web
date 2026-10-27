import { BrandFilter } from "@/components/site/brand-filter";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Company } from "@/components/site/company";
import { Services } from "@/components/site/services";
import { Projects } from "@/components/site/projects";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Dialogs } from "@/components/site/dialogs";

export default function Home() {
  return (
    <>
      <BrandFilter />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero />
        <Company />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <button className="back-top icon-button" aria-label="Back to top" hidden>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m5 15 7-7 7 7" />
        </svg>
      </button>
      <Dialogs />
    </>
  );
}
