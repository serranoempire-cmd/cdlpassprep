import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cdlpassprep.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/success", "/trainer", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
