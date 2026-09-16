import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";

// Required for static export: metadata route handlers must be explicitly
// marked static since they could otherwise be dynamic.
export const dynamic = "force-static";

const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/deal-assessment", priority: 0.95, changeFrequency: "monthly" },
  { path: "/deal-assessment/bridging-finance", priority: 0.85, changeFrequency: "monthly" },
  { path: "/deal-assessment/development-finance", priority: 0.85, changeFrequency: "monthly" },
  { path: "/deal-assessment/refurbishment-finance", priority: 0.85, changeFrequency: "monthly" },
  { path: "/deal-assessment/auction-finance", priority: 0.85, changeFrequency: "monthly" },
  { path: "/deal-assessment/second-charge-finance", priority: 0.85, changeFrequency: "monthly" },
  { path: "/bridging-finance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/development-finance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/refurbishment-finance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/auction-finance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/second-charge-finance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/legal/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/cookie-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/complaints-procedure", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.url}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
