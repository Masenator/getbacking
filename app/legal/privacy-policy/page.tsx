import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "Privacy Policy";
const description = "How Get Backing collects, uses and protects your personal data.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/legal/privacy-policy" });

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      breadcrumbName="Privacy Policy"
      breadcrumbPath="/legal/privacy-policy"
      lastUpdated="September 2026 (placeholder)"
    >
      <p>
        {siteConfig.legalName} (&quot;Get Backing&quot;, &quot;we&quot;,
        &quot;us&quot;) is committed to protecting your privacy. This policy
        explains what personal data we collect when you use this website or
        enquire about our services, how we use it, and your rights under UK
        data protection law, including the UK GDPR and the Data Protection
        Act 2018.
      </p>

      <h2>Who we are</h2>
      <p>
        {siteConfig.legalName}, a company registered in England and Wales
        (company number {siteConfig.companiesHouseNumber}, placeholder),
        registered office {siteConfig.streetAddress},{" "}
        {siteConfig.addressLocality}, {siteConfig.postalCode}, is the data
        controller for the personal data described in this policy.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Enquiry data</strong>: name, company, email address, phone
          number, and details of your finance enquiry, submitted via our
          contact form or by email or phone.
        </li>
        <li>
          <strong>Free Deal Assessment data</strong>: if you use our Free
          Deal Assessment tool, we collect your full name, mobile number,
          email address, and the deal details you enter (for example
          property value, loan amount, works cost, or planning status,
          depending on the finance type), plus anything you add in the
          optional free-text field. The indicative result shown to you is
          calculated in your browser from your own answers using simple,
          published rules of thumb — it is not based on any additional data
          about you, is not a credit decision, and is not shared with any
          credit reference agency.
        </li>
        <li>
          <strong>Usage data</strong>: standard technical information such as
          IP address, browser type and pages visited, typically collected via
          analytics tools once installed (see &quot;Cookies&quot; below and
          our Cookie Policy).
        </li>
      </ul>

      <h2>How we use your data</h2>
      <ul>
        <li>To respond to your enquiry and assess potential finance options</li>
        <li>To communicate with you about your enquiry or application</li>
        <li>Where relevant, to share necessary details with lenders or other professionals involved in arranging finance, with your knowledge</li>
        <li>To understand and improve how visitors use this website</li>
        <li>To comply with our legal and regulatory obligations</li>
      </ul>

      <h2>Legal basis for processing</h2>
      <p>
        We process enquiry data on the basis of taking steps at your request
        prior to entering into a contract, and our legitimate interest in
        responding to enquiries about our services. Where we rely on
        cookies or similar technology that isn&apos;t strictly necessary, we
        will ask for your consent — see our Cookie Policy.
      </p>

      <h2>Sharing your data</h2>
      <p>
        We may share relevant enquiry details with lenders, valuers,
        solicitors and other parties reasonably involved in progressing a
        finance enquiry or application, and with service providers who
        support our operations (for example, email and hosting providers)
        under appropriate data protection terms. We do not sell your personal
        data.
      </p>
      <p>
        Submissions from our contact form and Free Deal Assessment tool are
        processed by <strong>Formspree</strong>, a third-party form-to-email
        service, purely to deliver your enquiry to our inbox by email — we do
        not maintain a separate database of submissions ourselves. Formspree
        may process and briefly store submission data on its own servers as
        part of providing that service; see{" "}
        <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Formspree&apos;s privacy policy
        </a>{" "}
        for details. If we change form processor, this section will be
        updated to name the new provider.
      </p>

      <h2>How long we keep your data</h2>
      <p>
        We retain enquiry and client data for as long as necessary to provide
        our services and to meet legal, accounting and regulatory retention
        requirements, after which it is securely deleted or anonymised.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK data protection law you have the right to access, correct,
        delete, or restrict the use of your personal data, to object to
        certain processing, and to data portability in some circumstances. To
        exercise these rights, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>Complaints</h2>
      <p>
        If you have concerns about how we handle your personal data, please
        contact us first. You also have the right to lodge a complaint with
        the UK&apos;s data protection regulator, the Information
        Commissioner&apos;s Office (ICO), at ico.org.uk.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or by
        post to our registered office above.
      </p>
    </LegalPageLayout>
  );
}
