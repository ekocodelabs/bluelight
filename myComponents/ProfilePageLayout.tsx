"use client";

import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSupabaseBrowserClient } from "@/lib/browser-client";
import BookedActivitiesList, { BookedActivity } from "./BookedActivities";

function normalizeBookingType(value: unknown): BookedActivity["type"] {
  if (
    value === "room" ||
    value === "spa" ||
    value === "dining" ||
    value === "boardroom"
  ) {
    return value;
  }

  return "room";
}

function getBookingDescription(type: unknown): string {
  switch (type) {
    case "room":
      return "Room reservation";
    case "dining":
      return "Dining reservation";
    case "spa":
      return "Experience booking";
    case "boardroom":
      return "Boardroom reservation";
    default:
      return "Booking reservation";
  }
}

function normalizeBookingStatus(value: unknown): BookedActivity["status"] {
  if (value === "confirmed" || value === "completed") {
    return value;
  }

  return "pending";
}

export default function ProfilePageLayout() {
  const supabase = getSupabaseBrowserClient();

  // Account Form Binding Elements
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [activities, setActivities] = useState<BookedActivity[]>([]);
  const [isLoadingActivities, setIsLoadingActivities] = useState(true);
  const [activitiesError, setActivitiesError] = useState<string | null>(null);

  // Read cookie user object on mount lifecycle execution block
  useEffect(() => {
    async function loadProfileData() {
      setIsLoadingActivities(true);
      setActivitiesError(null);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setActivities([]);
        setActivitiesError("Sign in to view your bookings.");
        setIsLoadingActivities(false);
        return;
      }

      setEmail(user.email ?? "");
      const fullName = user.user_metadata?.full_name ?? "";
      setFirstName(fullName.split(" ")[0] ?? "");
      setPhone(user.user_metadata?.phone_number ?? "");

      const { data: bookingRows, error } = await supabase
        .from("activity_bookings")
        .select(
          "id, item_type, item_name, booking_date, status, amount_paid, created_at",
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Failed to load activity bookings:", error);
        setActivitiesError("Unable to load your bookings right now.");
        setIsLoadingActivities(false);
        return;
      }

      const mappedActivities: BookedActivity[] = (bookingRows ?? []).map(
        (booking) => ({
          id: booking.id,
          type: normalizeBookingType(booking.item_type),
          title: booking.item_name ?? "Blue Light booking",
          referenceCode: booking.id,
          date: booking.booking_date
            ? new Date(`${booking.booking_date}T00:00:00`).toLocaleDateString(
                undefined,
                { year: "numeric", month: "short", day: "numeric" },
              )
            : "Date pending",
          timeOrDuration: getBookingDescription(booking.item_type),
          status: normalizeBookingStatus(booking.status),
          amountPaid: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Number(booking.amount_paid ?? 0)),
        }),
      );

      setActivities(mappedActivities);
      setIsLoadingActivities(false);
    }

    loadProfileData();
  }, [supabase]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Direct communication interaction route to Supabase auth database profile maps
    await supabase.auth.updateUser({
      data: {
        phone_number: phone,
      },
    });

    setTimeout(() => setIsSaving(false), 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Card Modifier Form Structure Panel */}
        <div className="lg:col-span-5 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Personal Profile
            </h2>
            <p className="text-xs text-slate-400">
              Keep your core reservation contacts accurate and secure.
            </p>
          </div>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="firstName"
                className="text-xs font-semibold text-slate-700"
              >
                First Name
              </Label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="pl-10 h-11 border-slate-200 focus-visible:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-xs font-semibold text-slate-700"
              >
                Verified Email
              </Label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  disabled
                  className="pl-10 h-11 bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed select-none text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="phone"
                className="text-xs font-semibold text-slate-700"
              >
                Phone Number
              </Label>
              <div className="relative">
                <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234..."
                  className="pl-10 h-11 border-slate-200 focus-visible:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSaving}
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-sm mt-2 text-xs uppercase tracking-wider"
            >
              {isSaving ? "Saving changes..." : "Save Profile Details"}
            </Button>
          </form>
        </div>

        {/* Right Section Column: Dynamic Content Feed */}
        <div className="lg:col-span-7">
          <BookedActivitiesList
            activities={activities}
            isLoading={isLoadingActivities}
            errorMessage={activitiesError}
          />
        </div>
      </div>
    </div>
  );
}
