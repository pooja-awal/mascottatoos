// Central content for the Mascot Tattoos site. Photos are free-to-use Unsplash
// images (Unsplash License — free for commercial use, no attribution
// required) referenced by photo id. Swap any `photo` value for real studio
// photography whenever it's ready; components just render this data.

export const siteConfig = {
  name: "Mascot Tattoos",
  tagline: "Custom Tattoo & Piercing Studio",
  city: "Raj Nagar, Ghaziabad",
  address:
    "Shop No- GF-4/5 D-1, RDC, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
  phone: "+91 80480 37870",
  email: "sarora975@gmail.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
  googleMaps:
    "https://maps.google.com/?q=Shop+No-+GF-4/5+D-1,+RDC,+Raj+Nagar,+Ghaziabad,+Uttar+Pradesh+201002",
  whatsapp: "https://wa.me/918048037870",
  // TODO: replace with the studio's real "write a review" link from its
  // Google Business Profile (Google Business Profile → Get more reviews).
  googleReview: "https://g.page/r/REPLACE_WITH_PLACE_ID/review",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Artists", href: "/artists" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
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
    title: "Minimalistic Tattoo",
    desc: "Delicate, precise linework for minimalist pieces, script, and detailed micro-tattoos.",
    photo: "1542727365-19732a80dcfd",
  },
  {
    title: "Portrait Tattoo",
    desc: "Award-winning realism work that captures faces, moments, and memories in fine detail.",
    photo: "1704345911745-f2524e8b76f6",
  },
  {
    title: "Ombre Powder Brows",
    desc: "Soft, gradient brow shading that looks natural from the first session and lasts for years.",
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
    name: "Sahil",
    role: "Owner & Realism / Portraits",
    photo: "1513078094721-e7b6e0394a6a",
    instagram: "@sahil.ink",
  },
  {
    name: "Gary",
    role: "Black & Grey",
    photo: "1565058379802-bbe93b2f703a",
    instagram: "@gary.ink",
  },
  {
    name: "Ateesh",
    role: "Traditional",
    photo: "1564426622559-5af68da63b96",
    instagram: "@ateesh.ink",
  },
  {
    name: "Nirvair",
    role: "Fine Line & Script",
    photo: "1643513456892-437e82e06f4a",
    instagram: "@nirvair.ink",
  },
];

// Sourced from the studio's real Google Business Profile reviews.
export const googleRating = {
  score: 4.9,
  count: 584,
};

