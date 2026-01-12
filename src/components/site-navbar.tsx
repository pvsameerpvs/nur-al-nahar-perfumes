"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/store-location", label: "Store Location" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-serif text-lg tracking-tight text-white">NUR AL NAHAR</span>
          <span className="hidden text-xs tracking-[0.22em] text-white/55 md:inline">PERFUMES L.L.C</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white",
                  active && "bg-white/10 text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/brands">Explore</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-2">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cn(
                        "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 transition hover:bg-white/10",
                        active && "bg-white/10"
                      )}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/store-location">Visit Store</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
