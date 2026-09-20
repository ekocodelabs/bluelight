import FooterLayout from "@/myComponents/FooterLayout";
import NavbarLayout from "@/myComponents/NavbarLayout";
import ProfilePageLayout from "@/myComponents/ProfilePageLayout";
import React from "react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarLayout />
      <div>
        <ProfilePageLayout />
        <FooterLayout />
      </div>
    </main>
  );
}
