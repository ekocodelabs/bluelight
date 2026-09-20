"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Structured mock data pointing to public catalog folder assets
const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: "/images/dinnerbanner.jpg",
    tagline: "CURATED EXPERIENCES",
    title: "Gourmet Ocean-View Fine Dining",
    description:
      "Indulge in seasonal culinary masterpieces prepared by world-class chefs overlooking premium shorelines.",
  },
  {
    id: 2,
    image: "/images/lounge1.jpg",
    tagline: "EXCLUSIVE LOUNGES",
    title: "The Sapphire Sky Lounge",
    description:
      "Sip expertly mixed signature cocktails in an ambient atmosphere tailored for elites.",
  },
  {
    id: 3,
    image: "/images/dinnerbanner2.jpg",
    tagline: "PRIVATE CATERING",
    title: "Bespoke In-Suite Culinary Artisans",
    description:
      "Transform your luxury shortlet booking into a high-end private dining event.",
  },
];

export default function DiningHero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto-play routine loops every 6 seconds smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] min-h-125 bg-slate-950 overflow-hidden group">
      {/* Dynamic Slide Presentation Layer */}
      {CAROUSEL_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Optimized Background Image via public root path */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover transform scale-100 duration-6000 ease-out motion-safe:scale-105"
              sizes="100vw"
            />
            {/* Elite Radial & Linear Dark Shadow Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-transparent to-transparent hidden lg:block" />

            {/* Typography Content Wrapper */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white z-20">
              <div className="max-w-2xl space-y-4">
                <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-sky-400 block transform translate-y-4 opacity-0 animate-in fade-in fill-mode-forwards duration-700 delay-300">
                  {slide.tagline}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-wide leading-tight transform translate-y-4 opacity-0 animate-in fade-in fill-mode-forwards duration-700 delay-500">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-light max-w-lg transform translate-y-4 opacity-0 animate-in fade-in fill-mode-forwards duration-700 delay-700">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Left Arrow Navigation Anchor Toggle */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-slate-950/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white hover:text-slate-900 transition-all duration-300"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="text-xl" />
      </button>

      {/* Manual Right Arrow Navigation Anchor Toggle */}
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-slate-950/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white hover:text-slate-900 transition-all duration-300"
        aria-label="Next slide"
      >
        <FiChevronRight className="text-xl" />
      </button>

      {/* Discrete Horizontal Breadcrumb Slits Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {CAROUSEL_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-sky-400"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
