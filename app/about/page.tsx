import { AnimatedCopy } from "@/components/site/animated-copy";
import type { Metadata } from "next";
import { PageCanvas } from "@/components/site/page-canvas";
import { ProfileProse } from "@/components/site/profile-prose";
import { profileAbout, profileReasons } from "@/lib/profile-content";
import { DisplayText } from "@/components/site/display-text";
import {
  companyPurpose,
  companyResources,
} from "@/lib/company-data";
import { brochure } from "@/lib/company-profile";

export const metadata: Metadata = {
  title: "About Felix | Felix Controls Limited",
};

export default function About() {
  return (
    <PageCanvas id="main" className="fcl-container about-data-page profile-article">
      
      {/* GRID WRAPPER: items-stretch ensures both columns align perfectly */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
        
        {/* LEFT COLUMN: 100% UNTOUCHED ORIGINAL CONTENT */}
        <div className="lg:col-span-8 flex flex-col">
          <header className="about-opening !mb-0 !pb-0 !min-h-0">
            <p className="section-label">
              <AnimatedCopy>About Felix</AnimatedCopy>
            </p>
            <h1 className="!mb-0 !pb-0">
              <DisplayText text="Who we are ?" />
            </h1>
          </header>
          
          {/* Added [&_p:last-child]:!mb-0 to trim invisible bottom margins so the grid snaps exactly to the text baseline */}
          <section
            className="profile-content-section !mt-4 !pt-0 flex-1 [&_p:last-child]:!mb-0"
            aria-label="Who we are"
          >
            <ProfileProse paragraphs={profileAbout} />
          </section>
        </div>

        {/* RIGHT COLUMN: Circular Picture Holders & Centered Text (Inherits global website fonts natively) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          
          {/* Top Group: Profile 1 */}
          <div className="flex flex-col items-center w-full">
            {/* INVISIBLE HEADER: Forces the first profile to start at the exact same pixel height as the left text */}
            <header className="about-opening !mb-0 !pb-0 !min-h-0 invisible pointer-events-none select-none hidden lg:block w-full">
              <p className="section-label">Spacer</p>
              <h1 className="!mb-0 !pb-0">Spacer</h1>
            </header>

            <div className="flex flex-col items-center w-full lg:mt-4">
              {/* Circular Picture Holder */}
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white flex items-center justify-center mb-6 overflow-hidden shadow-sm">
                <img 
                  src="/ceo_logo.jpg" 
                  alt="ABCDE ABCDE" 
                  className="w-3/4 h-3/4 object-contain" 
                />
              </div>
              {/* Biodata Underneath */}
              <div className="text-center px-2">
                <h3 className="text-2xl font-bold mb-1">ABCDE ABCDE</h3>
                <p className="text-[#22c55e] text-[11px] font-bold tracking-widest uppercase mt-2 mb-4">
                  Managing Director
                </p>
                <p className="text-sm md:text-[15px] leading-relaxed opacity-80">
                  Visionary leader with a decade of industry experience in building management systems.
                </p>
              </div>
            </div>
          </div>

          {/* Spacer for mobile view */}
          <div className="h-16 lg:hidden"></div>

          {/* Bottom Group: Profile 2 (Pinned flush to the exact bottom of the left column's text) */}
          <div className="flex flex-col items-center w-full">
            {/* Circular Picture Holder */}
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white flex items-center justify-center mb-6 overflow-hidden shadow-sm">
              <img 
                src="/ceo_logo.jpg" 
                alt="CDEFG CDEFG" 
                className="w-3/4 h-3/4 object-contain" 
              />
            </div>
            {/* Biodata Underneath */}
            <div className="text-center px-2">
              <h3 className="text-2xl font-bold mb-1">CDEFG CDEFG</h3>
              <p className="text-[#22c55e] text-[11px] font-bold tracking-widest uppercase mt-2 mb-4">
                Managing Director
              </p>
              <p className="text-sm md:text-[15px] leading-relaxed opacity-80 !mb-0">
                Expert in fire detection and security integrations, dedicated to delivering pragmatic engineering solutions.
              </p>
            </div>
          </div>
          
        </div>

      </div>

      {/* --- REMAINDER OF ORIGINAL PAGE CONTENT (100% UNTOUCHED) --- */}
      <section aria-label="Mission, vision and objective">
        {companyPurpose.map(([title, text]) => (
          <div className="about-data-row" key={title}>
            <h2>
              <AnimatedCopy>{title}</AnimatedCopy>
            </h2>
            <p>
              <AnimatedCopy>{text}</AnimatedCopy>
            </p>
          </div>
        ))}
      </section>
      <section className="about-data-row">
        <h2>
          <AnimatedCopy>Resources and capabilities</AnimatedCopy>
        </h2>
        <ul className="resource-facts">
          {companyResources.map((fact) => (
            <li key={fact}>
              <AnimatedCopy>{fact}</AnimatedCopy>
            </li>
          ))}
        </ul>
      </section>
      <section className="about-data-row">
        <h2>
          <AnimatedCopy>Reasons to Choose Felix</AnimatedCopy>
        </h2>
        <div className="prose about-team-statement">
          {profileReasons.map((reason) => (
            <div key={reason.title}>
              <h3><AnimatedCopy>{reason.title}</AnimatedCopy></h3>
              <ProfileProse paragraphs={[reason.text]} />
            </div>
          ))}
        </div>
      </section>
      <section className="about-data-row profile-statement">
        <h2>
          <AnimatedCopy>Profile statement</AnimatedCopy>
        </h2>
        <figure>
          <blockquote>
            <AnimatedCopy>
              “One of the leading system integrators in Bangladesh”
            </AnimatedCopy>
          </blockquote>
        </figure>
      </section>
      <section className="about-data-row profile-download-row">
        <h2>
          <AnimatedCopy>Download</AnimatedCopy>
        </h2>
        <div>
          <a href={brochure} download className="fcl-button">
            Company Profile 2025 (PDF)
          </a>
        </div>
      </section>
    </PageCanvas>
  );
}