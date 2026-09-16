import Link from "next/link";

export function ProductCard({
  href,
  title,
  description,
  points,
}: {
  href: string;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-sm border border-line bg-paper p-6 transition-colors hover:border-accent"
    >
      <h3 className="font-display text-xl font-bold text-ink group-hover:text-accent-dark">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden="true" className="text-accent-dark">
              &#8594;
            </span>
            {point}
          </li>
        ))}
      </ul>
      <span className="mt-5 font-display text-sm font-semibold text-accent-dark">
        Explore {title} &rarr;
      </span>
    </Link>
  );
}
