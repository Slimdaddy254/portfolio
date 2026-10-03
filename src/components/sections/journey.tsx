"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/reveal";
import { Chip } from "@/components/ui";
import { Section } from "@/components/section";
import { timeline } from "@/lib/data";
import { ChevronIcon } from "@/lib/icons";

export default function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="journey" title="Experience">
      <div className="border-t border-border">
        {timeline.map((entry, i) => {
          const id = `${entry.period}-${entry.title}`;
          const isOpen = open === id;

          return (
            <Reveal key={id} delay={i * 50}>
              <div className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6"
                >
                  {/* Circular mark: org logo if provided, else first letter. */}
                  {entry.logo ? (
                    <Image
                      src={entry.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="size-11 shrink-0 rounded-full border border-border object-cover"
                    />
                  ) : (
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border font-serif text-lg text-muted-foreground">
                      {entry.org.charAt(0)}
                    </span>
                  )}

                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-base font-medium sm:text-lg">
                      {entry.title}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-muted-foreground">
                      {entry.org}
                    </span>
                  </span>

                  <span className="hidden shrink-0 text-sm text-muted-foreground sm:block">
                    {entry.period}
                  </span>

                  <ChevronIcon
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pl-0 sm:pl-[68px]">
                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {entry.detail}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>
                    {entry.href && (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-4 inline-block text-sm text-foreground underline underline-offset-4"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
