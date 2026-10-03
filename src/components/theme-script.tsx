"use client";

/**
 * Inline script that runs synchronously during HTML parsing, so the stored theme
 * is applied before the first paint and the page never flashes.
 *
 * Must be a Client Component: `type` then evaluates to text/javascript during
 * SSR (so the browser executes it while parsing) and text/plain on the client.
 * React only warns about rendered <script> tags when the type is a JavaScript
 * MIME type — isScriptDataBlock() treats anything else as inert — and
 * suppressHydrationWarning covers the resulting type mismatch.
 *
 * See: next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
 */
export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}