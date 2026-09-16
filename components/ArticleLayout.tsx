import { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { CTABanner } from "./CTABanner";
import { Button } from "./Button";
import { jsonLdScriptProps, articleSchema } from "@/lib/schema";
import type { BlogPost } from "@/lib/blog-posts";

export function ArticleLayout({ post, children }: { post: BlogPost; children: ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ]}
      />

      <article>
        <header className="border-b border-line bg-ink text-paper">
          <Container className="py-14 sm:py-20">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              {post.category}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-paper/70">
              <span>Get Backing</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readTime} read</span>
            </div>
          </Container>
        </header>

        <Container className="py-14 sm:py-20">
          <div className="prose-article max-w-3xl">{children}</div>

          {post.relatedProduct && (
            <div className="mt-12 max-w-3xl rounded-sm border border-line bg-paper-dim/40 p-6">
              <p className="font-display font-semibold text-ink">
                Looking into {post.relatedProduct.label.toLowerCase()}?
              </p>
              <p className="mt-1 text-sm text-muted">
                See how it works, typical criteria and FAQs on our dedicated page.
              </p>
              <div className="mt-4">
                <Button href={post.relatedProduct.href} variant="ghost">
                  Explore {post.relatedProduct.label}
                </Button>
              </div>
            </div>
          )}
        </Container>
      </article>

      <CTABanner />

      <script
        {...jsonLdScriptProps(
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/insights/${post.slug}`,
            datePublished: post.date,
          }),
        )}
      />
    </>
  );
}

