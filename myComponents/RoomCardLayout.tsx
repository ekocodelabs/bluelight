// components/room-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Room } from "@/types/room";

interface RoomCardProps {
  room: Room;
}

export default function RoomCardLayout({ room }: RoomCardProps) {
  return (
    <div className="group bg-white border border-sky-100/70 overflow-hidden hover:shadow-xl hover:shadow-sky-100/40 transition-all duration-500 flex flex-col h-full">
      {/* Visual Dynamic Container */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-100">
        <Image
          src={room.imagePath}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Soft luxury price floating tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 border border-sky-50 text-xs tracking-wider uppercase font-medium text-sky-950">
          From ${room.pricePerNight} / Night
        </div>
      </div>

      {/* Content Meta Wrapper */}
      <div className="p-8 flex flex-col grow justify-between">
        <div>
          <div className="text-[10px] text-sky-500 uppercase tracking-[0.25em] font-medium mb-2">
            {room.sqft} SQ. FT. Luxury
          </div>
          <h3 className="font-serif text-2xl font-light tracking-wide text-slate-900 mb-3">
            {room.name}
          </h3>
          <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
            {room.description}
          </p>
        </div>

        {/* Action Router */}
        <Button
          asChild
          variant="outline"
          className="w-full rounded-none border-sky-200 text-sky-900 hover:bg-sky-600 hover:text-white hover:border-sky-600 tracking-widest text-xs uppercase font-medium py-6 transition-all duration-300"
        >
          <Link
            href={`/rooms/${room.id}`}
            className="flex items-center justify-center gap-2"
          >
            View Details <ArrowRight className="h-4 w-4 stroke-[1.5]" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
