# Get Backing — Marketing Website

Marketing website for [Get Backing](https://www.getbacking.co.uk), a UK
bridging and development finance broker for property developers.

## Stack

- **Next.js 15** (App Router), fully statically generated via
  `output: "export"` — no server runtime, no database, no CMS.
- **TypeScript**, strict mode.
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css` —
  no `tailwind.config.js` needed).
- **next/font** for optimised, self-hosted Google Fonts (Space Grotesk for
  headings, Inter for body copy) — no render-blocking font requests.
- Content lives as TypeScript/TSX in the repo (page copy, blog posts, FAQs,
  nav config) — no MDX pipeline or headless CMS. With four blog posts and
  a handful of service pages, a CMS isn't earned yet; revisit if the
  Insights hub grows past what's comfortable to maintain as code.

## Why static export

The brief calls for a lean, mostly no-code-adjacent marketing site with no
backend to run or pay for. `output: "export"` in `next.config.ts` produces
plain HTML/CSS/JS in `out/` at build time — it can be hosted on Vercel,
Netlify, S3+CloudFront, or any static host, with no serverless functions or
Node runtime required. The trade-off: no server-side rendering per request,
no API routes, no ISR. None of those are needed for a marketing site with a
handful of pages and a `mailto:`-based contact form.

If the site later needs something dynamic (a real form backend, on-demand
personalisation, etc.), the cleanest path is to drop `output: "export"` and
deploy as a normal Next.js app on Vercel — everything else in this repo
(Metadata API, components, content) is unaffected by that switch.

## Project structure

```
app/                     Route segments (App Router). One folder per URL.
  layout.tsx              Root layout: fonts, header/footer, site-wide JSON-LD
  page.tsx                 Home
  bridging-finance/        }
  development-finance/     } Service/landing pages, one per finance product
  refurbishment-finance/   }
  auction-finance/         }
  how-it-works/            Process page
  about/                   About / positioning
  faqs/                    General FAQs (+ FAQPage JSON-LD)
  insights/                Blog hub + one folder per article (static routes)
  contact/                 Enquiry form
  legal/                   Privacy, terms, cookies, complaints (draft copy)
  sitemap.ts               Generates /sitemap.xml
  robots.ts                Generates /robots.txt
  not-found.tsx             404 page

components/               Reusable UI (Header, Footer, cards, FAQ accordion,
                           breadcrumbs, CTA banner, contact form, etc.)

lib/
  site-config.ts           Single source of truth: brand name, contact
                            details, nav links, legal disclaimer text
  blog-posts.ts             Blog post manifest (metadata for all articles)
  schema.ts                 JSON-LD builders (Organization, Breadcrumb, FAQ,
                             Service, Article)
  seo.ts                     Per-page Metadata builders (canonical + full
                              Open Graph/Twitter, so nothing gets dropped —
                              see comment in the file for why this exists)

public/                   Favicon, logo and OG image (placeholder SVGs —
                           see "Before this goes live" below)
```

## Running locally

Requires Node 20+.

```bash
npm install
npm run dev        # http://localhost:3000, hot reload
```

Other scripts:

```bash
npm run build      # production build + static export to out/
npm run start      # serve the last `next build` output (non-export mode only)
npm run lint        # ESLint (next/core-web-vitals + next/typescript)
npm run typecheck   # tsc --noEmit
```

`npm run build` runs the full static export — the output lands in `out/`
(gitignored) as plain HTML/CSS/JS. You can sanity-check it locally with any
static file server, e.g. `npx serve out`.

## Deploying to Vercel

This repo is Vercel-ready out of the box:

1. Import the GitHub repo into a new Vercel project.
2. Framework preset: Next.js (auto-detected). No environment variables are
   required for the current build.
3. Vercel will run `next build` and serve the static export automatically —
   no additional configuration needed.
4. Point the custom domain (`getbacking.co.uk` / `www.getbacking.co.uk`) at
   the Vercel project and set up DNS per Vercel's instructions.

Because the site is a static export, it will also work unmodified on any
static host if Vercel isn't the final choice — that's a deliberate
reversibility decision, not a hedge against Vercel specifically.

## SEO implementation

- **Metadata API**: every route exports unique `title`/`description` via
  `lib/seo.ts` helpers (`pageMetadata` / `articleMetadata`), with canonical
  URLs and full Open Graph + Twitter card data on every page (see the
  code comment in `lib/seo.ts` — Next.js does *not* deep-merge nested
  `openGraph` objects between layout and page, so every page builds a
  complete object rather than a partial override).
- **Structured data (JSON-LD)**: `Organization`/`FinancialService` +
  `WebSite` site-wide (root layout); `BreadcrumbList` on every interior
  page; `FAQPage` on the FAQs page and all four product pages; `Service`
  schema on each product page; `Article` schema on each blog post. See
  `lib/schema.ts`. None of these claim or imply FCA authorisation — see
  `COMPLIANCE.md`.
- **`sitemap.xml` / `robots.txt`**: generated via Next.js's `app/sitemap.ts`
  and `app/robots.ts` metadata route handlers (statically exported).
- **Semantic HTML & headings**: one `<h1>` per page, landmark regions
  (`header`, `nav`, `main`, `footer`), FAQ content rendered as native
  `<details>/<summary>` so it's indexable and works without JavaScript.
- **Performance**: fonts loaded via `next/font` (self-hosted, no extra
  DNS/connection, `display: swap`); the header's dropdown and mobile menu
  use `<details>/<summary>` instead of client JS; the only client component
  on the site is the contact form. First Load JS is ~103–108 kB across every
  route (mostly the Next.js/React runtime baseline).
- **Accessibility**: visible focus rings on all interactive elements, a
  skip-to-content link, semantic landmarks, and a colour palette checked
  for WCAG AA contrast (see `app/globals.css` comment on `--color-accent-dark`).

## Content & keyword strategy

Service pages are written around distinct, differentiated search intent
rather than one template reused four times:

- **Bridging Finance** — `bridging loan UK`, `bridging finance broker`
- **Development Finance** — `development finance UK`, `property development
  loan`, GDV/drawdown-related long-tail
- **Refurbishment Finance** — `refurbishment bridging loan`, `light/heavy
  refurbishment finance`
- **Auction Finance** — `auction finance UK`, `28 day completion`

Each product page has its own definition, use cases, structure, criteria,
process and FAQs — deliberately avoiding templated/thin duplicate content,
which would otherwise cannibalise rankings across four near-identical pages.
The four Insights articles target specific long-tail, informational queries
(e.g. "bridging loan vs mortgage") and cross-link back to the relevant
product page and to each other, reinforcing topical relevance without
resorting to keyword stuffing.

## Before this goes live

See the punch list in the handback report from the build session, and:

- Read `COMPLIANCE.md` before publishing anything — legal pages need a
  solicitor's review, and the regulatory positioning should be re-checked
  against the founder's confirmation as the business evolves.
- Replace every placeholder in `lib/site-config.ts` (phone, email,
  registered address, Companies House number, social links) with real
  details.
- Replace `public/og-image.svg` with a real PNG/JPG (1200×630) — some
  social platforms (notably Facebook/LinkedIn) don't reliably render SVG
  `og:image` files.
- Wire up the contact form to a real backend if `mailto:` isn't sufficient
  long-term (see the comment in `components/ContactForm.tsx` — Formspree or
  similar is the lean next step, not custom infrastructure).
