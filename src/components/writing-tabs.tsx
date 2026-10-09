"use client";

import { useState } from "react";
import Reveal from "@/components/reveal";
import { GROUPS, groupOf, type Post } from "@/lib/medium";
import { ArrowUpRightIcon } from "@/lib/icons";

/**
 * The writing list, split into tabs by post topic.
 *
 * Tabs are buttons rather than links because every panel is already in the DOM
 * — switching shelves is a state change, not navigation, so it must not scroll
 * the page or push a history entry.
 */
export default function WritingTabs({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<string>(GROUPS[0].id);

  const grouped = GROUPS.map((group) => ({
    ...group,
    posts: posts.filter((post) => groupOf(post.categories) === group.id),
  }));

  // A group can be empty if every post moved; keep the first non-empty tab
  // selected rather than showing a blank panel.
  const current = grouped.find((g) => g.id === active) ?? grouped.find((g) => g.posts.length > 0) ?? grouped[0];
  if (!current) return null;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Writing categories"
        className="-mx-1 flex flex-wrap gap-1.5 border-b border-border px-1 pb-3"
      >
        {grouped.map((group) => {
          const isActive = group.id === current.id;
          return (
            <button
              key={group.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              disabled={group.posts.length === 0}
              onClick={() => setActive(group.id)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              {group.label}
              <span className={`ml-1.5 text-xs ${isActive ? "opacity-60" : "opacity-50"}`}>
                {group.posts.length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="border-b border-border">
        {current.posts.map((post, i) => (
          <Reveal key={post.url} delay={i * 40}>
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-4 border-b border-border py-5 transition-colors hover:bg-card sm:py-6"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium transition-colors group-hover:text-muted-foreground">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {post.displayDate}
                  {post.minutes ? ` · ${post.minutes} min read` : ""}
                </p>
              </div>
              <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}