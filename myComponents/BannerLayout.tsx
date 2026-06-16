// components/banner.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CAROUSEL_SLIDES } from "@/constant/dummydata";

export default function BannerLayout() {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrent((prev) => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Carousel Tracks */}
      {CAROUSEL_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Next.js Optimized Background Image */}
          <Image
            src={slide.imagePath}
            alt={slide.heading}
            fill
            priority={idx === 0}
            className="object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
          />
          {/* High-End Soft Overlay Accent */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/60 via-slate-900/40 to-transparent" />

          {/* Slide Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-24 max-w-4xl text-white z-20">
            <span className="text-sky-300 font-medium tracking-[0.4em] uppercase text-xs sm:text-sm mb-4 animate-fade-in">
              Welcome to Bluelight
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-6">
              {slide.heading}
            </h1>
            <p className="text-slate-200 text-base sm:text-xl font-light max-w-xl leading-relaxed mb-8">
              {slide.subheading}
            </p>
            <div>
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-sky-950 rounded-none px-8 py-6 uppercase tracking-widest text-xs font-semibold transition-all duration-300">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Navigation Triggers */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-sky-950 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-sky-950 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {CAROUSEL_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-300 ${
              idx === current ? "w-8 bg-sky-400" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
