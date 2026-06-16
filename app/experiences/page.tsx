import ContactLayout from "@/myComponents/ContactLayout";
import ExperiencesHero from "@/myComponents/ExperiencesHero";
import ExperiencesPageLayout from "@/myComponents/ExperiencesPageLayout";
import FooterLayout from "@/myComponents/FooterLayout";
import NavbarLayout from "@/myComponents/NavbarLayout";
import React from "react";

export default function Experiences() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarLayout />
      <div className="pt-20">
        <ExperiencesHero />
        <ExperiencesPageLayout />
        <ContactLayout />
        <FooterLayout />
      </div>
    </main>
  );
}
