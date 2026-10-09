import BookingButton from "@/components/booking";
import Reveal from "@/components/reveal";
import { Section } from "@/components/section";
import ThemeAvatar from "@/components/theme-avatar";
import { cal, contact, profile } from "@/lib/data";
import { CalendarIcon } from "@/lib/icons";

export default function Contact() {
  return (
    <>
      {/* Closing CTA */}
      <Section className="pb-4 pt-16 sm:pt-20">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="font-serif text-xl italic text-muted-foreground sm:text-2xl">
              {contact.closer}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-chip"
              >
                <ThemeAvatar decorative sizes="24px" className="size-6" />
                {contact.ctaLabel}
              </a>

              <BookingButton>
                <CalendarIcon className="size-4" />
                {cal.label}
              </BookingButton>
            </div>

            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              {contact.bookingNote}
            </p>

            <figure className="mt-14 w-full max-w-sm rounded-[10px] border border-border p-8 text-center">
              <blockquote className="font-serif text-lg italic text-foreground/90">
                {contact.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                — {contact.quoteAuthor}
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </Section>

      <Section id="contact" className="pb-16 pt-4 sm:pb-20">
        <Reveal>
          <p className="text-sm text-muted-foreground">{contact.heading}</p>
          <p className="mt-1 font-serif text-xl text-muted-foreground">{contact.sub}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            I&apos;m currently taking on freelance projects and open to full-stack roles.
            Happy to take an MVP from idea to deployed, or to plug into an existing team
            and own a piece of the stack. Based in Nairobi, UTC+3, and comfortable
            working across time zones.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
