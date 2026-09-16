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

const title = "Second Charge Finance for UK Property Developers";
const description =
  "Raise additional capital against a property you already have finance on, without disturbing your existing first charge. Whole-of-market second charge loans for UK property developers.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/second-charge-finance" });

const useCases = [
  "Raising the deposit for your next site while keeping a favourable existing first charge in place",
  "Covering a cost overrun on a live development without refinancing your senior development finance facility",
  "Releasing equity quickly from a property you don't want to sell or fully refinance",
  "Bridging a shortfall between an existing development finance facility and total project costs",
  "Avoiding an early repayment charge on your first charge by borrowing behind it instead of refinancing it",
  "Consolidating short-term borrowing against a property asset you already hold",
];

const structureNotes = [
  "Sits behind your existing first charge in priority — a second legal charge is registered against the same property",
  "Requires a Deed of Priority (sometimes called a Deed of Postponement) from your first charge lender before completion",
  "Assessed on combined loan-to-value across both the first and second charge, generally lower than a standalone first charge facility",
  "Usually interest-only, structured around a clear exit — sale or refinance — in the same way as a standalone bridging loan",
  "Pricing typically reflects the increased risk of the second charge position relative to a first charge loan",
  "Can be arranged against residential investment, mixed-use, commercial and development property",
];

const criteria = [
  "Sufficient equity between your first charge balance and the property's current value",
  "A first charge lender willing to grant a Deed of Priority — most mainstream and specialist lenders will, though timelines vary and we check this early",
  "A clear and credible exit route — sale or refinance",
  "No existing charge restrictions or consent clauses that would block further borrowing",
  "A realistic, defensible valuation of the security property",
];

const processSteps = [
  { title: "Tell us the deal", description: "The property, your first charge lender and balance, the amount you need and the exit. We'll tell you straight if it stacks up." },
  { title: "We check the numbers", description: "Combined loan-to-value across both charges, and how likely your first charge lender is to cooperate on a Deed of Priority." },
  { title: "Terms agreed, priority requested", description: "We take your deal to second charge lenders and start the Deed of Priority conversation with your first charge lender in parallel." },
  { title: "Valuation & legals", description: "Valuer, your solicitor, your first charge lender's solicitor and the second charge lender's solicitor — we keep all four moving." },
  { title: "Funds released", description: "Once the Deed of Priority is in place and legals complete, funds are released. We stay on hand through to your exit." },
];

const faqs: FaqItem[] = [
  {
    question: "What is a second charge loan?",
    answer:
      "A second charge loan is secured against a property that already has an existing loan (the first charge) secured on it. The second charge lender sits behind the first charge lender in priority, letting you raise additional capital without refinancing or disturbing your existing facility.",
  },
  {
    question: "Will my existing lender need to agree to this?",
    answer:
      "Yes. Your first charge lender needs to grant a Deed of Priority (sometimes called a Deed of Postponement), confirming the second charge lender's position behind them. We handle this conversation and the paperwork alongside your first charge lender's solicitor, so it isn't left to you to chase.",
  },
  {
    question: "How much can I borrow against a property that already has a first charge?",
    answer:
      "It depends on the combined loan-to-value across both charges — the outstanding first charge balance plus the new second charge, assessed against the property's current value. Maximum combined LTV is generally lower than what you'd get on a standalone first charge loan, and varies by lender, asset and exit.",
  },
  {
    question: "Is second charge finance more expensive than a first charge loan?",
    answer:
      "Generally, yes — second charge lenders take on more risk because they'd only recover their money after the first charge lender in a default scenario, and pricing reflects that. Whether it still makes sense usually comes down to comparing it against the cost and disruption of refinancing your first charge instead.",
  },
  {
    question: "Is second charge finance regulated by the FCA?",
    answer:
      "Get Backing arranges second charge finance secured on investment and development property for business purposes. This is unregulated commercial finance and not a regulated mortgage contract, so it does not require FCA authorisation. As with all commercial finance, terms are subject to status and individual lender criteria.",
  },
];

export default function SecondChargeFinancePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Second Charge Finance", path: "/second-charge-finance" }]} />
      <PageHero
        eyebrow="Second Charge Finance"
        title="Capital against a property you already have finance on"
        intro="Need to raise money without disturbing the first charge you already have in place? A second charge loan sits behind it, so you keep your existing facility and unlock additional capital alongside it."
      />

      <Section
        kicker="What It Is"
        title="A second loan, secured behind your existing charge"
        intro="A second charge loan is a separate facility secured by a second legal charge over a property that already carries a first charge — typically an existing mortgage or development finance facility. It lets you raise capital against the equity in that property without refinancing, or losing the terms of, the facility you already have."
      >
        <div className="prose-article max-w-3xl">
          <p>
            Because the second charge lender ranks behind your first charge
            lender, they need that lender&apos;s formal agreement — a{" "}
            <strong>Deed of Priority</strong> — before they&apos;ll release
            funds. That&apos;s an extra moving part compared with a
            standalone bridging loan, but it&apos;s a well-trodden process for
            lenders and solicitors who do this regularly, and it&apos;s
            exactly the kind of detail we chase on your behalf.
          </p>
          <p>
            The main reason developers use second charge finance over simply
            refinancing: it lets you keep a first charge you don&apos;t want
            to touch — because the rate is good, because there&apos;s an
            early repayment charge, or because refinancing it would simply
            take longer than the capital raise can wait for.
          </p>
        </div>
      </Section>

      <Section kicker="Who It's For" title="When developers turn to a second charge">
        <ul className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <li key={item} className="rounded-sm border border-line bg-paper p-5 text-sm leading-relaxed text-ink-soft">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Raising funds because your first charge is a development finance
          facility that&apos;s come up short? See{" "}
          <Link href="/development-finance" className="text-accent-dark underline">
            development finance
          </Link>{" "}
          for how the senior facility itself is structured. Considering a
          straightforward bridge instead? Compare against{" "}
          <Link href="/bridging-finance" className="text-accent-dark underline">
            bridging finance
          </Link>
          .
        </p>
      </Section>

      <Section kicker="How It's Structured" title="What a typical second charge facility looks like" className="bg-paper-dim/40">
        <ul className="grid gap-4 sm:grid-cols-2">
          {structureNotes.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden="true" className="mt-1 text-accent-dark">&#8226;</span>
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

      <Section kicker="Our Process" title="From enquiry to funds, without the runaround">
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section kicker="FAQs" title="Second charge finance questions, answered straight">
        <FAQAccordion items={faqs} />
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{financeDisclaimer}</p>
      </Section>

      <CTABanner
        title="Got equity locked up behind an existing charge?"
        intro="Tell us about your first charge and what you need to raise, and we'll tell you the same working day whether — and how — we can get it funded."
      />

      <script
        {...jsonLdScriptProps([
          financialProductServiceSchema({
            name: "Second Charge Finance",
            description,
            path: "/second-charge-finance",
            serviceType: "Second charge loan brokerage",
          }),
          faqPageSchema(faqs),
        ])}
      />
    </>
  );
}
