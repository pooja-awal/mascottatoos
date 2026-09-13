import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

export default function WhatsappButton() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-30 flex h-24 w-24 items-center justify-center transition-transform duration-300 hover:scale-105 sm:h-28 sm:w-28"
    >
      <FaWhatsapp className="h-[4.5rem] w-[4.5rem] text-[#25D366] sm:h-20 sm:w-20" />
    </a>
  );
}
