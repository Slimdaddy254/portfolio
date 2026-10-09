/**
 * The site's canonical origin.
 *
 * Every absolute URL that leaves the build — canonical links, og:image,
 * the sitemap, JSON-LD — has to point at the same place, so they all read this
 * rather than each re-deriving an origin. `SITE_URL` in the Workers Builds
 * environment overrides it; the literal default keeps a fresh clone correct
 * without any configuration.
 */
export const SITE_URL = (
  process.env.SITE_URL ?? "https://shadrackmutethia.com"
).replace(/\/$/, "");