import Link from "next/link";
import { Container } from "./Container";
import { jsonLdScriptProps, breadcrumbSchema, type Crumb } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <div className="border-b border-line bg-paper-dim/40">
      <Container>
        <nav aria-label="Breadcrumb" className="py-3">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted">
            {full.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center gap-1">
                {index > 0 && <span aria-hidden="true">/</span>}
                {index === full.length - 1 ? (
                  <span aria-current="page" className="font-medium text-ink">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="hover:text-accent-dark">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
      <script {...jsonLdScriptProps(breadcrumbSchema(full))} />
    </div>
  );
}
