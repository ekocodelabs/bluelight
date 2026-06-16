// components/footer.tsx
import Link from "next/link";

export default function FooterLayout() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-sky-900/60 pb-12 mb-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="flex flex-col tracking-widest text-white">
              <span className="font-serif text-2xl font-light uppercase">
                Bluelight
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-sky-400">
                Hotel & Resort
              </span>
            </Link>
            <p className="text-sky-200/50 font-light text-xs max-w-sm leading-relaxed">
              An architectural exploration of coastal luxury and refined living
              paradigms. Experience unparalleled custom hospitality protocols
              globally.
            </p>
          </div>

          {/* Column 2: Accommodations Links */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-sky-400 mb-2">
              Accommodations
            </h4>
            <Link
              href="/rooms/standard-room"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Standard Room
            </Link>
            <Link
              href="/rooms/junior-suite"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Junior Suite
            </Link>
            <Link
              href="/rooms/executive-suite"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Executive Suite
            </Link>
            <Link
              href="/rooms/presidential-suite"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Presidential Penthouse
            </Link>
          </div>

          {/* Column 3: Utility Links */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-sky-400 mb-2">
              Corporate & Info
            </h4>
            <Link
              href="#overview"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Resort Overview
            </Link>
            <Link
              href="#meetings"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Board Meetings
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Privacy Protocols
            </Link>
            <Link
              href="/terms"
              className="text-sky-200/60 hover:text-white font-light text-sm transition-colors"
            >
              Terms of Sanctuary
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer Sub-bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sky-200/40 font-light tracking-wide">
          <div>
            &copy; {currentYear} Bluelight Hotel & Resort Group. All global
            privileges reserved.
          </div>
          <div className="flex space-x-6">
            <span>Designed by EKO-CodeLabs</span>
            <span>v16.0.0 Production Core</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
