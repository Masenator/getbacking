/**
 * Config + indicative-logic for the Free Deal Assessment funnel.
 *
 * This is the single source of truth for:
 *  - the five assessment types (one per finance product)
 *  - the question set collected for each type
 *  - the "indicative" logic that turns those answers into a qualitative
 *    read (strong / possible / stretch) — never a rate, never a binding
 *    offer, never a guaranteed loan amount.
 *
 * IMPORTANT for the founder: the numeric bands below (LTV ceilings,
 * cost-to-GDV ratios etc.) are directional, industry-standard rules of
 * thumb chosen to stay consistent with what's already published on the
 * product pages (e.g. bridging's "generally up to around 75%"). They are
 * NOT pulled from real, current lender criteria and must be sanity-checked
 * against actual panel appetite before this goes live. See the handback
 * report for the full list of bands used.
 */

export type AssessmentVerdict = "strong" | "possible" | "stretch";

export type AssessmentResult = {
  verdict: AssessmentVerdict;
  headline: string;
  body: string;
  notes: string[];
};

export type FieldOption = { value: string; label: string };

type FieldBase = {
  name: string;
  label: string;
  helpText?: string;
  /** When true, this field is skipped by the questions-step required-field check. */
  optional?: boolean;
};

export type CurrencyField = FieldBase & {
  kind: "currency";
  placeholder?: string;
};

export type SelectField = FieldBase & {
  kind: "select";
  options: FieldOption[];
};

export type DateField = FieldBase & {
  kind: "date";
};

export type TextField = FieldBase & {
  kind: "text";
  placeholder?: string;
};

export type TextareaField = FieldBase & {
  kind: "textarea";
  placeholder?: string;
};

export type AssessmentField = CurrencyField | SelectField | DateField | TextField | TextareaField;

/**
 * Property postcode + a brief free-text description, collected on every
 * assessment type. This doesn't feed the indicative LTV/GDV-ratio maths
 * (those stay exactly as before) — it's captured so the founder has real
 * location and property detail on every lead to work with directly
 * (including feeding it to Claude for a closer GDV read on individual
 * deals), not just the raw numbers.
 */
const postcodeField: TextField = {
  kind: "text",
  name: "postcode",
  label: "Property postcode",
  placeholder: "e.g. SW1A 1AA",
  helpText: "Helps us place the property and pull comparable evidence.",
};

const propertyDescriptionField: TextareaField = {
  kind: "textarea",
  name: "propertyDescription",
  label: "Brief description of the property",
  placeholder: "e.g. 3-bed semi, needs a full refurb — or a 0.4-acre site with outline planning for 4 units",
  helpText: "Type, size, condition, anything relevant — a couple of sentences is plenty.",
  optional: true,
};

export type AssessmentTypeId =
  | "bridging-finance"
  | "development-finance"
  | "refurbishment-finance"
  | "auction-finance"
  | "second-charge-finance";

export type AssessmentTypeConfig = {
  id: AssessmentTypeId;
  label: string;
  productHref: string;
  cardPitch: string;
  questionsIntro: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  fields: AssessmentField[];
  evaluate: (values: Record<string, string>) => AssessmentResult;
};

/** Reads a field's raw string value out of the answers map, defaulting to "". */
export function answer(values: Record<string, string>, name: string): string {
  return values[name] ?? "";
}

function numericAnswer(values: Record<string, string>, name: string): number {
  const raw = answer(values, name).replace(/[^0-9.]/g, "");
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : 0;
}

function pct(part: number, whole: number): number {
  if (whole <= 0) return 0;
  return (part / whole) * 100;
}

function round(n: number): number {
  return Math.round(n);
}

const genericIncompleteResult: AssessmentResult = {
  verdict: "possible",
  headline: "Pop your best estimates in and we'll show you where this sits.",
  body: "Nothing here is binding, so rough numbers are absolutely fine to start with — we'll firm everything up on the call.",
  notes: [],
};

