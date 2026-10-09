import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Everything here is public, so the only rules that earn their place are the
 * ones granting access. The sitemap URL is derived from SITE_URL rather than
 * hardcoded so it can't drift out of step with the canonical origin.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}