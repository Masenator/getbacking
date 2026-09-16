import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { jsonLdScriptProps, faqPageSchema, type FaqItem } from "@/lib/schema";
import { productLinks } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "FAQs — Bridging & Development Finance Questions";
const description =
  "Common questions about how Get Backing works, fees, regulation, security and timelines for bridging and development finance. Straight answers, no jargon.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/faqs" });

const generalFaqs: FaqItem[] = [
  {
    question: "Is Get Backing regulated by the FCA?",
    answer:
      "Get Backing arranges unregulated commercial finance — loans secured on investment and development property for business purposes, not regulated mortgage contracts. This type of business-purpose lending does not require FCA authorisation, and we do not arrange regulated mortgage contracts secured on your own home.",
  },
  {
    question: "Do you charge fees for arranging finance?",
    answer:
      "Any fees we charge are agreed with you upfront in writing before we start work on your deal, so there are no surprises. Ask us about our fee structure when you enquire — we're straight about it, not evasive.",
  },
  {
    question: "Which lenders do you work with?",
    answer:
      "We work across the whole of the specialist bridging and development finance market, including private lenders, challenger banks and specialist funds — rather than being tied to a small panel. Which lender suits your deal depends entirely on the specifics.",
  },
  {
    question: "What can I use as security?",
    answer:
      "Residential investment property, mixed-use, commercial property and land are all commonly accepted, depending on the lender and the deal. We arrange finance secured on investment and development property for business purposes.",
  },
  {
    question: "How quickly can you fund a deal?",
    answer:
      "It depends on the complexity of the security and how quickly all parties — valuer, solicitors, lender — move. Straightforward bridging deals can complete in days once legal work is genuinely underway; development and heavy refurbishment deals take longer due to appraisal and drawdown structuring.",
  },
  {
    question: "Do you only arrange deals in London and the South East?",
    answer:
      "No — we work with developers and investors across England and Wales. Get in touch with your deal and location and we'll tell you honestly what lender appetite looks like in your area.",
  },
  {
    question: "I'm a first-time developer. Can you still help?",
    answer:
      "Often, yes. The lender pool narrows for first-time developers, particularly on larger schemes, but a strong build team, realistic budget and sensible equity contribution can still get a deal funded. We'll be honest with you about where you stand.",
  },
  {
    question: "What information do you need to give me an initial view?",
    answer:
      "For most enquiries: the property or site, what you're looking to do, the numbers (purchase price, works or build cost, expected value), your timeline and your planned exit. The more detail up front, the faster we can come back with a useful answer.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQs", path: "/faqs" }]} />
      <PageHero
        eyebrow="FAQs"
        title="Straight answers to the questions we get asked most"
        intro="General questions about how we work, fees and regulation. For product-specific questions, see the FAQs on each finance solution page."
      />

      <Section>
        <FAQAccordion items={generalFaqs} />
      </Section>

      <Section kicker="Product-Specific FAQs" title="Looking for detail on a specific finance type?" className="bg-paper-dim/40">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm border border-line bg-paper p-5 text-sm font-medium text-ink hover:border-accent"
            >
              {link.label} FAQs &rarr;
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Still have a question?"
        intro="Ask us directly — we'll give you a straight answer, not a script."
      />

      <script {...jsonLdScriptProps(faqPageSchema(generalFaqs))} />
    </>
  );
}