/* ---------------------------------------------------------------------- */
/* Bridging Finance                                                       */
/* ---------------------------------------------------------------------- */

function evaluateBridging(values: Record<string, string>): AssessmentResult {
  const value = numericAnswer(values, "propertyValue");
  const loan = numericAnswer(values, "loanAmount");
  const exit = answer(values, "exit");
  const timeframe = answer(values, "timeframe");

  if (value <= 0 || loan <= 0) return genericIncompleteResult;

  const ltv = pct(loan, value);
  const exitLabel = exit === "refinance" ? "a refinance" : "a sale";
  const notes: string[] = [];

  if (timeframe === "urgent") {
    notes.push("With a tight timeframe, valuation and legal work moving quickly from day one will matter as much as the lender decision itself.");
  }

  if (ltv <= 65) {
    return {
      verdict: "strong",
      headline: "This looks like the kind of bridging deal we place regularly.",
      body: `Based on what you've told us, you're asking for roughly a ${round(ltv)}% loan against the property's value — comfortably within where bridging lenders are typically happy to sit, especially with ${exitLabel} as your planned exit.`,
      notes,
    };
  }

  if (ltv <= 75) {
    return {
      verdict: "possible",
      headline: "This sits right in the range we'd want to look at properly.",
      body: `Roughly a ${round(ltv)}% loan against value is close to where bridging lenders generally draw the line (we usually work to around 75% LTV) — not a certain yes, but well worth a proper conversation, particularly around your ${exitLabel} exit.`,
      notes,
    };
  }

  return {
    verdict: "stretch",
    headline: "This sits outside where we'd normally expect an easy yes on the numbers alone.",
    body: `At roughly a ${round(ltv)}% loan against value, you're above where most bridging lenders are comfortable (generally up to around 75% LTV) — but every deal's different, and a strong exit or extra security can change the picture.`,
    notes,
  };
}

/* ---------------------------------------------------------------------- */
/* Development Finance                                                    */
/* ---------------------------------------------------------------------- */

function evaluateDevelopment(values: Record<string, string>): AssessmentResult {
  const siteValue = numericAnswer(values, "siteValue");
  const buildCost = numericAnswer(values, "buildCost");
  const gdv = numericAnswer(values, "gdv");
  const planningStatus = answer(values, "planningStatus");

  if (siteValue <= 0 || buildCost <= 0 || gdv <= 0) return genericIncompleteResult;

  const totalCost = siteValue + buildCost;
  const costToGdv = pct(totalCost, gdv);
  const notes: string[] = [];

  const planningNote =
    planningStatus === "full"
      ? "Having full planning in place removes one of the biggest risk factors lenders assess on a scheme like this."
      : planningStatus === "outline"
        ? "Outline planning is a solid starting point, but lenders will want to see a clear route to full consent before committing."
        : "Without planning permission in place yet, lenders will want to understand your route to consent — it's rarely a dealbreaker, but it does shape which lenders are realistic at this stage.";
  notes.push(planningNote);

  let verdict: AssessmentVerdict;
  let headline: string;
  let body: string;

  if (costToGdv <= 70) {
    verdict = "strong";
    headline = "This looks like the kind of scheme development lenders respond well to.";
    body = `As a rough rule of thumb, total scheme cost (land plus build) sitting comfortably below Gross Development Value is what lenders like to see — and your numbers put that at roughly ${round(costToGdv)}% of GDV, which is a healthy margin.`;
  } else if (costToGdv <= 80) {
    verdict = "possible";
    headline = "This sits in a range worth exploring properly.";
    body = `Total scheme cost works out at roughly ${round(costToGdv)}% of your estimated GDV — a tighter margin than lenders would ideally like as a rule of thumb, but far from unfundable depending on the scheme and your own equity in it.`;
  } else {
    verdict = "stretch";
    headline = "On the numbers alone, this sits outside where we'd expect an easy yes.";
    body = `Total scheme cost at roughly ${round(costToGdv)}% of estimated GDV leaves a thin margin by typical development-lending rules of thumb — lenders would likely want more equity in the deal or a lower build cost before this stacks up as it stands.`;
  }

  // No planning consent at all is itself a material risk factor — reflect
  // that in the verdict, not just the notes, without contradicting the
  // cost/GDV read.
  if (planningStatus === "none" && verdict === "strong") {
    verdict = "possible";
  }

  return { verdict, headline, body, notes };
}

