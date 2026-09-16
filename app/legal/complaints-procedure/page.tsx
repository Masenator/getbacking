import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "Complaints Procedure";
const description = "How to raise a complaint with Get Backing and what to expect from our process.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/legal/complaints-procedure" });

export default function ComplaintsProcedurePage() {
  return (
    <LegalPageLayout
      title="Complaints Procedure"
      breadcrumbName="Complaints Procedure"
      breadcrumbPath="/legal/complaints-procedure"
      lastUpdated="September 2026 (placeholder)"
    >
      <p>
        We want to know if something has gone wrong. This page explains how
        to raise a complaint and what you can expect from us in response.
      </p>

      <h2>How to complain</h2>
      <p>
        Contact us with as much detail as possible — what happened, when,
        and what outcome you&apos;re looking for:
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </li>
        <li>Phone: {siteConfig.phoneDisplay}</li>
        <li>
          Post: {siteConfig.legalName}, {siteConfig.streetAddress},{" "}
          {siteConfig.addressLocality}, {siteConfig.postalCode}
        </li>
      </ul>

      <h2>What happens next</h2>
      <ul>
        <li>We&apos;ll acknowledge your complaint promptly, and aim to do so within 3 working days.</li>
        <li>We&apos;ll investigate the details and aim to provide a full written response within 14 working days. If a complaint is more complex, we&apos;ll tell you and give a revised timeframe.</li>
        <li>Our response will explain our findings and, where appropriate, what we&apos;ll do to put things right.</li>
      </ul>

      <h2>Regulatory status and external escalation</h2>
      <p>
        Get Backing arranges unregulated commercial finance for business
        purposes (see our Terms of Business), so this activity does not fall
        under Financial Conduct Authority regulation and complaints about it
        are not eligible for referral to the Financial Ombudsman Service in
        the way a complaint about a regulated mortgage would be.{" "}
        <strong>
          [Placeholder — to be confirmed with a solicitor: what, if any,
          external or alternative dispute resolution route applies to
          complaints about this business, and whether that needs to be
          named here.]
        </strong>{" "}
        Until that&apos;s confirmed, please raise any complaint with us
        directly using the details above and we will do our best to resolve
        it fairly and promptly.
      </p>
    </LegalPageLayout>
  );
}
