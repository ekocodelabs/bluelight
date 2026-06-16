// constants/dummyData.ts
import { ServiceAmenity, CarouselSlide } from "../types/hotel";

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    imagePath: "/images/hotelbanner1.jpg",
    heading: "A New Standard of Luxury",
    subheading: "Experience unparalleled comfort in the heart of the coast.",
  },
  {
    id: 2,
    imagePath: "/images/hotelbanner2.jpg",
    heading: "Sanctuary for the Senses",
    subheading: "Indulge in world-class dining and bespoke wellness rituals.",
  },
  {
    id: 3,
    imagePath: "/images/hotelbanner3.jpg",
    heading: "Refined Elegance, Timeless Views",
    subheading: "Every detail crafted exclusively for your perfect escape.",
  },
];

export const AMENITIES_DATA: ServiceAmenity[] = [
  {
    id: "1",
    name: "24/7 Concierge",
    description: "Bespoke arrangements anytime.",
    iconName: "ConciergeBell",
  },
  {
    id: "2",
    name: "Infinity Pool",
    description: "Heated panoramic ocean views.",
    iconName: "Waves",
  },
  {
    id: "3",
    name: "Luxury Spa",
    description: "Full-body holistic therapies.",
    iconName: "Flower2",
  },
  {
    id: "4",
    name: "Fine Dining",
    description: "Michelin-starred gastronomy.",
    iconName: "Utensils",
  },
  {
    id: "5",
    name: "Valet Parking",
    description: "Secure white-glove service.",
    iconName: "Car",
  },
  {
    id: "6",
    name: "Fitness Center",
    description: "State-of-the-art equipment.",
    iconName: "Dumbbell",
  },
  {
    id: "7",
    name: "Private Beach",
    description: "Exclusive coastal access.",
    iconName: "Umbrella",
  },
  {
    id: "8",
    name: "Executive Lounge",
    description: "Complimentary elite refreshments.",
    iconName: "Wine",
  },
  {
    id: "9",
    name: "High-Speed Wi-Fi",
    description: "Seamless fiber connectivity.",
    iconName: "Wifi",
  },
  {
    id: "10",
    name: "Airport Transfer",
    description: "Premium chauffeur service.",
    iconName: "Cigarette",
  }, // Custom placeholder or route
  {
    id: "11",
    name: "Room Service",
    description: "In-room gourmet dining 24/7.",
    iconName: "Coffee",
  },
  {
    id: "12",
    name: "Smart Rooms",
    description: "Voice and tablet automation.",
    iconName: "Tablet",
  },
];
