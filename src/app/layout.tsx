import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import WhatsappButton from "@/components/whatsapp-button";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mascot Tattoos — Custom Tattoo & Piercing Studio in Ghaziabad",
  description:
    "Mascot Tattoos is a custom tattoo and piercing studio in Raj Nagar, Ghaziabad. Custom tattoos, black & grey, minimalistic, portrait tattoos, ombre powder brows, and piercing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappButton />
      </body>
    </html>
  );
}
