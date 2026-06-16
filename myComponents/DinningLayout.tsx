import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DiningLayout() {
  return (
    <section
      id="dining"
      className="bg-sky-50/30 border-y border-sky-100/50 py-24 sm:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Asymmetric Image Display Block */}
          <div className="lg:col-span-6 relative h-112.5 sm:h-137.5 w-full bg-slate-100 overflow-hidden shadow-xl shadow-sky-900/5">
            <Image
              src="/images/hoteldinning.jpg"
              alt="L'Étoile Fine Dining Restaurant at Bluelight Hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Context Narrative Block */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
            <span className="text-sky-600 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Gastronomy Mastered
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-wide leading-tight mb-6">
              Culinary Artistry at L&apos;Étoile
            </h2>
            <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed mb-6">
              Indulge in an exquisite culinary tapestry designed by
              Michelin-starred culinary visionaries. Leveraging local marine
              catches and global epicurean components, our menu presents sensory
              storytelling served within a highly tailored architectural
              landscape.
            </p>
            <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">
              Open daily for curate degustation menus, global vintage wine
              pairings, and rare spirit appreciation hours. Private chef tables
              are fully accessible upon advanced concierge reservation request.
            </p>

            {/* Global Dining Router */}
            <Button
              asChild
              className="bg-transparent border border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs font-semibold transition-all duration-300"
            >
              <Link href="/dining">Explore Dining</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
