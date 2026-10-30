import type { Metadata } from "next";
import BookingForm from "@/components/booking-form";
import FAQ from "@/components/faq";
import PageHero from "@/components/page-hero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Mascot Tattoos",
  description:
    "Book your appointment at Mascot Tattoos — send your idea, preferred artist, and placement, or check our opening hours.",
};

const details = [
  { label: "Current Location", value: siteConfig.address, href: siteConfig.googleMaps },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Book An Appointment">
        <div className="mx-auto max-w-[1024px] bg-panel p-6 sm:p-10">
          <div className="bg-accent p-6 text-background sm:p-9">
            <h2 className="font-display text-2xl leading-[28.8px]">
              Welcome to Our Booking Form
            </h2>
            <p className="mt-2.5 text-lg leading-[25.2px]">
              We&apos;d love to work with you. Share your idea, preferred
              artist, and placement and we&apos;ll get back to you to confirm
              your appointment.
            </p>
          </div>
          <div className="mt-10">
            <BookingForm variant="wide" />
          </div>
        </div>

        <div className="mx-auto mt-[140px] grid max-w-[1024px] gap-10 text-center sm:grid-cols-3 sm:gap-6">
          {details.map((d) => (
            <div key={d.label}>
              <h3 className="font-display text-xl leading-7 text-foreground/60 uppercase">
                {d.label}
              </h3>
              <a
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="font-display mt-4 inline-block text-2xl leading-[28.8px]"
              >
                {d.value}
              </a>
            </div>
          ))}
        </div>
      </PageHero>
      <FAQ />
    </>
  );
}
