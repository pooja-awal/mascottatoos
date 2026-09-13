import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

export default function WhatsappButton() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-30 flex h-12 w-12 items-center justify-center transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14"
    >
      <FaWhatsapp className="h-9 w-9 text-[#25D366] sm:h-10 sm:w-10" />
    </a>
  );
}
