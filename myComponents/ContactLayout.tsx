// components/contact.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactLayout() {
  return (
    <section
      id="contact"
      className="bg-sky-950 text-white py-24 px-6 border-b border-sky-900/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Brand Philosophy Info Area */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-sky-400 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide mb-6">
                Connect With Bluelight
              </h2>
              <p className="text-sky-200/70 font-light text-sm sm:text-base leading-relaxed max-w-md">
                Our elite guest relations desk coordinates personalized
                logistical protocols, global travel planning, and custom spatial
                bookings before your scheduled touchdown.
              </p>
            </div>

            {/* Social Channels Branding Grid */}
            <div className="mt-12 lg:mt-0">
              <span className="text-[10px] uppercase tracking-[0.3em] text-sky-400 block mb-4">
                Digital Presence
              </span>
              <div className="flex space-x-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-sky-900/40 hover:bg-sky-500/20 text-sky-300 hover:text-white transition-all duration-300 rounded-none border border-sky-800/60"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-sky-900/40 hover:bg-sky-500/20 text-sky-300 hover:text-white transition-all duration-300 rounded-none border border-sky-800/60"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-sky-900/40 hover:bg-sky-500/20 text-sky-300 hover:text-white transition-all duration-300 rounded-none border border-sky-800/60"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Verifiable Pure Data Contact Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12">
            <div className="p-8 bg-sky-900/20 border border-sky-800/40 flex flex-col space-y-4">
              <div className="w-10 h-10 bg-sky-800/30 text-sky-400 flex items-center justify-center">
                <Phone className="h-5 w-5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg tracking-wide">
                Concierge Direct
              </h3>
              <p className="text-sky-200/60 font-light text-sm space-y-1">
                <span className="block">Global: +1 (800) 555-BLUE</span>
                <span className="block">Local Desk: +1 (305) 555-0199</span>
              </p>
            </div>

            <div className="p-8 bg-sky-900/20 border border-sky-800/40 flex flex-col space-y-4">
              <div className="w-10 h-10 bg-sky-800/30 text-sky-400 flex items-center justify-center">
                <Mail className="h-5 w-5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg tracking-wide">
                Electronic Inquiries
              </h3>
              <p className="text-sky-200/60 font-light text-sm space-y-1">
                <span className="block font-medium text-sky-300">
                  reservations@bluelighthotel.com
                </span>
                <span className="block">events@bluelighthotel.com</span>
              </p>
            </div>

            <div className="p-8 bg-sky-900/20 border border-sky-800/40 flex flex-col space-y-4 sm:col-span-2">
              <div className="w-10 h-10 bg-sky-800/30 text-sky-400 flex items-center justify-center">
                <MapPin className="h-5 w-5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg tracking-wide">
                Physical Address
              </h3>
              <p className="text-sky-200/70 font-light text-sm leading-relaxed">
                700 Oceanfront Promenade, Elite Enclave Bay, Miami, FL 33139,
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
