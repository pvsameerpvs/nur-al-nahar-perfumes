"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MostSellingSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Background with texture effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-950 opacity-90 z-10" />
         {/* Using a placeholder gradient/pattern to simulate the silk/textured look if no image is available. 
             If an image 'black-silk.jpg' existed, we would use it here. 
             For now, using a subtle gradient and possibly a noise texture if available, 
             or just a dark elegant background. */}
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Text Content */}
        <div className="flex-1 text-left space-y-6 md:pl-10 lg:pl-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight tracking-tight">
            The Most Selling <br />
            <span className="text-gray-200">perfume ever</span>
          </h2>
          <div className="pt-4">
            <Button 
                variant="outline" 
                className="bg-white text-black hover:bg-gray-200 border-none px-8 py-6 text-lg rounded-md font-semibold"
            >
              View More
            </Button>
          </div>
        </div>

        {/* Product Image */}
        <div className="flex-1 flex justify-center md:justify-end md:pr-10 lg:pr-20 relative">
             {/* Simulating the shadow/reflection below the bottle */}
            <div className="absolute bottom-0 w-64 h-8 bg-black/50 blur-xl rounded-full" />
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                <Image
                    src="/perfume-bottle.png" // Using the available asset
                    alt="Most Selling Perfume"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </div>
        </div>
      </div>
    </section>
  );
}
