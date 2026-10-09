import { nav } from "@/lib/data";

/**
 * In-page section menu.
 *
 * A plain row of anchors rather than a scroll-spy: every target is on one long
 * page, so a click either lands on the section or the page doesn't have it yet.
 * Tracking the active section would mean an IntersectionObserver and layout
 * reads on every scroll — a lot of machinery for five links.
 *
 * Not sticky: the page is a single column of short sections, so a pinned bar
 * would sit over the content it links to.
 */
export default function NavMenu() {
  return (
    <nav aria-label="Sections" className="mt-10 border-t border-border pt-6">
      <ul className="flex flex-wrap gap-2">
        {nav.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="inline-flex items-center rounded-full border border-border bg-chip px-4 py-2 text-sm font-medium text-foreground shadow-[0_1px_2px_oklch(0_0_0/0.04)] transition-[color,background-color,border-color,box-shadow,transform]! duration-200! hover:-translate-y-px hover:border-border-strong hover:bg-card hover:shadow-[0_6px_16px_oklch(0_0_0/0.08)] focus-visible:-translate-y-px focus-visible:border-border-strong focus-visible:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong active:translate-y-0"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}