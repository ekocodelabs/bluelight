export interface BoardRoom {
  id: string;
  title: string;
  priceAmount: number;
  description: string;
  image: string;
  capacity: number;
  amenities: string[];
  bookingUrl: string;
}

export const BOARD_ROOM_DATA: BoardRoom[] = [
  {
    id: "br-1",
    title: "The Horizon Executive Suite",
    priceAmount: 500,
    description:
      "Designed for high-stakes corporate decisions. Features panoramic city views, an integrated UHD video conferencing wall, acoustic soundproofing, and a private coffee station.",
    image: "/images/boardroom.jpg",
    capacity: 12,
    amenities: ["4K Telepresence", "Smart Whiteboard", "Fiber Wifi"],
    bookingUrl: "/meetings/reserve?space=horizon-suite",
  },
  {
    id: "br-2",
    title: "The Syndicate Innovation Hub",
    priceAmount: 350,
    description:
      "An elite sandbox layout engineered for creative tech teams, investor pitch sessions, and product alignment workshops. Features wireless multi-device projection mapping.",
    image: "/images/boardroom2.jpg",
    capacity: 8,
    amenities: ["Wireless Casting", "Modular Desks", "4K Webcam"],
    bookingUrl: "/meetings/reserve?space=syndicate-hub",
  },
  {
    id: "br-3",
    title: "The Sovereign Council Chamber",
    priceAmount: 750,
    description:
      "Our largest multi-functional meeting infrastructure layout. Complete with individual tabletop gooseneck microphones, automated ambient lighting scenes, and adjacent reception space.",
    image: "/images/boardroom3.jpg",
    capacity: 24,
    amenities: ["Audio Array", "Stage Lighting", "Catering Access"],
    bookingUrl: "/meetings/reserve?space=sovereign-chamber",
  },
];
