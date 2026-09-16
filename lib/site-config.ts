/**
 * Single source of truth for site-wide constants: brand details, contact
 * points, navigation and legal placeholders. Keeping these in one place
 * means metadata, structured data, header/footer and legal copy never
 * drift out of sync.
 *
 * NOTE: telephone number, registered office address and Companies House
 * number below are PLACEHOLDERS. Replace with real details before launch
 * (see README "Before this goes live" section and COMPLIANCE.md).
 */

export const siteConfig = {
  name: "Get Backing",
  legalName: "Get Backing Ltd",
  shortName: "Get Backing",
  tagline: "In your corner, not the bank's.",
  description:
    "Get Backing is a straight-talking bridging and development finance broker for UK property developers. Whole-of-market access to bridging, development, refurbishment and auction finance — with a broker who fights your corner, not the bank's.",
  url: "https://www.getbacking.co.uk",
  // Placeholder contact details — replace before launch.
  email: "hello@getbacking.co.uk",
  phone: "+44 20 7946 0958",
  phoneDisplay: "020 7946 0958",
  addressLocality: "London",
  addressRegion: "England",
  addressCountry: "GB",
  postalCode: "EC1A 1AA",
  streetAddress: "1 Placeholder Street",
  companiesHouseNumber: "00000000",
  socials: {
    linkedin: "https://www.linkedin.com/company/getbacking",
    x: "https://x.com/getbacking",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const productLinks: NavLink[] = [
  {
    label: "Bridging Finance",
    href: "/bridging-finance",
    description: "Fast, short-term funding to bridge a gap or seize an opportunity.",
  },
  {
    label: "Development Finance",
    href: "/development-finance",
    description: "Funding for ground-up builds and major conversions.",
  },
  {
    label: "Refurbishment Finance",
    href: "/refurbishment-finance",
    description: "Light and heavy refurb funding to add value fast.",
  },
  {
    label: "Auction Finance",
    href: "/auction-finance",
    description: "Certainty of funds to hit tight auction completion deadlines.",
  },
];

export const mainNavLinks: NavLink[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "FAQs", href: "/faqs" },
];

export const legalNavLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Business", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Complaints Procedure", href: "/legal/complaints-procedure" },
];

/** Light-touch disclaimer used across service pages and forms. */
export const financeDisclaimer =
  "Get Backing arranges finance secured on investment and development property for business purposes only. This is not a regulated mortgage contract. Rates, terms and fees are subject to status, lender criteria and independent valuation, and are not guaranteed. Security may be required over property and other assets, and property used as security may be at risk if repayments or the agreed exit are not met.";
