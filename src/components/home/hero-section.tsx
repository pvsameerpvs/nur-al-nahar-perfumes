import Link from "next/link";
import { Section } from "@/components/section";
import LuxePlaceholder from "@/components/luxe-placeholder";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 noise opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,.12),transparent_45%),radial-gradient(circle_at_75%_60%,rgba(255,255,255,.08),transparent_55%)]" />
      <Section className="relative py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="w-fit" variant="subtle">
              Dubai · Gold Souk · Deira
            </Badge>

            <h1 className="text-balance font-serif text-4xl tracking-tight md:text-6xl">
              NUR AL NAHAR
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
              Next‑Generation Perfume House. Arabic × French fragrance fusion—designed for Dubai’s
              lifestyle and the new generation of buyers.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/brands">Explore Collections</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/store-location">Visit Store</Link>
              </Button>
            </div>

            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs tracking-[0.32em] text-white/60">SCALE</div>
                <div className="mt-2 font-serif text-2xl">150,000+</div>
                <div className="mt-1 text-sm text-white/65">Bottles sold every year</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs tracking-[0.32em] text-white/60">FOCUS</div>
                <div className="mt-2 font-serif text-2xl">3+ years</div>
                <div className="mt-1 text-sm text-white/65">Focused expertise (no hype)</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <LuxePlaceholder className="h-[420px]" label="CINEMATIC PRODUCT FRAME" />
            <div className="grid gap-4 sm:grid-cols-2">
              <LuxePlaceholder className="h-44" label="DETAIL SHOT" />
              <LuxePlaceholder className="h-44" label="TEXTURE + LIGHT" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
