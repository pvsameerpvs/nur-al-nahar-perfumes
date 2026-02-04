"use client";

import { motion } from "framer-motion";
import { AirSpraySection } from "@/components/home/air-spray-section";

export default function AirSprayPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section for Air Spray Page */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/luxury-air-fresheners.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        
        <div className="relative z-20 text-center space-y-4 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter"
          >
            Air Fresh <span className="italic text-white/50">Series</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            Elevate your atmosphere with our premium range of artisanal air sprays.
          </motion.p>
        </div>
      </section>
      
      <AirSpraySection />
    </div>
  );
}
