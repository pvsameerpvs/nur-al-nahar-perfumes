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
    <Section className="relative flex min-h-screen items-center overflow-hidden py-32 text-white/90">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-ice-bg.png')" }}
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 grid gap-16 md:grid-cols-2 lg:gap-32 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        {/* Left Column: Title */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-200/50" />
            <span className="text-sm font-medium tracking-[0.3em] text-cyan-100/80 shadow-sm">PHILOSOPHY</span>
          </div>
          
          <h2 className="text-balance font-serif text-5xl font-medium leading-tight md:text-7xl drop-shadow-2xl">
            Built for <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white/80">what’s next.</span>
          </h2>
          
          <p className="max-w-md text-lg font-light leading-relaxed text-blue-50/80 drop-shadow-md">
            We blend Arabic depth with French structure—then edit hard. What remains is clean,
            modern, wearable luxury.
          </p>
        </div>

        {/* Right Column: Cards */}
        <div className="grid gap-6">
          {philosophy.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:border-cyan-200/40 hover:bg-white/10 hover:shadow-[0_0_40px_-5px_rgba(165,243,252,0.15)]"
            >
              {/* Ice Glint Effect */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine left-[120%]" />

              <div className="relative z-10 flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-200/30 text-[10px] text-cyan-100/70 group-hover:border-cyan-200/80 group-hover:text-cyan-50 shadow-[0_0_10px_rgba(165,243,252,0.2)]">
                  {i + 1}
                </span>
                <p className="text-base font-light leading-relaxed text-blue-50/90 group-hover:text-white drop-shadow-sm">
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
