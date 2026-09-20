"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiUsers, FiCpu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { BOARD_ROOM_DATA, BoardRoom } from "@/constant/boardroomdata";

export default function BoardRoomCard({
  id,
  image,
  title,
  description,
  capacity,
  amenities,
  bookingUrl,
}: BoardRoom) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group">
      {/* Image Container with Subtle Zoom Effect */}
      <div className="relative w-full aspect-16/10 bg-slate-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Visual glassmorphic badge for room capacity */}
        <div className="absolute top-4 right-4 backdrop-blur-md bg-slate-900/70 text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-sm">
          <FiUsers className="text-sky-400" />
          <span>Up to {capacity} Pax</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
        <div className="space-y-3">
          <h3 className="text-xl font-serif font-semibold text-slate-900 tracking-wide transition-colors group-hover:text-sky-600">
            {title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Quick Technical Amenity Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {amenities.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-sky-50 text-sky-700 border border-sky-100/60 px-2.5 py-1 rounded-lg text-[11px] font-medium"
              >
                <FiCpu className="text-[10px]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Execution Action Control Row */}
        <div className="pt-2">
          <Button
            asChild
            className="w-full h-11 bg-white hover:bg-sky-600 border border-sky-200 text-sky-900 hover:text-white font-medium rounded-xl transition-all duration-300 group/btn"
          >
            <Link
              href={`/meetings/${id}`}
              className="flex items-center justify-center gap-2"
            >
              <span>Book Space Now</span>
              <FiArrowUpRight className="text-base transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
