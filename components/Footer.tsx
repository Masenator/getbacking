import Link from "next/link";
import { Container } from "./Container";
import {
  legalNavLinks,
  mainNavLinks,
  productLinks,
  siteConfig,
  financeDisclaimer,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold">
            Get<span className="text-accent">Backing</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-paper/70">
            {siteConfig.tagline} Whole-of-market bridging and development
            finance for UK property developers, arranged by a broker who
            actually picks up the phone.
          </p>
          <address className="mt-4 space-y-1 text-sm not-italic text-paper/70">
            <p>{siteConfig.legalName}</p>
            <p>
              {siteConfig.streetAddress}, {siteConfig.addressLocality},{" "}
              {siteConfig.postalCode}
            </p>
            <p>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>{" "}
              &middot;{" "}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Finance solutions">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Finance Solutions
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {legalNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="py-6">
          <p className="max-w-4xl text-xs leading-relaxed text-paper/50">
            {financeDisclaimer}
          </p>
          <p className="mt-4 text-xs text-paper/40">
            &copy; {year} {siteConfig.legalName}. Registered in England and
            Wales, company number {siteConfig.companiesHouseNumber}
            (placeholder). Registered office: {siteConfig.streetAddress},{" "}
            {siteConfig.addressLocality}, {siteConfig.postalCode}.
          </p>
        </Container>
      </div>
    </footer>
  );
}
