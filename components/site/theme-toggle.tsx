"use client";

import { useEffect, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("felix-theme-change", callback);
  return () => window.removeEventListener("felix-theme-change", callback);
}

function getDarkMode() {
  try {
    return localStorage.getItem("felix-theme") === "dark";
  } catch {
    return document.documentElement.dataset.theme === "dark";
  }
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getDarkMode, () => false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  function toggle() {
    const theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("felix-theme", theme);
    } catch {
      // The preference still works when browser storage is unavailable.
    }
    window.dispatchEvent(new Event("felix-theme-change"));
  }

  return (
    <button
      className="icon-button theme-toggle"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      aria-pressed={dark}
      onClick={toggle}
    >
      <svg className="moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.6 14.6A9 9 0 0 1 9.4 3.4 9 9 0 1 0 20.6 14.6Z" />
      </svg>
      <svg className="sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
    </button>
  );
}
