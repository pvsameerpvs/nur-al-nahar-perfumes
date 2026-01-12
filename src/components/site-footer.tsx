import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-xl text-white">NUR AL NAHAR</div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Next‑generation perfume house in Dubai. Arabic × French fragrance fusion—built for modern buyers and the city’s pace.
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <div className="text-white/80">Pages</div>
            <Separator className="my-2" />
            <Link className="text-white/70 hover:text-white" href="/about">About</Link>
            <Link className="text-white/70 hover:text-white" href="/brands">Brands</Link>
            <Link className="text-white/70 hover:text-white" href="/store-location">Store Location</Link>
            <Link className="text-white/70 hover:text-white" href="/contact">Contact</Link>
          </div>

          <div className="text-sm">
            <div className="text-white/80">Location</div>
            <Separator className="my-2" />
            <p className="text-white/70">
              Belqaizi Building, Gold Souk, Shop 5<br />
              Deira, Dubai, UAE
            </p>
          </div>
        </div>

        <Separator className="my-10" />
        <div className="flex flex-col gap-2 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} NUR AL NAHAR Perfumes L.L.C</div>
          <div className="tracking-[0.22em]">BLACK · WHITE · FUTURE</div>
        </div>
      </div>
    </footer>
  );
}
