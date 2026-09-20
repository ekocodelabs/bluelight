"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiClock,
  FiMapPin,
  FiCheckCircle,
  FiArrowLeft,
  FiCalendar,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

// Import your custom data architecture map cleanly from constants folder path
import { DETAILED_EXPERIENCES } from "@/constant/experiencedata";

interface ExperienceDetailPageLayoutProps {
  id: string; // Dynamic parameter routed down from the async route entry parameter
}

export default function ExperienceDetailPageLayout({
  id,
}: ExperienceDetailPageLayoutProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingDate, setBookingDate] = useState<string>(() =>
    new Date().toISOString().slice(0, 10),
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Retrieve matching experience target from your provided structure collections
  const experience = DETAILED_EXPERIENCES.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: experience.id,
          itemName: experience.title,
          priceAmount: experience.priceAmount,
          quantity: 1,
          bookingDate,
          itemType: "spa",
        }),
      });
      const data = await response.json();

      if (!response.ok || !data?.url) {
        throw new Error(data?.error || "Unable to create your booking.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Experience checkout failed:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to create your booking.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/40 pb-24 pt-28 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-8">
        {/* Navigation Context Link Back Button */}
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-wider group"
        >
          <FiArrowLeft className="text-sm group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Experiences Catalog</span>
        </Link>

        {/* Header Block Summary Row */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
            {experience.tagline}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-slate-900 tracking-wide">
            {experience.title}
          </h1>
        </div>

        {/* High-End Layout Visual Exhibition Banner Board */}
        <div className="relative w-full aspect-21/9 min-h-87.5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
          <Image
            src={experience.imagePath}
            alt={experience.title}
            fill
            priority
            className="object-cover object-center transition-transform duration-2000 hover:scale-102"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>

        {/* Content Splitting Alignment Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE PANEL: Overview, Location Parameters, and Highlight Cards (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                About the Experience
              </h3>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-light">
                {experience.longDescription}
              </p>
            </div>

            {/* Core Locational Metadata Indicators block grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-slate-100 py-6">
              <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <FiClock className="text-lg" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Timings
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    {experience.hours}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Location Tier
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Experience Highlights Bullet Matrix */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                What to Expect
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                {experience.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 border border-slate-100/50"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheckCircle className="text-xs" />
                    </span>
                    <span className="leading-normal font-light text-slate-700">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE PANEL: Premium Schedule and Pass Registry Block (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-sky-100 p-8 rounded-2xl shadow-xl shadow-sky-500/5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Access Pass Protocol
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <FiUserCheck className="text-sky-500" /> Book Experience Session
              </h3>
            </div>

            <div className="flex items-end justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Fixed price per pass
              </span>
              <span className="text-2xl font-bold text-slate-900">
                ${experience.priceAmount.toFixed(2)}
              </span>
            </div>

            {/* Scheduler input capture fields */}
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <FiCalendar className="text-sky-500" /> Selected Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <FiClock className="text-sky-500" /> Desired Time Window
                </span>
                <input
                  type="time"
                  defaultValue="10:00"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

              {errorMessage ? (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {errorMessage}
                </p>
              ) : null}

              {/* Instant Execution CTA Action control button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-md mt-2 uppercase text-xs tracking-wider"
              >
                {isSubmitting ? "Reserving Slot..." : "Secure Experience Pass"}
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
              <FiShield className="text-sky-500 text-sm shrink-0" />
              <span>
                Session slots synchronize directly under your Blue Light room
                profile.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
