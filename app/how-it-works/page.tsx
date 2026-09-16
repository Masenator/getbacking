import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { pageMetadata } from "@/lib/seo";

const title = "How It Works — Our Broking Process";
const description =
  "How Get Backing arranges bridging and development finance: from your first enquiry to funds landing, with one point of contact throughout.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/how-it-works" });

const steps = [
  {
    title: "1. Tell us the deal",
    body: "A short call or a form — whichever you prefer. We want the property, the numbers, the timeline and what you're trying to achieve. No twenty-page application before we've even worked out if it's fundable.",
  },
  {
    title: "2. We tell you straight",
    body: "If it stacks up, we'll say so and explain roughly what terms to expect. If it doesn't — not enough equity, exit too thin, numbers don't work — we'll tell you that too, and why, rather than stringing you along.",
  },
  {
    title: "3. We go to market",
    body: "We take your deal to the lenders on our whole-of-market panel best suited to the asset, the exit and your circumstances — not just the two or three we happen to have a relationship with.",
  },
  {
    title: "4. Terms & Agreement in Principle",
    body: "We negotiate terms on your behalf and get you an Agreement in Principle, so you know broadly what you're working with before you commit to valuation and legal costs.",
  },
  {
    title: "5. Valuation & legal work",
    body: "This is where deals usually slow down — so it's where we push hardest. We chase the valuer, your solicitor and the lender's solicitor, flag issues early, and keep everyone moving to the same timeline.",
  },
  {
    title: "6. Offer & drawdown",
    body: "Once legal work completes, funds are released — as a single amount for a bridging loan, or as agreed tranches for development and heavy refurbishment finance.",
  },
  {
    title: "7. Through to exit",
    body: "We don't disappear once the funds land. We stay in touch through to your planned exit — sale or refinance — and we're already thinking about your next deal.",
  },
];

const principles = [
  {
    title: "One point of contact",
    body: "You deal with one broker who knows your deal, not a rotating call centre queue.",
  },
  {
    title: "Whole-of-market",
    body: "We're not tied to any single lender, so recommendations are based on what suits your deal, not our books.",
  },
  {
    title: "We chase, so you don't have to",
    body: "Valuers, solicitors, lenders — keeping a deal moving is mostly about follow-up. That's our job, not yours.",
  },
  {
    title: "Straight talk",
    body: "If a deal doesn't work, or terms aren't what you hoped, you'll hear it from us directly and early.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "How It Works", path: "/how-it-works" }]} />
      <PageHero
        eyebrow="How It Works"
        title="From enquiry to funds, without the runaround"
        intro="The same broking process runs behind every product we arrange — bridging, development, refurbishment or auction finance. Here's exactly what happens, step by step."
      />

      <Section>
        <ol className="space-y-8">
          {steps.map((step) => (
            <li key={step.title} className="grid gap-2 border-b border-line pb-8 last:border-none sm:grid-cols-[220px_1fr] sm:gap-8">
              <h2 className="font-display text-xl font-bold text-ink">{step.title}</h2>
              <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="What You Get" title="The principles behind every deal we run" className="bg-paper-dim/40">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <div key={item.title} className="rounded-sm border border-line bg-paper p-5">
              <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Ready to find out where you stand?"
        intro="Tell us about your deal and we'll come back with a straight answer, usually the same working day."
      />
    </>
  );
}
