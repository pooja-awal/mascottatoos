"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import Appear, { springs } from "@/components/appear";
import CornerMarks from "@/components/corner-marks";
import { aboutImage, navLinks, openingHours, siteConfig, unsplashUrl } from "@/data/site";

const menuLinks = [{ label: "Home", href: "/" }, ...navLinks];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href;
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Bar: 16px/80px padding on desktop, 16px/30px tablet, 20px phone. */}
      <Appear y={-160} perspective transition={springs.header} className="relative z-50">
      <div className="mx-auto flex w-full max-w-[1560px] items-center justify-between px-5 py-5 mix-blend-difference sm:px-[30px] sm:py-4 lg:px-20">
        <Link
          href="/"
          onClick={close}
          className="font-display text-[28px] leading-[35px] tracking-wide text-foreground uppercase"
        >
          {siteConfig.name}
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            setMounted(true);
            setOpen((v) => !v);
          }}
          className="relative h-6 w-9 shrink-0 cursor-pointer"
        >
          <span
            className={`absolute h-0.5 bg-foreground transition-all duration-300 ${
              open
                ? "top-[11px] left-[9px] w-[18px] rotate-45"
                : "top-[7px] left-[6px] w-6"
            }`}
          />
          <span
            className={`absolute h-0.5 bg-foreground transition-all duration-300 ${
              open
                ? "top-[11px] left-[9px] w-[18px] -rotate-45"
                : "top-[15px] left-[6px] w-5"
            }`}
          />
        </button>
      </div>
      </Appear>

      {mounted && (
        <div
          data-lenis-prevent
          className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background transition-all duration-500 ease-out ${
            open ? "opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <div className="h-[69px] shrink-0" aria-hidden />
          <div className="flex flex-1 flex-col justify-start gap-6 px-5 pt-4 pb-6 sm:justify-center sm:gap-14 sm:px-[30px] sm:pt-0 sm:pb-16 lg:flex-row lg:items-center lg:gap-16 lg:px-20">
            <div className="relative mx-auto hidden w-full max-w-sm shrink-0 pb-16 lg:mx-0 lg:block">
              <div className="relative border border-card-border">
                <CornerMarks corners={[0, 1]} />
                <img
                  src={unsplashUrl(aboutImage, 700, 900)}
                  alt="Inside the studio"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-[75%] bg-white p-12 text-background">
                <CornerMarks corners={[2, 3]} />
                <h3 className="font-display text-2xl tracking-[0.02em]">
                  Opening Hours
                </h3>
                <dl className="mt-6 space-y-2 text-base">
                  {openingHours.map((row) => (
                    <div key={row.day} className="flex gap-4">
                      <dt className="w-12 text-lg font-semibold">
                        {row.day.toUpperCase()}
                      </dt>
                      <span>:</span>
                      <dd>{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <nav className="flex flex-col gap-0.5 sm:gap-0">
              {menuLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`sweep font-display inline-flex w-fit items-start px-2 text-2xl uppercase sm:text-6xl lg:text-7xl ${
                      active ? "sweep-active" : ""
                    }`}
                  >
                    {link.label}
                    <sup className="mt-2 ml-1 hidden text-sm tracking-wide sm:inline">
                      {String(i + 1).padStart(2, "0")}
                    </sup>
                  </Link>
                );
              })}
            </nav>

            <div className="flex shrink-0 flex-col gap-4 sm:gap-12 lg:ml-8">
              <div>
                <h3 className="font-display text-lg tracking-wide uppercase sm:text-4xl">
                  Contact Us
                </h3>
                <p className="mt-2 text-sm text-foreground/80 sm:mt-6 sm:text-2xl sm:font-semibold">
                  Phone :{" "}
                  <a href={`tel:${siteConfig.phone}`} className="text-foreground">
                    {siteConfig.phone}
                  </a>
                </p>
                <p className="mt-1 text-sm text-foreground/80 sm:mt-3 sm:text-2xl sm:font-semibold">
                  Email :{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-foreground">
                    {siteConfig.email}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg tracking-wide uppercase sm:text-4xl">
                  Find Us On
                </h3>
                <div className="mt-3 flex items-center gap-5 sm:hidden">
                  <a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram className="h-6 w-6" style={{ color: "#E4405F" }} />
                  </a>
                  <a href={siteConfig.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                    <FaFacebook className="h-6 w-6" style={{ color: "#1877F2" }} />
                  </a>
                  <a href={siteConfig.googleMaps} target="_blank" rel="noreferrer" aria-label="Google Maps">
                    <SiGooglemaps className="h-6 w-6" style={{ color: "#4285F4" }} />
                  </a>
                  <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp className="h-6 w-6" style={{ color: "#25D366" }} />
                  </a>
                </div>

                <ul className="mt-6 hidden space-y-3 text-2xl font-semibold sm:block">
                  {[
                    ["Instagram", siteConfig.instagram],
                    ["Facebook", siteConfig.facebook],
                    ["Google Maps", siteConfig.googleMaps],
                    ["WhatsApp", siteConfig.whatsapp],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-foreground"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
