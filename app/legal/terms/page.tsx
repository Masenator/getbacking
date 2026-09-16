import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { financeDisclaimer, siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "Terms of Business";
const description = "The terms on which Get Backing provides bridging and development finance broking services, and terms of use for this website.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/legal/terms" });

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Business & Website Use"
      breadcrumbName="Terms of Business"
      breadcrumbPath="/legal/terms"
      lastUpdated="September 2026 (placeholder)"
    >
      <h2>1. About us and the nature of our service</h2>
      <p>
        {siteConfig.legalName} (&quot;Get Backing&quot;, &quot;we&quot;,
        &quot;us&quot;) is a commercial finance broker. We introduce and
        arrange bridging, development, refurbishment and auction finance
        secured against investment and development property, for business
        purposes. {financeDisclaimer}
      </p>

      <h2>2. Not a regulated mortgage contract</h2>
      <p>
        The finance we arrange is not a regulated mortgage contract and does
        not fall within the scope of FCA mortgage regulation. We do not
        arrange lending secured against a borrower&apos;s own home. If your
        enquiry falls outside the scope of what we arrange, we will tell you.
      </p>

      <h2>3. Our role</h2>
      <p>
        We act as a broker, introducing your enquiry to lenders and other
        relevant professionals (such as valuers and solicitors) and
        supporting the transaction through to completion. We do not lend
        money ourselves, and we do not guarantee that any lender will offer
        finance, or on what terms.
      </p>

      <h2>4. Fees</h2>
      <p>
        Any fees payable to us for arranging finance will be agreed with you
        in writing before we begin work on your enquiry. We may also receive
        commission or procuration fees from lenders in connection with
        introducing business to them; where relevant, this will be disclosed
        to you.
      </p>

      <h2>5. No advice on regulated activities</h2>
      <p>
        Nothing on this website or provided by us constitutes financial,
        legal, tax or investment advice. You should take independent
        professional advice before entering into any finance agreement.
      </p>

      <h2>6. Accuracy of information</h2>
      <p>
        Any rates, terms, criteria or timescales referenced on this website
        or in correspondence with us are indicative and subject to status,
        lender criteria, valuation and independent legal advice. They are not
        an offer of finance and are not guaranteed.
      </p>

      <h2>7. Website use</h2>
      <p>
        This website and its content are provided &quot;as is&quot; for
        general information purposes. We take reasonable care to keep content
        accurate and up to date but make no warranty as to its completeness
        or suitability for your particular circumstances. You should not rely
        on website content as a substitute for a conversation with us about
        your specific deal.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we exclude liability for any indirect
        or consequential loss arising from use of this website. Nothing in
        these terms excludes or limits liability that cannot lawfully be
        excluded or limited.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales, and any
        disputes are subject to the exclusive jurisdiction of the courts of
        England and Wales.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
