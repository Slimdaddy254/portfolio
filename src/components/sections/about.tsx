import Image from "next/image";
import Reveal from "@/components/reveal";
import { Chip } from "@/components/ui";
import { Section } from "@/components/section";
import { certifications, education, intro, profile } from "@/lib/data";

export default function About() {
  return (
    <>
      <Section id="about">
        <div className="pb-4 pt-2">
          <p className="text-sm text-muted-foreground">About</p>
          <h2 className="mt-1 font-serif text-xl text-muted-foreground">Me</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:gap-10">
          <Reveal>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] border border-border bg-card">
              <Image
                src={profile.portrait ?? profile.avatar}
                alt={profile.name}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="font-script text-3xl leading-tight">{profile.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/90">
              {intro.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <h2 className="pb-6 pt-14 font-serif text-xl text-muted-foreground sm:pt-16">
          Education
        </h2>

        <div className="border-t border-border">
          {education.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 60}>
              <div className="border-b border-border py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="text-base font-medium">{entry.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{entry.org}</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground">{entry.period}</p>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {entry.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-muted-foreground">Certifications</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="rounded-[10px] border border-border p-4 transition-colors hover:bg-card"
              >
                <p className="text-sm font-medium">{cert.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer} · {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}
