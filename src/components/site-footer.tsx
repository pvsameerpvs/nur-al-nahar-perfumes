import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="relative mt-0 border-t border-white/10 text-white overflow-hidden">
        {/* Background */}
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "url('/hero-ice-bg.png')" }} 
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-zinc-950/90 to-black/80" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20 md:py-32">
        <div className="grid gap-12 lg:gap-20 md:grid-cols-4">
          <div className="md:col-span-2 space-y-6">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-white">NUR AL NAHAR</div>
            <p className="max-w-md text-base leading-relaxed text-zinc-400 font-light">
              Next‑generation perfume house in Dubai. Arabic × French fragrance fusion—built for modern buyers and the city’s pace.
            </p>
          </div>

          <div className="grid gap-4 text-sm">
            <h3 className="font-medium tracking-widest text-zinc-500 uppercase text-xs mb-2">Pages</h3>
            <Link className="text-zinc-300 hover:text-white transition-colors duration-300" href="/about">About Us</Link>
            <Link className="text-zinc-300 hover:text-white transition-colors duration-300" href="/brands">Our Brands</Link>
            <Link className="text-zinc-300 hover:text-white transition-colors duration-300" href="/store-location">Visit Store</Link>
            <Link className="text-zinc-300 hover:text-white transition-colors duration-300" href="/contact">Contact Support</Link>
          </div>

          <div className="space-y-4 text-sm">
            <h3 className="font-medium tracking-widest text-zinc-500 uppercase text-xs mb-2">Location</h3>
            <p className="text-zinc-300 leading-relaxed font-light">
              Belqaizi Building, Gold Souk<br />
              Shop 5, Deira<br />
              Dubai, United Arab Emirates<br />
              <span className="block mt-2 text-white/90 font-medium">+971 58 304 0495</span>
            </p>
            <div className="flex gap-4">
                <a href="https://maps.google.com" target="_blank" className="inline-block text-xs text-white/60 hover:text-white underline underline-offset-4 decoration-white/30 transition-all">
                    Get Directions
                </a>
                 <a href="tel:+971583040495" className="inline-block text-xs text-white/60 hover:text-white underline underline-offset-4 decoration-white/30 transition-all">
                    Call Us
                </a>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
}
