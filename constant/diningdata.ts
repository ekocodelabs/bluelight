interface DiningVenue {
  id: string;
  category: "normal" | "rooftop" | "bars" | "lounge";
  title: string;
  priceAmount: number;
  description: string;
  image: string;
  hours: string;
  bookingUrl: string;
}

export const DINING_VENUES: DiningVenue[] = [
  {
    id: "normal-1",
    category: "normal",
    title: "The Azure Bistro",
    priceAmount: 50,
    description:
      "Experience modern Continental-Nigerian fusion. Featuring locally sourced ingredients crafted into high-end gourmet plates in a sleek, sunlit indoor setting.",
    image: "/images/dinner.jpg",
    hours: "07:00 AM - 10:00 PM",
    bookingUrl: "/dining/reserve?venue=azure-bistro",
  },
  {
    id: "normal-2",
    category: "normal",
    title: "Orchid Fine Dining Room",
    priceAmount: 75,
    description:
      "An elegant, white-glove dinner service venue. Perfect for corporate lunches, romantic evenings, and tasting menus paired with imported vintages.",
    image: "/images/dinner2.jpg",
    hours: "06:00 PM - 11:00 PM",
    bookingUrl: "/dining/reserve?venue=orchid-room",
  },
  {
    id: "rooftop-1",
    category: "rooftop",
    title: "The Zenith Sky Terrace",
    priceAmount: 65,
    description:
      "Perched high above the city skyline. Enjoy premium grilled cuts and open-air ambiance with breathtaking panoramic views, ideal for elite nightlife.",
    image: "/images/rooftopdinner.jpg",
    hours: "04:00 PM - 02:00 AM",
    bookingUrl: "/dining/reserve?venue=zenith-terrace",
  },
  {
    id: "bar-1",
    category: "bars",
    title: "The Amber Cocktail Vault",
    priceAmount: 45,
    description:
      "An intimate, speak-easy inspired sanctuary. Home to artisan mixologists, rare spirits, signature botanical elixirs, and high-net-worth networking spaces.",
    image: "/images/bardinner.jpg",
    hours: "05:00 PM - 03:00 AM",
    bookingUrl: "/dining/reserve?venue=amber-vault",
  },
  {
    id: "lounge-1",
    category: "lounge",
    title: "Sapphire Executive Lounge",
    priceAmount: 40,
    description:
      "Plush velvet seating meets live afro-jazz instrumentation. Sip premium champagne and converse in a deeply sophisticated, low-lit conversational lounge.",
    image: "/images/loungedinner.jpg",
    hours: "12:00 PM - 12:00 AM",
    bookingUrl: "/dining/reserve?venue=sapphire-lounge",
  },
];
