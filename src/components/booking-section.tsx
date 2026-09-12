"use client";

import { FormEvent, useState } from "react";
import CornerMarks from "@/components/corner-marks";
import { bookingImage, openingHours, unsplashUrl } from "@/data/site";

const serviceOptions = ["Tattoo", "Piercing"];
import { isValidEmailShape } from "@/lib/email";

type Errors = Partial<
  Record<"name" | "email" | "phone" | "service" | "age" | "privacy", string>
>;

function isValidIndianMobile(digits: string): boolean {
  return /^[0-9]{10}$/.test(digits);
}

export default function BookingSection() {
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
    "mb-2 block text-sm font-semibold tracking-wide text-foreground/90 uppercase";
  const inputClass = (hasError: boolean) =>
    `w-full border bg-surface-2 px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent ${
      hasError ? "border-red-500" : "border-transparent"
    }`;

  return (
    <section className="bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl">
              Book Your Appointment
            </h2>

            {submitted ? (
              <div className="mt-8 border border-accent/40 bg-accent/10 p-6 text-sm leading-6 text-foreground">
                Thanks, {name.split(" ")[0]}! Your request looks good —
                we&apos;ll reach out at {email} or +91 {phone} to confirm
                your appointment.
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="mt-8 grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span className="text-accent">*</span>
                  </label>
                  <div
                    className={`flex items-center border bg-surface-2 focus-within:border-accent ${
                      errors.phone ? "border-red-500" : "border-transparent"
                    }`}
                  >
                    <span className="select-none py-3.5 pl-4 text-sm text-muted">
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
                      className="w-full bg-transparent px-3 py-3.5 text-sm text-foreground outline-none placeholder:text-muted"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="janedoe@gmail.com"
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service <span className="text-accent">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`${inputClass(!!errors.service)} ${
                      service ? "" : "text-muted"
                    }`}
                  >
                    <option value="" disabled>
                      Please select...
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="text-foreground">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
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
                    className={`resize-none ${inputClass(false)}`}
                  />
                </div>

                <div className="space-y-3 sm:col-span-2">
                  <div>
                    <label className="flex items-start gap-3 text-xs font-semibold tracking-wide text-foreground/90 uppercase">
                      <input
                        type="checkbox"
                        checked={ageVerified}
                        onChange={(e) => setAgeVerified(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 border border-border bg-surface-2 accent-[var(--accent)]"
                      />
                      I verify that I am 18 years or older.
                      <span className="text-accent">*</span>
                    </label>
                    {errors.age && (
                      <p className="mt-1.5 ml-7 text-xs text-red-400 normal-case">
                        {errors.age}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 text-xs font-semibold tracking-wide text-foreground/90 uppercase">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 border border-border bg-surface-2 accent-[var(--accent)]"
                      />
                      I agree to{" "}
                      <a href="#" className="underline hover:text-accent">
                        Privacy Policy
                      </a>
                      . <span className="text-accent">*</span>
                    </label>
                    {errors.privacy && (
                      <p className="mt-1.5 ml-7 text-xs text-red-400 normal-case">
                        {errors.privacy}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={checkingEmail}
                  className="btn-sweep btn-sweep-invert w-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-background uppercase disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                >
                  {checkingEmail ? "Checking email…" : "Submit"}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative">
              <CornerMarks />
              <div className="overflow-hidden border border-border">
                <img
                  src={unsplashUrl(bookingImage, 800, 420)}
                  alt="Studio interior"
                  className="h-56 w-full object-cover grayscale sm:h-64"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="font-display text-lg uppercase">
                Opening Hours
              </h3>
              <ul className="mt-5 space-y-3">
                {openingHours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between border-b border-border/60 pb-3 text-sm last:border-none last:pb-0"
                  >
                    <span className="font-medium">{row.day}</span>
                    <span
                      className={
                        row.hours === "Closed" ? "text-muted" : "text-foreground/80"
                      }
                    >
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
