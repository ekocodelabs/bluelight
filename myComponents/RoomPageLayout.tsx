// components/room-page-component.tsx
import RoomCardLayout from "./RoomCardLayout";
import { ROOMS_DATA } from "@/constant/roomdata";

export default function RoomPageComponent() {
  return (
    <section className="bg-sky-50/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Simple Section Layout Heading */}
        <div className="mb-12 border-b border-sky-100 pb-6">
          <h2 className="font-serif text-3xl font-light text-slate-900 tracking-wide">
            Explore Accommodations
          </h2>
        </div>

        {/* Flat Grid Mapping All Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room) => (
            <RoomCardLayout key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
