"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent text-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo Left */}
        <Link href="/" className="flex flex-col items-center leading-none">
          <span className="font-serif text-xl font-bold tracking-widest text-white">NUR AL NAHAR</span>
          <span className="text-[0.6rem] tracking-[0.2em] text-white/60">PERFUME DELIVERIES</span>
        </Link>

        {/* Links Center */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium text-white/70 transition-colors hover:text-white",
                pathname === l.href && "text-white underline decoration-white/50 underline-offset-8"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Icons Right */}
        <div className="flex items-center gap-6">
          {/* CTA Button */}
       
          <Button asChild size="sm" className="group relative  overflow-hidden rounded-full bg-white px-5 text-base font-medium text-black transition-all hover:scale-105 hover:bg-white/90 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            <Link href="/product">
              <span className="relative z-10">Shop Collection</span>
            </Link>
          </Button>
    

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="ml-2 inline-flex items-center justify-center text-white md:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-white/10 text-white">
              <div className="flex flex-col gap-6 pt-10">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-lg font-medium text-white/80 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
