"use client";
import { AnimatedCopy } from "@/components/site/animated-copy";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { solutions } from "@/lib/company-profile";
import { BrandSelect } from "./brand-select";

const enquiryOptions = [
  { value: "", label: "General enquiry" },
  ...solutions.map((solution) => ({
    value: solution.slug,
    label: solution.title,
  })),
];
type Values = {
  name: string;
  email: string;
  company: string;
  phone: string;
  solution: string;
  message: string;
};
export function EnquiryForm() {
  const params = useSearchParams();
  const form = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    company: "",
    phone: "",
    solution: solutions.some((s) => s.slug === params.get("solution"))
      ? params.get("solution")!
      : "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>(
    {},
  );
  const [review, setReview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  function change(key: keyof Values, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setCopied(false);
  }
  function validate(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (values.message.trim().length < 20)
      next.message =
        "Please describe your requirements in at least 20 characters.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setReview(true);
  }
  const solution =
    solutions.find((s) => s.slug === values.solution)?.title ??
    "General enquiry";
  const body = `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "Not provided"}\nPhone: ${values.phone || "Not provided"}\nInterest: ${solution}\n\n${values.message}`;
  const email = `mailto:info@felixbd.com?subject=${encodeURIComponent(`Project enquiry: ${solution}`)}&body=${encodeURIComponent(body)}`;
  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  if (review)
    return (
      <section className="enquiry-review" aria-labelledby="review-title">
        <span className="fcl-label">YOUR ENQUIRY</span>
        <h2
          id="review-title"
          tabIndex={-1}
          ref={(el) => {
            el?.focus();
          }}
        >
          <AnimatedCopy>Ready to review</AnimatedCopy>
        </h2>
        <p>
          <AnimatedCopy>
            Check your details below, then open the draft in your email app.
            Your enquiry has not been sent.
          </AnimatedCopy>
        </p>
        <dl>
          <div>
            <dt>
              <AnimatedCopy>Name</AnimatedCopy>
            </dt>
            <dd>
              <AnimatedCopy>{values.name}</AnimatedCopy>
            </dd>
          </div>
          <div>
            <dt>
              <AnimatedCopy>Email</AnimatedCopy>
            </dt>
            <dd>
              <AnimatedCopy>{values.email}</AnimatedCopy>
            </dd>
          </div>
          {values.company && (
            <div>
              <dt>
                <AnimatedCopy>Company</AnimatedCopy>
              </dt>
              <dd>
                <AnimatedCopy>{values.company}</AnimatedCopy>
              </dd>
            </div>
          )}
          {values.phone && (
            <div>
              <dt>
                <AnimatedCopy>Phone</AnimatedCopy>
              </dt>
              <dd>
                <AnimatedCopy>{values.phone}</AnimatedCopy>
              </dd>
            </div>
          )}
          <div>
            <dt>
              <AnimatedCopy>Interest</AnimatedCopy>
            </dt>
            <dd>
              <AnimatedCopy>{solution}</AnimatedCopy>
            </dd>
          </div>
        </dl>
        <p className="review-message">
          <AnimatedCopy>{values.message}</AnimatedCopy>
        </p>
        <div className="review-actions">
          <a className="fcl-button" href={email}>
            Open email draft
          </a>
          <button className="fcl-link" onClick={() => setReview(false)}>
            Edit details
          </button>
          <button className="fcl-link" onClick={copy}>
            {copied ? "Enquiry copied" : "Copy enquiry"}
          </button>
        </div>
        <p role="status" className="fcl-muted">
          <AnimatedCopy>
            {copyError
              ? "Copy is unavailable. Select the details above and copy them manually."
              : copied
                ? "Copied. You can paste it into an email to info@felixbd.com."
                : "Prefer webmail? Copy the enquiry and email info@felixbd.com."}
          </AnimatedCopy>
        </p>
      </section>
    );
  return (
    <form
      ref={form}
      className="enquiry-form"
      aria-labelledby="enquiry-heading"
      onSubmit={validate}
      noValidate
    >
      <div className="form-heading">
        <h2 id="enquiry-heading">
          <AnimatedCopy>Project enquiry</AnimatedCopy>
        </h2>
        <p>
          <AnimatedCopy>
            Fields marked * are required. We’ll prepare an email draft for you
            to review and send.
          </AnimatedCopy>
        </p>
      </div>
      <div className="form-grid">
        {(
          [
            ["name", "Your name *", "text", "name"],
            ["email", "Email address *", "email", "email"],
            ["company", "Company", "text", "organization"],
            ["phone", "Phone number", "tel", "tel"],
          ] as const
        ).map(([key, label, type, auto]) => (
          <div className="form-field" key={key}>
            <label htmlFor={`enquiry-${key}`}>
              <AnimatedCopy>{label}</AnimatedCopy>
            </label>
            <input
              id={`enquiry-${key}`}
              name={key}
              type={type}
              autoComplete={auto}
              required={key === "name" || key === "email"}
              value={values[key]}
              onChange={(e) => change(key, e.target.value)}
              aria-invalid={Boolean(errors[key])}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
            />
            <span id={`${key}-error`} className="field-error">
              {errors[key] ?? ""}
            </span>
          </div>
        ))}
      </div>
      <div className="form-field">
        <BrandSelect
          id="enquiry-solution"
          name="solution"
          label="What would you like to discuss?"
          items={enquiryOptions}
          value={values.solution}
          onValueChange={(value) => change("solution", value)}
          popupClassName="enquiry-select-popup"
        />
      </div>
      <div className="form-field">
        <label htmlFor="enquiry-message">
          <AnimatedCopy>Your project or requirements *</AnimatedCopy>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          minLength={20}
          rows={4}
          value={values.message}
          onChange={(e) => change("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-help message-error"
        />
        <span id="message-help" className="field-help">
          Tell us about the location, type of space and systems you need.
        </span>
        <span id="message-error" className="field-error">
          {errors.message ?? ""}
        </span>
      </div>
      <button className="fcl-button" type="submit">
        Review enquiry
      </button>
    </form>
  );
}
