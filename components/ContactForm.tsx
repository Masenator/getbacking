"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * Placeholder enquiry form for a lean, backend-free static site.
 *
 * There is no server/API route (the site is a static export with no
 * database or backend — see README). On submit, this builds a
 * pre-filled `mailto:` link from the form fields and opens the visitor's
 * email client, so enquiries still reach hello@getbacking.co.uk today.
 *
 * Before real launch, swap this for a hosted form backend such as
 * Formspree, Basin or HubSpot forms — drop the POST endpoint into
 * `handleSubmit` below and remove the mailto fallback. Do not build a
 * custom backend for this; it isn't earned yet for a marketing site.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    // Honeypot: hidden from real visitors, so a non-empty value means a
    // bot filled every field. Show the normal "submitted" state but don't
    // actually open the mailto link. Keeps this ready for when the form
    // moves to a real backend (see file comment above).
    if (String(form.get("company-website") ?? "").trim().length > 0) {
      setSubmitted(true);
      return;
    }

    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const dealType = String(form.get("dealType") ?? "");
    const loanAmount = String(form.get("loanAmount") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `Enquiry: ${dealType || "Finance enquiry"} — ${name || "New enquiry"}`;
    const bodyLines = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Deal type: ${dealType}`,
      `Indicative amount: ${loanAmount}`,
      "",
      "Deal details:",
      message,
    ].filter(Boolean);

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="contact-company-website">Leave this field blank</label>
        <input type="text" id="contact-company-website" name="company-website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Company (optional)" name="company" autoComplete="organization" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dealType" className="block text-sm font-medium text-ink">
            Type of finance
          </label>
          <select
            id="dealType"
            name="dealType"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Bridging Finance</option>
            <option>Development Finance</option>
            <option>Refurbishment Finance</option>
            <option>Auction Finance</option>
            <option>Not sure / other</option>
          </select>
        </div>
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-ink">
            Indicative amount needed
          </label>
          <select
            id="loanAmount"
            name="loanAmount"
            defaultValue=""
            className="mt-1.5 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none"
          >
            <option value="" disabled>
              Select a range
            </option>
            <option>Under £150,000</option>
            <option>£150,000 – £500,000</option>
            <option>£500,000 – £1.5 million</option>
            <option>£1.5 million – £5 million</option>
            <option>Over £5 million</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Tell us about the deal
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Property, timeline, planned exit — whatever you've got. We'll ask the rest."
          className="mt-1.5 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-dark hover:text-paper focus-visible:outline-none"
      >
        Send Enquiry
      </button>

      <p className="text-xs leading-relaxed text-muted" role="status">
        {submitted
          ? "Your email app should have opened with your enquiry pre-filled — just hit send. If nothing opened, email us directly at " +
            siteConfig.email +
            "."
          : `This opens your email client with the details pre-filled, addressed to ${siteConfig.email}. Prefer to call? Ring ${siteConfig.phoneDisplay}.`}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
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
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-sm text-ink focus-visible:outline-none"
      />
    </div>
  );
}
