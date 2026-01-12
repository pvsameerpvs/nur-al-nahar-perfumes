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
    <Section className="relative flex min-h-screen items-center overflow-hidden py-32 text-white">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-[length:150%] bg-center bg-no-repeat opacity-30 mix-blend-screen"
        style={{ backgroundImage: "url('/hero-ice-bg.png')" }}
      />
      
      {/* Content */}
      <div className="relative z-10 grid gap-16 md:grid-cols-2 lg:gap-24">
        {/* Left Column: Title */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-sm font-medium tracking-[0.3em] text-white/70">PHILOSOPHY</span>
          </div>
          
          <h2 className="text-balance font-serif text-5xl font-medium leading-tight md:text-6xl">
            Built for <br />
            <span className="italic text-white/80">what’s next.</span>
          </h2>
          
          <p className="max-w-md text-lg font-light leading-relaxed text-white/60">
            We blend Arabic depth with French structure—then edit hard. What remains is clean,
            modern, wearable luxury.
          </p>
        </div>

        {/* Right Column: Cards */}
        <div className="grid gap-4">
          {philosophy.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]"
            >
              <div className="relative z-10 flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-[10px] text-white/50 group-hover:border-white/50 group-hover:text-white">
                  {i + 1}
                </span>
                <p className="text-base font-light leading-relaxed text-white/80 group-hover:text-white">
                  {p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
