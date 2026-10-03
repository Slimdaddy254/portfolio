import Reveal from "@/components/reveal";
import { Section } from "@/components/section";
import { getPosts } from "@/lib/medium";
import { links } from "@/lib/data";
import { ArrowUpRightIcon, MediumIcon } from "@/lib/icons";

export default async function Writing() {
  const posts = await getPosts(6);

  return (
    <Section id="writing" title="Writing">
      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Posts are fetched from Medium at build time — none are available right now.
        </p>
      ) : (
        <div className="border-t border-border">
          {posts.map((post, i) => (
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
      )}

      <Reveal className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={links.medium}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-card"
        >
          <MediumIcon className="size-4" />
          All writing on Medium
        </a>
        <span className="text-sm text-muted-foreground">
          {posts.length > 0 ? `${posts.length} recent posts` : "Follow for new posts"}
        </span>
      </Reveal>
    </Section>
  );
}
