import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const brandLogos = [
  "Lattafa",
  "Rasasi",
  "Armaf",
  "Afnan",
  "Reef",
  "Arabiyat Prestige",
  "Rayhaan",
  "Al Haramain",
  "Paris Corner",
  "Fragrance World"
];

export function BrandsSection() {
  return (
    <Section className="pb-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs tracking-[0.32em] text-white/60">PARTNERS</div>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Brands we work with</h2>
        </div>
        <Button asChild variant="secondary" className="hidden md:inline-flex">
          <Link href="/brands">See all</Link>
        </Button>
      </div>

      <Separator className="my-8" />

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {brandLogos.map((b) => (
          <div
            key={b}
            className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/80 transition hover:bg-white/10"
          >
            {b}
          </div>
        ))}
        <div className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-sm text-white/70">
          And many more
        </div>
      </div>
    </Section>
  );
}
