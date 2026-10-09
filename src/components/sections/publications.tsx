import Reveal from "@/components/reveal";
import { Section } from "@/components/section";
import { publications } from "@/lib/data";
import { ArrowUpRightIcon } from "@/lib/icons";

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      {publications.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Nothing published yet — talks and articles are listed here as they land.
        </p>
      ) : (
        <div className="border-t border-border">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 40}>
              <div className="group flex items-start gap-4 border-b border-border py-5 transition-colors hover:bg-card sm:py-6">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-medium transition-colors group-hover:text-muted-foreground">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.venue}
                    <span className="mx-2 text-border-strong">·</span>
                    {pub.year}
                  </p>
                  {pub.detail && (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {pub.detail}
                    </p>
                  )}
                </div>
                {pub.href && (
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Open ${pub.title}`}
                    className="mt-1 shrink-0"
                  >
                    <ArrowUpRightIcon className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}