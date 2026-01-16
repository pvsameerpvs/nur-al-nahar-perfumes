"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const comingSoonProducts = [
  {
    title: "Miniature Collection",
    subtitle: "25ml Pocket Perfumes",
    description: "Your favorite scents, refined for travel. The essence of luxury in a compact form.",
    image: "/nur-al-nahr.png", // Placeholder re-use
    gradient: "from-amber-500/20 to-purple-500/20"
  },
  {
    title: "Signature Deodorant",
    subtitle: "Body Spray Collection",
    description: "Long-lasting freshness with the depth of a fine fragrance. Designed for the daily ritual.",
    image: "/signature-deodorant.jpeg", // Placeholder re-use
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Luxury Air Fresheners",
    subtitle: "Home Ambience",
    description: "Transform your space. A curated selection of room scents that linger like a memory.",
    image: "/luxury-air-fresheners.jpeg", // Placeholder re-use
    gradient: "from-emerald-500/20 to-teal-500/20"
  }
];

export function ComingSoonSection() {
  return (
    <Section className="relative py-24 md:py-32 bg-zinc-950 text-white overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-80" />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6">
            
            {/* Header */}
            <div className="text-center mb-16 md:mb-24 space-y-4">
                <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
                    Our Own Brands <span className="text-white/40 italic">Coming Soon</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-neutral-400 font-light">
                    Expansion is in our DNA. We are crafting a new line of essentials that carry the Nur Al Nahar signature.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {comingSoonProducts.map((product, i) => (
                    <div 
                        key={i} 
                        className="group relative h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]"
                    >
                        {/* Inner Gradient Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-b ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                        
                        {/* Image Area */}
                        <div className="relative h-[60%] w-full flex items-center justify-center p-8">
                             {/* Floating Animation */}
                            <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain drop-shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-white text-black rounded-sm">
                                Coming Soon
                            </span>
                            <h3 className="text-2xl font-serif mb-2">{product.title}</h3>
                            <p className="text-sm font-medium text-white/60 mb-3 uppercase tracking-wide">{product.subtitle}</p>
                            <p className="text-sm text-neutral-400 leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    </Section>
  );
}
