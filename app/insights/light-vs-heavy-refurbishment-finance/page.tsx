import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";
import { articleMetadata } from "@/lib/seo";

const post = getPostBySlug("light-vs-heavy-refurbishment-finance")!;

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
        &quot;Refurbishment&quot; covers everything from a new kitchen to a
        two-storey rear extension with a loft conversion on top &mdash; and
        lenders don&apos;t treat those two projects anywhere near the same
        way. Understanding which side of the line your project sits on, and
        why, will save you time when you start looking for finance.
      </p>

      <h2>The line lenders actually draw</h2>
      <p>
        It&apos;s not really about how much the works cost, or how long
        they&apos;ll take &mdash; though both play a part. The line most
        lenders draw is: <strong>does the work require building regulations
        sign-off, change the structure or layout, or need planning
        permission?</strong> If yes, it&apos;s heavy refurbishment. If the work
        is cosmetic and non-structural, it&apos;s light.
      </p>

      <h2>Light refurbishment, in practice</h2>
      <p>
        Light refurbishment typically covers:
      </p>
      <ul>
        <li>New kitchen or bathroom</li>
        <li>Redecoration, flooring, and general cosmetic updates</li>
        <li>Rewiring, replumbing or re-roofing like-for-like</li>
        <li>Minor repairs &mdash; damp treatment, window replacement, external repointing</li>
      </ul>
      <p>
        None of this typically needs planning permission or building
        regulations approval on its own. Because the project risk is lower
        and the timeline shorter, light refurbishment is usually funded as a
        single bridging facility, with the works cost included in the loan
        and released either upfront or against a simple schedule &mdash;
        without the monitoring surveyor process that heavier projects require.
        See our page on{" "}
        <Link href="/bridging-finance">bridging finance</Link> for how that
        type of facility is generally structured.
      </p>

      <h2>Heavy refurbishment, in practice</h2>
      <p>
        Heavy refurbishment typically covers:
      </p>
      <ul>
        <li>Extensions, including rear, side or roof extensions</li>
        <li>Loft conversions and basement conversions</li>
        <li>Internal structural changes &mdash; removing load-bearing walls, reconfiguring layouts</li>
        <li>Change of use, such as converting a single house into flats or an HMO</li>
      </ul>
      <p>
        Because this work carries more execution risk &mdash; things can go
        wrong structurally, planning conditions can bite, costs can run over
        &mdash; lenders treat it more like a small development. Expect staged
        drawdowns released against verified progress, sometimes with a
        monitoring surveyor involved, particularly as the project size grows.
        For genuinely substantial projects &mdash; ground-up rebuilds, large
        conversions, multi-unit schemes &mdash; the right product is usually{" "}
        <Link href="/development-finance">development finance</Link> rather
        than refurbishment finance at all.
      </p>

      <h2>Why the distinction actually matters to you</h2>
      <p>
        Getting the classification right before you apply saves real time.
        Apply to a light-refurbishment-only lender with a project that
        involves knocking through a structural wall, and you&apos;ll either
        get declined at valuation stage or asked to restructure the
        application &mdash; both of which cost you weeks you probably
        don&apos;t have if you&apos;re working to a purchase deadline.
      </p>
      <p>
        It also affects what you need ready at application: light
        refurbishment generally just needs a schedule of works and a
        contractor quote. Heavy refurbishment usually needs planning
        documentation (or evidence you&apos;re close to obtaining it),
        building control sign-off arrangements, and a more detailed cost
        breakdown, ideally reviewed by a quantity surveyor.
      </p>

      <h2>A worked example</h2>
      <p>
        Say you buy a two-bed flat that needs a new kitchen and bathroom, plus
        redecoration throughout, with a plan to refinance onto a buy-to-let
        mortgage once it&apos;s tenanted. That&apos;s squarely light
        refurbishment: a single bridging facility covering purchase and works,
        released largely upfront, with completion realistic inside a few
        months.
      </p>
      <p>
        Now say the same flat needs a loft conversion adding a third bedroom,
        plus the structural work to open up the ground floor. That&apos;s
        heavy refurbishment: you&apos;ll need planning and building
        regulations sorted (or well progressed), a realistic build programme,
        and a lender comfortable releasing funds in stages as work is
        verified &mdash; the same broad model as a smaller development deal.
      </p>

      <h2>Not sure which side of the line you&apos;re on?</h2>
      <p>
        Plenty of projects sit in a grey area &mdash; a loft conversion with no
        structural changes to the floors below, for example, might be treated
        differently by different lenders. Rather than guessing, describe the
        scope of works on our{" "}
        <Link href="/refurbishment-finance">refurbishment finance</Link> page
        or <Link href="/contact">get in touch directly</Link>, and we&apos;ll
        tell you honestly which route fits and which lenders are likely to
        say yes.
      </p>
    </ArticleLayout>
  );
}
