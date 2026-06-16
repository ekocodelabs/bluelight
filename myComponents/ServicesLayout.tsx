// components/services.tsx
import * as LucideIcons from "lucide-react";
import { AMENITIES_DATA } from "@/constant/dummydata";

export default function ServicesLayout() {
  return (
    <section id="services" className="bg-sky-50/40 py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-sky-600 font-medium tracking-[0.3em] uppercase text-xs mb-3 block">
            Inclusive Indulgences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-wide">
            World-Class Amenities
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base mt-4 max-w-md mx-auto">
            Crafted for absolute comfort, every amenity is engineered to make
            your escape effortless.
          </p>
        </div>

        {/* 12 Services Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {AMENITIES_DATA.map((item) => {
            // Safe dynamic lookup of Lucide Icons matching dummy data mapping strings
            const IconComponent =
              (LucideIcons as any)[item.iconName] || LucideIcons.HelpCircle;

            return (
              <div
                key={item.id}
                className="bg-white border border-sky-100/60 p-8 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg text-slate-900 font-medium tracking-wide mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="w-6 h-px bg-sky-200 mt-6 group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
