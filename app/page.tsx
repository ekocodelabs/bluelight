import AboutLayout from "@/myComponents/AboutLayout";
import BannerLayout from "@/myComponents/BannerLayout";
import ContactLayout from "@/myComponents/ContactLayout";
import DinningLayout from "@/myComponents/DinningLayout";
import ExperiencesLayout from "@/myComponents/ExperiencesLayout";
import FooterLayout from "@/myComponents/FooterLayout";
import NavbarLayout from "@/myComponents/NavbarLayout";
import RoomLayout from "@/myComponents/RoomLayout";
import ServicesLayout from "@/myComponents/ServicesLayout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-sky-100 selection:text-sky-900">
      <NavbarLayout />

      <div className="pt-20">
        {" "}
        {/* Prevents hero text cut-off underneath sticky navigation */}
        <BannerLayout />
        <AboutLayout />
        <ServicesLayout />
        <RoomLayout />
        <DinningLayout />
        <ExperiencesLayout />
        <ContactLayout />
        <FooterLayout />
      </div>
    </main>
  );
}
