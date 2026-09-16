export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readTime: string;
  relatedProduct?: { label: string; href: string };
};

/**
 * Manifest of every published article. Each post also lives as its own
 * static route under app/insights/<slug>/page.tsx, so content, metadata
 * and JSON-LD stay co-located and fully type-checked — no MDX/CMS
 * layer needed for four articles.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "bridging-loan-vs-mortgage",
    title: "Bridging Loan vs Mortgage: What UK Property Developers Need to Know",
    metaTitle: "Bridging Loan vs Mortgage — Key Differences for Developers",
    description:
      "How bridging finance differs from a mortgage, when developers actually need one over the other, and what lenders look at when assessing a bridging deal.",
    excerpt:
      "Bridging and mortgages solve different problems. Here's how UK developers should think about speed, cost and exit when choosing between them.",
    category: "Bridging Finance",
    date: "2026-01-14",
    readTime: "6 min",
    relatedProduct: { label: "Bridging Finance", href: "/bridging-finance" },
  },
  {
    slug: "how-development-finance-works",
    title: "How Development Finance Works: A Developer's Guide to Drawdowns, GDV and Exit",
    metaTitle: "How Development Finance Works — Drawdowns, GDV & Exit Explained",
    description:
      "A plain-English walkthrough of how development finance is structured, from day-one land funding through staged drawdowns to exit on practical completion.",
    excerpt:
      "GDV, monitoring surveyors, tranches, retentions — the jargon that trips up first-time developers, explained without the jargon.",
    category: "Development Finance",
    date: "2026-02-03",
    readTime: "8 min",
    relatedProduct: { label: "Development Finance", href: "/development-finance" },
  },
  {
    slug: "auction-finance-28-day-completion",
    title: "Auction Finance and the 28-Day Deadline: How to Avoid Losing Your Deposit",
    metaTitle: "Auction Finance & the 28-Day Completion Deadline — Developer Guide",
    description:
      "Why auction purchases run on a hard completion clock, how auction finance is structured to meet it, and the preparation that stops deals falling over.",
    excerpt:
      "Miss an auction completion deadline and you can lose your deposit and the lot. Here's how to have funding ready before you raise your paddle.",
    category: "Auction Finance",
    date: "2026-03-11",
    readTime: "6 min",
    relatedProduct: { label: "Auction Finance", href: "/auction-finance" },
  },
  {
    slug: "light-vs-heavy-refurbishment-finance",
    title: "Light vs Heavy Refurbishment: Which Type of Finance Do You Need?",
    metaTitle: "Light vs Heavy Refurbishment Finance — What's the Difference?",
    description:
      "The practical difference between light and heavy refurbishment for finance purposes, why the line matters to lenders, and which route fits your project.",
    excerpt:
      "Not every refurb needs development finance — and not every refurb qualifies as \"light\" either. Here's how lenders actually draw the line.",
    category: "Refurbishment Finance",
    date: "2026-04-22",
    readTime: "7 min",
    relatedProduct: { label: "Refurbishment Finance", href: "/refurbishment-finance" },
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
