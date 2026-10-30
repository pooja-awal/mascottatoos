import Link from "next/link";
import { navLinks, siteConfig, footerImage, unsplashUrl } from "@/data/site";

const footerLinks = [{ label: "Home", href: "/" }, ...navLinks];

const socialLinks = [
  { label: "Facebook", href: siteConfig.facebook },
  { label: "Tiktok", href: siteConfig.tiktok },
  { label: "Instagram", href: siteConfig.instagram },
];

export default function SiteFooter() {
  return (
    <footer className="bg-background px-5 pt-24 sm:px-[30px] lg:px-20 lg:pt-40">
      <div className="mx-auto max-w-[1560px]">
        {/* Top row: wordmark, location, contact */}
        <div className="grid gap-10 lg:grid-cols-[1fr_25.3125%_25.3125%] lg:gap-[50px]">
          <Link
            href="/"
            className="font-display self-start text-5xl leading-none tracking-wide uppercase lg:text-[64px] lg:leading-[88px]"
          >
            {siteConfig.name}
          </Link>

          <div>
            <p className="text-base leading-[22.4px]">Location</p>
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noreferrer"
              className="mt-[13px] block max-w-[220px] text-lg leading-[25.2px]"
            >
              {siteConfig.address}
            </a>
          </div>

          <div>
            <p className="text-base leading-[22.4px]">Contact Us</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-[13px] block text-lg leading-[21px]"
            >
              Phone : {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2.5 block text-lg leading-[21px]"
            >
              Email : {siteConfig.email}
            </a>
          </div>
        </div>

        <img
          src={unsplashUrl(footerImage, 1500, 914)}
          alt="Tattoo artist at work"
          className="mt-[72px] h-[300px] w-full object-cover"
          loading="lazy"
        />

        {/* Bottom row: tagline, links, social */}
        <div className="mt-[70px] grid gap-10 lg:grid-cols-[1fr_25.3125%_25.3125%] lg:gap-[50px]">
          <h3 className="font-display max-w-[582px] self-start text-4xl leading-[43.2px]">
            Where your story
            <br />
            becomes art
          </h3>

          <div className="lg:pl-1">
            <p className="text-base leading-[22.4px] text-foreground/80">Links</p>
            <ul className="mt-[14.6px] space-y-[18px]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base leading-[22.4px] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-1">
            <p className="text-base leading-[22.4px] text-foreground/80">Social</p>
            <ul className="mt-[14.6px] space-y-[18px]">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-base leading-[22.4px] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[85px] flex flex-col items-start justify-between gap-4 py-8 text-base leading-[22.4px] text-foreground/80 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-9">
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
