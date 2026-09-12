"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BookAppointmentButton from "@/components/book-appointment-button";
import { navLinks, siteConfig } from "@/data/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-wide uppercase text-foreground"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  active ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <BookAppointmentButton size="sm" />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-2 py-2.5 text-sm font-medium hover:bg-surface hover:text-foreground ${
                  active ? "bg-surface text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <BookAppointmentButton
            size="sm"
            className="mt-2 w-fit"
            onClick={() => setOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}
