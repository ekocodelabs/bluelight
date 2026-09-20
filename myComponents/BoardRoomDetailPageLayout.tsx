"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiUsers,
  FiCpu,
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiShield,
  FiBriefcase,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

// Imports the core BOARD_ROOM_DATA catalog array cleanly
import { BOARD_ROOM_DATA } from "@/constant/boardroomdata";

interface BoardRoomDetailPageLayoutProps {
  id: string; // Passed from your dynamic Next.js parameters
}

export default function BoardRoomDetailPageLayout({
  id,
}: BoardRoomDetailPageLayoutProps) {
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [bookingDate, setBookingDate] = useState<string>(() =>
    new Date().toISOString().slice(0, 10),
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Search and resolve the matching corporate space object configuration
  const room = BOARD_ROOM_DATA.find((item) => item.id === id);

  if (!room) {
    notFound();
  }

  const handleCorporateBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsBooking(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: room.id,
          itemName: room.title,
          priceAmount: room.priceAmount,
          quantity: 1,
          bookingDate,
          itemType: "boardroom",
        }),
      });
      const data = await response.json();

      if (!response.ok || !data?.url) {
        throw new Error(data?.error || "Unable to create your booking.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Boardroom checkout failed:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to create your booking.",
      );
      setIsBooking(false);
    }
  };

  const corporateHighlights = [
    "Acoustically Isolated Perimeter Wall Infrastructure",
    "On-Demand Private Assistant & Tech Concierge Access",
    "Complimentary Premium Coffee, Tea & Mineral Water Stations",
    "Adjacent Executive Reception & Networking Pre-Function Foyer",
  ];

  return (
    <div className="min-h-screen bg-slate-50/40 pb-24 pt-28 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-8">
        {/* Navigation context route tracking link back */}
        <Link
          href="/meetings"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-wider group"
        >
          <FiArrowLeft className="text-sm group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Boardrooms Catalog</span>
        </Link>

        {/* Dynamic Title Heading Block */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
            Corporate Intelligence Environments
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-slate-900 tracking-wide">
            {room.title}
          </h1>
        </div>

        {/* Executive Luxury Media Exhibition Panel */}
        <div className="relative w-full aspect-21/9 min-h-87.5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
          <Image
            src={room.image}
            alt={room.title}
            fill
            priority
            className="object-cover object-center transition-transform duration-2000 hover:scale-102"
            sizes="100vw"
          />
          {/* Subtle elegant design tint card vignette */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/10 via-transparent to-transparent" />

          {/* Floating capacity token metadata card */}
          <div className="absolute top-6 right-6 backdrop-blur-md bg-slate-900/80 text-white px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 shadow-lg">
            <FiUsers className="text-sky-400 text-sm" />
            <span>Capacity: Up to {room.capacity} Delegates</span>
          </div>
        </div>

        {/* Content Configuration Columns Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE PANEL: Specifications, Integrated Amenities, & Highlights (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Space Infrastructure & Functionality
              </h3>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-light">
                {room.description}
              </p>
            </div>

            {/* Core Tech Amenities Matrix Tag Mapping Framework */}
            <div className="space-y-4 border-y border-slate-100 py-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <FiBriefcase className="text-sky-500" /> Integrated Technical
                Spec Matrix
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {room.amenities.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 border border-sky-100/60 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide"
                  >
                    <FiCpu className="text-sky-500 text-sm" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Premium Corporate Trust Checklists */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Executive Privilege Inclusions
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                {corporateHighlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 border border-slate-100/50"
                  >
                    <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span className="leading-normal font-light text-slate-700">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE PANEL: Corporate Block Reservation Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-sky-100 p-8 rounded-2xl shadow-xl shadow-sky-500/5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Enterprise Allocation Block
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                Secure Conference Space
              </h3>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Price per Hour
              </span>
              <p className="text-2xl font-bold text-slate-900 tracking-tight">
                ${room.priceAmount.toFixed(2)}
              </p>
            </div>
            {/* Interactive Scheduler Entries */}
            <form onSubmit={handleCorporateBooking} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <FiCalendar className="text-sky-500" /> Session Booking Date
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
                    <FiClock className="text-sky-500" /> Start Time
                  </span>
                  <input
                    type="time"
                    defaultValue="09:00"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                    <FiClock className="text-sky-500" /> End Time
                  </span>
                  <input
                    type="time"
                    defaultValue="17:00"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </div>

                {errorMessage ? (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    {errorMessage}
                  </p>
                ) : null}
              </div>

              {/* Instant Executive Request Dispatch Trigger button */}
              <Button
                type="submit"
                disabled={isBooking}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-md mt-2 uppercase text-xs tracking-wider"
              >
                {isBooking
                  ? "Allocating Corporate Block..."
                  : "Reserve Boardroom Block"}
              </Button>
            </form>
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
              <FiShield className="text-sky-500 text-sm shrink-0" />
              <span>
                Enterprise credentials and verification logs apply natively.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
