"use client";
import { FiBriefcase, FiShield, FiClock } from "react-icons/fi";
import BoardRoomCard from "./BoardRoomCard";
import { BOARD_ROOM_DATA } from "@/constant/boardroomdata";

// const BOARD_ROOM_DATA = [
//   {
//     id: "br-1",
//     title: "The Horizon Executive Suite",
//     description:
//       "Designed for high-stakes corporate decisions. Features panoramic city views, an integrated UHD video conferencing wall, acoustic soundproofing, and a private coffee station.",
//     image: "/images/boardroom.jpg",
//     capacity: 12,
//     amenities: ["4K Telepresence", "Smart Whiteboard", "Fiber Wifi"],
//     bookingUrl: "/meetings/reserve?space=horizon-suite",
//   },
//   {
//     id: "br-2",
//     title: "The Syndicate Innovation Hub",
//     description:
//       "An elite sandbox layout engineered for creative tech teams, investor pitch sessions, and product alignment workshops. Features wireless multi-device projection mapping.",
//     image: "/images/boardroom2.jpg",
//     capacity: 8,
//     amenities: ["Wireless Casting", "Modular Desks", "4K Webcam"],
//     bookingUrl: "/meetings/reserve?space=syndicate-hub",
//   },
//   {
//     id: "br-3",
//     title: "The Sovereign Council Chamber",
//     description:
//       "Our largest multi-functional meeting infrastructure layout. Complete with individual tabletop gooseneck microphones, automated ambient lighting scenes, and adjacent reception space.",
//     image: "/images/boardroom3.jpg",
//     capacity: 24,
//     amenities: ["Audio Array", "Stage Lighting", "Catering Access"],
//     bookingUrl: "/meetings/reserve?space=sovereign-chamber",
//   },
// ];

export default function BoardRoomPageLayout() {
  return (
    <div className="min-h-screen bg-slate-50/40 pb-24 font-sans pt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        {/* Header Text Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
            Corporate Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 tracking-wide">
            Elite Corporate Boardrooms & Meeting Spaces
          </h1>
          <div className="h-0.5 w-12 bg-sky-200 mx-auto mt-2" />
          <p className="text-sm text-slate-500 leading-relaxed pt-1">
            Host your executive gatherings, shareholder briefings, and
            confidential deal-making sessions within our securely managed
            corporate ecosystems in Nigeria.
          </p>
        </div>

        {/* Corporate Trust Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <FiShield className="text-lg" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                100% Confidential
              </h4>
              <p className="text-[11px] text-slate-400">
                Acoustically isolated suites
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:border-l sm:border-slate-100 sm:pl-6">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <FiClock className="text-lg" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Flexible Scheduling
              </h4>
              <p className="text-[11px] text-slate-400">
                Hourly & daily corporate slots
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:border-l sm:border-slate-100 sm:pl-6">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <FiBriefcase className="text-lg" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Concierge Services
              </h4>
              <p className="text-[11px] text-slate-400">
                Dedicated corporate attendants
              </p>
            </div>
          </div>
        </div>

        {/* Presentation Grid Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {BOARD_ROOM_DATA.map((space) => (
            <div
              key={space.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-300 fill-mode-forwards"
            >
              <BoardRoomCard
                id={space.id}
                image={space.image}
                title={space.title}
                priceAmount={space.priceAmount}
                description={space.description}
                capacity={space.capacity}
                amenities={space.amenities}
                bookingUrl={space.bookingUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
