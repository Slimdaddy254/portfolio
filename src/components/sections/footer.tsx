import Reveal from "@/components/reveal";
import { links, profile } from "@/lib/data";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  MediumIcon,
  ResumeIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/lib/icons";

const platforms = [
  { href: links.github, label: "GitHub", Icon: GithubIcon },
  { href: links.twitter, label: "X", Icon: TwitterIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: links.medium, label: "Medium", Icon: MediumIcon },
  { href: links.youtube, label: "YouTube", Icon: YoutubeIcon },
];

const contactItems = [
  { href: `mailto:${profile.email}`, label: profile.email, Icon: MailIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {platforms.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-card"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Get in touch
              </p>
              <ul className="mt-4 space-y-2.5">
                {contactItems.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="size-4" />
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={profile.resume}
                    className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ResumeIcon className="size-4" />
                    Download résumé
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>Designed &amp; built by {profile.name}</p>
          <p className="mt-1">
            &copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
