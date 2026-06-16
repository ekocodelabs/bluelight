import ContactLayout from "@/myComponents/ContactLayout";
import FooterLayout from "@/myComponents/FooterLayout";
import NavbarLayout from "@/myComponents/NavbarLayout";
import RoomHero from "@/myComponents/RoomHero";
import RoomPageLayout from "@/myComponents/RoomPageLayout";
import React from "react";

export default function Rooms() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarLayout />
      <div className="pt-20">
        <RoomHero />
        <RoomPageLayout />
        <ContactLayout />
        <FooterLayout />
      </div>
    </main>
  );
}
