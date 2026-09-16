import { Container } from "./Container";
import { Button } from "./Button";

export function CTABanner({
  title = "Got a deal that needs backing?",
  intro = "Tell us the details and we'll come back to you — usually the same working day — with a straight answer on how we can fund it.",
  primaryLabel = "Start Your Enquiry",
  primaryHref = "/contact",
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
        </div>
        <Button href={primaryHref} variant="secondary" className="shrink-0">
          {primaryLabel}
        </Button>
      </Container>
    </section>
  );
}
