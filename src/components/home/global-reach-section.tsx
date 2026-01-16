"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Globe, Plane, MapPin, PackageCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function GlobalReachSection() {
  return (
    <Section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5 px-5 md:px-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
         <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
           
            
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight leading-tight">
              From Dubai to the <span className="text-amber-500 italic">World</span>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              Experience the essence of luxury perfumery, no matter where you are. 
              We are proud to offer secure, tracked international shipping to perfumery connoisseurs across the globe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <FeatureItem 
                    icon={<Plane className="w-5 h-5 text-amber-500" />}
                    title="Worldwide Shipping"
                    desc="Fast & secure delivery to 150+ countries"
                />
                <FeatureItem 
                    icon={<PackageCheck className="w-5 h-5 text-amber-500" />}
                    title="Premium Packaging"
                    desc="Ensuring your collection arrives in pristine condition"
                />
                <FeatureItem 
                    icon={<MapPin className="w-5 h-5 text-amber-500" />}
                    title="Tracking Included"
                    desc="Real-time updates on your shipment's journey"
                />
                <FeatureItem 
                     icon={<Globe className="w-5 h-5 text-amber-500" />}
                     title="Global Support"
                     desc="Dedicated team to assist international clients"
                />
            </div>

            <div className="pt-6">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 px-6 py-2 rounded-lg text-sm font-medium transition-all">
                    <Link href="/shipping-policy">
                        View Shipping Policy
                    </Link>
                </Button>
            </div>
          </div>

          {/* Graphical/Visual Side */}
          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
             {/* Abstract Globe/Map Representation */}
             <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center group">
                 <Image
                    src="/global-reach.png"
                    alt="Global Reach"
                    fill
                    className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Floating Stats */}
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
                    <div className="text-2xl font-serif text-amber-500 font-bold">150+</div>
                    <div className="text-[10px] text-neutral-300 uppercase tracking-widest font-medium">Countries Served</div>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1 p-2 rounded-full bg-white/5 border border-white/10 h-fit">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-medium text-base">{title}</h4>
                <p className="text-natural-400 text-sm text-neutral-500">{desc}</p>
            </div>
        </div>
    )
}
