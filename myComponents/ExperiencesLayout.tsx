// components/experiences.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imagePath: string;
  isReversed: boolean;
}

const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "spa",
    title: "The Zenith Wellness Spa",
    tagline: "Holistic Sanctuary Protocols",
    description:
      "Rejuvenate mind and cellular vitality within our therapeutic oasis. Our world-renowned practitioners deliver custom clinical bio-treatments, thermal hydrotherapy circuits, and targeted botanical skin rituals.",
    imagePath: "/images/hotelspa.jpg",
    isReversed: false,
  },
  {
    id: "gym",
    title: "Kinetic Fitness Matrix",
    tagline: "High-Performance Environment",
    description:
      "Achieve performance milestones with state-of-the-art diagnostic cardio equipment, professional free-weight setups, and private bespoke personal training frameworks curated to optimize metabolic structure.",
    imagePath: "/images/hotelgym.jpg",
    isReversed: true, // Flips structure for architectural visual balance
  },
  {
    id: "swimming",
    title: "The Horizon Infinity Pool",
    tagline: "Panoramic Aquatic Escape",
    description:
      "Immerse into our heated saline infinity architecture flowing seamlessly into marine horizons. Features luxury soundscapes, private daybed compounds, and complete poolside butler beverage provisioning.",
    imagePath: "/images/hotelpool.jpg",
    isReversed: false,
  },
];

export default function ExperiencesLayout() {
  return (
    <section id="experiences" className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Module */}
        <div className="text-center mb-24">
          <span className="text-sky-600 font-medium tracking-[0.3em] uppercase text-xs mb-3 block">
            Curated Resort Life
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-wide">
            Elite Lifestyle Experiences
          </h2>
        </div>

        {/* Structural Rows Mapping Stack */}
        <div className="flex flex-col space-y-24 sm:space-y-32">
          {EXPERIENCES_DATA.map((exp) => (
            <div
              key={exp.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                exp.isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Dynamic Column Ordering Layer */}
              <div
                className={`lg:col-span-6 relative h-100 sm:h-120 w-full bg-slate-100 overflow-hidden ${
                  exp.isReversed ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={exp.imagePath}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Narratives Layer */}
              <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
                <span className="text-sky-500 font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
                  {exp.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-light text-slate-900 tracking-wide mb-5">
                  {exp.title}
                </h3>
                <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Button Action Matrix */}
                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                  <Button
                    asChild
                    className="bg-sky-600 hover:bg-sky-700 text-white rounded-none px-6 py-5 text-xs uppercase tracking-widest font-medium transition-all duration-300"
                  >
                    <Link href={`/book?experience=${exp.id}`}>
                      Book Session
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-slate-200 text-slate-700 hover:bg-slate-50 rounded-none px-6 py-5 text-xs uppercase tracking-widest font-medium transition-all duration-300"
                  >
                    <Link href={`/experiences/${exp.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
