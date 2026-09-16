import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { jsonLdScriptProps, faqPageSchema, type FaqItem } from "@/lib/schema";
import { assessmentTypeList } from "@/lib/deal-assessment";
import { financeDisclaimer, siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "Free Deal Assessment — Get an Indicative Read in 2 Minutes";
const description =
  "Answer a few quick questions about your bridging, development, refurbishment, auction or second charge deal and get an instant, indicative read — free, no obligation.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/deal-assessment" });

const processSteps = [
  { title: "Pick your deal type", description: "Bridging, development, refurbishment, auction or second charge — whichever fits." },
  { title: "Answer a few quick questions", description: "The key numbers on your deal. Two minutes, rough estimates are fine." },
  { title: "Get an honest, indicative read", description: "A straight steer on how it stacks up — then we call you to go through the detail." },
];

const faqs: FaqItem[] = [
  {
    question: "Is this a loan offer or a quote?",
    answer:
      "No. It's an indicative, qualitative read based only on what you tell us — not a loan offer, a rate, or a guaranteed amount. Every deal we place goes through a proper assessment with a lender before any terms are agreed.",
  },
  {
    question: "What happens after I submit my assessment?",
    answer: "One of our team will call you to go through the detail properly, whatever the indicative result — a 'stretch' read doesn't mean no, and a 'looks fundable' read isn't a guarantee.",
  },
  {
    question: "How long does it take?",
    answer: "About two minutes. You'll need rough numbers on the property and the deal — nothing needs to be exact or contractually confirmed at this stage.",
  },
  {
    question: "What do you do with my details?",
    answer: "Your details and answers are sent straight to our team so we can call you back. See our Privacy Policy for the full detail on how your data is handled.",
  },
];

export default function DealAssessmentPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Free Deal Assessment", path: "/deal-assessment" }]} />
      <PageHero
        eyebrow="Free Deal Assessment"
        title="What are your property plans?"
        intro="Pick the finance type that fits, answer a handful of quick questions, and get an honest, indicative read on your deal — free, no obligation, about two minutes."
      />

      <Section kicker="Step 1" title="Choose your deal type">
        <div className="grid gap-5 sm:grid-cols-2">
          {assessmentTypeList.map((assessmentType) => (
            <Link
              key={assessmentType.id}
              href={`/deal-assessment/${assessmentType.id}`}
              className="group flex flex-col justify-between rounded-sm border border-line bg-paper p-6 transition-colors hover:border-accent"
            >
              <div>
                <h2 className="font-display text-xl font-bold text-ink group-hover:text-accent-dark">
                  {assessmentType.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{assessmentType.cardPitch}</p>
              </div>
              <span className="mt-5 font-display text-sm font-semibold text-accent-dark">
                Start Assessment &rarr;
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Not sure which fits, or would rather just talk it through?{" "}
          <Link href="/contact" className="text-accent-dark underline">
            Contact us directly
          </Link>{" "}
          or call{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-accent-dark underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </Section>

      <Section kicker="How It Works" title="Three steps to an honest answer" className="bg-paper-dim/40">
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section kicker="FAQs" title="Free Deal Assessment questions, answered straight">
        <FAQAccordion items={faqs} />
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">{financeDisclaimer}</p>
      </Section>

      <script {...jsonLdScriptProps(faqPageSchema(faqs))} />
    </>
  );
}
