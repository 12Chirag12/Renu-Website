"use client";

import { FormEvent, useState } from "react";
import { Icon } from "../ui/Icon";

type FormStatus = { kind: "idle" | "loading" | "success" | "error"; message: string };

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus({ kind: "loading", message: "Sending your enquiry…" });
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "on" }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to send enquiry.");
      setStatus({ kind: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to send enquiry." });
    }
  }

  const input = "field mt-2";

  return (
    <form
      onSubmit={submit}
      className={`rounded-3xl bg-white text-ink shadow-2xl shadow-black/10 ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}
      aria-label="Business enquiry form"
    >
      <h3 className="text-xl font-bold text-navy">Send us your requirement</h3>
      <p className="mt-2 text-sm text-slate-500">We will respond within one working day.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-bold text-navy">
          Full name *
          <input name="fullName" required maxLength={100} autoComplete="name" className={input} placeholder="Your full name" />
        </label>
        <label className="text-xs font-bold text-navy">
          Company name *
          <input name="companyName" required maxLength={120} autoComplete="organization" className={input} placeholder="Organization" />
        </label>
        <label className="text-xs font-bold text-navy">
          Business email *
          <input name="email" required type="email" maxLength={160} autoComplete="email" className={input} placeholder="name@company.com" />
        </label>
        <label className="text-xs font-bold text-navy">
          Phone number *
          <input name="phone" required type="tel" pattern="[+()0-9 -]{7,20}" autoComplete="tel" className={input} placeholder="+00 00000 00000" />
        </label>
        <label className="text-xs font-bold text-navy">
          Requirement type *
          <select name="enquiryType" required defaultValue="" className={input}>
            <option value="" disabled>Select type</option>
            <option>Contract manufacturing</option>
            <option>Third-party manufacturing</option>
            <option>Product development</option>
            <option>Packaging services</option>
            <option>Partnership opportunity</option>
            <option>General business enquiry</option>
          </select>
        </label>
        <label className="text-xs font-bold text-navy">
          Country / state *
          <input name="location" required maxLength={120} autoComplete="country-name" className={input} placeholder="Location" />
        </label>
        <label className="text-xs font-bold text-navy sm:col-span-2">
          Product or service of interest *
          <input name="interest" required maxLength={160} className={input} placeholder="Tell us what you are looking for" />
        </label>
        <label className="text-xs font-bold text-navy sm:col-span-2">
          Message *
          <textarea
            name="message"
            required
            minLength={20}
            maxLength={1500}
            rows={compact ? 3 : 5}
            className={`${input} resize-y`}
            placeholder="Share your business requirement, target market, and expected next step."
          />
        </label>
        {/* Honeypot */}
        <label className="sr-only" aria-hidden="true">
          Website<input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-petrol" />
        I consent to Renumed Pharmaceutical Labs using this information to respond to my business enquiry. *
      </label>

      <button
        disabled={status.kind === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white transition hover:bg-petrol disabled:cursor-wait disabled:opacity-70"
      >
        {status.kind === "loading" ? "Sending…" : "Submit Enquiry"}
        <Icon name="arrow" className="h-4 w-4" />
      </button>

      {status.kind !== "idle" && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-4 rounded-xl px-4 py-3 text-sm ${
            status.kind === "success"
              ? "bg-emerald-50 text-emerald-800"
              : status.kind === "error"
              ? "bg-rose-50 text-rose-800"
              : "bg-mist text-slate-600"
          }`}
        >
          {status.message}
        </div>
      )}

      <p className="mt-4 text-center text-[.68rem] leading-5 text-slate-400">
        Protected by server-side validation, a spam honeypot, and request throttling.
      </p>
    </form>
  );
}
