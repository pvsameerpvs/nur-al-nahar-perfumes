import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "About NUR AL NAHAR Perfumes L.L.C — three years of focused expertise, small team with a big vision, built for Dubai lifestyle."
};

const pillars = [
  {
    title: "Small Team, Big Vision",
    description: "We move fast, curate hard, and keep the range sharp. The goal is simple: premium scent experiences that feel right for Dubai today."
  },
  {
    title: "Trend-Focused Approach",
    description: "We watch what’s shifting—notes, formats, and how people actually wear fragrance—then translate those signals into curated picks."
  },
  {
    title: "Made For Dubai",
    description: "Heat changes everything. Our edit prioritizes performance and balance—projection, longevity, and a dry‑down that stays refined from day to night."
  },
  {
    title: "Inspired By Modern Buyers",
    description: "Clean visuals. Strong scent profiles. Honest recommendations. We build trust by being direct—no exaggerated claims, just real quality."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"
            style={{ backgroundImage: "url('/hero-ice-bg.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-[0.2em] uppercase text-cyan-50/80 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Three Years of Excellence
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-2xl">
                A Modern Perfume House
            </h1>
            <p className="text-lg md:text-xl text-cyan-50/70 font-light max-w-2xl mx-auto leading-relaxed">
                NUR AL NAHAR Perfumes L.L.C was built for a new kind of buyer—confident, trend‑aware, and allergic to empty hype.
            </p>
        </div>
      </div>

      <Section className="py-16 md:py-32 relative z-10">
        <div className="w-full px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
            
            {/* Left Content - Mission */}
            <div className="space-y-8 lg:sticky lg:top-24">
                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                    We respect tradition, <br/>
                    <span className="text-white/50 italic">but we’re not restricted by it.</span>
                </h2>
                <Separator className="bg-white/10 max-w-xs" />
                <p className="text-neutral-400 text-lg leading-relaxed font-light">
                    Founded with a singular vision to redefine the fragrance landscape in Dubai, we bridge the gap between timeless Arabian heritage and contemporary French sophistication. Our approach is methodical, yet passionate.
                </p>
                
                {/* Visual Accent - Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                     <div className="relative h-48 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-sm group">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                            style={{ backgroundImage: "url('/brand-bottle-gold.png')" }} 
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                         <div className="absolute bottom-3 left-3 text-xs font-serif text-white/90">The Craft</div>
                     </div>
                     <div className="relative h-48 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-sm group translate-y-8">
                        <div 
                             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                             style={{ backgroundImage: "url('/brand-bottle-black.png')" }} 
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                         <div className="absolute bottom-3 left-3 text-xs font-serif text-white/90">The Essence</div>
                     </div>
                </div>
            </div>

            {/* Right Content - Pillars */}
            <div className="grid gap-6">
                {pillars.map((item, i) => (
                    <div 
                        key={i} 
                        className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-bold tracking-widest text-cyan-500/50 group-hover:text-cyan-400">0{i+1}</span>
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-cyan-50 transition-colors">{item.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
