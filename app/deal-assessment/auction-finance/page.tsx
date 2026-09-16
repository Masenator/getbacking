import type { Metadata } from "next";
import { DealAssessmentPageShell } from "@/components/DealAssessmentPageShell";
import { assessmentConfigs } from "@/lib/deal-assessment";
import { pageMetadata } from "@/lib/seo";

const config = assessmentConfigs["auction-finance"];

export const metadata: Metadata = pageMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: "/deal-assessment/auction-finance",
});

export default function AuctionAssessmentPage() {
  return <DealAssessmentPageShell type="auction-finance" />;
}
