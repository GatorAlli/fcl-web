"use client";

import Link from "next/link";
import {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { SiteAnalytics, stopSiteAnalytics } from "./site-analytics";
import styles from "./analytics-consent.module.css";

type ConsentChoice = "accepted" | "rejected";

const preferenceKey = "felix-analytics-consent-v1";
const preferenceListeners = new Set<() => void>();
let sessionChoice: ConsentChoice | undefined;

function readChoice() {
  if (sessionChoice) return sessionChoice;

  try {
    if (window.sessionStorage.getItem(preferenceKey) === "rejected") {
      return "rejected";
    }
  } catch {
    // The first-party preference may be unavailable in restricted browsers.
  }

  try {
    const choice = window.localStorage.getItem(preferenceKey);
    return choice === "accepted" || choice === "rejected" ? choice : null;
  } catch {
    return null;
  }
}

function subscribe(listener: () => void) {
  preferenceListeners.add(listener);

  function onStorage(event: StorageEvent) {
    if (event.key !== null && event.key !== preferenceKey) return;

    sessionChoice = undefined;
    if (readChoice() !== "accepted") stopSiteAnalytics();
    listener();
  }

  window.addEventListener("storage", onStorage);
  return () => {
    preferenceListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function saveChoice(choice: ConsentChoice) {
  sessionChoice = choice;

  try {
    window.localStorage.setItem(preferenceKey, choice);

    try {
      window.sessionStorage.removeItem(preferenceKey);
    } catch {
      // The persisted choice is still available.
    }
  } catch {
    if (choice === "rejected") {
      // Keep the withdrawal across the reload if local storage is read-only.
      try {
        window.sessionStorage.setItem(preferenceKey, choice);
      } catch {
        // The in-memory choice still governs the current document.
      }
    }
  }

  if (choice === "rejected") stopSiteAnalytics();
  preferenceListeners.forEach((listener) => listener());
}

const preferencesContext = createContext<{
  open: (trigger: HTMLButtonElement) => void;
  visible: boolean;
} | null>(null);

export function FooterPrivacyLinks() {
  const preferences = useContext(preferencesContext);

  return (
    <div className={`fcl-container ${styles.footerLinks}`}>
      <nav className={styles.policies} aria-label="Website policies">
        <Link href="/privacy/">Privacy Policy</Link>
        <span className={styles.separator} aria-hidden="true" />
        <Link href="/terms/">Terms of Service</Link>
      </nav>
      {preferences && (
        <>
          <span
            className={`${styles.separator} ${styles.settingsSeparator}`}
            aria-hidden="true"
          />
          <button
            type="button"
            className={styles.settings}
            aria-controls="analytics-consent"
            aria-expanded={preferences.visible}
            onClick={(event) => preferences.open(event.currentTarget)}
          >
            Cookie Settings
          </button>
        </>
      )}
    </div>
  );
}

export function AnalyticsConsentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const choice = useSyncExternalStore(subscribe, readChoice, () => undefined);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const opener = useRef<HTMLButtonElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const visible = choice === null || preferencesOpen;

  useEffect(() => {
    if (preferencesOpen) title.current?.focus();
  }, [preferencesOpen]);

  function openPreferences(trigger: HTMLButtonElement) {
    opener.current = trigger;
    setPreferencesOpen(true);
  }

  function closePreferences() {
    setPreferencesOpen(false);
    opener.current?.focus();
    opener.current = null;
  }

  function choose(nextChoice: ConsentChoice) {
    saveChoice(nextChoice);
    closePreferences();
  }

  return (
    <preferencesContext.Provider value={{ open: openPreferences, visible }}>
      {children}
      <aside
        id="analytics-consent"
        aria-labelledby="analytics-consent-title"
        className={styles.notice}
        hidden={!visible}
        onKeyDown={(event) => {
          if (event.key === "Escape" && preferencesOpen && choice !== null) {
            closePreferences();
          }
        }}
      >
        <div>
          <h2 id="analytics-consent-title" ref={title} tabIndex={-1}>
            {preferencesOpen ? "Cookie Settings" : "Optional analytics"}
          </h2>
          <p>
            Help us understand visits and improve site performance by allowing
            Google Analytics and Cloudflare Web Analytics. See our{" "}
            <Link href="/privacy/">Privacy Policy</Link>.
          </p>
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={() => choose("accepted")}>
            Accept analytics
          </button>
          <button type="button" onClick={() => choose("rejected")}>
            Reject analytics
          </button>
        </div>
      </aside>
      {choice === "accepted" && (
        <Suspense fallback={null}>
          <SiteAnalytics />
        </Suspense>
      )}
    </preferencesContext.Provider>
  );
}
