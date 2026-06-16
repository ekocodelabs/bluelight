// components/experiences-page-component.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DetailedExperience {
  id: string;
  title: string;
  tagline: string;
  longDescription: string;
  hours: string;
  location: string;
  imagePath: string;
  highlights: string[];
}

const DETAILED_EXPERIENCES: DetailedExperience[] = [
  {
    id: "spa",
    title: "The Zenith Wellness Spa",
    tagline: "Holistic Rejuvenation & Healing Protocols",
    longDescription:
      "Escape to a world of absolute stillness. The Zenith Wellness Spa offers an elite menu of treatments designed by global therapeutic masters. From custom ocean-infused stone massages to cellular-renewal facials, our sanctuary targets physical fatigue and environmental stress. Every session begins with a tailored consultation and finishes with personal access to our private thermal decompression suites.",
    hours: "08:00 AM — 09:00 PM Daily",
    location: "East Wing, Ground Level",
    imagePath: "/images/hotelspa.jpg",
    highlights: [
      "Custom aromatherapy oils",
      "Private hydrotherapy mineral pools",
      "Post-treatment organic elixir lounge",
    ],
  },
  {
    id: "gym",
    title: "Kinetic Fitness Matrix",
    tagline: "High-Performance Training Environments",
    longDescription:
      "Maintain your optimal health dynamic while traveling. Equipped with state-of-the-art interactive equipment, our facility is designed for both casual fitness routines and elite athletic training. Take advantage of custom metabolic tracking systems, dedicated outdoor yoga decks overlooking the surf, and private sessions with our certified master lifestyle coaches.",
    hours: "Available 24 Hours to Hotel Guests",
    location: "West Wing, Rooftop Tier",
    imagePath: "/images/hotelgym.jpg",
    highlights: [
      "Advanced custom weight matrices",
      "Daily oceanfront yoga & pilates sets",
      "Complimentary post-workout juice bar",
    ],
  },
  {
    id: "pool",
    title: "The Horizon Infinity Pool",
    tagline: "Panoramic Architectural Aquatic Escape",
    longDescription:
      "Unwind at our iconic heated saline pool infrastructure, where the water melts directly into the sea line. Designed for pure sensory escape, the pool space offers a sanctuary layout. Guests can reserve private cabanas equipped with high-fidelity sound controls, plush luxury loungers, and attentive, personal white-glove pool butler service.",
    hours: "06:00 AM — 10:00 PM Daily",
    location: "Central Courtyard Overlook",
    imagePath: "/images/hotelpool.jpg",
    highlights: [
      "Heated saline temperature control",
      "Private daybed and cabana compounds",
      "Gourmet poolside dynamic bites menu",
    ],
  },
];

export default function ExperiencesPageLayout() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mapping Each Detailed Experience Section */}
        <div className="space-y-28">
          {DETAILED_EXPERIENCES.map((exp, index) => {
            // Alternates the side of the text and images for a premium layout feel
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-sky-50 pb-20 last:border-0 last:pb-0"
              >
                {/* Visual Image Block */}
                <div
                  className={`lg:col-span-6 relative h-100 sm:h-125 w-full bg-slate-100 ${
                    !isEven ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={exp.imagePath}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Narrative Detail Block */}
                <div className="lg:col-span-6 flex flex-col items-start">
                  <span className="text-sky-600 font-medium tracking-[0.2em] uppercase text-xs mb-3">
                    {exp.tagline}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-slate-900 tracking-wide mb-6">
                    {exp.title}
                  </h2>
                  <p className="text-slate-500 font-light text-base leading-relaxed mb-6">
                    {exp.longDescription}
                  </p>

                  {/* Highlights Bullet Array */}
                  <div className="mb-8 w-full">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 mb-3">
                      Exclusive Amenities Included:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-500 font-light flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-sky-400 block shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spatial Logistical Rules Metadata */}
                  <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-sky-100 pt-4 w-full mb-8 text-xs text-slate-400">
                    <div>
                      <span className="font-medium text-slate-600 uppercase tracking-wider">
                        Hours:
                      </span>{" "}
                      {exp.hours}
                    </div>
                    <div>
                      <span className="font-medium text-slate-600 uppercase tracking-wider">
                        Location:
                      </span>{" "}
                      {exp.location}
                    </div>
                  </div>

                  {/* Dynamic CTAs Matrix */}
                  <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white rounded-none px-6 py-5 text-xs uppercase tracking-widest font-medium transition-colors">
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
