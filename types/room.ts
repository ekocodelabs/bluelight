// types/room.ts

export interface Room {
  id: string;
  name:
    | "Standard Room"
    | "Junior Suite"
    | "Executive Suite"
    | "Presidential Suite"
    | "Deluxe Room"
    | "Family Suite"
    | "Honeymoon Suite";
  description: string;
  imagePath: string; // Featured card image
  pricePerNight: number;
  sqft: number;
}
