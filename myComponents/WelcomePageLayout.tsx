"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiSliders,
  FiHeart,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function WelcomePageLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-50/60 font-sans flex flex-col justify-between">
      {/* HEADER / NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
            <span className="text-white font-bold text-sm">BL</span>
          </div>
          <span className="font-bold tracking-wider text-xl uppercase text-slate-950">
            Blue Light
          </span>
        </div>
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          Skip to Dashboard
        </Link>
      </header>

      {/* MAIN HERO CONTENT */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
        {/* LEFT PANEL: Welcome Messaging & Feature Quick-Links (5 Cols) */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1 text-center lg:text-left">
          {/* Accent Success Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100 text-xs font-semibold animate-fade-in mx-auto lg:mx-0">
            <FiCheckCircle className="text-sm" />
            <span>Account Verified successfully</span>
          </div>

          {/* Heading Block */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none sm:leading-tight">
              Welcome to <span className="text-blue-600">Blue Light</span>
            </h1>
            <p className="text-base text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0">
              Your gateway to premium shortlets, elite staycations, and secure
              luxury event venues across Nigeria is officially unlocked.
            </p>
          </div>

          {/* Quick Informational Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <FiSearch className="text-base" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Explore</h3>
              <p className="text-[11px] text-slate-400 mt-1">
                Verified properties only.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <FiSliders className="text-base" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Filter</h3>
              <p className="text-[11px] text-slate-400 mt-1">
                Match budget & city.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <FiHeart className="text-base" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Reserve</h3>
              <p className="text-[11px] text-slate-400 mt-1">
                Secure local check-ins.
              </p>
            </div>
          </div>

          {/* Call To Action Redirecting to App Hub */}
          <div className="pt-2">
            <Button
              asChild
              className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/10 group transition-all"
            >
              <Link href="/" className="flex items-center justify-center gap-2">
                <span>Start Exploring Listings</span>
                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* RIGHT PANEL: Luxury Dynamic Imagery Layout (7 Cols) */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
            <Image
              src="/images/hotelbanner1.jpg"
              alt="Welcome to Blue Light luxury spaces Nigeria"
              fill
              priority
              className="object-cover object-center transform scale-100 hover:scale-102 transition-transform duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Visual Glassmorphic Tag Card on Image Overlay */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/70 p-4 rounded-2xl border border-white/30 hidden sm:flex items-center justify-between shadow-xl">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">
                  Featured Location
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Eko Atlantic Penthouse Suite
                </h4>
                <p className="text-xs text-slate-600">Lagos, Nigeria</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 block">
                  Verified Stay
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold">
                  100% Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER METRICS INFO */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>&copy; {new Date().getFullYear()} Blue Light Bookings Ltd.</div>
        <div className="flex items-center gap-6">
          <Link
            href="/support"
            className="hover:text-slate-600 transition-colors"
          >
            Need assistance?
          </Link>
          <Link href="/faq" className="hover:text-slate-600 transition-colors">
            How it works
          </Link>
        </div>
      </footer>
    </div>
  );
}
