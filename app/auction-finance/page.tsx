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

const title = "Auction Finance — Fund a Property Purchase in 28 Days";
const description =
  "Auction finance for UK property buyers and developers, structured around 20–28 day auction completion deadlines. Get certainty of funds before you bid.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/auction-finance" });

const useCases = [
  "Buying a lot at a traditional (unconditional) auction with a 28-day hard completion deadline",
  "Buying via a modern method of auction (conditional) sale with its own set completion window",
  "Securing a property that needs work and won't qualify for mainstream mortgage finance as it stands",
  "Competing against cash buyers by having certainty of funds agreed before the sale",
  "Funding a purchase where you plan to refurbish and refinance, or refurbish and sell, shortly after completion",
];

const structureNotes = [
  "An Agreement in Principle, ideally in place before you bid, so you know your funding is realistic",
  "Valuation instructed the moment the hammer falls (or the reservation is made), not after",
  "Legal teams on both sides briefed to move at auction speed from day one",
  "Facility structured as a standard bridge once completed — the urgency is front-loaded into the weeks before completion, not the loan itself",
  "A clear exit already thought through: hold, refinance, refurbish and refinance, or resell",
];

const criteria = [
  "A realistic, evidenced view of the property's value — don't rely on the guide price alone",
  "Funds (deposit and legal costs) ready to move the moment you win the lot",
  "A solicitor briefed and available to act at short notice",
  "A clear plan for the property post-completion, particularly if it needs work",
  "Buffer in your timeline: auction legal packs and searches can surface issues that need resolving fast",
];

const processSteps = [
  { title: "Before you bid", description: "Get an Agreement in Principle in place so you have certainty of funds and a realistic view of terms before the sale." },
  { title: "Win the lot", description: "Pay your deposit and exchange contracts — the completion clock (usually 20–28 days) starts here." },
  { title: "Valuation instructed immediately", description: "We get the valuer moving the same day, because this is usually the step most likely to eat into your timeline." },
  { title: "Legals race the clock", description: "We chase both sets of solicitors daily — auction deadlines don't move, so the legal work has to." },
  { title: "Completion", description: "Funds are released and the purchase completes on time, protecting your deposit and the deal." },
];

const faqs: FaqItem[] = [
  {
    question: "What happens if I don't complete an auction purchase in time?",
    answer:
      "Under most auction terms, missing the completion deadline can mean losing your deposit (commonly 10%) and potentially being liable for the seller's costs if the property is resold at a loss. This is exactly why lining up funding before you bid matters so much.",
  },
  {
    question: "Can I get funding agreed before I've even won the lot?",
    answer:
      "Yes — and we'd strongly recommend it. An Agreement in Principle based on the property details and guide price means you're bidding with a realistic, pre-assessed view of what you can raise, rather than finding out after you've exchanged.",
  },
  {
    question: "Is 28 days really enough time to complete?",
    answer:
      "It's tight but very achievable when everyone — valuer, both solicitors and the lender — is briefed and moving from day one. The deals that run into trouble are usually the ones where funding wasn't arranged until after the auction.",
  },
  {
    question: "What's the difference between traditional and modern method of auction?",
    answer:
      "Traditional (unconditional) auction sales typically require completion around 28 days after exchange, which happens on the day of the auction. Modern method (conditional) auctions usually give a longer window — often 56 days — with a reservation fee paid upfront. Either way, the deadline is fixed and firm.",
  },
  {
    question: "Can auction finance be used for a property that needs refurbishment?",
    answer:
      "Yes — many auction lots need work, which is often why they're at auction in the first place. We can structure completion funding now and talk through refurbishment finance for the works, or a combined facility depending on the deal.",
  },
];

export default function AuctionFinancePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Auction Finance", path: "/auction-finance" }]} />
      <PageHero
        eyebrow="Auction Finance"
        title="Certainty of funds before you raise your paddle"
        intro="Auction purchases run on a fixed completion clock — usually 20 to 28 days. Auction finance is structured to hit that deadline, with funding arranged and ready before the sale, not scrambled together after."
      />

      <Section kicker="What It Is" title="Bridging finance built for a hard deadline">
        <div className="prose-article max-w-3xl">
          <p>
            Auction finance isn&apos;t a different loan product so much as a
            different way of running a bridging loan: everything —
            valuation, legal work, lender sign-off — is compressed to fit
            inside the fixed completion window set by the auction house, typically{" "}
            <strong>20 to 28 days</strong> from exchange.
          </p>
          <p>
            The deal itself is usually funded on standard bridging terms once
            completed. What makes auction purchases different is the timeline
            pressure beforehand — and that pressure is exactly what an
            auction-experienced broker exists to manage.
          </p>
        </div>
      </Section>

      <Section kicker="Who It's For" title="Typical auction finance scenarios">
        <ul className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <li key={item} className="rounded-sm border border-line bg-paper p-5 text-sm leading-relaxed text-ink-soft">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Lot needs work once you own it? See{" "}
          <Link href="/refurbishment-finance" className="text-accent-dark underline">
            refurbishment finance
          </Link>{" "}
          for how we structure funding for the works.
        </p>
      </Section>

      <Section kicker="How It's Structured" title="What makes auction finance move fast" className="bg-paper-dim/40">
        <ul className="grid gap-4 sm:grid-cols-2">
          {structureNotes.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden="true" className="mt-1 text-accent-dark">&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="Criteria" title="What you need in place before you bid">
        <ul className="max-w-2xl space-y-3">
          {criteria.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden="true" className="mt-1 text-accent-dark">&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="Our Process" title="Before, during and after the hammer falls">
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section kicker="FAQs" title="Auction finance questions, answered straight">
        <FAQAccordion items={faqs} />
      </Section>

      <Section kicker="Further Reading" title="Related insight">
        <Link
          href="/insights/auction-finance-28-day-completion"
          className="inline-block rounded-sm border border-line bg-paper p-6 hover:border-accent"
        >
          <p className="font-display text-lg font-bold text-ink">
            Auction Finance and the 28-Day Deadline: How to Avoid Losing Your Deposit &rarr;
          </p>
          <p className="mt-2 text-sm text-muted">
            Why auction purchases run on a hard completion clock, and how to have funding ready before you bid.
          </p>
        </Link>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{financeDisclaimer}</p>
      </Section>

      <CTABanner
        title="Bidding at auction soon?"
        intro="Get a free, indicative read in about two minutes, then get an Agreement in Principle in place before the sale, so you bid with confidence, not a guess."
        primaryLabel="Get Your Free Auction Assessment"
        primaryHref="/deal-assessment/auction-finance"
      />

      <script
        {...jsonLdScriptProps([
          financialProductServiceSchema({
            name: "Auction Finance",
            description,
            path: "/auction-finance",
            serviceType: "Auction property finance brokerage",
          }),
          faqPageSchema(faqs),
        ])}
      />
    </>
  );
}
