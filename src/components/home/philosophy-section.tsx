import { Section } from "@/components/section";

const philosophy = [
  "Next‑Generation Perfume House — trend‑focused, not tradition‑restricted.",
  "Arabic × French fragrance fusion, curated for Dubai’s lifestyle.",
  "Quality over hype — every bottle must earn its place.",
  "Small team, big vision — built for the new generation of buyers.",
  "150,000+ bottles sold every year — trusted at scale, crafted with intent."
];

export function PhilosophySection() {
  return (
    <Section className="py-20">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="text-xs tracking-[0.32em] text-white/60">PHILOSOPHY</div>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Built for what’s next.</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            We blend Arabic depth with French structure—then edit hard. What remains is clean,
            modern, wearable luxury.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="grid gap-4">
            {philosophy.map((p) => (
              <div
                key={p}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75 transition hover:bg-white/10"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
