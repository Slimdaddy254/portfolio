"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/lib/icons";

type Theme = "light" | "dark";

const isTheme = (value: string | null): value is Theme =>
  value === "light" || value === "dark";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  return isTheme(current) ? current : "dark";
}

// Matches the data-theme rendered server-side, so hydration is consistent.
function getServerSnapshot(): Theme {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // In development, Strict Mode's remount resets <html> to only the attributes
  // it manages from JSX, discarding data-theme as the inline script set it.
  // Re-apply from the stored value before paint. Idempotent in production.
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (isTheme(stored)) document.documentElement.setAttribute("data-theme", stored);
    } catch {
      // Storage unavailable — leave whatever the inline script applied.
    }
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or storage disabled — the theme still applies this visit.
    }
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur transition-colors hover:bg-card"
    >
      {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </button>
  );
}