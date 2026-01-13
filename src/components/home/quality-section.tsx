"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export function QualitySection() {
  return (
    <Section className="relative min-h-[500px] flex items-center bg-zinc-950 overflow-hidden py-20">
      {/* Background Texture Simulation (Charcoal/Stone effect) */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-neutral-950/80">
        {/* Subtle lighter spots to look like light hitting rocks in the dark */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-left max-w-xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            Best Of <br />
            <span className="text-gray-200">Arabic Scents</span>
          </h2>
          
          <Button 
            variant="secondary" 
            className="bg-white text-black hover:bg-gray-100 rounded-lg px-8 py-6 text-lg font-medium tracking-wide transition-all"
          >
            View More
          </Button>
        </div>

        {/* Right Image Composition */}
        <div className="flex-1 relative flex justify-center md:justify-end h-[400px] md:h-[500px] w-full">
            {/* Composition of bottles - Using the available asset twice to simulate a group if needed, or just one strong hero image */}
             {/* Simulating the group from the image (Box + Bottle) */}
            <div className="relative w-full h-full max-w-[500px]">
                 {/* Main Bottle */}
                <Image
                    src="/perfume-bottle-floating-1.png"
                    alt="Arabic Scents Collection"
                    fill
                    className="object-contain drop-shadow-2xl z-10"
                    priority
                />
                 {/* Shadow/Reflection */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/60 blur-2xl rounded-[100%]" />
            </div>
        </div>
      </div>
    </Section>
  );
}
