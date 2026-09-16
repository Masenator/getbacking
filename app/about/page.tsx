import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { pageMetadata } from "@/lib/seo";

const title = "About Get Backing — Why We Exist";
const description =
  "Get Backing was built for property developers tired of slow, jargon-heavy, computer-says-no lending. Here's who we are and how we work.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/about" });

const values = [
  {
    title: "Straight-talking",
    body: "We say what we mean, including when the answer is 'this deal doesn't work yet.' No jargon, no vague reassurance to keep you on the phone.",
  },
  {
    title: "On your side",
    body: "We work for you, not the lender. Our job is to get your deal in front of the people most likely to say yes, on terms that make sense for you.",
  },
  {
    title: "Whole-of-market",
    body: "We're not restricted to a panel of two or three lenders. Access to the wider market means more options and more competitive terms.",
  },
  {
    title: "Fast, because deals don't wait",
    body: "Property opportunities move quickly. We treat speed of response — ours and the lender's — as part of the service, not a nice-to-have.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <PageHero
        eyebrow="About Get Backing"
        title="Built for developers who are done with computer-says-no lending"
        intro="Get Backing is the down-to-earth, no-nonsense finance broker for property developers who need someone in their corner — not another faceless process."
      />

      <Section>
        <div className="prose-article max-w-3xl">
          <p>
            Too many good property deals stall for reasons that have nothing
            to do with whether they&apos;re actually good deals. A high street
            bank that takes six weeks to say no. A broker who disappears after
            the enquiry form. A lender whose criteria changed overnight and
            nobody told you.
          </p>
          <p>
            Get Backing exists to be the opposite of that. We&apos;re a
            bridging and development finance broker built around developers
            who are tired of dealing with bankers — people who need someone
            who understands the deal, picks up the phone, and fights their
            corner from enquiry through to completion.
          </p>
          <p>
            We&apos;re whole-of-market, so our advice isn&apos;t shaped by
            which lender we happen to have a relationship with. We&apos;re
            hands-on through valuation and legal work, because that&apos;s
            where deals actually slow down. And we&apos;ll always tell you the
            truth about whether a deal stacks up, even when it&apos;s not what
            you want to hear — because a broker who only tells you what
            you want to hear isn&apos;t actually on your side.
          </p>
        </div>
      </Section>

      <Section kicker="How We Work" title="What you can expect from us" className="bg-paper-dim/40">
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-sm border border-line bg-paper p-6">
              <h3 className="font-display text-lg font-bold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Coverage" title="Who we work with">
        <div className="prose-article max-w-3xl">
          <p>
            We arrange finance for SME property developers and investors
            across England and Wales, on deals ranging from a single bridging
            loan on an investment flat through to multi-unit development
            schemes. If you&apos;re developing or investing in property for
            business purposes, there&apos;s a good chance we can help.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Want to talk to a real person about your deal?"
        intro="No call centre, no scripts — just a broker who'll give you a straight answer."
      />
    </>
  );
}
