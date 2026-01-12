import type { Metadata } from "next";
import { Section } from "@/components/section";
import ContactCard from "@/components/contact-card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NUR AL NAHAR Perfumes L.L.C — minimal form, phone display, and WhatsApp-ready CTA."
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      <Section className="py-14 md:py-20">
        <Badge variant="subtle" className="w-fit">Wholesale · Retail · Partnerships</Badge>
        <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Contact</h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
          Send a message or reach out directly. We keep it simple—fast replies, clear answers.
        </p>

        <div className="mt-10">
          <ContactCard />
        </div>
      </Section>
    </div>
  );
}
