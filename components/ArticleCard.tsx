import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col rounded-sm border border-line bg-paper p-6 transition-colors hover:border-accent"
    >
      <p className="font-display text-xs font-semibold uppercase tracking-wide text-accent-dark">
        {post.category}
      </p>
      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink group-hover:text-accent-dark">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted">
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
    </Link>
  );
}
