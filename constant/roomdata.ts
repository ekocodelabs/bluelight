// constants/roomData.ts
import { Room } from "@/types/room";

export const ROOMS_DATA: Room[] = [
  {
    id: "standard-room",
    name: "Standard Room",
    description:
      "Impeccably designed sanctuary featuring refined coastal accents, plush king bedding, and a private balcony overlooking the serene resort gardens.",
    imagePath: "/images/room1.jpg",
    pricePerNight: 450,
    sqft: 450,
  },
  {
    id: "junior-suite",
    name: "Junior Suite",
    description:
      "An expansive layout offering a dedicated open-plan living area, curated custom art pieces, and floor-to-ceiling windows with partial ocean views.",
    imagePath: "/images/room2.jpg",
    pricePerNight: 750,
    sqft: 680,
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description:
      "Elevated luxury tailored for discerning travelers. Features a separate master bedroom, a private terrace, and a spa-inspired marble bathroom.",
    imagePath: "/images/room3.jpg",
    pricePerNight: 1200,
    sqft: 950,
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description:
      "The pinnacle of high-end living. A sprawling penthouse retreat boasting panoramic ocean vistas, private infinity plunge pool, and 24/7 dedicated butler service.",
    imagePath: "/images/room4.jpg",
    pricePerNight: 3500,
    sqft: 2200,
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description:
      "A sophisticated retreat offering modern amenities and elegant design elements. Features a king-sized bed, a spacious seating area, and a private balcony.",
    imagePath: "/images/room1.jpg",
    pricePerNight: 600,
    sqft: 550,
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description:
      "A spacious retreat designed for families, featuring a separate living area, a fully equipped kitchenette, and a private garden view.",
    imagePath: "/images/room2.jpg",
    pricePerNight: 800,
    sqft: 750,
  },
  {
    id: "honeymoon-suite",
    name: "Honeymoon Suite",
    description:
      "A romantic retreat designed for newlyweds, featuring a private balcony, a luxurious spa-inspired bathroom, and a heart-shaped bathtub.",
    imagePath: "/images/room3.jpg",
    pricePerNight: 1000,
    sqft: 850,
  },
];
