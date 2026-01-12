import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "Brands we work with (Lattafa, Rasasi, Armaf, Afnan, and more) + our own brands coming soon: Miniature Collection, Signature Deodorant Line, Air Fresheners."
};

const workWith = [
  "Lattafa",
  "Rasasi",
  "Armaf",
  "Afnan",
  "Reef",
  "Arabiyat Prestige",
  "Rayhaan",
  "Al Haramain",
  "Paris Corner",
  "Fragrance World",
  "And many more"
];

const comingSoon = [
  {
    title: "Miniature Collection",
    badge: "25ml perfumes",
    desc:
      "Compact, gift‑friendly sizes built for discovery—easy to carry, easy to layer, easy to love."
  },
  {
    title: "Signature Deodorant Line",
    badge: "Daily luxury",
    desc:
      "Clean, modern deodorants designed to complement fragrance—fresh, confident, and premium."
  },
  {
    title: "Air Fresheners",
    badge: "Home + car",
    desc:
      "Dubai‑ready air fresheners with refined profiles—elevated scent without overwhelming the space."
  }
];

export default function BrandsPage() {
  return (
    <div className="bg-black text-white">
      <Section className="py-14 md:py-20">
        <div className="max-w-2xl">
          <Badge variant="subtle" className="w-fit">Wholesale & Retail</Badge>
          <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Brands</h1>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            We work with strong names in modern perfumery—curated for performance, demand, and Dubai‑ready wearability.
          </p>
        </div>

        <Separator className="my-10" />

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-white/5">
            <CardHeader>
              <CardTitle>Brands We Work With</CardTitle>
              <CardDescription>Curated partners—from trend leaders to dependable classics.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {workWith.map((b) => (
                  <div key={b} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80 transition hover:bg-white/10">
                    {b}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5">
            <CardHeader>
              <CardTitle>Our Own Brands (Coming Soon)</CardTitle>
              <CardDescription>Next drops built in our house style—minimal, premium, modern.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {comingSoon.map((c) => (
                <div key={c.title} className="group rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-serif text-lg">{c.title}</div>
                      <div className="mt-2 text-sm text-white/70">{c.desc}</div>
                    </div>
                    <Badge className="shrink-0" variant="default">{c.badge}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
