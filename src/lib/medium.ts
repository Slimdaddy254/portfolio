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
};

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
      },
    ];
  });
}

function pick(xml: string, tag: string): string | null {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match?.[1]?.trim() ?? null;
}

function decodeCdata(value: string): string {
  return value
    .replace(/^\s*<!\[CDATA\[/, "")
    .replace(/\]\]>\s*$/, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
