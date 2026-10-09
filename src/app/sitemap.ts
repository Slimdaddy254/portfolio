import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * One page, so the sitemap is the site root. `lastModified` is left to the
 * build rather than hardcoded — a stale date is worse than none.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}