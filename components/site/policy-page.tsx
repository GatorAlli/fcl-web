import Link from "next/link";
import type { ReactNode } from "react";
import { PageCanvas } from "./page-canvas";
import { PageIntro } from "./page-parts";
import styles from "./policy-page.module.css";

const policies = [
  { href: "/privacy/", title: "Privacy Policy" },
  { href: "/terms/", title: "Terms of Service" },
];

export type PolicySection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function PolicyPage({
  title,
  intro,
  sections,
  summary,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
  summary: string[];
}) {
  return (
    <PageCanvas id="main">
      <PageIntro
        label={title}
        title={title}
        text={intro}
        tone="charcoal"
        navigation={
          <nav className={styles.tabs} aria-label="Policy pages">
            {policies.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                aria-current={policy.title === title ? "page" : undefined}
              >
                {policy.title}
              </Link>
            ))}
          </nav>
        }
      />
      <div className={`fcl-container ${styles.layout}`}>
        <nav className={styles.contents} aria-labelledby="policy-contents">
          <p id="policy-contents">On this page</p>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <article className={`profile-copy ${styles.article}`}>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <h2 id={`${section.id}-heading`}>{section.title}</h2>
              {section.body}
            </section>
          ))}
        </article>
        <aside className={styles.summary} aria-labelledby="policy-summary">
          <h2 id="policy-summary">The short version</h2>
          <ul>
            {summary.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className={styles.note}>A summary only. The full text applies.</p>
          <p className={styles.contact}>
            Questions? Email{" "}
            <a href="mailto:info@felixbd.com">info@felixbd.com</a>
          </p>
        </aside>
      </div>
    </PageCanvas>
  );
}
