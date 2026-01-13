import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NUR AL NAHAR Perfumes L.L.C — minimal form, phone display, and WhatsApp-ready CTA."
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Section className="py-20 md:py-32">
        <div className="mb-16 md:mb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-[0.2em] uppercase text-white/70 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Wholesale & Retail
            </div>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-white mb-6">
                Get in Touch
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
                Visit our showroom in the heart of the Gold Souk or reach out directly for wholesale inquiries.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-[1400px] mx-auto">
            
            {/* Contact Info Column */}
            <div className="space-y-8">
                <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md">
                    <h3 className="text-2xl font-serif mb-6">Headquarters</h3>
                    <div className="space-y-6 text-neutral-300 font-light text-lg">
                        <p className="leading-relaxed">
                            <strong className="block text-white font-medium mb-1 text-sm uppercase tracking-wider text-white/50">Details</strong>
                            Belqaizi Building, Gold Souk<br/>
                            Shop 5, Deira<br/>
                            Dubai, United Arab Emirates
                        </p>
                        <Separator className="bg-white/10" />
                        <div>
                             <strong className="block text-white font-medium mb-1 text-sm uppercase tracking-wider text-white/50">Phone</strong>
                             <a href="tel:+971583040495" className="text-white hover:text-cyan-400 transition-colors text-2xl font-serif">
                                +971 58 304 0495
                             </a>
                             <p className="text-sm text-neutral-500 mt-1">Mon - Sat, 10am - 10pm</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                     <Button className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white h-14 rounded-xl text-lg transition-all hover:scale-[1.02]" asChild>
                        <a href="https://wa.me/971583040495" target="_blank">Chat on WhatsApp</a>
                     </Button>
                     <Button variant="outline" className="flex-1 border-white/20 hover:bg-white text-white hover:text-black h-14 rounded-xl text-lg transition-all hover:scale-[1.02]" asChild>
                        <a href="mailto:info@nuralnahar.com">Email Us</a>
                     </Button>
                </div>
            </div>

            {/* Map Column */}
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.019356178839!2d55.2992856!3d25.2699343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f430c83d9465d%3A0x4e6bef459e892fde!2sNur%20AL-Nahar%20Perfumes!5e0!3m2!1sen!2sae!4v1768285936268!5m2!1sen!2sae" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
                
                {/* Map Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl z-10 shadow-[inner_0_0_50px_rgba(0,0,0,0.5)]" />
            </div>
        </div>
      </Section>
    </div>
  );
}
