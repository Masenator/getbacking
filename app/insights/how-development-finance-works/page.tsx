import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";
import { articleMetadata } from "@/lib/seo";

const post = getPostBySlug("how-development-finance-works")!;

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
        Development finance confuses a lot of first-time developers because
        it doesn&apos;t behave like any other loan they&apos;ve used. It
        isn&apos;t a lump sum. It isn&apos;t assessed on your income. And the
        figure everyone talks about &mdash; GDV &mdash; isn&apos;t even the
        number the loan amount is based on, most of the time. Here&apos;s how
        it actually fits together.
      </p>

      <h2>Two numbers drive every development loan</h2>
      <p>
        Development lenders look at your scheme through two lenses at once:
      </p>
      <ul>
        <li>
          <strong>Cost</strong> &mdash; the total cost to deliver the scheme:
          land or purchase price, build cost, professional fees, contingency
          and finance costs.
        </li>
        <li>
          <strong>Gross Development Value (GDV)</strong> &mdash; what the
          finished scheme will realistically be worth, based on comparable
          evidence, once every unit is built and sold (or valued, if you&apos;re
          holding).
        </li>
      </ul>
      <p>
        Facilities are typically expressed as a percentage of cost (loan to
        cost) and a percentage of GDV (loan to GDV), and lenders generally
        fund up to whichever of the two produces the lower amount. Get your
        build cost appraisal wrong &mdash; too optimistic on cost, or too
        bullish on end value &mdash; and it shows up immediately in how much
        a lender will actually advance.
      </p>

      <h2>Why the loan arrives in two parts, not one</h2>
      <p>
        Unlike a bridging loan, which is usually released as a single amount
        on completion, development finance is split:
      </p>
      <ul>
        <li>
          A <strong>day-one tranche</strong> to fund the land or property
          purchase (if you don&apos;t already own the site).
        </li>
        <li>
          A <strong>build facility</strong>, released in stages as
          construction actually happens.
        </li>
      </ul>
      <p>
        The build facility isn&apos;t released on trust or against invoices
        alone. Almost every development lender appoints a{" "}
        <strong>monitoring surveyor</strong> (sometimes called an
        Employer&apos;s Agent or Independent Monitoring Surveyor) whose job is
        to independently verify that work has actually progressed to the
        stage claimed, before the next drawdown is authorised.
      </p>

      <h2>What a drawdown actually involves</h2>
      <p>
        In practice: your build programme sets out expected stages (say,
        substructure, superstructure, roof, first fix, second fix,
        completion). As each stage is reached, the monitoring surveyor visits
        site, confirms progress against the programme and cost plan, and signs
        off the drawdown request. The lender then releases funds, usually
        within a matter of days of sign-off.
      </p>
      <p>
        This is the step that catches out developers who haven&apos;t done it
        before: if your programme is unrealistic, or you haven&apos;t built in
        time for the monitoring surveyor&apos;s visits and sign-off, drawdowns
        get delayed &mdash; which then delays paying your contractor, which
        delays the build. A realistic programme, built with this process in
        mind, is one of the most underrated factors in a smooth development
        project.
      </p>

      <h2>What lenders want to see before they say yes</h2>
      <ul>
        <li>Planning permission in place, or a strong, evidenced route to obtaining it</li>
        <li>A QS-reviewed or otherwise credible build cost appraisal, with sensible contingency</li>
        <li>A build team or contractor with a track record appropriate to the scheme&apos;s size</li>
        <li>A defensible GDV, backed by genuine comparable evidence rather than optimism</li>
        <li>Meaningful equity or land value contribution from you &mdash; lenders want to see you&apos;re exposed to the deal too</li>
      </ul>

      <h2>Planning your exit before you&apos;ve laid a brick</h2>
      <p>
        Development finance is short-to-medium term, and the exit needs to be
        thought through from day one, not at practical completion. Most
        schemes exit one of two ways: sale of the finished units (sometimes
        with pre-sales agreed during the build to de-risk the exit), or
        refinance onto a term investment facility if you&apos;re holding to
        let. Either way, lenders want to see that thinking reflected in your
        appraisal from the outset.
      </p>

      <h2>When development finance isn&apos;t the right tool</h2>
      <p>
        Not every project that involves &quot;building work&quot; needs a
        development facility. A cosmetic refresh or even a fairly substantial
        internal refurbishment can often be funded more simply &mdash; see our
        guide to{" "}
        <Link href="/insights/light-vs-heavy-refurbishment-finance">
          light vs heavy refurbishment finance
        </Link>{" "}
        for where that line typically falls. Development finance earns its
        complexity on schemes involving genuine new build, major conversion,
        or structural work that changes the footprint or use of a building.
      </p>
      <p>
        If you&apos;ve got a scheme and want an honest view of whether it&apos;s
        fundable, and roughly what shape the facility would take, see our{" "}
        <Link href="/development-finance">development finance</Link> page or{" "}
        <Link href="/contact">send us the numbers</Link> directly.
      </p>
    </ArticleLayout>
  );
}
