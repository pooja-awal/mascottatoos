import Link from "next/link";
import BookAppointmentButton from "@/components/book-appointment-button";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 text-center lg:px-8">
      <h2 className="font-display text-3xl uppercase sm:text-4xl">
        Ready to Get Inked?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
        Book a consultation with one of our artists, or check the answers to
        our most common questions first.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <BookAppointmentButton />
        <Link
          href="/faq"
          className="btn-sweep btn-sweep-accent inline-flex items-center justify-center border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300"
        >
          Read FAQs
        </Link>
      </div>
    </section>
  );
}
