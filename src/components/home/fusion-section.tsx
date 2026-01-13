"use client";

import { Section } from "@/components/section";

export function FusionSection() {
  return (
    <Section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-6 text-center">
        {/* Header */}
        <div className="mb-16 md:mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight">
                Arabic <span className="text-neutral-500 font-light mx-2">×</span> French
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Dubai is the meeting point—where heritage meets modern alchemy.
            </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 rounded-xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-neutral-900/80 backdrop-blur-sm text-left">
                <div className="mb-6 h-1 w-12 bg-amber-700/80 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-xl font-medium text-white mb-3 tracking-wide">
                    ARABIC SIGNATURE
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-white/90 transition-colors">
                    The profound depth of Oud, Amber, and Musk. A presence that commands attention and lingers in the memory like a timeless story.
                </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-neutral-900/80 backdrop-blur-sm text-left">
                <div className="mb-6 h-1 w-12 bg-blue-700/80 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-xl font-medium text-white mb-3 tracking-wide">
                    FRENCH STRUCTURE
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-white/90 transition-colors">
                    Mastery of composition. Bright openings, clean transitions, and elegant dry-downs that speak of varied sophistication.
                </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-neutral-900/80 backdrop-blur-sm text-left">
                <div className="mb-6 h-1 w-12 bg-white/50 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-xl font-medium text-white mb-3 tracking-wide uppercase">
                    Dubai Edit
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-white/90 transition-colors">
                    The perfect equilibrium. Trend-aware blends with balanced projection—luxurious, modern, and undeniably premium.
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
}
