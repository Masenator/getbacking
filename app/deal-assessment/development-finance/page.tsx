import type { Metadata } from "next";
import { DealAssessmentPageShell } from "@/components/DealAssessmentPageShell";
import { assessmentConfigs } from "@/lib/deal-assessment";
import { pageMetadata } from "@/lib/seo";

const config = assessmentConfigs["development-finance"];

export const metadata: Metadata = pageMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: "/deal-assessment/development-finance",
});

export default function DevelopmentAssessmentPage() {
  return <DealAssessmentPageShell type="development-finance" />;
}
