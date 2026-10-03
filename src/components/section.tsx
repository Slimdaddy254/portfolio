import Reveal from "@/components/reveal";

/**
 * Section shell matching the reference: a hairline top rule, a small muted
 * heading, and a soft vertical fade between blocks.
 */
export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative z-10 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        {title && (
          <Reveal>
            <h2 className="pb-6 pt-14 font-serif text-xl text-muted-foreground sm:pt-16">
              {title}
            </h2>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/** Full-width hairline that respects the container width. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${className}`}>
      <div className="border-t border-border" />
    </div>
  );
}
