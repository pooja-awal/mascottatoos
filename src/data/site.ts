// Central content for the Mascottatoos site. Swap the `img` seeds for real
// photography and edit copy here — components just render this data.

export const siteConfig = {
  name: "Mascottatoos",
  tagline: "Custom Tattoo & Piercing Studio",
  city: "New York, NY",
  address: "123 Ink Street, New York, NY 10001",
  phone: "+1 (917) 555-0123",
  email: "book@mascottatoos.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Artists", href: "/#artists" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#booking" },
];

export function imgUrl(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export const services = [
  {
    title: "Custom Tattoo",
    desc: "One-of-a-kind designs built around your idea, sketched and refined with you before the needle ever touches skin.",
    seed: "mascot-custom",
  },
  {
    title: "Black & Grey Tattoo",
    desc: "Smooth shading and deep contrast for portraits, realism, and moody linework that ages beautifully.",
    seed: "mascot-blackgrey",
  },
  {
    title: "Fine Line Tattoo",
    desc: "Delicate, precise linework for minimalist pieces, script, and detailed micro-tattoos.",
    seed: "mascot-fineline",
  },
  {
    title: "Cover-Up Tattoo",
    desc: "Reworking old or unwanted tattoos into pieces you'll actually want to show off.",
    seed: "mascot-coverup",
  },
  {
    title: "Tattoo Removal (Laser)",
    desc: "Safe, gradual laser removal and fading sessions for old ink, prepping skin for a fresh start.",
    seed: "mascot-removal",
  },
  {
    title: "Piercing",
    desc: "Ear, facial, and body piercing with implant-grade jewelry in a sterile, single-use setup.",
    seed: "mascot-piercing",
  },
];

export const artists = [
  { name: "Alex", role: "Realism & Portraits", seed: "mascot-artist-alex" },
  { name: "Marcus", role: "Black & Grey", seed: "mascot-artist-marcus" },
  { name: "Liam", role: "Traditional", seed: "mascot-artist-liam" },
  { name: "Jade", role: "Fine Line & Script", seed: "mascot-artist-jade" },
  { name: "Ethan", role: "Neo-Traditional", seed: "mascot-artist-ethan" },
  { name: "Sofia", role: "Color & Illustrative", seed: "mascot-artist-sofia" },
];

export const testimonials = [
  {
    name: "Jenny Wilson",
    quote:
      "I was a bit nervous but the whole team made me feel comfortable. First tattoo done and it's exactly what I wanted.",
    rating: 5,
    seed: "mascot-testi-1",
  },
  {
    name: "Devon Miller",
    quote:
      "Super professional, the studio is spotless, and the artist nailed the design brief perfectly. Highly recommend.",
    rating: 5,
    seed: "mascot-testi-2",
  },
  {
    name: "Emily Carter",
    quote:
      "My cover-up came out way better than I expected. You genuinely can't tell there was ever anything underneath.",
    rating: 5,
    seed: "mascot-testi-3",
  },
  {
    name: "Sofia Ramirez",
    quote:
      "Booked a walk-in slot for a small piece and left with something I'll be showing off for years. Great energy in there.",
    rating: 5,
    seed: "mascot-testi-4",
  },
  {
    name: "Chris Bennett",
    quote:
      "Absolutely worth the wait for an appointment. Detailed consultation, honest advice, and flawless linework.",
    rating: 5,
    seed: "mascot-testi-5",
  },
  {
    name: "Olivia Bennett",
    quote:
      "Second piece done here — consistent quality every time and they always take real care during aftercare advice.",
    rating: 5,
    seed: "mascot-testi-6",
  },
];

export const marqueeItems = [
  "Piercing",
  "Custom Tattoo",
  "Fine Line",
  "Black & Grey",
  "Realism",
  "Aftercare",
  "Tattoo Removal",
  "Book Now",
];

export const faqs = [
  {
    category: "tattoo" as const,
    q: "How do I book an appointment?",
    a: "Use the booking form on this page or message us on Instagram with your idea, preferred artist, and placement. We'll follow up to confirm a consultation and deposit.",
  },
  {
    category: "tattoo" as const,
    q: "How much does a tattoo cost?",
    a: "Pricing depends on size, placement, and detail. Small pieces start around $120; larger custom work is quoted after a free consultation with your artist.",
  },
  {
    category: "tattoo" as const,
    q: "How long do tattoos take to heal?",
    a: "Most tattoos heal on the surface within 2–3 weeks and fully settle under the skin by 4–6 weeks. We'll send you detailed aftercare instructions after your session.",
  },
  {
    category: "tattoo" as const,
    q: "Can I get a tattoo if I'm under 18?",
    a: "No. We only tattoo clients 18 and older, no exceptions, regardless of parental consent.",
  },
  {
    category: "piercing" as const,
    q: "Can I change my jewelry right away?",
    a: "We recommend leaving initial jewelry in until the piercing is fully healed — this ranges from 6 weeks for lobes to several months for cartilage and body piercings.",
  },
  {
    category: "piercing" as const,
    q: "Does piercing require an appointment?",
    a: "Walk-ins are welcome for most piercings, but booking ahead guarantees your preferred artist and jewelry selection.",
  },
];

export const openingHours = [
  { day: "Mon", hours: "Closed" },
  { day: "Tue", hours: "12 PM – 8 PM" },
  { day: "Wed", hours: "12 PM – 8 PM" },
  { day: "Thu", hours: "12 PM – 8 PM" },
  { day: "Fri", hours: "11 AM – 9 PM" },
  { day: "Sat", hours: "11 AM – 9 PM" },
  { day: "Sun", hours: "12 PM – 6 PM" },
];

export const galleryCategories = [
  "All",
  "Black & Grey",
  "Color",
  "Fine Line",
  "Traditional",
  "Piercing",
] as const;

export const galleryImages = Array.from({ length: 24 }, (_, i) => {
  const categories = galleryCategories.slice(1);
  const category = categories[i % categories.length];
  return {
    seed: `mascot-gallery-${i + 1}`,
    category,
  };
});
