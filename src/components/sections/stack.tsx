import Reveal from "@/components/reveal";
import { Section } from "@/components/section";
import TechLogo from "@/components/tech-logo";
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <Section id="stack" title="Stack I use">
      <Reveal>
        <p className="pb-8 text-sm text-muted-foreground">
          Technologies I work with to build products that solve real problems
        </p>
      </Reveal>

      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {stack.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 40}>
            <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map(({ label, icon }) => (
                <li
                  key={label}
                  className="group inline-flex items-center gap-1.5 rounded-lg bg-chip py-1 pl-1.5 pr-2.5 text-sm text-foreground/85 transition-colors hover:bg-card"
                >
                  {icon && <TechLogo name={icon} />}
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}