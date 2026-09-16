import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";

export function CTABanner({
  title = "Got a deal that needs backing?",
  intro = "Get an honest, indicative read on your deal in about two minutes — free, no obligation, then we'll call you to go through the detail.",
  primaryLabel = "Get Your Free Deal Assessment",
  primaryHref = "/deal-assessment",
}: {
  title?: string;
  intro?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-accent">
      <Container className="flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="max-w-xl font-display text-3xl font-bold text-ink">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-ink/80">{intro}</p>
          <p className="mt-3 text-sm text-ink/70">
            Prefer to just talk?{" "}
            <Link href="/contact" className="underline hover:no-underline">
              Contact us
            </Link>{" "}
            instead.
          </p>
        </div>
        <Button href={primaryHref} variant="secondary" className="shrink-0">
          {primaryLabel}
        </Button>
      </Container>
    </section>
  );
}
