import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        // Friendly instructions for Perplexity, ChatGPT, and AI Search Crawlers
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "Google-Extended"],
        allow: "/",
      }
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
