import Image from "next/image";
import Reveal from "@/components/reveal";
import ThemeToggle from "@/components/theme-toggle";
import { intro, links, profile } from "@/lib/data";
import {
  GithubIcon,
  LinkedInIcon,
  ResumeIcon,
  TwitterIcon,
} from "@/lib/icons";

/** Header shows only the essentials; the footer carries the full set. */
const socials = [
  { href: links.github, label: "GitHub", Icon: GithubIcon },
  { href: links.twitter, label: "X", Icon: TwitterIcon },
  ...(profile.linkedin ? [{ href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon }] : []),
  ...(profile.resume ? [{ href: profile.resume, label: "Resume", Icon: ResumeIcon }] : []),
];

export default function Hero({ banner }: { banner?: string }) {
  return (
    <header className="relative z-10">
      {/* Banner spans the full container width and starts at the very top of the
          page — no padding above it. */}
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
          {banner ? (
            <Image
              src={banner}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          ) : (
            <div className="size-full bg-card" />
          )}
          {/* Dark scrim so the band reads as a photo in both themes instead of
              dissolving into the page. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-5 px-6 text-center">
            <p className="mx-auto max-w-xl font-serif text-base italic leading-snug text-white/90 sm:text-xl">
              {profile.motto}
            </p>
            {profile.mottoAuthor && (
              <p className="mt-2 text-xs text-white/60">— {profile.mottoAuthor}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        {/* Avatar pulled up over the banner's bottom edge. relative/z-10 is
            required: the banner is positioned, so without it the banner paints
            over this row. */}
        <div className="relative z-10 -mt-12 flex flex-col gap-6 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={112}
            height={112}
            priority
            className="size-24 rounded-full object-cover ring-2 ring-white/90 sm:size-28"
          />
        </div>

        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h1 className="font-script text-[2.75rem] leading-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {profile.role}
              <span className="mx-2 text-border-strong">·</span>
              {profile.location}
            </p>
          </Reveal>

          <div className="flex shrink-0 items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                title={label}
                className="grid size-9 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:bg-card hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-10 space-y-4 pb-16 sm:mt-12 sm:pb-20">
          {intro.intro.map((p) => (
            <p key={p} className="max-w-3xl text-[15px] leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>
      </div>
    </header>
  );
}
