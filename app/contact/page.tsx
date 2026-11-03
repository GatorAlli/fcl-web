import "./contact.css";
import { AnimatedCopy } from "@/components/site/animated-copy";
import { PageCanvas } from "@/components/site/page-canvas";
import { Suspense } from "react";
import type { Metadata } from "next";
import { DisplayText } from "@/components/site/display-text";
import { EnquiryForm } from "@/components/site/enquiry-form";
export const metadata: Metadata = { title: "Contact | Felix Controls Limited" };
export default function Contact() {
  return (
    <PageCanvas id="main" className="contact-page">
      <div className="contact-continuous-layout">
        <section
          className="contact-dark-column"
          aria-labelledby="contact-heading"
        >
          <header className="contact-masthead">
            <h1 id="contact-heading">
              <DisplayText text="Let's talk" />
              <br />
              <DisplayText text="engineering" />
            </h1>
            <p>
              <AnimatedCopy>
                Tell us about your building, your systems and what needs to work
                better.
              </AnimatedCopy>
            </p>
          </header>
          <div className="contact-direct">
            <p className="contact-channel-label">
              <AnimatedCopy>Start a conversation</AnimatedCopy>
            </p>
            <a className="contact-email" href="mailto:info@felixbd.com">
              <AnimatedCopy>info@felixbd.com</AnimatedCopy>
            </a>
            <a className="contact-phone" href="tel:+8801713080002">
              <AnimatedCopy>+880 1713080002</AnimatedCopy>
            </a>
            <dl className="contact-office-data">
              <div>
                <dt>
                  <AnimatedCopy>Head office</AnimatedCopy>
                </dt>
                <dd>
                  <address>
                    <AnimatedCopy>
                      113/B, Tejgaon Industrial Area
                      <br />
                      Dhaka 1208, Bangladesh
                    </AnimatedCopy>
                  </address>
                  <a
                    className="contact-map-link"
                    href="https://www.google.com/maps/search/?api=1&query=113%2FB%20Tejgaon%20Industrial%20Area%20Dhaka%201208"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimatedCopy>View location</AnimatedCopy>
                  </a>
                </dd>
              </div>
              <div>
                <dt>
                  <AnimatedCopy>Office numbers</AnimatedCopy>
                </dt>
                <dd className="contact-office-phones">
                  <a href="tel:+8802222240072">
                    <AnimatedCopy>+880 2 222240072</AnimatedCopy>
                  </a>
                  <a href="tel:+8809678777874">
                    <AnimatedCopy>+880 9678777874</AnimatedCopy>
                  </a>
                  <a href="tel:+8802222240073">
                    <AnimatedCopy>+880 2 222240073</AnimatedCopy>
                  </a>
                </dd>
              </div>
              <div>
                <dt>
                  <AnimatedCopy>Service</AnimatedCopy>
                </dt>
                <dd>
                  <AnimatedCopy>24/7 service support arrangement</AnimatedCopy>
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <div className="contact-form-surface">
          <Suspense
            fallback={
              <div className="contact-form-loading" role="status">
                <h2>Project enquiry</h2>
                <p>Loading enquiry form…</p>
              </div>
            }
          >
            <EnquiryForm />
          </Suspense>
        </div>
      </div>
    </PageCanvas>
  );
}
