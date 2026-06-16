import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROOMS_DATA } from "@/constant/roomdata";
import RoomCardLayout from "./RoomCardLayout";

export default function RoomsLayout() {
  // Slice to render exactly 3 curated rooms on the homepage display block
  const featuredRooms = ROOMS_DATA.slice(0, 3);

  return (
    <section id="rooms" className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Module */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sky-600 font-medium tracking-[0.3em] uppercase text-xs mb-3 block">
              Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-wide">
              Rooms & Private Suites
            </h2>
          </div>
          <div>
            <Button
              asChild
              className="bg-sky-600 hover:bg-sky-700 text-white rounded-none px-8 py-6 text-xs uppercase tracking-widest font-medium shadow-sm transition-all duration-300"
            >
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>

        {/* Architectural 3-Column Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <RoomCardLayout key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
