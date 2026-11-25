"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();
const cloudflareToken =
  process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN?.trim();

const enquiryEvents = new Set([
  "contact_email_click",
  "contact_phone_click",
  "enquiry_draft_click",
  "brochure_download_click",
]);

type GoogleTag = (...args: unknown[]) => void;
type AnalyticsWindow = Window & {
  dataLayer?: IArguments[];
  gtag?: GoogleTag;
};

const deniedConsent = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

let googleStarted = false;
let cloudflareStarted = false;
let analyticsStopped = false;

function startCloudflare(token: string) {
  if (cloudflareStarted) return;

  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.cfBeacon = JSON.stringify({ token });
  script.referrerPolicy = "origin";
  cloudflareStarted = true;
  document.head.append(script);
}

function recordPageView(
  id: string,
  context: { page_location: string; page_referrer: string },
) {
  const browser: AnalyticsWindow = window;
  const dataLayer = (browser.dataLayer ??= []);
  const gtag = (browser.gtag ??= function () {
    // The Google tag expects its standard queue of Arguments objects.
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  });

  if (!googleStarted) {
    gtag("consent", "default", deniedConsent);
    gtag("consent", "update", { analytics_storage: "granted" });
    gtag("js", new Date());
    gtag("config", id, {
      ...context,
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.async = true;
    script.referrerPolicy = "origin";
    googleStarted = true;
    document.head.append(script);
  } else {
    gtag("config", id, { ...context, update: true, send_page_view: false });
  }

  gtag("event", "page_view", { ...context, page_title: document.title });
}

function analyticsHost() {
  return (
    process.env.NODE_ENV === "production" &&
    window.location.origin === "https://felixbd.com"
  );
}

export function stopSiteAnalytics() {
  if ((!googleStarted && !cloudflareStarted) || analyticsStopped) return;

  analyticsStopped = true;
  if (googleStarted && measurementId) {
    // Google's documented per-property opt-out flag.
    Object.assign(window, { [`ga-disable-${measurementId}`]: true });
    const cookies = ["_ga", `_ga_${measurementId.replace(/^G-/, "")}`];

    for (const cookie of cookies) {
      const expired = `${cookie}=; Max-Age=0; Path=/; Secure; SameSite=Lax`;
      document.cookie = expired;
      document.cookie = `${expired}; Domain=felixbd.com`;
    }
  }

  // The Cloudflare beacon has no supported teardown API.
  window.location.reload();
}

export function SiteAnalytics() {
  const pathname = usePathname();
  const previousPage = useRef<string>(null);

  useEffect(() => {
    if (!analyticsHost() || analyticsStopped) return;
    if (cloudflareToken) startCloudflare(cloudflareToken);
    if (!measurementId || !pathname) return;

    const page = new URL(window.location.origin);
    page.pathname = pathname;
    if (previousPage.current === page.href) return;

    recordPageView(measurementId, {
      page_location: page.href,
      page_referrer:
        previousPage.current ??
        (document.referrer ? new URL(document.referrer).origin : ""),
    });
    previousPage.current = page.href;
  }, [pathname]);

  useEffect(() => {
    if (!analyticsHost() || !measurementId) return;

    function recordIntent(event: MouseEvent) {
      if (analyticsStopped || !(event.target instanceof Element)) return;

      const name = event.target
        .closest("a[data-analytics-event]")
        ?.getAttribute("data-analytics-event");
      if (!name || !enquiryEvents.has(name)) return;

      const browser: AnalyticsWindow = window;
      browser.gtag?.("event", name);
    }

    document.addEventListener("click", recordIntent);
    return () => document.removeEventListener("click", recordIntent);
  }, []);

  return null;
}
