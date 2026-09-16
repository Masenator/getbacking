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

const title = "Bridging Finance for UK Property Developers";
const description =
  "Whole-of-market bridging loans for UK property developers and investors. Fast, short-term finance secured on property — arranged by a broker who chases the detail for you.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/bridging-finance" });

const useCases = [
  "Breaking a chain to complete a purchase before your existing property or asset sells",
  "Buying a property mainstream lenders won't touch as it stands — no kitchen or bathroom, short lease, or structural issues",
  "Moving fast on a time-pressured purchase, including auction lots",
  "Raising capital against an unencumbered or low-borrowing property to fund your next opportunity",
  "Refinancing an existing bridge that's approaching the end of its term",
  "Funding a light refurbishment ahead of a refinance onto a longer-term facility",
];

const structureNotes = [
  "Secured by a legal charge over the property, and sometimes additional security depending on the deal",
  "Usually arranged on an interest-only basis, with interest often retained or rolled up rather than paid monthly",
  "Terms typically run from a few weeks up to around 24 months, depending on lender and circumstances",
  "Loan-to-value is assessed against the property's current value, generally up to around 75% depending on the lender, asset and exit",
  "A clear, credible exit — sale or refinance — is central to how every lender assesses the deal",
  "Completion speed is usually set by legal work and valuation turnaround as much as by lender appetite",
];

const criteria = [
  "A clear and credible exit route — sale or refinance",
  "Suitable security: residential, mixed-use, commercial property or land, with or without planning",
  "A realistic, defensible valuation of the security property",
  "A sensible loan-to-value for the asset, the works involved (if any) and the exit",
  "Development or investment experience helps, but first-time investors aren't automatically ruled out — it depends on the deal",
];

const processSteps = [
  { title: "Tell us the deal", description: "The property, the numbers, the timeline and the exit. We'll tell you straight if it stacks up." },
  { title: "We go to market", description: "Your deal goes to the bridging lenders best suited to the asset and exit — not just whoever we know best." },
  { title: "Terms agreed", description: "We negotiate terms and get an Agreement in Principle, so you know where you stand before committing to legal costs." },
  { title: "Valuation & legals", description: "We keep the valuer, your solicitor and the lender's solicitor moving — chasing the detail so you don't have to." },
  { title: "Funds released", description: "Once legals complete, funds are released. We stay on hand through to your planned exit or refinance." },
];

const faqs: FaqItem[] = [
  {
    question: "What's the difference between bridging finance and a mortgage?",
    answer:
      "A mortgage is typically a longer-term facility assessed heavily on affordability and repayment over many years. Bridging finance is short-term, interest is usually retained or rolled up rather than paid monthly, and lenders focus on the security property and your exit route rather than ongoing income. Read our full comparison for more detail.",
  },
  {
    question: "How quickly can bridging finance complete?",
    answer:
      "Once legal work and valuation are genuinely moving, completion in a matter of days to a few weeks is realistic for a straightforward deal. The exact timeline depends on the complexity of the security, title and how quickly all parties — including your own solicitor — respond.",
  },
  {
    question: "What can I use as security for a bridging loan?",
    answer:
      "Residential investment property, semi-commercial, commercial property and land are all commonly used as security. We arrange finance secured on investment and development property for business purposes — we don't arrange regulated mortgage contracts secured on your own home.",
  },
  {
    question: "Do I need a guaranteed exit before I apply?",
    answer:
      "You need a credible, well-thought-through plan — typically sale of the property or refinance onto a longer-term facility. It doesn't need to be contractually locked down at application stage, but the more evidence you have, the stronger your terms are likely to be.",
  },
  {
    question: "Is bridging finance regulated by the FCA?",
    answer:
      "Get Backing arranges bridging finance secured on investment and development property for business purposes. This is unregulated commercial finance and not a regulated mortgage contract, so it does not require FCA authorisation. As with all commercial finance, terms are subject to status and individual lender criteria.",
  },
];

export default function BridgingFinancePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Bridging Finance", path: "/bridging-finance" }]} />
      <PageHero
        eyebrow="Bridging Finance"
        title="Fast, flexible finance to bridge the gap"
        intro="When a deal moves faster than a mainstream lender can, bridging finance gives you the speed and flexibility to complete — secured against property, structured around your exit."
      />

      <Section
        kicker="What It Is"
        title="A short-term loan secured against property"
        intro="Bridging finance is a short-term, interest-only loan secured by a legal charge over property. It's designed to 'bridge' a gap — between buying and selling, between opportunity and mainstream finance, or between today and your planned refinance — and it's assessed primarily on the security and your exit, not a long affordability history."
      >
        <div className="prose-article max-w-3xl">
          <p>
            Bridging loans can be <strong>closed</strong>, where you already have
            a defined exit lined up (a sale exchanged, or a refinance offer in
            place), or <strong>open</strong>, where the exit strategy is agreed
            but not yet contractually fixed. Closed bridges are generally viewed
            as lower risk and can attract sharper terms; open bridges are still
            very much fundable with the right plan and equity behind them.
          </p>
          <p>
            Because bridging finance is assessed on the property and the exit
            rather than a lengthy income-based affordability process, it can move
            considerably faster than a conventional mortgage — which is exactly
            why developers use it to seize opportunities that won&apos;t wait.
          </p>
        </div>
      </Section>

      <Section kicker="Who It's For" title="When developers turn to bridging finance">
        <ul className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <li key={item} className="rounded-sm border border-line bg-paper p-5 text-sm leading-relaxed text-ink-soft">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Buying at auction? Head to our dedicated{" "}
          <Link href="/auction-finance" className="text-accent-dark underline">
            auction finance
          </Link>{" "}
          page for how bridging is structured around a 28-day completion. Planning
          works once you own the property? See{" "}
          <Link href="/refurbishment-finance" className="text-accent-dark underline">
            refurbishment finance
          </Link>
          .
        </p>
      </Section>

      <Section kicker="How It's Structured" title="What a typical bridging facility looks like" className="bg-paper-dim/40">
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

      <Section kicker="FAQs" title="Bridging finance questions, answered straight">
        <FAQAccordion items={faqs} />
      </Section>

      <Section kicker="Further Reading" title="Related insight">
        <Link
          href="/insights/bridging-loan-vs-mortgage"
          className="inline-block rounded-sm border border-line bg-paper p-6 hover:border-accent"
        >
          <p className="font-display text-lg font-bold text-ink">
            Bridging Loan vs Mortgage: What UK Property Developers Need to Know &rarr;
          </p>
          <p className="mt-2 text-sm text-muted">
            How bridging finance differs from a mortgage, and when developers actually need one over the other.
          </p>
        </Link>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{financeDisclaimer}</p>
      </Section>

      <CTABanner
        title="Got a bridging deal that needs to move fast?"
        intro="Get a free, indicative read on your deal in about two minutes — then we'll tell you the same working day whether, and how, we can get it funded."
        primaryLabel="Get Your Free Bridging Assessment"
        primaryHref="/deal-assessment/bridging-finance"
      />

      <script
        {...jsonLdScriptProps([
          financialProductServiceSchema({
            name: "Bridging Finance",
            description,
            path: "/bridging-finance",
            serviceType: "Bridging loan brokerage",
          }),
          faqPageSchema(faqs),
        ])}
      />
    </>
  );
}
