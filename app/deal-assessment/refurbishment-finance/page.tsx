import type { Metadata } from "next";
import { DealAssessmentPageShell } from "@/components/DealAssessmentPageShell";
import { assessmentConfigs } from "@/lib/deal-assessment";
import { pageMetadata } from "@/lib/seo";

const config = assessmentConfigs["refurbishment-finance"];

export const metadata: Metadata = pageMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: "/deal-assessment/refurbishment-finance",
});

export default function RefurbishmentAssessmentPage() {
  return <DealAssessmentPageShell type="refurbishment-finance" />;
}
