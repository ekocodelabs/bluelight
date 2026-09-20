"use client";

import React, { useState } from "react";
import {
  FiGrid,
  FiCoffee,
  FiSunset,
  FiPercent,
  FiLayers,
} from "react-icons/fi";
import DiningHero from "./DinningHero";
import DiningPageCard from "./DinningPageCard"; // Importing the dining venues data
import { DINING_VENUES } from "@/constant/diningdata";

export default function DiningPageLayout() {
  // Managing active category filtering ('all' displays the complete portfolio seamlessly)
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredVenues =
    activeCategory === "all"
      ? DINING_VENUES
      : DINING_VENUES.filter((venue) => venue.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 font-sans space-y-16">
      {/* SECTION 1: High-End Hero Showcase Carousel Banner */}
      <DiningHero />

      {/* SECTION 2: Dynamic Content Catalog and Segment Controls */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        {/* Header Text Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
            Culinary Indulgence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 tracking-wide">
            Curated Dining Spaces by Blue Light
          </h2>
          <div className="h-0.5 w-12 bg-sky-200 mx-auto mt-2" />
          <p className="text-sm text-slate-500 leading-relaxed pt-1">
            From atmospheric skyline terraces to vibrant artisanal mixology
            vaults, explore five distinct spaces engineered to fulfill elite
            gastronomic desires across Nigeria.
          </p>
        </div>

        {/* Custom High-End Tab Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-sky-600 text-white shadow-md shadow-sky-500/10"
                : "bg-white border border-slate-100 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FiLayers className="text-sm" />
            <span>All Venues ({DINING_VENUES.length})</span>
          </button>

          <button
            onClick={() => setActiveCategory("normal")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
              activeCategory === "normal"
                ? "bg-sky-600 text-white shadow-md shadow-sky-500/10"
                : "bg-white border border-slate-100 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FiCoffee className="text-sm" />
            <span>Fine Dining (2)</span>
          </button>

          <button
            onClick={() => setActiveCategory("rooftop")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
              activeCategory === "rooftop"
                ? "bg-sky-600 text-white shadow-md shadow-sky-500/10"
                : "bg-white border border-slate-100 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FiSunset className="text-sm" />
            <span>Rooftop (1)</span>
          </button>

          <button
            onClick={() => setActiveCategory("bars")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
              activeCategory === "bars"
                ? "bg-sky-600 text-white shadow-md shadow-sky-500/10"
                : "bg-white border border-slate-100 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FiPercent className="text-sm" />
            <span>Bars (1)</span>
          </button>

          <button
            onClick={() => setActiveCategory("lounge")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
              activeCategory === "lounge"
                ? "bg-sky-600 text-white shadow-md shadow-sky-500/10"
                : "bg-white border border-slate-100 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FiGrid className="text-sm" />
            <span>Lounges (1)</span>
          </button>
        </div>

        {/* Dynamic Presentation Grid Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-300 fill-mode-forwards"
            >
              <DiningPageCard
                id={venue.id}
                image={venue.image}
                title={venue.title}
                description={venue.description}
                hours={venue.hours}
                bookingUrl={venue.bookingUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
