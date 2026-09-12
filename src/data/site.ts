// Central content for the Mascottatoos site. Photos are free-to-use Unsplash
// images (Unsplash License — free for commercial use, no attribution
// required) referenced by photo id. Swap any `photo` value for real studio
// photography whenever it's ready; components just render this data.

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
  googleMaps: "https://maps.google.com/?q=123+Ink+Street,+New+York,+NY+10001",
  whatsapp: "https://wa.me/19175550123",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Artists", href: "/artists" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** Build a sized, cropped Unsplash CDN url from a bare photo id. */
export function unsplashUrl(photo: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${photo}?q=80&w=${w}&h=${h}&auto=format&fit=crop`;
}

// One-off section images used directly in a single component.
export const heroImage = "1552627019-947c3789ffb5";
export const aboutImage = "1542744383-8c330d91f4b1";
export const promoImage = "1601848714157-d845bb5c11ff";
export const bookingImage = "1607281503082-f01fedd97a5b";

// Rotating showcase card (About section) — photos auto-cycle on an interval.
export const showcasePhotos = [
  "1738913920284-f629b6e40611",
  "1713730633807-6b24c383ad76",
  "1581518570052-e08e4d85cd10",
  "1740239986116-6c04b956f9d3",
];
export const showcaseAvatars = [
  "1513078094721-e7b6e0394a6a",
  "1565058379802-bbe93b2f703a",
  "1564426622559-5af68da63b96",
  "1643513456892-437e82e06f4a",
  "1712432321375-226f466fff85",
];
export const showcaseStat = { value: "1.4K", label: "Satisfied Clients" };
export const footerBannerImage = "1516008684536-605574d804ce";

export const services = [
  {
    title: "Custom Tattoo",
    desc: "One-of-a-kind designs built around your idea, sketched and refined with you before the needle ever touches skin.",
    photo: "1568515045052-f9a854d70bfd",
  },
  {
    title: "Black & Grey Tattoo",
    desc: "Smooth shading and deep contrast for portraits, realism, and moody linework that ages beautifully.",
    photo: "1570168983832-8989dae1522e",
  },
  {
    title: "Fine Line Tattoo",
    desc: "Delicate, precise linework for minimalist pieces, script, and detailed micro-tattoos.",
    photo: "1542727365-19732a80dcfd",
  },
  {
    title: "Cover-Up Tattoo",
    desc: "Reworking old or unwanted tattoos into pieces you'll actually want to show off.",
    photo: "1704345911745-f2524e8b76f6",
  },
  {
    title: "Traditional Tattoo",
    desc: "Bold outlines, saturated color, and time-tested American traditional imagery built to hold up for decades.",
    photo: "1543244128-30d70d41e2a9",
  },
  {
    title: "Piercing",
    desc: "Ear, facial, and body piercing with implant-grade jewelry in a sterile, single-use setup.",
    photo: "1603323226047-df6de54ddc13",
  },
];

export const artists = [
  {
    name: "Alex",
    role: "Realism & Portraits",
    photo: "1513078094721-e7b6e0394a6a",
    instagram: "@alex.ink",
  },
  {
    name: "Marcus",
    role: "Black & Grey",
    photo: "1565058379802-bbe93b2f703a",
    instagram: "@marcus.ink",
  },
  {
    name: "Liam",
    role: "Traditional",
    photo: "1564426622559-5af68da63b96",
    instagram: "@liam.ink",
  },
  {
    name: "Jade",
    role: "Fine Line & Script",
    photo: "1643513456892-437e82e06f4a",
    instagram: "@jade.ink",
  },
];

export const testimonials = [
  {
    name: "Jenny Wilson",
    quote:
      "I was a bit nervous but the whole team made me feel comfortable. First tattoo done and it's exactly what I wanted.",
    rating: 5,
    photo: "1531951829979-d658d7e5e8a6",
  },
  {
    name: "Devon Miller",
    quote:
      "Super professional, the studio is spotless, and the artist nailed the design brief perfectly. Highly recommend.",
    rating: 5,
    photo: "1562379825-415aea84ebcf",
  },
  {
    name: "Emily Carter",
    quote:
      "My cover-up came out way better than I expected. You genuinely can't tell there was ever anything underneath.",
    rating: 5,
    photo: "1562962230-16e4623d36e6",
  },
  {
    name: "Sofia Ramirez",
    quote:
      "Booked a walk-in slot for a small piece and left with something I'll be showing off for years. Great energy in there.",
    rating: 5,
    photo: "1604374376934-2df6fad6519b",
  },
  {
    name: "Chris Bennett",
    quote:
      "Absolutely worth the wait for an appointment. Detailed consultation, honest advice, and flawless linework.",
    rating: 5,
    photo: "1547754145-ef9ff306e3f3",
  },
  {
    name: "Olivia Bennett",
    quote:
      "Second piece done here — consistent quality every time and they always take real care during aftercare advice.",
    rating: 5,
    photo: "1585745422697-1b42b98aac14",
  },
];

export const marqueeItems = [
  "Piercing",
  "Custom Tattoo",
  "Fine Line",
  "Black & Grey",
  "Realism",
  "Aftercare",
  "Traditional",
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

// Curated real photos, hand-assigned to the category they actually depict.
export const galleryImages = [
  { photo: "1552627019-947c3789ffb5", category: "Black & Grey" },
  { photo: "1565058379802-bbe93b2f703a", category: "Black & Grey" },
  { photo: "1564426622559-5af68da63b96", category: "Black & Grey" },
  { photo: "1570168983832-8989dae1522e", category: "Black & Grey" },
  { photo: "1567601262588-37537a1f6cc7", category: "Black & Grey" },
  { photo: "1601848714157-d845bb5c11ff", category: "Color" },
  { photo: "1503470439160-b5796c5ec510", category: "Color" },
  { photo: "1547754145-ef9ff306e3f3", category: "Color" },
  { photo: "1585745422697-1b42b98aac14", category: "Color" },
  { photo: "1562379825-415aea84ebcf", category: "Color" },
  { photo: "1542727365-19732a80dcfd", category: "Fine Line" },
  { photo: "1562962230-16e4623d36e6", category: "Fine Line" },
  { photo: "1531951829979-d658d7e5e8a6", category: "Fine Line" },
  { photo: "1627960630431-270d04164a22", category: "Fine Line" },
  { photo: "1651692883249-ed36b3523419", category: "Fine Line" },
  { photo: "1479767574301-a01c78234a0c", category: "Traditional" },
  { photo: "1543244128-30d70d41e2a9", category: "Traditional" },
  { photo: "1482328177731-274399da39f0", category: "Traditional" },
  { photo: "1578338527869-a196eec7f13d", category: "Traditional" },
  { photo: "1604374376934-2df6fad6519b", category: "Traditional" },
  { photo: "1603323226047-df6de54ddc13", category: "Piercing" },
  { photo: "1629719256608-51317205d994", category: "Piercing" },
  { photo: "1702034802346-1837090e3b30", category: "Piercing" },
  { photo: "1602722872368-0cfc00f748ff", category: "Piercing" },
] as const;
