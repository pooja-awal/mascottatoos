"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { aboutImage, navLinks, openingHours, siteConfig, unsplashUrl } from "@/data/site";

const menuLinks = [{ label: "Home", href: "/" }, ...navLinks];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) setMounted(true);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href;
  const close = () => setOpen(false);

  return (
    <header
      className={`inset-x-0 top-0 z-50 ${open ? "fixed" : "absolute"}`}
    >
      <div className="relative z-50 flex w-full items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-wide uppercase text-foreground"
          onClick={close}
        >
          {siteConfig.name}
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex flex-col gap-1.5 p-2"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mounted && (
        <div
          className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background transition-all duration-500 ease-out ${
            open
              ? "opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <div className="h-[72px] shrink-0 lg:h-[76px]" aria-hidden />
          <div className="flex flex-1 flex-col justify-start gap-6 px-6 pt-4 pb-6 sm:justify-center sm:gap-14 sm:pt-0 sm:pb-16 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
          <div className="relative mx-auto hidden w-full max-w-sm shrink-0 pb-16 lg:mx-0 lg:block">
            <div className="relative border border-border">
              <span className="absolute top-0 left-0 z-10 -translate-x-1/2 -translate-y-1/2 text-3xl leading-none font-light text-foreground/70">
                +
              </span>
              <span className="absolute top-0 right-0 z-10 translate-x-1/2 -translate-y-1/2 text-3xl leading-none font-light text-foreground/70">
                +
              </span>
              <img
                src={unsplashUrl(aboutImage, 700, 900)}
                alt="Inside the studio"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[75%] border border-border bg-white p-6 text-background">
              <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-3xl leading-none font-light text-foreground/70">
                +
              </span>
              <span className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 text-3xl leading-none font-light text-foreground/70">
                +
              </span>
              <h3 className="font-display text-lg tracking-wide uppercase">
                Opening Hours
              </h3>
              <dl className="mt-4 space-y-1.5 text-sm">
                {openingHours.map((row) => (
                  <div key={row.day} className="flex gap-3">
                    <dt className="w-10 font-semibold">
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
                  className={`btn-sweep btn-sweep-outline font-display inline-flex w-fit items-start px-2 text-2xl font-normal uppercase transition-colors duration-300 sm:text-6xl sm:font-normal lg:text-7xl ${
                    active ? "btn-sweep-active text-foreground lg:text-background" : "text-foreground"
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
              <p className="mt-2 text-sm font-normal text-foreground/80 sm:mt-6 sm:text-2xl sm:font-semibold">
                Phone :{" "}
                <a href={`tel:${siteConfig.phone}`} className="text-foreground">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="mt-1 text-sm font-normal text-foreground/80 sm:mt-3 sm:text-2xl sm:font-semibold">
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
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" style={{ color: "#E4405F" }} />
                </a>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6" style={{ color: "#1877F2" }} />
                </a>
                <a
                  href={siteConfig.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Maps"
                >
                  <SiGooglemaps className="h-6 w-6" style={{ color: "#4285F4" }} />
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6" style={{ color: "#25D366" }} />
                </a>
              </div>

              <ul className="mt-6 hidden space-y-3 text-2xl font-semibold sm:block">
                <li>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.googleMaps}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80"
                  >
                    Google Maps
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      )}
    </header>
  );
}
