import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { productLinks } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-dark">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
        That page has gone missing. We haven&apos;t.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The page you&apos;re after doesn&apos;t exist or has moved. Here are
        a few places that might have what you need instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="ghost">
          Talk to a Broker
        </Button>
      </div>
      <div className="mt-12 grid w-full gap-3 sm:grid-cols-2">
        {productLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-sm border border-line p-4 text-sm font-medium text-ink hover:border-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Container>
  );
}
