"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AirSprayPromoSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-black py-20">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <Image 
          src="/luxury-air-fresheners.jpeg"
          alt="Air Freshener Background"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm block">New Collection 2024</span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium leading-tight text-white">
              The Art of <br />
              <span className="italic text-white/60">Air Freshness</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Elevate your sensory experience with our masterfully crafted air sprays. 
              Each bottle captures a distinct mood, turning every room into a garden of elegance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-7 text-lg rounded-full font-semibold transition-all hover:scale-105">
              <Link href="/air-spray">Explore Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-7 text-lg rounded-full font-semibold">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Floating Product Visuals */}
        <div className="flex-1 relative h-[600px] w-full max-w-[600px]">
          <div className="relative h-full w-full">
            {/* Background Rings */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
            />
            
            {/* Secondary Bottle 1 (Left Back) */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-0 w-40 h-56 opacity-40 blur-[2px]"
            >
              <Image
                src="/air-fresh2.png"
                alt="Air Spray 2"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Secondary Bottle 2 (Right Front) */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-0 w-48 h-64 opacity-60 z-30"
            >
              <Image
                src="/air-fresh3.png"
                alt="Air Spray 3"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Main Featured Bottle */}
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="relative w-72 h-96 md:w-80 md:h-[500px]">
                <Image
                  src="/air-fresh1.png"
                  alt="Featured Air Spray"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
                />
              </div>
            </motion.div>

            {/* Floating Particles/Glows */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-500/10 blur-[60px] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
