import type { Metadata } from "next";
import { DealAssessmentPageShell } from "@/components/DealAssessmentPageShell";
import { assessmentConfigs } from "@/lib/deal-assessment";
import { pageMetadata } from "@/lib/seo";

const config = assessmentConfigs["second-charge-finance"];

export const metadata: Metadata = pageMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: "/deal-assessment/second-charge-finance",
});

export default function SecondChargeAssessmentPage() {
  return <DealAssessmentPageShell type="second-charge-finance" />;
}
