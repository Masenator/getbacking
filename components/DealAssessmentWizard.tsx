"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  answer,
  assessmentConfigs,
  isValidEmail,
  isValidUkPhone,
  verdictCopy,
  type AssessmentField,
  type AssessmentResult,
  type AssessmentTypeId,
} from "@/lib/deal-assessment";
import { financeDisclaimer, siteConfig } from "@/lib/site-config";

type Step = "questions" | "result" | "details" | "done";

type DetailsState = {
  fullName: string;
  mobile: string;
  email: string;
  notes: string;
};

type DetailErrors = Partial<Record<keyof DetailsState | "consent", string>>;

const emptyDetails: DetailsState = { fullName: "", mobile: "", email: "", notes: "" };

/**
 * Client-side wizard driving steps 2–4 of the Free Deal Assessment funnel
 * for a single finance type: type-specific questions -> indicative result
 * -> contact capture -> confirmation.
 *
 * Static-export friendly: no server code. The completed assessment is
 * POSTed straight from the browser to an external form-to-email endpoint
 * (Formspree by default — see NEXT_PUBLIC_LEAD_FORM_ENDPOINT in README).
 * Nothing submitted here is stored anywhere in this codebase.
 */
export function DealAssessmentWizard({ type }: { type: AssessmentTypeId }) {
  const config = assessmentConfigs[type];

  const [step, setStep] = useState<Step>("questions");
  const [values, setValues] = useState<Record<string, string>>({});
  const [questionErrors, setQuestionErrors] = useState<Set<string>>(new Set());
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const [details, setDetails] = useState<DetailsState>(emptyDetails);
  const [consent, setConsent] = useState(false);
  const [detailErrors, setDetailErrors] = useState<DetailErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "error">("idle");

  function setValue(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleQuestionsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missing = new Set<string>();
    for (const field of config.fields) {
      if (!answer(values, field.name).trim()) missing.add(field.name);
    }
    setQuestionErrors(missing);
    if (missing.size > 0) return;

    setResult(config.evaluate(values));
    setStep("result");
  }

  async function handleDetailsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors: DetailErrors = {};
    if (!details.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!isValidUkPhone(details.mobile)) errors.mobile = "Enter a valid UK mobile number.";
    if (!isValidEmail(details.email)) errors.email = "Enter a valid email address.";
    if (!consent) errors.consent = "Please confirm you're happy for us to contact you.";
    setDetailErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitStatus("submitting");

    const ok = await submitAssessmentLead({
      type: config.label,
      path: `/deal-assessment/${type}`,
      answers: config.fields.map((field) => ({
        question: field.label,
        answer: describeAnswer(field, answer(values, field.name)),
      })),
      indicativeVerdict: result ? verdictCopy[result.verdict].label : "",
      indicativeSummary: result?.headline ?? "",
      fullName: details.fullName.trim(),
      mobile: details.mobile.trim(),
      email: details.email.trim(),
      notes: details.notes.trim(),
    });

    if (ok) {
      setSubmitStatus("idle");
      setStep("done");
    } else {
      setSubmitStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <ProgressIndicator step={step} />

      {step === "questions" && (
        <form onSubmit={handleQuestionsSubmit} noValidate className="space-y-5">
          <p className="text-sm text-muted">{config.questionsIntro}</p>
          {config.fields.map((field) => (
            <FieldInput
              key={field.name}
              field={field}
              value={answer(values, field.name)}
              onChange={(v) => setValue(field.name, v)}
              hasError={questionErrors.has(field.name)}
            />
          ))}
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-dark hover:text-paper focus-visible:outline-none"
          >
            See My Indicative Result
          </button>
        </form>
      )}

      {step === "result" && result && (
        <div>
          <span
            className={`inline-block rounded-sm px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide ${verdictCopy[result.verdict].badgeClass}`}
          >
            {verdictCopy[result.verdict].label}
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink">{result.headline}</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">{result.body}</p>
          {result.notes.length > 0 && (
            <ul className="mt-4 space-y-2">
              {result.notes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-1 text-accent-dark">&#8226;</span>
                  {note}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-6 rounded-sm border border-line bg-paper-dim/40 p-4 text-sm leading-relaxed text-ink-soft">
            This is an indicative read based only on what you&apos;ve told us — not a loan offer, a quote, or a guarantee.
            One of our team will call you to go through the detail properly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep("details")}
              className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-dark hover:text-paper focus-visible:outline-none"
            >
              Get My Free Call Back
            </button>
            <button
              type="button"
              onClick={() => setStep("questions")}
              className="inline-flex items-center justify-center rounded-sm border border-ink px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none"
            >
              Back to Questions
            </button>
          </div>
        </div>
      )}

      {step === "details" && (
        <form onSubmit={handleDetailsSubmit} noValidate className="space-y-5">
          <p className="text-sm text-muted">
            Last step — tell us how to reach you and we&apos;ll call you to go through your {config.label.toLowerCase()} enquiry in detail.
          </p>

          <TextField
            label="Full name"
            name="fullName"
            autoComplete="name"
            value={details.fullName}
            onChange={(v) => setDetails((prev) => ({ ...prev, fullName: v }))}
            error={detailErrors.fullName}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              label="Mobile number"
              name="mobile"
              type="tel"
              autoComplete="tel"
              value={details.mobile}
              onChange={(v) => setDetails((prev) => ({ ...prev, mobile: v }))}
              error={detailErrors.mobile}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              value={details.email}
              onChange={(v) => setDetails((prev) => ({ ...prev, email: v }))}
              error={detailErrors.email}
            />
          </div>

          <div>
            <label htmlFor="assessment-notes" className="block text-sm font-medium text-ink">
              Anything else we should know? (optional)
            </label>
            <textarea
              id="assessment-notes"
              rows={4}
              value={details.notes}
              onChange={(event) => setDetails((prev) => ({ ...prev, notes: event.target.value }))}
              className="mt-1.5 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none"
            />
          </div>

          <div>
            <label className="flex items-start gap-3 text-sm text-ink-soft">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-line"
              />
              <span>
                I&apos;m happy for Get Backing to contact me about my enquiry, in line with the{" "}
                <Link href="/legal/privacy-policy" className="text-accent-dark underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {detailErrors.consent && <p className="mt-1 text-xs text-accent-dark">{detailErrors.consent}</p>}
          </div>

          <p className="text-xs leading-relaxed text-muted">{financeDisclaimer}</p>

          {submitStatus === "error" && (
            <div className="rounded-sm border border-accent-dark/40 bg-accent-light/40 p-4 text-sm leading-relaxed text-ink-soft">
              <p className="font-semibold text-ink">Something went wrong sending your details.</p>
              <p className="mt-1">
                Please call{" "}
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-accent-dark underline">
                  {siteConfig.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent-dark underline">
                  {siteConfig.email}
                </a>{" "}
                directly and we&apos;ll pick it up from there — or try submitting again below.
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-dark hover:text-paper focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitStatus === "submitting" ? "Sending…" : "Send My Assessment"}
            </button>
            <button
              type="button"
              onClick={() => setStep("result")}
              className="inline-flex items-center justify-center rounded-sm border border-ink px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none"
            >
              Back
            </button>
          </div>
        </form>
      )}

      {step === "done" && (
        <div className="rounded-sm border border-line bg-paper p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-ink">Got it — thanks, {details.fullName.split(" ")[0] || "there"}.</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            One of our team will call you on {details.mobile || "the number you gave us"} shortly to go through your{" "}
            {config.label.toLowerCase()} enquiry properly. If it&apos;s urgent, call us directly on{" "}
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-accent-dark underline">
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
          <Link href="/" className="mt-6 inline-block font-display text-sm font-semibold text-accent-dark hover:underline">
            &larr; Back to the homepage
          </Link>
        </div>
      )}
    </div>
  );
}

function ProgressIndicator({ step }: { step: Step }) {
  const stepIndex = { questions: 1, result: 2, details: 3, done: 4 }[step];
  if (step === "done") return null;
  return (
    <p className="mb-6 font-display text-xs font-semibold uppercase tracking-widest text-accent-dark">
      Step {stepIndex} of 3
    </p>
  );
}

function describeAnswer(field: AssessmentField, raw: string): string {
  if (!raw) return "";
  if (field.kind === "select") {
    return field.options.find((option) => option.value === raw)?.label ?? raw;
  }
  if (field.kind === "currency") {
    const n = Number(raw.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? `£${n.toLocaleString("en-GB")}` : raw;
  }
  return raw;
}

function FieldInput({
  field,
  value,
  onChange,
  hasError,
}: {
  field: AssessmentField;
  value: string;
  onChange: (value: string) => void;
  hasError: boolean;
}) {
  const errorClass = hasError ? "border-accent-dark" : "border-line";

  if (field.kind === "select") {
    return (
      <div>
        <label htmlFor={field.name} className="block text-sm font-medium text-ink">
          {field.label}
        </label>
        <select
          id={field.name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`mt-1.5 w-full rounded-sm border ${errorClass} bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {hasError && <p className="mt-1 text-xs text-accent-dark">Please select an option.</p>}
      </div>
    );
  }

  if (field.kind === "date") {
    return (
      <div>
        <label htmlFor={field.name} className="block text-sm font-medium text-ink">
          {field.label}
        </label>
        <input
          id={field.name}
          type="date"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`mt-1.5 w-full rounded-sm border ${errorClass} bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none`}
        />
        {hasError && <p className="mt-1 text-xs text-accent-dark">Please enter a date.</p>}
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={field.name} className="block text-sm font-medium text-ink">
        {field.label}
      </label>
      <div className="relative mt-1.5">
        <span aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted">
          &pound;
        </span>
        <input
          id={field.name}
          type="number"
          inputMode="decimal"
          min={0}
          step="1"
          placeholder={field.placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full rounded-sm border ${errorClass} bg-paper py-2.5 pl-7 pr-3 text-sm text-ink focus-visible:outline-none`}
        />
      </div>
      {hasError && <p className="mt-1 text-xs text-accent-dark">Please enter an amount.</p>}
    </div>
  );
}

function TextField({
  label,
  name,
  type = "text",
  autoComplete,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-1.5 w-full rounded-sm border ${error ? "border-accent-dark" : "border-line"} bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none`}
      />
      {error && <p className="mt-1 text-xs text-accent-dark">{error}</p>}
    </div>
  );
}

type LeadPayload = {
  type: string;
  path: string;
  answers: { question: string; answer: string }[];
  indicativeVerdict: string;
  indicativeSummary: string;
  fullName: string;
  mobile: string;
  email: string;
  notes: string;
};

async function submitAssessmentLead(payload: LeadPayload): Promise<boolean> {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT;
  if (!endpoint) {
    // No form backend configured yet — see README "Before this goes live".
    console.warn("NEXT_PUBLIC_LEAD_FORM_ENDPOINT is not set; the deal assessment lead was not sent anywhere.");
    return false;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Free Deal Assessment — ${payload.type} — ${payload.indicativeVerdict}`,
        _replyto: payload.email,
        name: payload.fullName,
        mobile: payload.mobile,
        email: payload.email,
        dealType: payload.type,
        indicativeVerdict: payload.indicativeVerdict,
        indicativeSummary: payload.indicativeSummary,
        dealDetails: payload.answers.map((a) => `${a.question}: ${a.answer}`).join("\n"),
        additionalNotes: payload.notes,
        sourcePath: payload.path,
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
