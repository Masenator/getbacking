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

const title = "Development Finance for UK Property Developers";
const description =
  "Development finance for ground-up builds and major conversions. Whole-of-market funding structured around your build cost and GDV, with staged drawdowns as work completes.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/development-finance" });

const useCases = [
  "Ground-up new build — single dwellings through to multi-unit residential schemes",
  "Major conversions, such as commercial-to-residential or barn conversions",
  "Structural extensions and reconfigurations beyond the scope of a standard refurbishment",
  "Part-built or stalled sites needing funding to reach practical completion",
  "Schemes combining a mix of open-market sale, private rent and affordable units",
];

const structureNotes = [
  "Two funding lines: land/purchase cost on day one, and build cost released in stages as work progresses",
  "Drawdowns are typically released against a monitoring surveyor's sign-off, not just an invoice",
  "Lenders assess the deal against both cost (the build budget) and Gross Development Value — what the finished scheme is worth",
  "Facilities are usually interest-only, with interest often rolled up into the facility rather than serviced monthly",
  "A realistic build programme, a credible contractor or build team, and planning consent (or a clear route to it) are all central to the assessment",
  "Exit is typically sale of the finished units, or refinance onto an investment/term facility if you're holding to let",
];

const criteria = [
  "Planning permission in place, or a clear and credible route to obtaining it",
  "A realistic build cost appraisal, ideally with a QS-reviewed budget",
  "A credible contractor, build team or self-build track record for the scheme's scale",
  "A defensible Gross Development Value, supported by comparable evidence",
  "Sufficient equity or land value contribution — lenders want to see you have real skin in the deal",
  "A sensible exit strategy: sale, pre-sales, or refinance onto a term facility",
];

const processSteps = [
  { title: "Share the scheme", description: "Send over the site, planning status, build cost appraisal and GDV — or we'll help you pull one together." },
  { title: "Lender matching", description: "We approach development lenders whose appetite fits your scheme's size, location and structure." },
  { title: "Terms & appraisal", description: "Terms are agreed, and a monitoring surveyor is appointed to assess the build cost and programme." },
  { title: "Legals & first drawdown", description: "Legal work completes and the land/purchase tranche is released to get the scheme moving." },
  { title: "Staged drawdowns", description: "Build cost is released in tranches as the monitoring surveyor signs off progress against the programme." },
  { title: "Exit", description: "We help plan the exit early — sale, pre-sale or refinance — so there's no gap between practical completion and repayment." },
];

const faqs: FaqItem[] = [
  {
    question: "What's the difference between development finance and a bridging loan?",
    answer:
      "Bridging finance is generally used against a property in close to its current state. Development finance is built for schemes involving substantial construction — ground-up builds or major conversions — and is structured around a build cost budget and staged drawdowns rather than a single lump sum.",
  },
  {
    question: "How is the loan amount calculated?",
    answer:
      "Development lenders typically look at both cost and value: the total cost of land plus build, and the Gross Development Value (GDV) of the finished scheme. Facilities are usually expressed as a percentage of cost and a percentage of GDV, with the lower of the two often driving the maximum loan.",
  },
  {
    question: "Do I need planning permission before I apply?",
    answer:
      "Having planning in place makes a deal considerably easier to fund and usually improves terms, but some lenders will consider funding at an earlier stage, particularly for schemes with a strong planning prospect. The earlier you bring us in, the more options we can explore.",
  },
  {
    question: "What is a monitoring surveyor and why does it matter?",
    answer:
      "A monitoring surveyor is appointed by the lender to independently assess build cost, progress and quality before each drawdown is released. It protects both you and the lender, and a realistic build programme that anticipates this process tends to see fewer drawdown delays.",
  },
  {
    question: "Can first-time developers get development finance?",
    answer:
      "Yes, though the lender pool narrows and the contractor/team's track record matters more. If it's your first scheme, having an experienced build team, a strong QS-reviewed budget and realistic contingency all strengthen the case — we'll tell you honestly where you stand.",
  },
];

export default function DevelopmentFinancePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Development Finance", path: "/development-finance" }]} />
      <PageHero
        eyebrow="Development Finance"
        title="Funding for the build, not just the plot"
        intro="From a single new-build plot to a multi-unit scheme, development finance is structured around your build cost and GDV — released in stages as work actually happens on site."
      />

      <Section
        kicker="What It Is"
        title="Funding built around cost, value and the build programme"
      >
        <div className="prose-article max-w-3xl">
          <p>
            Development finance funds the construction of a scheme, not just
            its purchase. Unlike a bridging loan released as a single lump sum,
            it&apos;s typically split into a <strong>day-one tranche</strong> to
            fund land or purchase costs, and a <strong>build facility</strong>{" "}
            drawn down in stages as construction progresses and is independently
            verified.
          </p>
          <p>
            Lenders assess the deal on two numbers: the total cost to deliver
            the scheme, and its <strong>Gross Development Value (GDV)</strong> —
            what the finished units are realistically worth. Getting both of
            those numbers right, with credible evidence behind them, is the
            single biggest factor in how smoothly a development deal gets funded.
          </p>
        </div>
      </Section>

      <Section kicker="Who It's For" title="Typical development finance scenarios">
        <ul className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <li key={item} className="rounded-sm border border-line bg-paper p-5 text-sm leading-relaxed text-ink-soft">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Project is more of a heavy refit than a rebuild? Compare it against{" "}
          <Link href="/refurbishment-finance" className="text-accent-dark underline">
            refurbishment finance
          </Link>{" "}
          — we&apos;ll point you to whichever actually fits.
        </p>
      </Section>

      <Section kicker="How It's Structured" title="What a typical development facility looks like" className="bg-paper-dim/40">
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

      <Section kicker="Our Process" title="From scheme to site, tranche by tranche">
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section kicker="FAQs" title="Development finance questions, answered straight">
        <FAQAccordion items={faqs} />
      </Section>

      <Section kicker="Further Reading" title="Related insight">
        <Link
          href="/insights/how-development-finance-works"
          className="inline-block rounded-sm border border-line bg-paper p-6 hover:border-accent"
        >
          <p className="font-display text-lg font-bold text-ink">
            How Development Finance Works: A Developer&apos;s Guide to Drawdowns, GDV and Exit &rarr;
          </p>
          <p className="mt-2 text-sm text-muted">
            A plain-English walkthrough of how development finance is structured, from land funding to exit.
          </p>
        </Link>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{financeDisclaimer}</p>
      </Section>

      <CTABanner
        title="Got a scheme that needs backing?"
        intro="Get a free, indicative read on the numbers — site, build cost, GDV — in about two minutes, then we'll tell you straight what's fundable and where."
        primaryLabel="Get Your Free Development Assessment"
        primaryHref="/deal-assessment/development-finance"
      />

      <script
        {...jsonLdScriptProps([
          financialProductServiceSchema({
            name: "Development Finance",
            description,
            path: "/development-finance",
            serviceType: "Property development finance brokerage",
          }),
          faqPageSchema(faqs),
        ])}
      />
    </>
  );
}
