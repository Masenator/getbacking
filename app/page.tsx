import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TrustBar } from "@/components/TrustBar";
import { ProductCard } from "@/components/ProductCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTABanner } from "@/components/CTABanner";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { productLinks, siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.name} | Bridging & Development Finance Broker, UK`,
  description:
    "Whole-of-market bridging, development, refurbishment and auction finance for UK property developers. Fast decisions, straight talk, a broker in your corner.",
  path: "/",
});

const productCardCopy: Record<string, { description: string; points: string[] }> = {
  "/bridging-finance": {
    description:
      "Short-term funding to bridge a gap — break a chain, complete a purchase or unlock capital tied up in property.",
    points: ["Terms typically 1–24 months", "Funds released in days, not months", "Residential, mixed-use and commercial security"],
  },
  "/development-finance": {
    description:
      "Funding for ground-up builds and major conversions, structured around your build cost and GDV.",
    points: ["Day-one land and build cost funding", "Staged drawdowns against progress", "From single units to multi-unit schemes"],
  },
  "/refurbishment-finance": {
    description:
      "Light or heavy refurbishment funding to add value fast, whether it's a cosmetic flip or a structural overhaul.",
    points: ["Light and heavy refurb covered", "Works costs funded in stages", "Built for the BRR / buy-refurbish-refinance model"],
  },
  "/auction-finance": {
    description:
      "Certainty of funds before you bid, and a lender that can actually complete inside a 28-day auction deadline.",
    points: ["Agreement in principle before the sale", "Built for 20–28 day completions", "No last-minute surprises on legal timelines"],
  },
};

const homeProcessSteps = [
  {
    title: "Tell us the deal",
    description: "A quick call or enquiry — the property, the numbers, the timeline. No forms for the sake of forms.",
  },
  {
    title: "We go to market",
    description: "We take your deal to the right lenders across our whole-of-market panel, not just the ones on our shortlist.",
  },
  {
    title: "You get funded",
    description: "We manage valuation, legals and drawdown, keeping you and the lender moving until the money lands.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="pb-0">
        <TrustBar />
      </Section>

      <Section
        kicker="Finance Solutions"
        title="Whatever the deal, there's a route to fund it."
        intro="We arrange finance across the full lifecycle of a property project — from a fast bridge to secure a purchase, through to development funding for the build and refurbishment finance to add value."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productLinks.map((link) => (
            <ProductCard
              key={link.href}
              href={link.href}
              title={link.label}
              description={productCardCopy[link.href]?.description ?? ""}
              points={productCardCopy[link.href]?.points ?? []}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-paper" kicker="Why Get Backing" title="Bankers say no. We find a way.">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-paper/80">
            <p>
              Get Backing exists because too many good developers get stuck
              in the same place: a high street bank that&apos;s slow,
              risk-averse and speaks in jargon, or a broker who disappears
              after the enquiry form.
            </p>
            <p>
              We&apos;re neither. We&apos;re whole-of-market, so we&apos;re
              not selling you the one lender we happen to have a deal with.
              We&apos;re hands-on through valuation, legals and drawdown, so
              you&apos;re not chasing three different people to find out
              what&apos;s holding your money up. And we&apos;ll tell you
              straight if a deal doesn&apos;t stack up, rather than wasting
              your time.
            </p>
            <Link
              href="/about"
              className="inline-block font-display text-sm font-semibold text-accent hover:underline"
            >
              More about how we work &rarr;
            </Link>
          </div>
          <ProcessSteps steps={homeProcessSteps} />
        </div>
        <div className="mt-8">
          <Button href="/how-it-works" variant="ghost" className="border-paper/40 text-paper hover:bg-paper hover:text-ink">
            See the full process
          </Button>
        </div>
      </Section>

      <Section
        kicker="Insights"
        title="Straight-talking guidance for developers"
        intro="Practical, jargon-free reading on how bridging and development finance actually works."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/insights" variant="ghost">
            Visit the Insights Hub
          </Button>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
