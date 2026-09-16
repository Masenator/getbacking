import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { mainNavLinks, productLinks, siteConfig } from "@/lib/site-config";

/**
 * Header is a pure server component. The "Solutions" dropdown and the
 * mobile menu both use native <details>/<summary> so the whole nav works
 * with zero client-side JavaScript — good for performance and for the
 * "minimal client JS" requirement.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-ink"
        >
          Get<span className="text-accent">Backing</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-sm px-3 py-2 font-medium text-ink hover:text-accent-dark [&::-webkit-details-marker]:hidden">
              Finance Solutions
              <svg
                aria-hidden="true"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                className="mt-0.5"
              >
                <path d="M0 0l5 6 5-6z" fill="currentColor" />
              </svg>
            </summary>
            <div className="absolute left-0 top-full z-10 mt-2 w-80 rounded-sm border border-line bg-paper p-2 shadow-lg">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-sm px-3 py-2.5 hover:bg-paper-dim"
                >
                  <span className="block font-display font-semibold text-ink">
                    {link.label}
                  </span>
                  <span className="block text-sm text-muted">
                    {link.description}
                  </span>
                </Link>
              ))}
            </div>
          </details>

          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2 font-medium text-ink hover:text-accent-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="font-display text-sm font-semibold text-ink hover:text-accent-dark"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Button href="/deal-assessment" variant="primary">
            Free Deal Assessment
          </Button>
        </div>

        {/* Mobile menu */}
        <details className="lg:hidden">
          <summary
            aria-label="Open menu"
            className="flex cursor-pointer list-none items-center justify-center rounded-sm border border-ink p-2 [&::-webkit-details-marker]:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="absolute inset-x-0 top-20 z-40 border-b border-line bg-paper p-5 shadow-lg">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              <p className="px-2 pb-1 pt-2 font-display text-xs font-semibold uppercase tracking-wide text-muted">
                Finance Solutions
              </p>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-2 py-2 font-medium text-ink hover:bg-paper-dim"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-line" />
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-2 py-2 font-medium text-ink hover:bg-paper-dim"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="font-display font-semibold text-ink"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
                <Button href="/deal-assessment" variant="primary" className="w-full">
                  Free Deal Assessment
                </Button>
              </div>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
