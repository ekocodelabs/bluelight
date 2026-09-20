import BoardRoomPageLayout from "@/myComponents/BoardRoomPageLayout";
import FooterLayout from "@/myComponents/FooterLayout";
import NavbarLayout from "@/myComponents/NavbarLayout";
import React from "react";

export default function Meetings() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarLayout />
      <div>
        <BoardRoomPageLayout />
        <FooterLayout />
      </div>
    </main>
  );
}
