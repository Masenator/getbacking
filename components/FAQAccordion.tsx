import type { FaqItem } from "@/lib/schema";

/**
 * Renders FAQs as native <details>/<summary> elements: fully accessible,
 * indexable (content is in the HTML, not hidden behind client JS), and
 * requires no JavaScript to expand/collapse.
 */
export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <div key={item.question}>
          <details className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-xl leading-none text-accent-dark transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <dd className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
              {item.answer}
            </dd>
          </details>
        </div>
      ))}
    </dl>
  );
}
