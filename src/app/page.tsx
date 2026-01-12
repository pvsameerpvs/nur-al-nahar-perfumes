import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { FusionSection } from "@/components/home/fusion-section";
import { QualitySection } from "@/components/home/quality-section";
import { BrandsSection } from "@/components/home/brands-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "NUR AL NAHAR Perfumes L.L.C — Next-generation perfume house in Dubai. Arabic × French fragrance fusion."
};

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <PhilosophySection />
      <FusionSection />
      <QualitySection />
      <BrandsSection />
    </div>
  );
}
