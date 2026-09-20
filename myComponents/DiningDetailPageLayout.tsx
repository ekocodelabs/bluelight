"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiClock,
  FiArrowLeft,
  FiCalendar,
  FiUsers,
  FiTag,
  FiCheckCircle,
} from "react-icons/fi";
import { MdOutlineRestaurantMenu, MdOutlineWineBar } from "react-icons/md";
import { Button } from "@/components/ui/button";

// Imports your clean DINING_VENUES database collection context
import { DINING_VENUES } from "@/constant/diningdata";

interface DiningDetailPageLayoutProps {
  id: string; // Dynamic parameter identifier routed down from the page module
}

export default function DiningDetailPageLayout({
  id,
}: DiningDetailPageLayoutProps) {
  const [isReserving, setIsReserving] = useState<boolean>(false);
  const [bookingDate, setBookingDate] = useState<string>(() =>
    new Date().toISOString().slice(0, 10),
  );
  const [guestCount, setGuestCount] = useState<number>(2);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Match and resolve target restaurant slot matching structural identifiers
  const venue = DINING_VENUES.find((v) => v.id === id);

  if (!venue) {
    notFound();
  }

  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsReserving(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: venue.id,
          itemName: venue.title,
          priceAmount: venue.priceAmount,
          quantity: guestCount,
          bookingDate,
          itemType: "dining",
        }),
      });
      const data = await response.json();

      if (!response.ok || !data?.url) {
        throw new Error(data?.error || "Unable to create your reservation.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Dining checkout failed:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to create your reservation.",
      );
      setIsReserving(false);
    }
  };

  // High-end experience checklists contextually aligned based on category values
  const premiumInclusions = [
    "Dedicated Culinary Sommelier Pairing Option Available",
    "Bespoke Dietary Accommodation Modifiers Custom-Prepared",
    "VIP Access to Valet Parking & Executive Entrance Concierge",
    "Priority Seating Window Guaranteed via Digital Check-In Slot",
  ];

  return (
    <div className="min-h-screen bg-slate-50/40 pb-24 pt-28 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-8">
        {/* Navigation context route tracking link back */}
        <Link
          href="/dining"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-wider group"
        >
          <FiArrowLeft className="text-sm group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Dining Spaces Catalog</span>
        </Link>

        {/* Dynamic Header Block */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-500 uppercase tracking-widest">
            <FiTag />
            <span>{venue.category} collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-slate-900 tracking-wide">
            {venue.title}
          </h1>
        </div>

        {/* Luxury Hero Graphic Board Frame */}
        <div className="relative w-full aspect-21/9 min-h-87.5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
          <Image
            src={venue.image}
            alt={venue.title}
            fill
            priority
            className="object-cover object-center transition-transform duration-2000 hover:scale-102"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>

        {/* Data Architecture Configuration Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT PANEL: Comprehensive Space Overview & Curated Details (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                The Culinary Concept
              </h3>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-light">
                {venue.description}
              </p>
            </div>

            {/* Core Amenity Tags Quick-view blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-slate-100 py-6">
              <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <FiClock className="text-lg" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Operating Hours
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    {venue.hours}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <MdOutlineWineBar className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Atmosphere Type
                  </span>
                  <span className="text-xs font-semibold text-slate-800 capitalize">
                    {venue.category} curated dining
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Curated Experience checklist points */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Elite Inclusions
              </h3>
              <ul className="grid grid-cols-1 gap-3 text-sm text-slate-600">
                {premiumInclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheckCircle className="text-xs" />
                    </span>
                    <span className="leading-normal font-light">
                      {inclusion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT PANEL: Instant Dynamic Reservation Modifiers Interface (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-sky-100 p-8 rounded-2xl shadow-xl shadow-sky-500/5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Reservation Allocation
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                <MdOutlineRestaurantMenu className="text-sky-500" /> Secure Your
                Table
              </h3>
            </div>

            <div className="flex items-end justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Fixed price per guest
              </span>
              <span className="text-2xl font-bold text-slate-900">
                ${venue.priceAmount.toFixed(2)}
              </span>
            </div>

            {/* Inline Reservation parameters entry card */}
            <form onSubmit={handleReservationSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <FiCalendar className="text-sky-500" /> Booking Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                    <FiClock className="text-sky-500" /> Arrival Window
                  </span>
                  <input
                    type="time"
                    defaultValue="19:00"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                    <FiUsers className="text-sky-500" /> Guest Count
                  </span>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                  >
                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <option key={count} value={count}>
                        {count} {count === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {errorMessage ? (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {errorMessage}
                </p>
              ) : null}

              {/* Reservation Executive Submission Call to Action */}
              <Button
                type="submit"
                disabled={isReserving}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-md mt-2 uppercase text-xs tracking-wider"
              >
                {isReserving
                  ? "Processing Allocation..."
                  : "Confirm Table Booking"}
              </Button>
            </form>

            <div className="text-[11px] text-center text-slate-400 bg-slate-50/80 p-3 rounded-xl border border-slate-100 leading-normal">
              No immediate down-payment required. Tables are securely verified
              under your active profile registry session.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
