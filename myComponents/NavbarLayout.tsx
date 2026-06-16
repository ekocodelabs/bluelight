"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function NavbarLayout() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex flex-col tracking-widest text-sky-900 group"
        >
          <span className="font-serif text-xl font-semibold uppercase">
            Bluelight
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-sky-500 transition-colors group-hover:text-sky-600">
            Hotel & Resort
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-slate-600">
          <Link
            href="#overview"
            className="hover:text-sky-600 transition-colors"
          >
            Overview
          </Link>
          <Link
            href="#services"
            className="hover:text-sky-600 transition-colors"
          >
            Services
          </Link>
          <Link href="/rooms" className="hover:text-sky-600 transition-colors">
            Rooms
          </Link>
          <Link href="/dining" className="hover:text-sky-600 transition-colors">
            Dining
          </Link>
          <Link
            href="/experiences"
            className="hover:text-sky-600 transition-colors"
          >
            Experiences
          </Link>
          <Link
            href="/meetings"
            className="hover:text-sky-600 transition-colors"
          >
            Board Meetings
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-sky-600 hover:bg-sky-700 text-white rounded-none px-6 font-medium tracking-wider uppercase text-xs transition-all duration-300 shadow-sm shadow-sky-100"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-sky-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-sky-100 px-6 py-8 flex flex-col space-y-6 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <Link
            href="#overview"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium"
          >
            Overview
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium"
          >
            Services
          </Link>
          <Link
            href="/rooms"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium"
          >
            Rooms
          </Link>
          <Link
            href="/dining"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium"
          >
            Dining
          </Link>
          <Link
            href="/experiences"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium"
          >
            Experiences
          </Link>
          <Link
            href="/meetings"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium"
          >
            Board Meetings
          </Link>
          <Button
            asChild
            onClick={() => setIsOpen(false)}
            className="bg-sky-600 text-white rounded-none w-full uppercase tracking-wider text-xs"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
