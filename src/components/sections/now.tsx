import Reveal from "@/components/reveal";
import { Section } from "@/components/section";
import { now } from "@/lib/data";

export default function Now() {
  // Rendered on the server at request/build time, so there's no hydration
  // mismatch. In production this freezes until the next deploy — re-deploy
  // when the month rolls over.
  const month = new Date().toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <Section id="now">
      <div className="pb-4 pt-2">
        <p className="text-sm text-muted-foreground">Now</p>
        <h2 className="mt-1 font-serif text-xl text-muted-foreground">{month}</h2>
      </div>

      <div className="border-t border-border">
        {now.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 50}>
            <div className="grid gap-x-8 gap-y-1 border-b border-border py-5 sm:grid-cols-[180px_1fr]">
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}