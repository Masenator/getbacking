import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  kicker,
  title,
  intro,
  children,
  className = "",
  as: As = "h2",
}: {
  kicker?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container>
        {(kicker || title) && (
          <div className="mb-10 max-w-2xl">
            {kicker && (
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-dark">
                {kicker}
              </p>
            )}
            {title && (
              <As className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                {title}
              </As>
            )}
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-muted">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
