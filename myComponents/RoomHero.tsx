// components/room-hero.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Simplified list of images fetched directly from your public folder
const CAROUSEL_IMAGES = [
  "/images/room1.jpg",
  "/images/room2.jpg",
  "/images/room3.jpg",
];

export default function RoomHero() {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[60vh] bg-slate-900 overflow-hidden">
      {/* Slide Images */}
      {CAROUSEL_IMAGES.map((imgSrc, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={imgSrc}
            alt={`Luxury Room View ${idx + 1}`}
            fill
            priority={idx === 0}
            className="object-cover"
          />
          {/* Overlay for text contrast */}
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
      ))}

      {/* Static Luxury Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20 text-white">
        <span className="text-sky-300 tracking-[0.3em] uppercase text-xs font-medium mb-2">
          Bluelight Luxury
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide">
          Our Rooms & Suites
        </h1>
      </div>

      {/* Manual Carousel Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
