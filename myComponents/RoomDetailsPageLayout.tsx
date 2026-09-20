"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiMaximize,
  FiCheck,
  FiCalendar,
  FiUsers,
  FiShield,
  FiArrowLeft,
} from "react-icons/fi";
import {
  MdOutlineKingBed,
  MdOutlineWifi,
  MdOutlineLocalParking,
} from "react-icons/md";
import { Button } from "@/components/ui/button";

// Import your ROOMS_DATA array cleanly from your constants folder structure
import { ROOMS_DATA } from "@/constant/roomdata";

interface RoomDetailPageLayoutProps {
  id: string; // Passed from your dynamic page path parameter
}

export default function RoomDetailPageLayout({
  id,
}: RoomDetailPageLayoutProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [checkInDate, setCheckInDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().slice(0, 10);
  });
  const [checkOutDate, setCheckOutDate] = useState<string>(() => {
    const checkoutDate = new Date();
    checkoutDate.setDate(checkoutDate.getDate() + 2);
    return checkoutDate.toISOString().slice(0, 10);
  });
  const [guestCount, setGuestCount] = useState<number>(2);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Retrieve the requested room target cleanly using your data model configuration
  const room = ROOMS_DATA.find((r) => r.id === id);

  // Fallback to error tracking view patterns smoothly if matching entity doesn't exist
  if (!room) {
    notFound();
  }

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!checkInDate || !checkOutDate) {
      setErrorMessage("Please select your stay dates.");
      return;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) {
      setErrorMessage("Check-out date must be after the check-in date.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemId: room.id,
          itemName: room.name,
          priceAmount: room.pricePerNight,
          quantity: 1,
          bookingDate: checkInDate,
          itemType: "room",
          guestCount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to create your booking.");
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error("Checkout session was not returned.");
    } catch (error) {
      console.error("Checkout submission failed:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while creating your booking.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Modern luxury standard utility specifications
  const coreAmenities = [
    { icon: <MdOutlineKingBed className="text-xl" />, label: "King Bedding" },
    { icon: <FiMaximize className="text-xl" />, label: `${room.sqft} Sq Ft` },
    { icon: <MdOutlineWifi className="text-xl" />, label: "Ultra Fiber Wifi" },
    {
      icon: <MdOutlineLocalParking className="text-xl" />,
      label: "Secure Valet",
    },
  ];

  const premiumHighlights = [
    "24/7 Dedicated Concierge Attendant Access",
    "Complimentary Entry to Premium Sky Lounge",
    "Fully Automated Multi-Scene In-Room Climate Controls",
    "Stocked Premium Mini-Bar Selection Upon Request",
  ];

  return (
    <div className="min-h-screen bg-slate-50/40 pb-24 pt-28 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-8">
        {/* Navigation Context Link Back Button */}
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-wider group"
        >
          <FiArrowLeft className="text-sm group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Rooms Catalog</span>
        </Link>

        {/* Dynamic Title Heading Block */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
            Premium Residence Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-slate-900 tracking-wide">
            {room.name}
          </h1>
        </div>

        {/* High-End Layout Graphic Display Panel */}
        <div className="relative w-full aspect-21/9 min-h-87.5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
          <Image
            src={room.imagePath}
            alt={room.name}
            fill
            priority
            className="object-cover object-center transition-transform duration-2000 hover:scale-102"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>

        {/* Dynamic Parameter Breakdown Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE PANEL: Details & Specifications Overview (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Suite Description
              </h3>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-light">
                {room.description}
              </p>
            </div>

            {/* Amenities Inline Visualizer Mapping Framework */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-slate-100 py-6">
              {coreAmenities.map((amenity, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-3 bg-slate-50 rounded-xl text-center space-y-1"
                >
                  <div className="text-sky-600 bg-sky-50 p-2 rounded-lg">
                    {amenity.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 pt-1">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Luxury Experience Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                {premiumHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck className="text-xs" />
                    </span>
                    <span className="leading-normal font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE PANEL: Sticky Conversion Action Module (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-sky-100 p-8 rounded-2xl shadow-xl shadow-sky-500/5 space-y-6 lg:sticky lg:top-28">
            <div className="flex justify-between items-baseline pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Secured Rate
              </span>
              <div className="text-right">
                <span className="text-3xl font-bold font-mono tracking-tight text-slate-900">
                  ${room.pricePerNight}
                </span>
                <span className="text-xs text-slate-400 block font-light">
                  per night (excl. VAT)
                </span>
              </div>
            </div>

            {/* Interactive Schedulers Interface */}
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                    <FiCalendar className="text-sky-500" /> Check In
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                    <FiCalendar className="text-sky-500" /> Check Out
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <FiUsers className="text-sky-500" /> Total Occupants
                </label>
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

              {errorMessage ? (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {errorMessage}
                </p>
              ) : null}

              {/* Core Executive Submission Call to Action */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-md mt-2 uppercase text-xs tracking-wider disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Processing Request..." : "Book Selection Now"}
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <FiShield className="text-sky-500 text-sm" />
              <span>
                Verified property under Blue Light guarantee protocol.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
