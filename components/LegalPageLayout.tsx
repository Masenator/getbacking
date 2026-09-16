import { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageHero } from "./PageHero";
import { Section } from "./Section";

export function LegalPageLayout({
  title,
  breadcrumbName,
  breadcrumbPath,
  lastUpdated,
  children,
}: {
  title: string;
  breadcrumbName: string;
  breadcrumbPath: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Breadcrumbs items={[{ name: breadcrumbName, path: breadcrumbPath }]} />
      <PageHero eyebrow="Legal" title={title} />
      <Section>
        <div className="mb-8 max-w-3xl rounded-sm border border-accent-dark/30 bg-accent-light/40 p-4 text-sm text-ink-soft">
          <strong className="text-ink">Draft for review:</strong> this page is
          placeholder content prepared for launch planning. It has not yet
          been reviewed by a solicitor and should not be relied on as legal
          advice. See <code>COMPLIANCE.md</code> in the project repository.
        </div>
        <p className="mb-8 text-sm text-muted">Last updated: {lastUpdated}</p>
        <div className="prose-article max-w-3xl">{children}</div>
      </Section>
    </>
  );
}
