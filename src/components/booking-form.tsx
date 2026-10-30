"use client";

import { FormEvent, useState } from "react";
import { isValidEmailShape } from "@/lib/email";

const serviceOptions = ["Tattoo", "Piercing"];

type Errors = Partial<
  Record<"name" | "email" | "phone" | "service" | "age" | "privacy", string>
>;

function isValidIndianMobile(digits: string): boolean {
  return /^[0-9]{10}$/.test(digits);
}

/**
 * Appointment request form. `compact` is the 2-column form beside the studio
 * photo; `wide` is the full-width form used on the Contact page.
 */
export default function BookingForm({
  variant = "compact",
}: {
  variant?: "compact" | "wide";
}) {
  const wide = variant === "wide";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [ageVerified, setAgeVerified] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Strip anything that isn't a digit and cap at 10 — no letters, no overflow.
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
  }

  function validate(): Errors {
    const next: Errors = {};

    if (!name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!isValidEmailShape(email)) {
      next.email = "Enter a valid email address (e.g. jane@email.com).";
    }

    if (!phone) {
      next.phone = "Please enter your mobile number.";
    } else if (!isValidIndianMobile(phone)) {
      next.phone = "Enter a valid 10-digit mobile number (digits only).";
    }

    if (!service) {
      next.service = "Please select a service.";
    }

    if (!ageVerified) {
      next.age = "You must verify you're 18 or older.";
    }

    if (!agreePrivacy) {
      next.privacy = "You must agree to the privacy policy.";
    }

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Shape looks right — now confirm the domain actually exists (catches
    // gibberish domains like "afv@io9.in" that pass regex but don't resolve).
    setCheckingEmail(true);
    try {
      const res = await fetch("/api/validate-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data: { valid: boolean; reason?: string } = await res.json();
      if (!data.valid) {
        setErrors({ email: data.reason ?? "That email address looks invalid." });
        return;
      }
    } catch {
      setErrors({
        email: "Couldn't verify your email right now — check your connection and try again.",
      });
      return;
    } finally {
      setCheckingEmail(false);
    }

    // No backend is wired up yet beyond the email check — this just
    // confirms the rest of the form validated.
    setSubmitted(true);
  }

  const labelClass =
    "mb-2 block text-sm leading-[16.8px] font-semibold text-foreground/80 uppercase";
  const fieldClass = (hasError: boolean) =>
    `h-[50px] w-full border bg-field px-5 py-[13px] text-base leading-[22px] text-foreground outline-none placeholder:text-foreground/40 focus:border-foreground ${
      hasError ? "border-red-500" : "border-transparent"
    }`;
  const errorClass = "mt-1.5 text-xs text-red-400";

  if (submitted) {
    return (
      <div className="border border-accent/40 bg-accent/10 p-6 text-sm leading-6">
        Thanks, {name.split(" ")[0]}! Your request looks good — we&apos;ll
        reach out at {email} or +91 {phone} to confirm your appointment.
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={`grid sm:grid-cols-2 ${
        wide ? "gap-x-9 gap-y-4" : "gap-x-2 gap-y-[17px]"
      }`}
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={fieldClass(!!errors.name)}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone*
        </label>
        <div
          className={`flex h-[50px] items-center border bg-field focus-within:border-foreground ${
            errors.phone ? "border-red-500" : "border-transparent"
          }`}
        >
          <span className="py-[14px] pl-5 text-base text-foreground/60 select-none">
            +91
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            value={phone}
            onChange={handlePhoneChange}
            placeholder="XXXXXXXXXX"
            className="w-full bg-transparent px-3 py-[14px] text-base leading-[22px] outline-none placeholder:text-foreground/40"
          />
        </div>
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="janedoe@gmail.com"
          className={fieldClass(!!errors.email)}
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service*
        </label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`select-chevron ${fieldClass(!!errors.service)} ${
            service ? "" : "text-foreground/40"
          }`}
        >
          <option value="" disabled>
            Please select...
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="text-background">
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service}</p>}
      </div>

      <div className="mt-[5px] sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your message with us..."
          className={`${fieldClass(false)} resize-none py-[14px] ${wide ? "!h-40" : "!h-[120px]"}`}
        />
      </div>

      <div className="space-y-3 sm:col-span-2">
        <div>
          <label className="flex items-center gap-2.5 text-sm leading-[16.8px] font-semibold text-foreground/80 uppercase">
            <input
              type="checkbox"
              checked={ageVerified}
              onChange={(e) => setAgeVerified(e.target.checked)}
              className="checkbox"
            />
            I verify that I am 18 years or older.*
          </label>
          {errors.age && <p className={`${errorClass} ml-[26px]`}>{errors.age}</p>}
        </div>

        <div>
          <label className="flex items-center gap-2.5 text-sm leading-[16.8px] font-semibold text-foreground/80 uppercase">
            <input
              type="checkbox"
              checked={agreePrivacy}
              onChange={(e) => setAgreePrivacy(e.target.checked)}
              className="checkbox"
            />
            <span>
              I agree to{" "}
              <a href="#" className="underline">
                privacy policy
              </a>
              . *
            </span>
          </label>
          {errors.privacy && (
            <p className={`${errorClass} ml-[26px]`}>{errors.privacy}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={checkingEmail}
        className="mt-[14px] h-12 w-full cursor-pointer bg-[#fafaff] text-base text-background uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {checkingEmail ? "Checking email…" : "Submit"}
      </button>
    </form>
  );
}
