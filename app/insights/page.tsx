import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { CTABanner } from "@/components/CTABanner";
import { blogPosts } from "@/lib/blog-posts";
import { pageMetadata } from "@/lib/seo";

const title = "Insights — Bridging & Development Finance Guides";
const description =
  "Practical, jargon-free guides on bridging finance, development finance, refurbishment finance and auction finance for UK property developers.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/insights" });

export default function InsightsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />
      <PageHero
        eyebrow="Insights"
        title="Straight-talking guidance for property developers"
        intro="No jargon, no filler — practical reading on how bridging and development finance actually works, written for developers who'd rather understand a deal than be sold one."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