/* ---------------------------------------------------------------------- */
/* Refurbishment Finance                                                  */
/* ---------------------------------------------------------------------- */

function evaluateRefurbishment(values: Record<string, string>): AssessmentResult {
  const currentValue = numericAnswer(values, "currentValue");
  const worksCost = numericAnswer(values, "worksCost");
  const endValue = numericAnswer(values, "endValue");
  const scope = answer(values, "scope");

  if (currentValue <= 0 || worksCost <= 0 || endValue <= 0) return genericIncompleteResult;

  const totalCost = currentValue + worksCost;
  const ratio = pct(totalCost, endValue);
  const isHeavy = scope === "heavy";
  const strongCeiling = isHeavy ? 60 : 65;
  const possibleCeiling = isHeavy ? 70 : 75;
  const scopeLabel = isHeavy ? "heavy refurbishment" : "light refurbishment";
  const notes: string[] = [];

  if (isHeavy) {
    notes.push("Heavy refurbishment is assessed a little more like a development scheme — building regulations and, where relevant, planning consent matter alongside the numbers.");
  }

  let verdict: AssessmentVerdict;
  let headline: string;
  let body: string;

  if (ratio <= strongCeiling) {
    verdict = "strong";
    headline = `This looks like the kind of ${scopeLabel} deal we place regularly.`;
    body = `Purchase/current value plus works cost works out at roughly ${round(ratio)}% of your expected end value — a healthy margin against the kind of loan-to-cost and loan-to-value lenders typically want to see.`;
  } else if (ratio <= possibleCeiling) {
    verdict = "possible";
    headline = "This sits in a range worth exploring properly.";
    body = `At roughly ${round(ratio)}% of expected end value, your combined cost is close to where refurbishment lenders generally get more selective — not a certain yes, but well worth a proper look.`;
  } else {
    verdict = "stretch";
    headline = "On the numbers alone, this sits outside where we'd expect an easy yes.";
    body = `At roughly ${round(ratio)}% of expected end value, your combined cost is higher than refurbishment lenders would typically be comfortable with — a lower works budget, more equity, or a stronger end value would all help the picture.`;
  }

  return { verdict, headline, body, notes };
}

/* ---------------------------------------------------------------------- */
/* Auction Finance                                                        */
/* ---------------------------------------------------------------------- */

