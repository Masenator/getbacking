# Compliance Notes

These notes record the regulatory basis this website was built on, and what
still needs professional sign-off before the site goes live. This is a flag
for the founder and any advisers brought in later — it is not a legal
opinion, and nothing here should be treated as one.

## Regulatory basis (founder-confirmed)

Get Backing arranges **unregulated commercial finance**: bridging,
development, refurbishment and auction finance secured against investment
and development property, for business purposes. Per the founder's explicit
confirmation, this is not regulated mortgage-contract lending, and the
business does not require FCA authorisation for this activity.

The site has been built consistently with that basis:

- No page, form, or piece of structured data states or implies FCA
  authorisation or regulation.
- `lib/schema.ts` uses `FinancialService` (a schema.org type, not a
  regulatory claim) for the Organization JSON-LD, with no
  `hasCredential`/regulator fields added.
- Service pages and the footer disclaimer (`financeDisclaimer` in
  `lib/site-config.ts`) explicitly state that this is not a regulated
  mortgage contract, and that finance is secured on investment/development
  property rather than a borrower's own home.
- The FAQ and Terms of Business content explain, in plain language, why
  the business sits outside FCA mortgage regulation, without overstating or
  understating that position.

**If this ever changes** — e.g. the business starts arranging any finance
that could be secured on a borrower's primary residence, or otherwise
touches regulated activity — the site's regulatory language, JSON-LD, and
Terms of Business need to be revisited before anything changes in the real
business.

## What still needs a solicitor's sign-off before launch

None of the following should be treated as final without a solicitor
reviewing them:

1. **`app/legal/privacy-policy/page.tsx`** — placeholder UK GDPR / Data
   Protection Act 2018 privacy notice. Needs review against the business's
   actual data flows once real systems (CRM, analytics, form backend) are
   chosen.
2. **`app/legal/terms/page.tsx`** — placeholder Terms of Business, including
   the description of Get Backing's role as a broker, fee disclosure
   language, and liability clauses.
3. **`app/legal/cookie-policy/page.tsx`** — currently states no
   non-essential cookies are set (accurate at time of writing, since no
   analytics/marketing tooling has been added). Must be updated the moment
   analytics, ad pixels, or similar are added, and a cookie consent
   mechanism added at that point if anything non-essential is introduced.
4. **`app/legal/complaints-procedure/page.tsx`** — internal complaints
   process is drafted, but there is an open, explicitly flagged question
   in the page copy itself: *whether any external/alternative dispute
   resolution scheme should be named for complaints about this specific,
   unregulated activity.* Do not remove that placeholder note without
   getting a solicitor's answer first.
5. **Company details** — `lib/site-config.ts` contains placeholder company
   number, registered office address, phone and email. These need to match
   the real, registered details before publishing (Companies House and
   general commercial law both require accurate company details to be
   displayed).

## Light-touch disclaimer language

Per the brief, the site does **not** carry heavy legal boilerplate on every
page. Instead, a single consistent, low-key disclaimer
(`financeDisclaimer` in `lib/site-config.ts`) appears in the footer of
every page and again on each product/contact page:

> "Get Backing arranges finance secured on investment and development
> property for business purposes only. This is not a regulated mortgage
> contract. Rates, terms and fees are subject to status, lender criteria
> and independent valuation, and are not guaranteed. Security may be
> required over property and other assets, and property used as security
> may be at risk if repayments or the agreed exit are not met."

This keeps the brand's confidence-first tone while still giving readers a
plain-English, accurate steer. A solicitor may want to adjust the wording,
but the underlying intent (accurate, low-key, not a wall of legalese)
should be preserved.

## Things this build deliberately did NOT do

- No numeric interest rates, APRs, or specific fee percentages are quoted
  anywhere on the site — all rate/fee/criteria language is qualitative
  ("subject to status and lender criteria") per the brief.
- No client testimonials, case studies, funding statistics, or "£Xm
  funded" style claims have been fabricated. Trust signals on the
  homepage (`components/TrustBar.tsx`) are process-based statements the
  business can stand behind today, not invented numbers.
- No claim of FCA authorisation, regulatory permission numbers, or
  membership of any redress scheme has been added anywhere.
