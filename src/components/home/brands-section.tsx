"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const featuredBrands = [
  { name: "Lattafa", collection: "Dubai Elite", image: "/lattafa-logo-final-2.svg" },
  { name: "Rasasi", collection: "Royal Collection", image: "/rasasi.png" },
  { name: "Armaf", collection: "Club Luxe", image: "/armaf.jpg" },
  { name: "Afnan", collection: "Rare Blends", image: "/afnan.jpg" },
  { name: "Reef", collection: "Oceanic Oud", image: "/Reef.jpg" },
  { name: "Arabiyat Prestige", collection: "Prestige Line", image: "/arabiyath.png" },
  { name: "Rayhaan", collection: "Natural Essence", image: "/rayhaan.jpg" },
  { name: "Al Haramain", collection: "Heritage Forest", image: "/al-haramain.png" },
  { name: "Paris Corner", collection: "French Fusion", image: "/paris-corner.png" },
  { name: "Fragrance World", collection: "Global Scents", image: "/fragrance-world.png" },
];

export function BrandsSection({ showViewAll = true }: { showViewAll?: boolean }) {
  const [selectedBrand, setSelectedBrand] = useState<(typeof featuredBrands)[0] | null>(null);

  const getWhatsAppLink = (brandName: string, collection: string) => {
    const phoneNumber = "971583040495";
    const message = `Hello, I am interested in purchasing ${brandName} - ${collection} from your website.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Section className="py-10 bg-black">
      <div className="w-full px-4 md:px-6">
        <div className="mb-20 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-[0.2em] uppercase text-white/70 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Partner Brands
            </div>
             <h2 className="text-4xl md:text-6xl font-serif font-medium text-white tracking-tight">
                Curated <span className="text-white/40 italic">Collections</span>
             </h2>
             <p className="text-neutral-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
                We partner with the most distinguished names in modern perfumery. 
                Authentic, powerful, and selected for the Dubai lifestyle.
             </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
           {featuredBrands.map((brand, i) => (
             <div 
               key={i} 
               className="group flex flex-col items-center text-center cursor-pointer"
               onClick={() => setSelectedBrand(brand)}
             >
                {/* Image Card */}
                <div className="relative w-full aspect-[4/5] mb-6 flex items-center justify-center bg-zinc-900/30 rounded-lg overflow-hidden border border-white/5 transition-all duration-300 group-hover:border-white/10 group-hover:bg-zinc-900/50">
                    {/* Inner shadow/glow for premium feel */}
                    <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative w-3/4 h-3/4">
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            fill
                            className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl text-white font-medium mb-1 tracking-wide">{brand.name}</h3>
                {/* Collection Name acting as subtitle */}
                <p className="text-neutral-500 text-sm mb-3 font-medium">{brand.collection}</p>
                
                {/* Rating (Clean Visual) */}
                <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-[10px]">★</span>
                    ))}
                </div>
             </div>
           ))}

            
        </div>
        
        {showViewAll && (
            <div className="mt-20 text-center">
                 <Button asChild className="bg-white text-black hover:bg-gray-200 px-10 py-6 rounded-lg text-lg font-semibold transition-all">
                    <Link href="/brands">View Full Catalog</Link>
                 </Button>
            </div>
        )}
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedBrand} onOpenChange={(open) => !open && setSelectedBrand(null)}>
        <DialogContent className="bg-zinc-950 border-white/10 text-white sm:max-w-md">
            <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-center">{selectedBrand?.name}</DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col items-center py-6">
                <div className="relative w-48 h-64 mb-6">
                     {selectedBrand && (
                        <Image
                            src={selectedBrand.image}
                            alt={selectedBrand.name}
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        />
                     )}
                </div>
                <p className="text-neutral-400 mb-2 font-medium">{selectedBrand?.collection}</p>
                 <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-xs">★</span>
                    ))}
                </div>

                {selectedBrand && (
                    <Button 
                        asChild 
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-6 rounded-lg text-lg"
                    >
                        <Link href={getWhatsAppLink(selectedBrand.name, selectedBrand.collection)} target="_blank">
                           Order via WhatsApp
                        </Link>
                    </Button>
                )}
            </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
