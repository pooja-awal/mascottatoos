import Link from "next/link";
import { footerBannerImage, navLinks, siteConfig, unsplashUrl } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl tracking-wide uppercase">
              {siteConfig.name}
            </span>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              {siteConfig.address}
            </p>
            <p className="mt-2 text-sm text-muted">
              Phone:{" "}
              <a href={`tel:${siteConfig.phone}`} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </p>
            <p className="text-sm text-muted">
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-wider text-muted uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-wider text-muted uppercase">
              Follow
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/80 hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/80 hover:text-accent"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/80 hover:text-accent"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 overflow-hidden border border-border">
          <img
            src={unsplashUrl(footerBannerImage, 1600, 360)}
            alt="Detail of a healed tattoo"
            className="h-40 w-full object-cover sm:h-56"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
