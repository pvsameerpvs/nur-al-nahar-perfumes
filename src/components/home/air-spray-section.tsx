"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/section";

const airFreshImages = [
  "/air-fresh1.png",
  "/air-fresh2.png",
  "/air-fresh3.png",
  "/air-fresh4.png",
  "/air-fresh5.png",
  "/air-fresh6.png",
  "/air-fresh7.png",
  "/air-fresh8.png",
  "/air-fresh9.png",
  "/air-fresh10.png",
  "/air-fresh11.png",
  "/air-fresh12.png",
  "/air-fresh13.png",
  "/air-fresh14.png",
  "/air-fresh15.png",
];

export function AirSpraySection() {
  return (
    <Section className="py-24 bg-black text-white overflow-hidden" id="air-spray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-medium tracking-tight"
          >
            Air Fresh <span className="text-gray-400 italic">Collection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Experience nature's finest scents with our signature air freshener collection. 
            Crafted to transform your space into a sanctuary of elegance and freshness.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {airFreshImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={src}
                alt={`Air Freshener ${index + 1}`}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center">
                <p className="text-sm font-medium text-white/90">Premium Air Spray</p>
                <p className="text-xs text-gray-400">Edition 0{index + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