export const testimonials = [
  {
    name: "Atul Verma",
    quote:
      "There are tattoo studios and then there is Mascot Tattoos . The second you walk in , you will feel the quality of their artists. Consultation is smooth. They help out really well in designing, creating and suggesting the changes your design will need. Tattoo came our pretty amazing, looking forward for more ink from here.",
    rating: 5,
    time: "3 years ago",
  },
  {
    name: "Him Chandravnshe",
    quote:
      "Got my first tattoo from mascot and i am really really happy n satisfied w my tattoo it came out exactly as i imagined .had a great time w my artists everyone was lively which made a really comfortable experience for me",
    rating: 5,
    time: "8 months ago",
  },
  {
    name: "shailly gupta",
    quote:
      "I just got my third tattoo from Sahil and it turned out exactly like the inspiration, it is so beautiful. I am absolutely in love with it. The entire experience was amazing. You feel right at home. Highly recommended to anyone looking for something.",
    rating: 5,
    time: "a year ago",
  },
  {
    name: "aditya kaushik",
    quote:
      "Got my very first tattoo from Sahil and as much as I loved the design and how the tattoo turned out to be, it was the overall experience that made getting my first tattoo a core memory. Thanks a ton to Sahil!! Keep rocking!",
    rating: 5,
    time: "11 months ago",
  },
  {
    name: "Aakarsh Pandey",
    quote:
      "Absolutely loved my experience here! They take proper measures required for sanitization The artists are amazing they guide you in a proper way The design turned out even better than I imagined. Highly recommend if you're looking for quality and detail!",
    rating: 5,
    time: "a year ago",
  },
  {
    name: "Bhavya Jain",
    quote:
      "Loved the experience. The artists are really good and friendly. Makes the whole experience fun and the tattoos comes out to be so pretty and exactly the same i want",
    rating: 5,
    time: "11 months ago",
  },
  {
    name: "tunisha Das",
    quote:
      "Great experience getting my septum pierced! The place was spotless, hygiene was perfect, and the piercer was very professional and reassuring. Would absolutely recommend.",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Dev Rana",
    quote:
      "My experience was 10/10 sahil arora is an amazing artist the studio was super clean and hygienic the attention to detail is super awesome if you re looking to get a tattoo done you should definitely go for mascot tattoos",
    rating: 5,
    time: "11 months ago",
  },
  {
    name: "Manaswani Tyagi",
    quote:
      "I went there after a lot of skepticism as I had personally not heard about this place. I just got to know about him through google. First of all, as I got my tattoo in the corona era so it was a great experience from that perspective as the place was not crowded and was quite hygienic. Secondly the work of the tattoo artist is commendable. He listens to the client's requirements with full patience and then give ample of ideas to choose from. This makes him the best tattoo artist out of all artists i have met so far. Tattoo came out to be really good and after a month of getting tattooed, i am excited to get another one very soon from the same place and the same artist. Keep up the good work...all the very best..",
    rating: 5,
    time: "5 years ago",
  },
  {
    name: "Amish Narang",
    quote:
      "Sahil is amazing he did a great job in the coverup for my arm tattoo and the detailings on the sword tattoo are simply extraordinary. Much recommended.",
    rating: 5,
    time: "a year ago",
  },
  {
    name: "Priti Chaudhary",
    quote:
      "I highly recommend Mr. Sahil Arora for their outstanding design and consultation. They took the time to understand my vision and offered creative enhancements that made the final tattoo exceptional. Their attention to detail and skill are top-notch, resulting in a tattoo that exceeded my expectations.",
    rating: 5,
    time: "2 years ago",
  },
  {
    name: "astha rai",
    quote:
      "I recently got a tattoo done from Sahil at Mascot Tattoo and believe me the best tattoo artist he is. 'Only the best' and yes that's true. He took care of utmost hygiene, the way he modified my tattoo design, the way he performed his art. Am the kind of person who is afraid of lil injection and I told about my fear to Sahil and the way he handled it was just amazing. His sense of humour ….A1….. Everything at Mascot Tattoo is The Best.",
    rating: 5,
    time: "2 years ago",
  },
  {
    name: "saurabh bali",
    quote:
      "Got my first tattoo. Sahil (artist) did a wonderful job, he is experienced and clears all the doubts of the client. The tattoo turned out to be great, better that my expectation. Hygienic conditions are maintained and over all atmosphere of the place is good. I'd recommend it to everyone.",
    rating: 5,
    time: "8 years ago",
  },
  {
    name: "Shashank Katyayen",
    quote:
      "Just got my first tattoo. Sahil is just amazingly creative and superb artist. Helped me a lot in designing the tattoo. He puts his heart and soul into it. Totally satisfied with the results. Thank you Sahil for a wonderful experience. I will be coming soon for my second tattoo. Will recommend everyone to go to Mascot Tattoos for their tattoos.",
    rating: 5,
    time: "5 years ago",
  },
  {
    name: "Harshit Parashar",
    quote:
      "This guy know what he is doing. I feel everyone should be very professional be it any field or any industry. Sahil is one such guy and Mascot Tattoos is one such place. Kudos to you guys and thanks a lot for the attention to details.",
    rating: 5,
    time: "a year ago",
  },
  {
    name: "satyam sharma",
    quote:
      "He is genuinely a great artist and a great person. He will genuinely make effort to discuss your ideas and bring it to reality. The work is outstanding and neat. The attention to detail is amazing. Anyone should blindly trust them and go for it.",
    rating: 5,
    time: "a year ago",
  },
  {
    name: "Rohita Goel",
    quote:
      "It was an amazing experience as i was getting inked for the first time. Sahil was too friendly and focussed. He is super cool and intelligent and made two amazing tattoos I loved both the tattoos and he is great at his work and making tattoos even giving ideas and designing one Happy client!",
    rating: 5,
    time: "6 years ago",
  },
  {
    name: "Kiah Ballard",
    quote:
      "This guy is awesome! The place is clean and hygienic. I asked him if I could watch him open the needle packaging (because there's some sketchy places out there), and he was completely understanding and cooperative. He did a great job on my tattoo, and it healed super well. He even re-did the stencil when it wasn't perfectly aligned. I would recommend him to anyone.",
    rating: 5,
    time: "8 years ago",
  },
  {
    name: "Gurpreet Singh",
    quote:
      "It was a wonderful experience with the Mascot Guys! Specially Sahil who owns the studio, I usually don't post reviews but I can't resist myself from posting it. Experience- This guy woke up at 6 Am in the morning to do my tattoo so that the scheduled appointments won't get affected. With no breakfast, he did the session for straight 5 hours. His dedication towards his work is what we all desire. The session was about 7-8 hours, the results are here. I don't think anybody else could do this, the way he has done. I couldn't thank him properly as his clients were all set for the tattoo. I sincerely thank you my friend for investing so much of your time, efforts on getting this done. You're truly a rockstar man! Salute Keep shining Keep Growing",
    rating: 5,
    time: "4 years ago",
  },
  {
    name: "Vedang Goswami",
    quote:
      "Hell of an amazing artists Sahil and Pratham. Got my first tattoo from Pratham, and the overall experience was so great. The hygiene of the studio is also wonderful. Can't wait to get my second art done from them. Highly recommended.",
    rating: 5,
    time: "4 years ago",
  },
  {
    name: "Rohit Bhatt",
    quote:
      "Just had an amazing experience getting my first tattoo done by the best artist Sahil Arora. I can't thank you enough for creating this masterpiece, so glad with the way it turned out. Trust me when they says #onlythebest they genuinely mean it. Thank you again Sahil.",
    rating: 5,
    time: "3 years ago",
  },
  {
    name: "Sumedha Gupta",
    quote:
      "I got to experience one of the finest artists at Mascot Tattoos. They have finesse in their hands. Sorry for not remembering the name of one of them but both Sahil and the one with the snake tattoo work in the most humblest way possible and they know how to make their customers comfortable. They have a hood sense of humour too Loved the overall experience",
    rating: 5,
    time: "4 years ago",
  },
  {
    name: "Prerna Pehlajani",
    quote:
      "This place has my heart Literally..!! The best place to get Inked. I got my first tattoo done here and I came back to this place for my most special tattoo again.. Whatever you can think of while deciding a tattoo studio, they've got everything top notch.. Consultation, Hygiene, Art, Artists, every possible thing one can think of.. I wanted to get inked and i had a story to tell with it.. i had few ideas in bits and pieces.. Sahil not only consolidated my ideas but made it 10000000 times better and literally gave his best to it.. I had a vision, he made it reality with his beautiful sense of art.. Cant thank you enough for it bro",
    rating: 5,
    time: "3 years ago",
  },
  {
    name: "priyanka thakur",
    quote:
      "Thank you sahil for this beautiful portrait tattoo. Never had I expected one could get portraits done in Ghaziabad, it's great that you have opened your studio here.. Keep up the good work really satisfied with the hygiene and the numbing cream you used worked perfectly too. Will come soon for the other portrait.",
    rating: 5,
    time: "8 years ago",
  },
  {
    name: "Jaya Kaushik",
    quote:
      "Before writing reviews about his work. I must say, he is really polite and calm person. I got my first tattoo here. Most imp, whatever arrangement he has done before tattooing is really appreciable and hygienic. I must say, he did his work with full passion and enthusiasm. Tattoo is looks more beautiful if the creator of that is good. Acc to me, he is super good. Thumbs up for him (Sahil).",
    rating: 5,
    time: "8 years ago",
  },
  {
    name: "Rythima Mahajan",
    quote:
      "They say Neat tattoo lines are difficult to make, but Sahil did full justice to them. So grateful that I got my first tattoo done from here. From a super clean & hygienic studio to an amazingly talented & sweet tattoo artist, got a total value for money experience! Thanks Sahil, gonna come back for sure!",
    rating: 5,
    time: "6 years ago",
  },
  {
    name: "Bhawna Gupta",
    quote:
      "I got my first tattoo done by Sahil and Sahil thank you so much for such a nice piece of work.i was little a worried before getting it done but Sahil the artist cleared all my myths. In terms of hygiene, his studios was clean and he took super care to avoid any kind of infection or something of that sought.tha best part was that he was not in hurry at all he will dedicate his fulltime just to make sure that the customer get satisfied. I personally loved his work",
    rating: 5,
    time: "8 years ago",
  },
  {
    name: "Anuja Sharma",
    quote:
      "After literally so much span of brainstorming, I finally landed on Mascot (well, thanks to Google) around 4 months back and have had 4 tattoos since then. From my experience, this place is really a boon for tattoo lovers. Sahil and Pratham, both makes the process so comfortable, seamless and memorable and on top, painless. Also, my tats have healed really well. Confused among designs, visit the place and these guys will help you out in the best possible way. Totally loved the service and my ultra cute tattoos as well!! #onlythebest",
    rating: 5,
    time: "4 years ago",
  },
  {
    name: "Malvika Rajput",
    quote:
      "So I went there after my friend recommendation and I am really happy and satisfied. As it was my first tattoo I was really nervous but once I met him he was so nice and made me so comfortable that that whole process for tattoo went so smooth.And I got exactly the same thing what I wanted. I must say he is really good at his work.",
    rating: 5,
    time: "5 years ago",
  },
  {
    name: "aditi goel",
    quote:
      "Sahil is wonderful artist, he is polite, calm in nature, he is professional artist, excellent in his work, i have a session with him, he have done a wonderful work without much pain, I highly recommend him, he is the best tattoo artist in ghaziabad. Thanks a lot for wonderful art.",
    rating: 5,
    time: "5 years ago",
  },
  {
    name: "bhavya gupta",
    quote:
      "My first tattoo and it was an amazing experience. I like the way he deal with the people. He guided me in terms of design,Proper Hygine is maintained And the work comes out superb. Will be looking forward to make another tattoo from here. Thumps up to Mascot Tattos. Loved your work",
    rating: 5,
    time: "7 years ago",
  },
  {
    name: "isha tandon",
    quote:
      "Got my first tattoo from Mascot. Sahil you are an amazing artist, thanks for giving me this beautiful permanent design. The best part is you take care of the hygiene which gives people a relief that they are at right place. Thankyou so much!!!!! Coming soon for the next one",
    rating: 5,
    time: "8 years ago",
  },
  {
    name: "Aman Mittal",
    quote:
      "Got my first tattoo. Was very unsure about the design and was very afraid of after affects and pain. But Sahil and pratham ji both were superb. Had absolutely no pain ,plus the tattoo is very clear. Waiting for it to heal fully",
    rating: 5,
    time: "4 years ago",
  },
  {
    name: "Yogendra Singh",
    quote:
      "Never thought such an amazing artist exist in city like Ghaziabad. All the reviews given here are truly saying what he is and does, and prices are economical too. Just get your tattoo done from here without giving a single thought. Sahil you are amazing all the best.",
    rating: 5,
    time: "8 years ago",
  },
  {
    name: "Preyensha Srivastava",
    quote:
      "I had heard a lot about mascot tattoos & a lot of my friends recommend me to go to this studio. Trust me he is really good at tattooing. He's going to take equal interest in your tattoo & is surely going to show you various styles & sizes until you're satisfied. I was pretty happy with my tattoo the details were just so fine. Coming to cleanliness- the studio was all cleaned & sanitized. Even the equipments were also coverd everytime As a precautionary measure in this pandemic time . Inshot the services were great, if you're planning to get a tattoo you should definitely consider going to MASCOT TATTOO'S.",
    rating: 5,
    time: "5 years ago",
  },
  {
    name: "Sudipto Kar",
    quote:
      "Hi Sahil, Thanks for my first tattoo. I like your professionalism and your quality of work. Also like to thank because after completion of your work, you also care about the person how he will reach and all those things. I will surely come for my next tattoo.",
    rating: 5,
    time: "6 years ago",
  },
  {
    name: "Anshul kumar",
    quote:
      "This guy is amazing and best thing about him is the perfection. There are so many tattoo artists here but one thing i like he is very professional with his work. His studio is good and charges are very reasonable. I would say he is best and you should must try him. Coz you have to carry your tattoo and its not a good option to get it f**kd by any random tattoo wala. So choose wisely.",
    rating: 5,
    time: "7 years ago",
  },
  {
    name: "Aman aggarwal",
    quote:
      "Had an amazing experience here ..Getting a tattoo is a one time thing and I had to make sure I go to a person I can trust , who is professional and I'm glad I found Sahil . This tattoo is everything I wanted and more . Much recommended to everyone who is seriously looking for a good tattoo.",
    rating: 5,
    time: "7 years ago",
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
  { day: "Mon", hours: "11 AM – 9:15 PM" },
  { day: "Tue", hours: "11 AM – 9:15 PM" },
  { day: "Wed", hours: "11 AM – 9:15 PM" },
  { day: "Thu", hours: "11 AM – 9:15 PM" },
  { day: "Fri", hours: "11 AM – 9:15 PM" },
  { day: "Sat", hours: "11 AM – 9:15 PM" },
  { day: "Sun", hours: "11 AM – 9:15 PM" },
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

export const blogPosts = [
  {
    slug: "tattoo-aftercare-guide",
    title: "The Complete Tattoo Aftercare Guide",
    excerpt:
      "What to do in the first 48 hours, how to wash and moisturize while healing, and the mistakes that cause faded or infected tattoos.",
    photo: "1570168983832-8989dae1522e",
    date: "2026-01-12",
    category: "Aftercare",
    content: [
      "The first two weeks after getting tattooed decide how the piece heals and how it looks for the rest of your life. Keep the bandage on for the time your artist recommends, then wash gently with fragrance-free soap and lukewarm water.",
      "Pat the area dry with a clean towel, never rub. Apply a thin layer of the aftercare ointment your artist provides two to three times a day, and switch to a fragrance-free lotion once the surface has stopped weeping.",
      "Avoid direct sun, swimming pools, and soaking in the bathtub for at least two weeks. Loose, breathable clothing over the tattoo prevents friction and lets it breathe while it scabs and peels.",
      "Come back and see us if you notice spreading redness, unusual swelling, or discharge that looks like pus rather than the usual clear plasma — those are signs of infection that need attention right away.",
    ],
  },
  {
    slug: "choosing-your-first-tattoo",
    title: "How to Choose Your First Tattoo",
    excerpt:
      "Placement, size, and style advice for first-timers — plus why your first consultation matters more than you think.",
    photo: "1542727365-19732a80dcfd",
    date: "2025-11-03",
    category: "Guide",
    content: [
      "Your first tattoo doesn't have to be your biggest decision — but a little planning goes a long way. Start with placement: think about visibility at work, how the area moves, and how much pain you're comfortable with.",
      "Fine line and minimalistic designs are popular first tattoos because they're quick to sit for and heal predictably. If you want something bolder, a consultation lets your artist walk you through sizing and detail before the needle touches skin.",
      "Bring reference images, but stay open to your artist's suggestions — they know what holds up on skin over the years better than a screenshot does.",
    ],
  },
  {
    slug: "minimalistic-vs-portrait-tattoos",
    title: "Minimalistic vs. Portrait Tattoos: Which Style Fits You?",
    excerpt:
      "A look at two of our most requested styles — the delicate restraint of fine line work against the realism of portrait tattoos.",
    photo: "1567601262588-37537a1f6cc7",
    date: "2025-09-18",
    category: "Styles",
    content: [
      "Minimalistic tattoos rely on clean, confident linework — no shading, no clutter, just the idea distilled to its simplest form. They're fast to tattoo, age gracefully, and work well on almost any part of the body.",
      "Portrait tattoos are the opposite end of the spectrum: they demand fine shading, contrast, and hours in the chair to capture a likeness. They reward larger placements — forearms, thighs, or upper arms — where detail has room to breathe.",
      "Neither style is 'better' — it comes down to how much detail you want to carry, and how much time you're willing to commit to a single sitting.",
    ],
  },
  {
    slug: "ombre-powder-brows-explained",
    title: "Ombre Powder Brows, Explained",
    excerpt:
      "What ombre powder brows are, how long the results last, and what the healing timeline actually looks like.",
    photo: "1585745422697-1b42b98aac14",
    date: "2025-07-22",
    category: "Services",
    content: [
      "Ombre powder brows are a form of semi-permanent makeup that shades the brow with a soft gradient — lighter at the front, denser toward the tail — instead of drawing individual hair strokes.",
      "The result looks like brows filled in with powder makeup, which is why it suits almost every skin type, including oilier skin where microblading strokes tend to blur over time.",
      "Expect some redness and a slightly darker shade for the first week, with the final color settling in over 3–4 weeks. Most clients need one touch-up session, and results typically last 1–3 years.",
    ],
  },
  {
    slug: "piercing-healing-timelines",
    title: "Piercing Healing Timelines You Should Know",
    excerpt:
      "From ear lobes to cartilage — how long each piercing actually takes to heal, and how to avoid slowing it down.",
    photo: "1603323226047-df6de54ddc13",
    date: "2025-05-09",
    category: "Aftercare",
    content: [
      "Not all piercings heal at the same speed. Ear lobes are usually ready for a jewelry change in 6–8 weeks, while cartilage piercings like helix or tragus can take 6 months to a year to fully settle.",
      "Clean twice a day with a saline solution — avoid alcohol, hydrogen peroxide, or any product with fragrance, which dries out the piercing and slows healing.",
      "Resist the urge to change jewelry early, even if it looks healed on the surface. The tissue underneath usually needs longer than the visible skin suggests.",
    ],
  },
];
