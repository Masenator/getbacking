import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { ProcessSteps } from "@/components/ProcessSteps";
import { jsonLdScriptProps, faqPageSchema, financialProductServiceSchema, type FaqItem } from "@/lib/schema";
import { financeDisclaimer } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "Refurbishment Finance — Light & Heavy Refurb Loans";
const description =
  "Light and heavy refurbishment finance for UK property investors and developers. Funding for works costs, staged drawdowns, and a clear route to refinance or sale.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/refurbishment-finance" });

const useCases = [
  "Cosmetic refresh of a rental property — kitchen, bathroom, flooring, decoration — ahead of re-letting or sale",
  "Buy-refurbish-refinance (BRR) purchases where the property doesn't qualify for a standard mortgage in its current state",
  "Structural or layout changes: extensions, loft conversions, internal reconfiguration",
  "Converting a single property into multiple self-contained units (HMO or flats), subject to planning",
  "Bringing an uninhabitable or unmortgageable property up to a lettable or saleable standard",
];

const lightVsHeavy = [
  {
    title: "Light refurbishment",
    body: "Cosmetic and non-structural work — kitchens, bathrooms, decoration, flooring, rewiring, re-roofing. No planning permission or building regulations sign-off typically required. Usually funded as a single bridging facility with the works cost included in the loan.",
  },
  {
    title: "Heavy refurbishment",
    body: "Structural work, extensions, layout changes, or a change of use — anything requiring building regulations approval and often planning permission. Usually funded with staged drawdowns against verified progress, sitting closer to development finance in how it's assessed.",
  },
];

const criteria = [
  "A clear, itemised schedule of works and cost, ideally from a contractor quote",
  "A realistic post-works (end) value, supported by comparable evidence",
  "For heavy refurb: building regulations and, where relevant, planning consent in place or well progressed",
  "A sensible loan-to-cost and loan-to-value for the works and the exit",
  "A credible exit — refinance onto a term mortgage, or sale",
];

const processSteps = [
  { title: "Scope the works", description: "Tell us what's being done — cosmetic or structural — plus the cost and the end value you expect." },
  { title: "We match the lender", description: "Light refurb and heavy refurb sit with different lenders; we find the ones suited to your scope." },
  { title: "Terms agreed", description: "Facility structured around purchase (if applicable), works cost and your planned exit." },
  { title: "Works & drawdowns", description: "For heavy refurb, funds are released in stages as work is verified; light refurb is typically a single release." },
  { title: "Exit", description: "We help you plan the refinance or sale early, so there's no gap once works complete." },
];

const faqs: FaqItem[] = [
  {
    question: "How do I know if my project is 'light' or 'heavy' refurbishment?",
    answer:
      "As a rule of thumb: if the work needs building regulations sign-off, changes the structure or layout, or requires planning permission, lenders will treat it as heavy refurbishment. Cosmetic work — kitchens, bathrooms, decoration, non-structural repairs — is generally treated as light.",
  },
  {
    question: "Is refurbishment finance the same as development finance?",
    answer:
      "They overlap. Very heavy refurbishment (large extensions, conversions, changes of use) is often funded on development finance terms with a monitoring surveyor and staged drawdowns. Lighter projects are usually funded as a straightforward bridging facility with works cost included.",
  },
  {
    question: "Can I fund the purchase and the works in one facility?",
    answer:
      "Usually, yes — refurbishment facilities are commonly structured to include both the purchase price and the works cost, subject to the combined loan-to-value and loan-to-cost the lender is comfortable with.",
  },
  {
    question: "What happens if the works cost more than expected?",
    answer:
      "This is exactly why an accurate, contractor-backed cost estimate matters at application stage. Some lenders build in a contingency allowance; if costs materially overrun, it can affect drawdowns, so realistic budgeting up front avoids problems later.",
  },
  {
    question: "What's my exit once the refurbishment is finished?",
    answer:
      "Most commonly either a sale of the finished property, or a refinance onto a standard buy-to-let or commercial mortgage now that it qualifies for mainstream lending. We help plan this before works even start, not after.",
  },
];

export default function RefurbishmentFinancePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Refurbishment Finance", path: "/refurbishment-finance" }]} />
      <PageHero
        eyebrow="Refurbishment Finance"
        title="Fund the works, not just the purchase"
        intro="Whether it's a cosmetic refresh or a structural overhaul, refurbishment finance funds the gap between a property's current state and its value once the work is done."
      />

      <Section kicker="What It Is" title="Finance built around works cost and end value">
        <div className="prose-article max-w-3xl">
          <p>
            Refurbishment finance funds property improvement works — typically
            alongside the purchase, or against a property you already own —
            with lending assessed against both the current value and the{" "}
            <strong>value once works are complete</strong>. The right structure
            depends heavily on the scale of what you&apos;re doing, which is why
            lenders draw a firm line between light and heavy refurbishment.
          </p>
        </div>
      </Section>

      <Section kicker="Light vs Heavy" title="Which side of the line is your project on?" className="bg-paper-dim/40">
        <div className="grid gap-6 sm:grid-cols-2">
          {lightVsHeavy.map((item) => (
            <div key={item.title} className="rounded-sm border border-line bg-paper p-6">
              <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Heavier project involving ground-up build or a full change of use?
          Take a look at{" "}
          <Link href="/development-finance" className="text-accent-dark underline">
            development finance
          </Link>{" "}
          instead.
        </p>
      </Section>

      <Section kicker="Who It's For" title="Typical refurbishment finance scenarios">
        <ul className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <li key={item} className="rounded-sm border border-line bg-paper p-5 text-sm leading-relaxed text-ink-soft">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="Criteria" title="What lenders are generally looking for">
        <ul className="max-w-2xl space-y-3">
          {criteria.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden="true" className="mt-1 text-accent-dark">&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="Our Process" title="From scope to exit">
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section kicker="FAQs" title="Refurbishment finance questions, answered straight">
        <FAQAccordion items={faqs} />
      </Section>

      <Section kicker="Further Reading" title="Related insight">
        <Link
          href="/insights/light-vs-heavy-refurbishment-finance"
          className="inline-block rounded-sm border border-line bg-paper p-6 hover:border-accent"
        >
          <p className="font-display text-lg font-bold text-ink">
            Light vs Heavy Refurbishment: Which Type of Finance Do You Need? &rarr;
          </p>
          <p className="mt-2 text-sm text-muted">
            The practical difference between light and heavy refurbishment, and why lenders draw the line where they do.
          </p>
        </Link>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{financeDisclaimer}</p>
      </Section>

      <CTABanner
        title="Got a refurb project to fund?"
        intro="Get a free, indicative read on the scope and the numbers in about two minutes, then we'll tell you whether it's a light refurb bridge or something bigger."
        primaryLabel="Get Your Free Refurbishment Assessment"
        primaryHref="/deal-assessment/refurbishment-finance"
      />

      <script
        {...jsonLdScriptProps([
          financialProductServiceSchema({
            name: "Refurbishment Finance",
            description,
            path: "/refurbishment-finance",
            serviceType: "Property refurbishment finance brokerage",
          }),
          faqPageSchema(faqs),
        ])}
      />
    </>
  );
}
