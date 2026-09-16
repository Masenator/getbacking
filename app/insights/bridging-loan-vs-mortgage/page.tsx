import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";
import { articleMetadata } from "@/lib/seo";

const post = getPostBySlug("bridging-loan-vs-mortgage")!;

export const metadata: Metadata = articleMetadata({
  title: post.metaTitle,
  description: post.description,
  path: `/insights/${post.slug}`,
  publishedTime: post.date,
});

export default function Page() {
  return (
    <ArticleLayout post={post}>
      <p>
        Ask most people what &quot;property finance&quot; means and they&apos;ll
        picture a mortgage: twenty-five years, monthly repayments, an income
        multiple. That&apos;s one tool in the box &mdash; but it&apos;s the
        wrong one for a surprising number of deals developers actually do.
        Bridging finance exists precisely for the situations where a mortgage
        can&apos;t move fast enough, or won&apos;t lend against the property at
        all in its current state.
      </p>

      <h2>What a mortgage is actually built for</h2>
      <p>
        A residential or buy-to-let mortgage is a long-term facility. Lenders
        assess it against sustained affordability &mdash; your income, or the
        property&apos;s rental yield &mdash; over a term that typically runs to
        20&ndash;30 years. The underwriting process reflects that: full income
        checks, credit history, and often a property that already meets
        mortgageable standards (a working kitchen and bathroom, no material
        disrepair, a saleable lease length).
      </p>
      <p>
        That process exists for good reason, but it&apos;s slow by design and
        it has hard edges. A property with no kitchen fitted, a short lease, or
        structural work outstanding generally won&apos;t qualify for a
        standard mortgage at all, regardless of how compelling the underlying
        deal is.
      </p>

      <h2>What bridging finance is built for</h2>
      <p>
        Bridging finance is short-term &mdash; typically a few weeks up to
        around 24 months &mdash; and interest is usually retained or rolled up
        rather than paid monthly. Critically, it&apos;s assessed primarily on
        the <strong>security property</strong> and your <strong>exit
        strategy</strong>, not a long-run affordability calculation. That&apos;s
        what allows it to move at a completely different speed, and to fund
        properties a mortgage lender wouldn&apos;t touch.
      </p>
      <p>
        This is why bridging loans turn up so often in specific, time-pressured
        situations: breaking a chain, buying at{" "}
        <Link href="/auction-finance">auction</Link>, or purchasing a property
        that needs work before it can be mortgaged conventionally &mdash; see
        our page on{" "}
        <Link href="/refurbishment-finance">refurbishment finance</Link> for
        how that specific case is structured.
      </p>

      <h2>Cost is a trade-off, not a flaw</h2>
      <p>
        Bridging finance generally costs more, month for month, than a
        mortgage. That&apos;s the trade-off for speed and flexibility &mdash;
        it isn&apos;t a sign that bridging is somehow a worse product, any more
        than paying more for next-day delivery is a flaw in the courier. The
        question isn&apos;t &quot;which is cheaper&quot; in isolation, it&apos;s
        &quot;which actually gets this specific deal done, and does the maths
        work over the short period you&apos;ll actually hold the debt.&quot;
      </p>
      <p>
        A bridge held for four months while you complete light works and
        refinance onto a mortgage is a different proposition entirely from
        comparing twelve months of bridging interest against twelve months of
        mortgage interest. Run the numbers against your actual timeline, not
        an annualised comparison that doesn&apos;t reflect how you&apos;ll use
        the facility.
      </p>

      <h2>The exit is what makes or breaks a bridging deal</h2>
      <p>
        Because a mortgage is a long-term commitment, lenders spend most of
        their underwriting effort on affordability. Because a bridge is
        short-term, lenders spend most of their underwriting effort on your{" "}
        <strong>exit</strong> &mdash; how, realistically, will the loan be
        repaid? Common exits are:
      </p>
      <ul>
        <li>Sale of the property, once works are complete or the market timing suits</li>
        <li>Refinance onto a standard mortgage once the property qualifies (works finished, lease extended, income evidenced)</li>
        <li>Refinance onto another commercial facility, such as a development exit onto an investment loan</li>
      </ul>
      <p>
        A bridging application without a credible exit is the single most
        common reason terms come back worse than expected, or a deal
        doesn&apos;t get funded at all. If you can&apos;t articulate, in one or
        two sentences, exactly how the loan will be repaid, that&apos;s the
        first thing to fix before you apply.
      </p>

      <h2>So which do you actually need?</h2>
      <p>
        As a rough guide: if the property already qualifies for a mortgage,
        you have the time for a standard process, and you&apos;re holding for
        the long term, a mortgage is almost always the cheaper, more
        appropriate route. If you&apos;re racing a deadline, the property
        doesn&apos;t currently qualify for mainstream lending, or you need
        certainty of funds to compete with cash buyers, bridging finance is
        doing a job a mortgage simply can&apos;t.
      </p>
      <p>
        Plenty of deals use both, in sequence: a bridge to complete the
        purchase and fund the works, followed by a mortgage refinance once the
        property is in a lettable or saleable state. If that sounds like your
        situation, our{" "}
        <Link href="/bridging-finance">bridging finance</Link> page covers how
        that&apos;s typically structured, or you can{" "}
        <Link href="/contact">get in touch</Link> and we&apos;ll talk it
        through against your actual numbers.
      </p>
    </ArticleLayout>
  );
}
