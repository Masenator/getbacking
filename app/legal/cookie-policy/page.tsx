import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "Cookie Policy";
const description = "How Get Backing uses cookies and similar technologies on this website.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/legal/cookie-policy" });

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      breadcrumbName="Cookie Policy"
      breadcrumbPath="/legal/cookie-policy"
      lastUpdated="September 2026 (placeholder)"
    >
      <p>
        This policy explains how {siteConfig.legalName} uses cookies and
        similar technologies on getbacking.co.uk.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They&apos;re widely used to make websites work, work more
        efficiently, and to provide information to the site owner.
      </p>

      <h2>Current status of this site</h2>
      <p>
        As published, this website does not set any analytics, marketing or
        non-essential cookies. If and when analytics (such as a
        privacy-conscious tool or Google Analytics), advertising pixels, or a
        live chat tool are added, this policy will be updated to list them
        individually, and a cookie consent banner will be added where
        required by law before any non-essential cookie is set.
      </p>

      <h2>Strictly necessary cookies</h2>
      <p>
        We may use cookies or similar local storage that are strictly
        necessary for the website to function correctly (for example,
        remembering that you&apos;ve dismissed a notice). These don&apos;t
        require consent under UK cookie law (the Privacy and Electronic
        Communications Regulations, alongside UK GDPR).
      </p>

      <h2>Your choices</h2>
      <p>
        Most browsers let you refuse or delete cookies via their settings.
        Blocking all cookies may affect the functionality of some websites,
        though this site is designed to work without any non-essential
        cookies.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
