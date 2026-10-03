/**
 * The two dashed vertical rules that run the length of the page at the content
 * edges. Fixed, pointer-events-none, and hidden on narrow screens where the
 * content is flush anyway.
 */
export function GuideLines() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 hidden sm:block">
      <div className="relative mx-auto h-full max-w-5xl">
        <div className="absolute inset-y-0 left-0 border-l border-dashed border-guide" />
        <div className="absolute inset-y-0 right-0 border-r border-dashed border-guide" />
      </div>
    </div>
  );
}

/** Small translucent pill used for tech tags. */
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg bg-chip px-2 py-0.5 text-[11px] leading-5 text-muted-foreground">
      {children}
    </span>
  );
}

/** Outlined rounded-full link button. */
export function PillLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-card ${className}`}
    >
      {children}
    </a>
  );
}
