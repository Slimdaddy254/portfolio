import Image from "next/image";
import Reveal from "@/components/reveal";
import { Chip } from "@/components/ui";
import { Section } from "@/components/section";
import { links, projects, type Project } from "@/lib/data";
import { ArrowUpRightIcon, GithubIcon } from "@/lib/icons";

const statusColor: Record<string, string> = {
  Live: "bg-emerald-400",
  Active: "bg-emerald-400",
  Published: "bg-emerald-400",
  "In progress": "bg-amber-400",
  Completed: "bg-muted-foreground/50",
};

function Card({ project, index }: { project: Project; index: number }) {
  const accent = project.accent ?? "#8b8b96";

  return (
    <Reveal delay={index * 50} className="h-full">
      <article className="group flex h-full flex-col">
        {/* Cover */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px] border border-border bg-card">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="relative grid size-full place-items-center overflow-hidden">
              {/* Tinted glow, so each card reads as its own thing rather than
                  four identical grey boxes while screenshots are pending. */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(120% 90% at 18% 8%, ${accent}2e, transparent 62%)`,
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.3]"
                style={{
                  backgroundImage: `radial-gradient(${accent}59 1px, transparent 1px)`,
                  backgroundSize: "18px 18px",
                }}
              />
              <span
                className="relative font-serif text-5xl"
                style={{ color: accent }}
              >
                {project.name.charAt(0)}
              </span>
              <span className="absolute bottom-3.5 left-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {project.name}
              </span>
            </div>
          )}
          {project.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium backdrop-blur">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title row */}
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="font-sans text-base font-medium">{project.name}</h3>
          <span className="shrink-0 text-sm text-muted-foreground">{project.year}</span>
        </div>

        {project.status && (
          <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
            <span
              className={`size-1.5 rounded-full ${statusColor[project.status] ?? "bg-muted-foreground/50"}`}
            />
            {project.status}
          </p>
        )}

        <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>

        {(project.href || project.repo) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:bg-card"
              >
                <GithubIcon className="size-3.5" />
                GitHub
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:bg-card"
              >
                Live
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <Section id="work" title="Selected Work">
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Card key={project.name} project={project} index={i} />
        ))}
      </div>

      <Reveal className="mt-12 flex justify-end">
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View All
          <span aria-hidden>→</span>
        </a>
      </Reveal>
    </Section>
  );
}
