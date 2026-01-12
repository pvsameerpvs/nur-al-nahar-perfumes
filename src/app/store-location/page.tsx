import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Store Location",
  description:
    "Visit NUR AL NAHAR Perfumes L.L.C at Belqaizi Building, Gold Souk, Shop 5, Deira, Dubai, UAE."
};

export default function StoreLocationPage() {
  const address = "Belqaizi Building, Gold Souk, Shop 5, Deira, Dubai, UAE";

  return (
    <div className="bg-black text-white">
      <Section className="py-14 md:py-20">
        <Badge variant="subtle" className="w-fit">Gold Souk · Deira · Dubai</Badge>
        <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Store Location</h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
          Walk in, test, compare, and choose with confidence. Our space is curated for modern buyers—clean, premium, and fast to navigate.
        </p>

        <Separator className="my-10" />

        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle>Find us on the map</CardTitle>
            <CardDescription>{address}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.019356178839!2d55.2992856!3d25.2699343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f430c83d9465d%3A0x4e6bef459e892fde!2sNur%20AL-Nahar%20Perfumes!5e0!3m2!1sen!2sae!4v1768203428522!5m2!1sen!2sae"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nur Al-Nahar Perfumes map"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-white/75">
                <span className="text-white/60">Address:</span> {address}
              </div>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
