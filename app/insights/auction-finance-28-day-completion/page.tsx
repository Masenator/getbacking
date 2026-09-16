import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";
import { articleMetadata } from "@/lib/seo";

const post = getPostBySlug("auction-finance-28-day-completion")!;

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
        Buy a property at a traditional UK property auction and, the moment
        the hammer falls, the clock starts. Exchange happens that day. Under
        most traditional auction terms, you then have <strong>28 days</strong>{" "}
        to complete &mdash; not because anyone thinks that&apos;s generous, but
        because it&apos;s the standard the industry has settled on, and it
        isn&apos;t negotiable after the fact.
      </p>

      <h2>What actually happens if you miss the deadline</h2>
      <p>
        Miss completion and, depending on the auction house&apos;s terms, you
        can typically expect to lose your deposit &mdash; commonly 10% of the
        purchase price &mdash; and potentially face further liability if the
        seller has to resell the property at a lower price. Auction contracts
        are deliberately unforgiving on this point; it&apos;s what gives
        sellers confidence to auction a property in the first place. There is
        generally very little room for negotiation once you&apos;ve exchanged.
      </p>
      <p>
        This is the single biggest difference between buying at auction and
        buying through a normal agreed sale, where a slipping completion date
        is an inconvenience. At auction, it&apos;s a contractual failure with
        real financial consequences.
      </p>

      <h2>Why funding needs to be sorted before you bid, not after</h2>
      <p>
        The most common reason auction purchases run into trouble isn&apos;t
        that the finance couldn&apos;t be arranged &mdash; it&apos;s that
        arranging it only started <em>after</em> the auction, leaving no room
        for delay in valuation or legal work. By the time you&apos;ve won the
        lot, exchanged and paid your deposit, you&apos;ve already committed;
        the only question left is whether everything else can move fast enough
        to keep up.
      </p>
      <p>
        The fix is straightforward: get an Agreement in Principle in place{" "}
        <em>before</em> you bid, based on the lot&apos;s guide price and
        details. That doesn&apos;t just protect your timeline &mdash; it means
        you&apos;re bidding with a realistic understanding of what you can
        actually raise against the property, rather than finding out
        afterwards that the numbers don&apos;t work.
      </p>

      <h2>Traditional vs modern method of auction</h2>
      <p>
        It&apos;s worth knowing which type of auction sale you&apos;re
        actually buying under, because the timeline differs:
      </p>
      <ul>
        <li>
          <strong>Traditional (unconditional) auction</strong>: exchange
          happens on the day of the auction, with completion typically required
          within 28 days.
        </li>
        <li>
          <strong>Modern method of auction (conditional)</strong>: you pay a
          non-refundable reservation fee on the day, with a longer window
          &mdash; commonly around 56 days &mdash; to exchange and complete.
        </li>
      </ul>
      <p>
        Either way, the deadline is fixed at the point of sale. Read the
        specific auction house&apos;s legal pack and terms carefully &mdash;
        don&apos;t assume the timeline based on what a similar auction ran to
        previously.
      </p>

      <h2>What actually has to happen in that window</h2>
      <p>
        Twenty-eight days sounds tight because it is &mdash; but it&apos;s
        workable when everyone involved is moving from day one:
      </p>
      <ul>
        <li>Valuation instructed immediately, ideally the same day as exchange</li>
        <li>Your solicitor briefed in advance and ready to act at short notice, having already reviewed the legal pack</li>
        <li>Lender-side legal work moving in parallel, not queued up behind valuation</li>
        <li>Any issues in the legal pack &mdash; title, searches, leasehold consents &mdash; flagged and addressed early, not discovered in week three</li>
      </ul>
      <p>
        The deals that complete comfortably inside 28 days are almost always
        the ones where the legal pack was reviewed <em>before</em> the auction,
        not after.
      </p>

      <h2>Buying a lot that needs work</h2>
      <p>
        A large share of auction stock is sold precisely because it needs
        work &mdash; which is exactly why it doesn&apos;t qualify for
        mainstream mortgage finance and ends up at auction rather than on the
        open market. Auction finance gets you to completion; what happens next
        depends on the scope of work involved. Light cosmetic work is often
        funded alongside the purchase as a single facility &mdash; see our
        guide to{" "}
        <Link href="/insights/light-vs-heavy-refurbishment-finance">
          light vs heavy refurbishment finance
        </Link>
        . More substantial structural work is usually a separate conversation
        once you own the property.
      </p>

      <h2>Preparing to bid</h2>
      <p>
        Before you register a paddle number, you should ideally have: a
        realistic view of the property&apos;s value (not just the guide
        price, which is often set deliberately low to attract interest), your
        deposit and legal costs ready to move, a solicitor briefed and
        available, and an Agreement in Principle for your funding. Get those
        four things in place and the 28-day clock stops being a source of
        anxiety and just becomes a schedule to work to.
      </p>
      <p>
        If you&apos;ve got a lot in mind, or an auction coming up, see our{" "}
        <Link href="/auction-finance">auction finance</Link> page or{" "}
        <Link href="/contact">get in touch</Link> before you bid, not after.
      </p>
    </ArticleLayout>
  );
}
