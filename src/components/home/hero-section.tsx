import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-white/20">
      
      {/* Background with Texture & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* 3D Bottle Display - Positioned Behind Content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-visible">
        <div className="animate-float pointer-events-none relative mt-20 h-[80vh] w-full max-w-[800px] opacity-90 mix-blend-normal md:h-full md:max-w-[1000px]">
          {/* Glow Effect */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] filter" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[80px] filter" />
          
          <Image
            src="/perfume-bottle-floating.png"
            alt="Signature Fragrance - L'Obscurité"
            fill
            className="object-contain drop-shadow-2xl"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-[1400px] flex-col items-center justify-center px-6 text-center">


        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 max-w-5xl text-balance font-serif text-5xl font-medium leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl xl:text-9xl">
          Experience Elegance <br />
          <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent italic">
            in Every Drop
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 mt-8 max-w-lg text-pretty text-base font-light leading-relaxed text-white/60 md:text-lg">
          Discover a fragrance collection defined by depth, character, and the rhythm of the city.
          Designed to captivate.
        </p>

       
      </div>
    </div>
  );
}
