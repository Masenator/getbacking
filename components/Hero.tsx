import { Container } from "./Container";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <Container className="relative py-20 sm:py-28">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
          Bridging &amp; Development Finance Broker &middot; UK-Wide
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
          Property finance that&apos;s actually in your corner.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 sm:text-xl">
          Get Backing is the down-to-earth, no-nonsense finance broker for
          property developers who are tired of dealing with bankers. Whole-of-market
          bridging, development, refurbishment and auction finance — arranged
          by a broker who fights for your deal from start to finish.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Get Your Backing
          </Button>
          <Button href="/how-it-works" variant="ghost" className="border-paper/40 text-paper hover:bg-paper hover:text-ink">
            See How It Works
          </Button>
        </div>
      </Container>
    </section>
  );
}
