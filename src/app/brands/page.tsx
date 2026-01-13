import type { Metadata } from "next";
import { BrandsSection } from "@/components/home/brands-section";
import { ComingSoonSection } from "@/components/home/coming-soon-section";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "Brands we work with (Lattafa, Rasasi, Armaf, Afnan, and more) + our own brands coming soon: Miniature Collection, Signature Deodorant Line, Air Fresheners."
};

export default function BrandsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-20">
        <BrandsSection showViewAll={false} />
        <ComingSoonSection />
      </div>
    </div>
  );
}
