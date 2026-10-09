import Reveal from "@/components/reveal";
import { Section } from "@/components/section";
import WritingTabs from "@/components/writing-tabs";
import { getPosts } from "@/lib/medium";
import { links } from "@/lib/data";
import { MediumIcon } from "@/lib/icons";

export default async function Writing() {
  const posts = await getPosts(6);

  return (
    <Section id="writing" title="Writing">
      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Posts are fetched from Medium at build time — none are available right now.
        </p>
      ) : (
        <WritingTabs posts={posts} />
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
