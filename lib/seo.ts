import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/**
 * Builds a full per-page Metadata object with canonical URL and complete
 * Open Graph / Twitter card data.
 *
 * Why this exists: Next.js does NOT deep-merge nested metadata objects
 * (like `openGraph`) between layout.tsx and page.tsx — if a page
 * defines its own `openGraph`, it fully replaces the layout's, silently
 * dropping inherited fields like `images`, `siteName` and `locale`. Every
 * page must therefore supply a complete openGraph object; these helpers
 * make sure that happens consistently everywhere.
 */
function ogImage() {
  return [
    {
      url: "/og-image.svg",
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  ];
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      images: ogImage(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}

export function articleMetadata({
  title,
  description,
  path,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      images: ogImage(),
      publishedTime,
      authors: [siteConfig.url],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}
