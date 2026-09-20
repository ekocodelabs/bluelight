"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface DiningCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  hours?: string;
  bookingUrl: string;
}

export default function DiningPageCard({
  id,
  image,
  title,
  description,
  hours = "12:00 PM - 11:00 PM",
  bookingUrl,
}: DiningCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group">
      {/* Image Capture Container */}
      <div className="relative w-full aspect-16/11 bg-slate-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Soft layout overlay vignette blur */}
        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Descriptive Text Body Blocks */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          {/* Working Operating Hours Flag */}
          <div className="flex items-center gap-1.5 text-xs text-sky-600 font-semibold uppercase tracking-wider">
            <FiClock className="text-sm" />
            <span>{hours}</span>
          </div>

          <h3 className="text-xl font-serif font-semibold text-slate-900 tracking-wide transition-colors group-hover:text-sky-600">
            {title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Dynamic Interactive Execution Action Control Row */}
        <div className="pt-2">
          <Button
            asChild
            className="w-full h-11 bg-white hover:bg-sky-600 border border-sky-200 text-sky-900 hover:text-white font-medium rounded-xl transition-all duration-300 group/btn"
          >
            <Link
              href={`/dining/${id}`}
              className="flex items-center justify-center gap-2"
            >
              <span>Book Table Now</span>
              <FiArrowUpRight className="text-base transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
