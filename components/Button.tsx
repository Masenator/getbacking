import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-dark hover:text-paper",
  secondary: "bg-ink text-paper hover:bg-ink-soft",
  ghost: "border border-ink text-ink hover:bg-ink hover:text-paper",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
