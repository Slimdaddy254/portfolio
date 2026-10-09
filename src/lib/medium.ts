import { cache } from "react";

export type Post = {
  title: string;
  url: string;
  /** ISO date, e.g. "2026-07-11". */
  date: string;
  /** Pre-formatted for display, e.g. "Jul 11, 2026". */
  displayDate: string;
  /** Minutes, from the feed's read-time metadata when present. */
  minutes?: number;
  /** Slugs of the Medium tags on the post. */
  categories: string[];
};

/** The three shelves Writing is split across. */
export type Group = "tech" | "mind" | "ideas";

export const GROUPS: { id: Group; label: string }[] = [
  { id: "tech", label: "Technology" },
  { id: "mind", label: "Life & Mind" },
  { id: "ideas", label: "Ideas & History" },
];

/*
 * Medium tags mapped onto the groups. First match wins, so order matters: a
 * post tagged both `software-development` and `productivity` lands in
 * Technology.
 *
 * "ideas" is deliberately absent — it's the fallback. Anything unmatched,
 * including posts Medium returns with no tags at all, lands there.
 */
const GROUP_TAGS: Record<Exclude<Group, "ideas">, string[]> = {
  tech: [
    "software-engineering",
    "software-development",
    "artificial-intelligence",
    "ai-agent",
    "open-source",
    "programming",
    "web-development",
    "history-of-technology",
    "technology",
  ],
  mind: [
    "productivity",
    "lifestyle",
    "healthy-lifestyle",
    "mental-health",
    "work-life-balance",
    "thinking",
    "intellect",
    "reflection",
    "reflections",
    "literature",
    "memoir",
  ],
};

/** Buckets a post's tags into a group, defaulting to "ideas". */
export function groupOf(categories: string[]): Group {
  for (const group of ["tech", "mind"] as const) {
    if (categories.some((tag) => GROUP_TAGS[group].includes(tag))) return group;
  }
  return "ideas";
}

const FEED = "https://medium.com/feed/@shadymutethia";

/**
 * Reads the public Medium RSS feed at build time.
 *
 * Cached with React's `cache` so it runs once per build rather than per
 * component. The feed requires no API key. A failure here must not take the
 * page down, so callers get an empty list and render a fallback.
 */
export const getPosts = cache(async (limit = 6): Promise<Post[]> => {
  try {
    const res = await fetch(FEED, {
      // Revalidate hourly; the feed changes only when a new post is published.
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    return parseFeed(xml, limit);
  } catch {
    return [];
  }
});

function parseFeed(xml: string, limit: number): Post[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  return items.slice(0, limit).flatMap((item) => {
    const title = pick(item, "title");
    const rawUrl = pick(item, "link");
    const pubDate = pick(item, "pubDate");
    if (!title || !rawUrl || !pubDate) return [];

    const parsed = new Date(pubDate);
    if (Number.isNaN(parsed.getTime())) return [];

    // Strip Medium's ?source=rss-... tracking suffix.
    const url = rawUrl.split("?")[0];
    const minutes = Number(pick(item, "content:encoded")?.match(/(\d+)\s*min read/i)?.[1]);

    return [
      {
        title: decodeCdata(title),
        url,
        date: parsed.toISOString().slice(0, 10),
        displayDate: parsed.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        }),
        ...(Number.isFinite(minutes) && minutes > 0 ? { minutes } : {}),
        categories: pickAll(item, "category").map(decodeCdata),
      },
    ];
  });
}

function pick(xml: string, tag: string): string | null {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match?.[1]?.trim() ?? null;
}

/** Every occurrence of a tag — Medium repeats `<category>` once per tag. */
function pickAll(xml: string, tag: string): string[] {
  return [...xml.matchAll(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "g"))]
    .map((match) => match[1].trim())
    .filter(Boolean);
}

function decodeCdata(value: string): string {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}