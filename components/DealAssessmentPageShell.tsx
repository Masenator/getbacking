import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageHero } from "./PageHero";
import { Section } from "./Section";
import { DealAssessmentWizard } from "./DealAssessmentWizard";
import { assessmentConfigs, type AssessmentTypeId } from "@/lib/deal-assessment";
import { financeDisclaimer, siteConfig } from "@/lib/site-config";

/**
 * Shared server-rendered shell for each per-type Free Deal Assessment page
 * (breadcrumbs, hero, SEO copy). The interactive wizard itself
 * (`DealAssessmentWizard`) is the one client component in the tree.
 */
export function DealAssessmentPageShell({ type }: { type: AssessmentTypeId }) {
  const config = assessmentConfigs[type];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Free Deal Assessment", path: "/deal-assessment" },
          { name: config.label, path: `/deal-assessment/${type}` },
        ]}
      />
      <PageHero eyebrow={`Free ${config.label} Assessment`} title={config.heroTitle} intro={config.heroIntro} />

      <Section>
        <DealAssessmentWizard type={type} />
      </Section>

      <Section kicker="Want The Full Detail?" title={`More on ${config.label.toLowerCase()}`} className="bg-paper-dim/40">
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          This assessment gives you a quick, indicative read based on what you tell us — not a loan offer or a
          guaranteed amount. For the full picture on how {config.label.toLowerCase()} works, typical criteria and our
          process, see our{" "}
          <Link href={config.productHref} className="text-accent-dark underline">
            {config.label} guide
          </Link>
          .
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Would rather skip straight to a conversation?{" "}
          <Link href="/contact" className="text-accent-dark underline">
            Contact us directly
          </Link>{" "}
          or call{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-accent-dark underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{financeDisclaimer}</p>
      </Section>
    </>
  );
}
