import type { Metadata } from "next";
import { Section } from "@/components/section";
import LuxePlaceholder from "@/components/luxe-placeholder";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "About NUR AL NAHAR Perfumes L.L.C — three years of focused expertise, small team with a big vision, built for Dubai lifestyle."
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <Section className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Badge variant="subtle" className="w-fit">
              Three Years of Focused Expertise
            </Badge>
            <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">A modern perfume house.</h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/75">
              NUR AL NAHAR Perfumes L.L.C was built for a new kind of buyer—confident, trend‑aware, and allergic to empty hype.
              We respect tradition, but we’re not restricted by it.
            </p>

            <Separator className="my-8" />

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs tracking-[0.32em] text-white/60">SMALL TEAM, BIG VISION</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  We move fast, curate hard, and keep the range sharp. The goal is simple: premium scent experiences that feel right for Dubai today.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs tracking-[0.32em] text-white/60">TREND‑FOCUSED APPROACH</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  We watch what’s shifting—notes, formats, and how people actually wear fragrance—then translate those signals into curated picks.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs tracking-[0.32em] text-white/60">MADE FOR DUBAI</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Heat changes everything. Our edit prioritizes performance and balance—projection, longevity, and a dry‑down that stays refined from day to night.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs tracking-[0.32em] text-white/60">INSPIRED BY MODERN BUYERS</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Clean visuals. Strong scent profiles. Honest recommendations. We build trust by being direct—no exaggerated claims, just real quality.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:pt-10">
            <LuxePlaceholder className="h-[520px]" label="EDITORIAL VISUAL" />
            <div className="grid gap-4 sm:grid-cols-2">
              <LuxePlaceholder className="h-44" label="BOTTLE SILHOUETTE" />
              <LuxePlaceholder className="h-44" label="MATERIAL + FINISH" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
