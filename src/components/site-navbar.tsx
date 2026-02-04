"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/air-spray", label: "Air Spray" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
          {links.map((l) => {
            const isHashLink = l.href.startsWith("/#");
            const hash = isHashLink ? l.href.split("#")[1] : "";
            
            const isActive = isHashLink 
              ? (pathname === "/" && activeHash === `#${hash}`)
              : (pathname === l.href && (!activeHash || !isHashLink));

            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-white/60"
                )}
              >
                {l.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Icons Right */}
        <div className="flex items-center gap-6">
          <Button asChild size="sm" className="hidden md:inline-flex group relative  overflow-hidden rounded-full bg-white px-5 text-base font-medium text-black transition-all hover:scale-105 hover:bg-white/90 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            <Link href="/brands">
              <span className="relative z-10">Shop Collection</span>
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="ml-2 inline-flex items-center justify-center text-white md:hidden hover:text-white/80 transition-colors"
              >
                <Menu className="h-8 w-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-white/10 bg-zinc-950/95 backdrop-blur-xl text-white p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-8 border-b border-white/5">
                   <div className="flex flex-col items-start leading-none">
                      <span className="font-serif text-xl font-bold tracking-widest text-white">NUR AL NAHAR</span>
                      <span className="text-[0.6rem] tracking-[0.2em] text-white/50 mt-1">EST. 2023</span>
                   </div>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 flex flex-col justify-center px-8 gap-8">
                    {links.map((l) => {
                        const isHashLink = l.href.startsWith("/#");
                        const hash = isHashLink ? l.href.split("#")[1] : "";
                        
                        const isActive = isHashLink 
                          ? (pathname === "/" && activeHash === `#${hash}`)
                          : (pathname === l.href && (!activeHash || !isHashLink));

                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={cn(
                                    "text-3xl font-serif font-medium transition-all hover:translate-x-2",
                                    isActive ? "text-white" : "text-white/40"
                                )}
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                                {isActive && (
                                    <motion.span 
                                        layoutId="mobile-nav-dot"
                                        className="ml-2 inline-block w-2 h-2 rounded-full bg-white/50" 
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Footer */}
                <div className="p-8">
                    <div className="space-y-4">
                        <Link href="/product" className="block w-full text-center p-2 rounded-full bg-white text-black font-medium text-sm tracking-widest uppercase hover:bg-zinc-200 transition-colors" onClick={() => setOpen(false)}>
                            Shop Collection
                        </Link>
                        <div className="flex justify-between items-center pt-2 px-2">
                             <a href="https://wa.me/971583040495" className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors">WhatsApp</a>
                             <a href="mailto:info@nuralnahar.com" className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors">Email</a>
                        </div>
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
