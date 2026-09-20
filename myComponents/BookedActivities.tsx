"use client";

import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import {
  MdOutlineBedroomParent,
  MdOutlineSpa,
  MdOutlineMeetingRoom,
  MdOutlineRestaurant,
} from "react-icons/md";

export interface BookedActivity {
  id: string;
  type: "room" | "spa" | "dining" | "boardroom";
  title: string;
  referenceCode: string;
  date: string;
  timeOrDuration: string;
  status: "confirmed" | "completed" | "pending";
  amountPaid: string;
}

interface BookedActivitiesListProps {
  activities: BookedActivity[];
  isLoading?: boolean;
  errorMessage?: string | null;
}

export default function BookedActivitiesList({
  activities,
  isLoading = false,
  errorMessage = null,
}: BookedActivitiesListProps) {
  // Custom utility function mapping contextual sub-icons to their unique tracking keys cleanly
  const getActivityIcon = (type: BookedActivity["type"]) => {
    switch (type) {
      case "room":
        return <MdOutlineBedroomParent className="text-xl text-blue-600" />;
      case "spa":
        return <MdOutlineSpa className="text-xl text-sky-600" />;
      case "dining":
        return <MdOutlineRestaurant className="text-xl text-amber-600" />;
      case "boardroom":
        return <MdOutlineMeetingRoom className="text-xl text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Your Activity Bookings
          </h2>
          <p className="text-xs text-slate-400">
            Real-time status of your luxury experiences at Blue Light.
          </p>
        </div>
        <span className="text-xs bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-1 rounded-full font-semibold">
          {activities.length} Total Bookings
        </span>
      </div>

      {/* Render the structural loop framework accurately */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="bg-white border border-slate-100 p-8 rounded-2xl text-center text-sm text-slate-400">
            Loading your bookings...
          </div>
        ) : errorMessage ? (
          <div className="bg-red-50 border border-red-100 p-8 rounded-2xl text-center text-sm text-red-600">
            {errorMessage}
          </div>
        ) : activities.length === 0 ? (
          <div className="bg-white border border-slate-100 p-8 rounded-2xl text-center text-sm text-slate-400">
            No activity bookings found in your transaction history.
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:border-sky-100 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-sky-200 transition-colors">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-slate-900 tracking-tight">
                      {activity.title}
                    </h3>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                        activity.status === "confirmed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : activity.status === "completed"
                            ? "bg-slate-50 text-slate-500 border-slate-200"
                            : "bg-amber-50 text-amber-700 border-amber-100"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-sm shrink-0" />
                      <span>{activity.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock className="text-sm shrink-0" />
                      <span>{activity.timeOrDuration}</span>
                    </span>
                    <span className="text-slate-300 font-light">|</span>
                    <span className="font-mono text-slate-400 tracking-wide">
                      Ref: {activity.referenceCode}
                    </span>
                  </div>
                </div>
              </div>

              <div className="sm:text-right flex sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider">
                    Amount Secured
                  </span>
                  <span className="text-base font-bold text-slate-900 font-mono tracking-tight">
                    {activity.amountPaid}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
