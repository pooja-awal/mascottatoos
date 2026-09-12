import { imgUrl, openingHours } from "@/data/site";

export default function BookingSection() {
  return (
    <section id="booking" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">
              Get In Touch
            </p>
            <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
              Book Your Appointment
            </h2>

            <form className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="jane@email.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase"
                >
                  Tell us about your idea
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="Placement, size, style, preferred artist..."
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-muted sm:col-span-2">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-background accent-[var(--accent)]"
                />
                I agree that I am 18+ and consent to the studio&apos;s
                privacy policy.
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:col-span-2 sm:w-fit"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={imgUrl("mascot-booking", 800, 420)}
                alt="Studio interior"
                className="h-56 w-full object-cover grayscale sm:h-64"
                loading="lazy"
              />
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
