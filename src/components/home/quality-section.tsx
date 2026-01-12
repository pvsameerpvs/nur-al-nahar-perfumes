import { Section } from "@/components/section";

export function QualitySection() {
  return (
    <Section className="pb-20">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="text-xs tracking-[0.32em] text-white/60">QUALITY OVER HYPE</div>
          <h3 className="mt-3 font-serif text-2xl">We don’t chase noise.</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            We choose materials, blends, and formats that make sense in real life—heat, movement,
            and long days. If it doesn’t perform in Dubai, it doesn’t ship.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="text-xs tracking-[0.32em] text-white/60">SMOOTH EXPERIENCE</div>
          <h3 className="mt-3 font-serif text-2xl">Minimal, premium, fast.</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            From shelf to skin: clean choices, confident recommendations, and a curated range that respects your time.
          </p>
        </div>
      </div>
    </Section>
  );
}
