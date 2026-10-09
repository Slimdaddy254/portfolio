"use client";

import { useCallback, useRef } from "react";
import { cal } from "@/lib/data";

/** Cal injects this global; the queue it buffers is how the API is called. */
type CalApi = (
  action: "modal" | "closeModal",
  options: { calLink: string; config?: Record<string, string> },
) => void;

declare global {
  interface Window {
    Cal?: CalApi & { q?: unknown[] };
  }
}

const EMBED_SRC = "https://assets.cal.com/embed/embed.js";

/**
 * Injects Cal's embed script once and resolves when its global is ready.
 *
 * Cal defines `window.Cal` immediately and buffers calls made before the script
 * finishes loading, so there is no load event to wait for — but we still wait a
 * tick so a slow or blocked request surfaces as a failure we can fall back from.
 */
let embedPromise: Promise<CalApi | null> | null = null;

function loadEmbed(): Promise<CalApi | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (embedPromise) return embedPromise;

  embedPromise = new Promise<CalApi | null>((resolve) => {
    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;

    script.onload = () => {
      // A tick of delay: the global is defined by the script itself, so this
      // only guards against a partially-initialised bundle.
      setTimeout(() => resolve(typeof window.Cal === "function" ? window.Cal : null), 0);
    };

    // Ad blockers and offline both land here — the caller falls back to cal.com.
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });

  return embedPromise;
}

/**
 * The visitor's current theme, read at the moment the modal opens.
 *
 * The widget reads `theme` once when it initialises, so a value baked in at
 * module scope would strand a dark widget on a light page. Reading late means
 * the modal matches whatever the toggle last set.
 */
function currentTheme(): "dark" | "light" {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

/**
 * "Book a call" button that opens Cal's booking modal over the page.
 *
 * Degrades to a plain link to cal.com if the embed script can't load, so the
 * booking path never dead-ends on an ad blocker.
 */
export default function BookingButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Set synchronously on click so a double-click can't queue two modals.
  const opening = useRef(false);

  const open = useCallback(async () => {
    if (opening.current) return;
    opening.current = true;

    try {
      const api = await loadEmbed();
      if (!api) {
        window.open(cal.url, "_blank", "noopener,noreferrer");
        return;
      }

      api("modal", {
        calLink: cal.link,
        config: { theme: currentTheme() },
      });
    } finally {
      // Releasing on the next tick: the modal is open by then, and clearing
      // synchronously would let a rapid second click queue another one.
      setTimeout(() => {
        opening.current = false;
      }, 0);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-chip ${className}`}
    >
      {children}
    </button>
  );
}