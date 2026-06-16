// components/about.tsx
export default function AboutLayout() {
  return (
    <section
      id="overview"
      className="bg-white py-24 sm:py-32 px-6 border-b border-sky-50"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Decorative Luxury Accent Element */}
        <div className="w-12 h-px bg-sky-400 mb-8" />

        <span className="text-sky-600 font-medium tracking-[0.3em] uppercase text-xs mb-4">
          The Art of Luxury Living
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-wide leading-tight mb-8 max-w-2xl">
          Where coastal serenity meets bespoke architectural grandeur.
        </h2>

        <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          Bluelight Hotel transforms hospitality into an elevated sensory
          journey. Born from a vision of absolute sanctuary, our spaces merge
          high-end coastal tranquility with rigorous luxury protocols,
          delivering custom attention to every micro-detail of your stay.
        </p>

        <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl italic">
          &ldquo;Every guest is an author, and every stay is a curated
          masterpiece of timeless memory.&rdquo;
        </p>

        <div className="w-12 h-px bg-sky-400 mt-8" />
      </div>
    </section>
  );
}
