import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { financeDisclaimer, siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const title = "Contact Get Backing — Start Your Enquiry";
const description =
  "Tell Get Backing about your bridging, development, refurbishment or auction finance deal. We'll come back with a straight answer, usually the same working day.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Tell us about your deal"
        intro="Give us the details and we'll come back with a straight answer — usually the same working day. No forms for the sake of forms."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-sm border border-line bg-paper-dim/40 p-6">
              <h2 className="font-display text-lg font-bold text-ink">
                Prefer to talk?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Call us directly — no call centre, no phone tree.
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="mt-3 block font-display text-xl font-bold text-accent-dark"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-ink-soft hover:text-accent-dark"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-sm border border-line bg-paper-dim/40 p-6">
              <h2 className="font-display text-lg font-bold text-ink">
                Registered office
              </h2>
              <address className="mt-2 text-sm not-italic leading-relaxed text-muted">
                {siteConfig.legalName}
                <br />
                {siteConfig.streetAddress}
                <br />
                {siteConfig.addressLocality}, {siteConfig.postalCode}
                <br />
                United Kingdom
              </address>
            </div>
          </aside>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-muted">
          {financeDisclaimer}
        </p>
      </Section>
    </>
  );
}