function evaluateAuction(values: Record<string, string>): AssessmentResult {
  const purchasePrice = numericAnswer(values, "purchasePrice");
  const depositPaid = numericAnswer(values, "depositPaid");
  const completionDateRaw = answer(values, "completionDate");

  if (purchasePrice <= 0) return genericIncompleteResult;

  const loanNeeded = Math.max(purchasePrice - depositPaid, 0);
  const ltv = pct(loanNeeded, purchasePrice);
  const notes: string[] = [];

  if (completionDateRaw) {
    const completionDate = new Date(completionDateRaw);
    if (!Number.isNaN(completionDate.getTime())) {
      const days = Math.ceil((completionDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      if (days < 0) {
        notes.push("That completion date has already passed — let us know the real date when we speak and we'll move as fast as the legal work allows.");
      } else if (days <= 14) {
        notes.push(`With around ${days} day${days === 1 ? "" : "s"} until completion, this is genuinely tight — exactly the kind of timeline auction finance exists for, but we'd need to move today.`);
      } else if (days <= 28) {
        notes.push(`Around ${days} days to completion is inside the standard 28-day auction window — a normal timeline for us, provided everyone moves promptly.`);
      } else {
        notes.push(`Around ${days} days to completion gives a comfortable run-in — plenty of time to get valuation and legals moving properly.`);
      }
    }
  }

  let verdict: AssessmentVerdict;
  let headline: string;
  let body: string;

  if (ltv <= 65) {
    verdict = "strong";
    headline = "This looks like the kind of auction deal we place regularly.";
    body = `Based on the deposit already paid, you'd need roughly a ${round(ltv)}% loan against the purchase price — comfortably within where auction bridging lenders are typically happy to sit.`;
  } else if (ltv <= 75) {
    verdict = "possible";
    headline = "This sits right in the range we'd want to look at properly.";
    body = `You'd need roughly a ${round(ltv)}% loan against the purchase price, close to where bridging lenders generally draw the line (we usually work to around 75% LTV) — well worth a proper conversation given the auction deadline.`;
  } else {
    verdict = "stretch";
    headline = "This sits outside where we'd normally expect an easy yes on the numbers alone.";
    body = `You'd need roughly a ${round(ltv)}% loan against the purchase price, above where most bridging lenders are comfortable (generally up to around 75% LTV) — a larger deposit or extra security could change the picture.`;
  }

  return { verdict, headline, body, notes };
}

/* ---------------------------------------------------------------------- */
/* Second Charge Finance                                                  */
/* ---------------------------------------------------------------------- */

function evaluateSecondCharge(values: Record<string, string>): AssessmentResult {
  const propertyValue = numericAnswer(values, "propertyValue");
  const firstChargeBalance = numericAnswer(values, "firstChargeBalance");
  const amountToRaise = numericAnswer(values, "amountToRaise");
  const firstChargeNotified = answer(values, "firstChargeNotified");

  if (propertyValue <= 0 || amountToRaise <= 0) return genericIncompleteResult;

  const combined = firstChargeBalance + amountToRaise;
  const combinedLtv = pct(combined, propertyValue);
  const notes: string[] = [];

  if (firstChargeNotified === "yes") {
    notes.push("Good — with your first charge lender already aware, the Deed of Priority process needed for a second charge should move quickly.");
  } else {
    notes.push("Your first charge lender will need to consent via a Deed of Priority before a second charge can complete — not a dealbreaker, but something worth starting early, so we'll get that moving as soon as we speak.");
  }

  // Second charge combined LTV is assessed more conservatively than a
  // standalone bridging facility, per the second-charge product page.
  let verdict: AssessmentVerdict;
  let headline: string;
  let body: string;

  if (combinedLtv <= 50) {
    verdict = "strong";
    headline = "This looks like the kind of second charge deal we place regularly.";
    body = `Your existing first charge plus the amount you'd like to raise works out at roughly a ${round(combinedLtv)}% combined loan against the property's value — comfortably within where second charge lenders are typically happy to sit.`;
  } else if (combinedLtv <= 65) {
    verdict = "possible";
    headline = "This sits right in the range we'd want to look at properly.";
    body = `Your combined loan-to-value comes out at roughly ${round(combinedLtv)}%, which is close to where second charge lenders tend to get more selective (combined LTV on a second charge is generally assessed more conservatively than a standalone facility) — well worth a proper conversation.`;
  } else {
    verdict = "stretch";
    headline = "This sits outside where we'd normally expect an easy yes on the numbers alone.";
    body = `At roughly ${round(combinedLtv)}% combined loan-to-value, you're above where most second charge lenders are comfortable — but every deal's different, and it's worth talking through the detail.`;
  }

  return { verdict, headline, body, notes };
}

/* ---------------------------------------------------------------------- */
/* Config registry                                                        */
/* ---------------------------------------------------------------------- */

export const assessmentConfigs: Record<AssessmentTypeId, AssessmentTypeConfig> = {
  "bridging-finance": {
    id: "bridging-finance",
    label: "Bridging Finance",
    productHref: "/bridging-finance",
    cardPitch: "Breaking a chain, buying fast or unlocking equity for your next move.",
    questionsIntro: "A few quick numbers on the property and the loan, and we'll show you an indicative read.",
    metaTitle: "Free Bridging Loan Assessment",
    metaDescription: "Answer a few quick questions about your bridging deal and get an instant, indicative read on how it stacks up — free, no obligation, two minutes.",
    heroTitle: "How does your bridging deal stack up?",
    heroIntro: "Tell us the property value, the loan you need and your exit — we'll give you an honest, indicative read in under two minutes.",
    fields: [
      { kind: "currency", name: "propertyValue", label: "Current property value", placeholder: "e.g. 450,000" },
      { kind: "currency", name: "loanAmount", label: "Loan amount needed", placeholder: "e.g. 300,000" },
      {
        kind: "select",
        name: "exit",
        label: "Planned exit",
        options: [
          { value: "sale", label: "Sale of the property" },
          { value: "refinance", label: "Refinance onto a mortgage or term loan" },
        ],
      },
      {
        kind: "select",
        name: "timeframe",
        label: "Timeframe needed",
        options: [
          { value: "urgent", label: "As soon as possible / under 4 weeks" },
          { value: "short", label: "1–3 months" },
          { value: "medium", label: "3–6 months" },
          { value: "flexible", label: "6+ months / not urgent yet" },
        ],
      },
      postcodeField,
      propertyDescriptionField,
    ],
    evaluate: evaluateBridging,
  },
  "development-finance": {
    id: "development-finance",
    label: "Development Finance",
    productHref: "/development-finance",
    cardPitch: "Ground-up builds and major conversions, funded around cost and GDV.",
    questionsIntro: "A few numbers on the site, the build and the finished value, and we'll show you an indicative read.",
    metaTitle: "Free Development Finance Assessment",
    metaDescription: "Answer a few quick questions about your development scheme and get an instant, indicative read on how it stacks up — free, no obligation, two minutes.",
    heroTitle: "How does your development scheme stack up?",
    heroIntro: "Tell us the site value, build cost, GDV and planning status — we'll give you an honest, indicative read in under two minutes.",
    fields: [
      { kind: "currency", name: "siteValue", label: "Site / land value", placeholder: "e.g. 350,000" },
      { kind: "currency", name: "buildCost", label: "Total build cost", placeholder: "e.g. 600,000" },
      { kind: "currency", name: "gdv", label: "Estimated Gross Development Value (GDV)", placeholder: "e.g. 1,200,000" },
      {
        kind: "select",
        name: "planningStatus",
        label: "Planning status",
        options: [
          { value: "none", label: "No planning permission yet" },
          { value: "outline", label: "Outline planning permission" },
          { value: "full", label: "Full planning permission" },
        ],
      },
      postcodeField,
      propertyDescriptionField,
    ],
    evaluate: evaluateDevelopment,
  },
  "refurbishment-finance": {
    id: "refurbishment-finance",
    label: "Refurbishment Finance",
    productHref: "/refurbishment-finance",
    cardPitch: "Light cosmetic refreshes through to heavy, structural refurbishment.",
    questionsIntro: "A few numbers on the property, the works and the end value, and we'll show you an indicative read.",
    metaTitle: "Free Refurbishment Finance Assessment",
    metaDescription: "Answer a few quick questions about your refurbishment project and get an instant, indicative read on how it stacks up — free, no obligation, two minutes.",
    heroTitle: "How does your refurbishment project stack up?",
    heroIntro: "Tell us the purchase value, the works cost and the expected end value — we'll give you an honest, indicative read in under two minutes.",
    fields: [
      { kind: "currency", name: "currentValue", label: "Purchase / current value", placeholder: "e.g. 220,000" },
      { kind: "currency", name: "worksCost", label: "Works cost", placeholder: "e.g. 60,000" },
      { kind: "currency", name: "endValue", label: "Expected end value", placeholder: "e.g. 330,000" },
      {
        kind: "select",
        name: "scope",
        label: "Scope of works",
        options: [
          { value: "light", label: "Light refurbishment (cosmetic, non-structural)" },
          { value: "heavy", label: "Heavy refurbishment (structural, extension, change of use)" },
        ],
      },
      postcodeField,
      propertyDescriptionField,
    ],
    evaluate: evaluateRefurbishment,
  },
  "auction-finance": {
    id: "auction-finance",
    label: "Auction Finance",
    productHref: "/auction-finance",
    cardPitch: "Certainty of funds to hit a tight auction completion deadline.",
    questionsIntro: "A few numbers on the lot and your completion date, and we'll show you an indicative read.",
    metaTitle: "Free Auction Finance Assessment",
    metaDescription: "Answer a few quick questions about your auction purchase and get an instant, indicative read on how it stacks up — free, no obligation, two minutes.",
    heroTitle: "How does your auction purchase stack up?",
    heroIntro: "Tell us the purchase price, your deposit and your completion date — we'll give you an honest, indicative read in under two minutes.",
    fields: [
      { kind: "currency", name: "purchasePrice", label: "Purchase / hammer price", placeholder: "e.g. 180,000" },
      { kind: "date", name: "completionDate", label: "Auction completion date" },
      { kind: "currency", name: "depositPaid", label: "Deposit already paid", placeholder: "e.g. 18,000" },
      postcodeField,
      propertyDescriptionField,
    ],
    evaluate: evaluateAuction,
  },
  "second-charge-finance": {
    id: "second-charge-finance",
    label: "Second Charge Finance",
    productHref: "/second-charge-finance",
    cardPitch: "Raise capital against a property you already have finance on.",
    questionsIntro: "A few numbers on the property and your existing charge, and we'll show you an indicative read.",
    metaTitle: "Free Second Charge Finance Assessment",
    metaDescription: "Answer a few quick questions about your second charge enquiry and get an instant, indicative read on how it stacks up — free, no obligation, two minutes.",
    heroTitle: "How does your second charge enquiry stack up?",
    heroIntro: "Tell us the property value, your existing first charge and what you'd like to raise — we'll give you an honest, indicative read in under two minutes.",
    fields: [
      { kind: "currency", name: "propertyValue", label: "Property value", placeholder: "e.g. 500,000" },
      { kind: "currency", name: "firstChargeBalance", label: "Existing first charge balance", placeholder: "e.g. 200,000" },
      { kind: "currency", name: "amountToRaise", label: "Amount you'd like to raise", placeholder: "e.g. 80,000" },
      {
        kind: "select",
        name: "firstChargeNotified",
        label: "Has your first charge lender been told about this?",
        options: [
          { value: "yes", label: "Yes, they know" },
          { value: "no", label: "No, not yet" },
          { value: "not_sure", label: "Not sure" },
        ],
      },
      postcodeField,
      propertyDescriptionField,
    ],
    evaluate: evaluateSecondCharge,
  },
};

export const assessmentTypeList: AssessmentTypeConfig[] = [
  assessmentConfigs["bridging-finance"],
  assessmentConfigs["development-finance"],
  assessmentConfigs["refurbishment-finance"],
  assessmentConfigs["auction-finance"],
  assessmentConfigs["second-charge-finance"],
];

export function isValidUkPhone(raw: string): boolean {
  const cleaned = raw.replace(/[\s()-]/g, "");
  return /^(?:\+44\d{9,10}|0\d{9,10})$/.test(cleaned);
}

export function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

export const verdictCopy: Record<AssessmentVerdict, { label: string; badgeClass: string }> = {
  strong: { label: "Looks fundable", badgeClass: "bg-forest text-paper" },
  possible: { label: "Worth a proper look", badgeClass: "bg-accent text-ink" },
  stretch: { label: "Outside the easy range", badgeClass: "bg-ink text-paper" },
};
