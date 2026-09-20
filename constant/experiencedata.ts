interface DetailedExperience {
  id: string;
  title: string;
  priceAmount: number;
  tagline: string;
  longDescription: string;
  hours: string;
  location: string;
  imagePath: string;
  highlights: string[];
}

export const DETAILED_EXPERIENCES: DetailedExperience[] = [
  {
    id: "spa",
    title: "The Zenith Wellness Spa",
    priceAmount: 150,
    tagline: "Holistic Rejuvenation & Healing Protocols",
    longDescription:
      "Escape to a world of absolute stillness. The Zenith Wellness Spa offers an elite menu of treatments designed by global therapeutic masters. From custom ocean-infused stone massages to cellular-renewal facials, our sanctuary targets physical fatigue and environmental stress. Every session begins with a tailored consultation and finishes with personal access to our private thermal decompression suites.",
    hours: "08:00 AM — 09:00 PM Daily",
    location: "East Wing, Ground Level",
    imagePath: "/images/hotelspa.jpg",
    highlights: [
      "Custom aromatherapy oils",
      "Private hydrotherapy mineral pools",
      "Post-treatment organic elixir lounge",
    ],
  },
  {
    id: "gym",
    title: "Kinetic Fitness Matrix",
    priceAmount: 40,
    tagline: "High-Performance Training Environments",
    longDescription:
      "Maintain your optimal health dynamic while traveling. Equipped with state-of-the-art interactive equipment, our facility is designed for both casual fitness routines and elite athletic training. Take advantage of custom metabolic tracking systems, dedicated outdoor yoga decks overlooking the surf, and private sessions with our certified master lifestyle coaches.",
    hours: "Available 24 Hours to Hotel Guests",
    location: "West Wing, Rooftop Tier",
    imagePath: "/images/hotelgym.jpg",
    highlights: [
      "Advanced custom weight matrices",
      "Daily oceanfront yoga & pilates sets",
      "Complimentary post-workout juice bar",
    ],
  },
  {
    id: "pool",
    title: "The Horizon Infinity Pool",
    priceAmount: 35,
    tagline: "Panoramic Architectural Aquatic Escape",
    longDescription:
      "Unwind at our iconic heated saline pool infrastructure, where the water melts directly into the sea line. Designed for pure sensory escape, the pool space offers a sanctuary layout. Guests can reserve private cabanas equipped with high-fidelity sound controls, plush luxury loungers, and attentive, personal white-glove pool butler service.",
    hours: "06:00 AM — 10:00 PM Daily",
    location: "Central Courtyard Overlook",
    imagePath: "/images/hotelpool.jpg",
    highlights: [
      "Heated saline temperature control",
      "Private daybed and cabana compounds",
      "Gourmet poolside dynamic bites menu",
    ],
  },
];
