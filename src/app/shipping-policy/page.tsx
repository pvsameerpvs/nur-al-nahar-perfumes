import { Section } from "@/components/section";

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen text-white pt-32 pb-20">
      <Section className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center text-amber-500">Shipping Policy</h1>
        
        <div className="space-y-12 text-neutral-300 leading-relaxed">
            
            <PolicySection title="International Shipping">
                <p>
                    NUR AL NAHAR Perfumes is proud to offer worldwide shipping to over 150 countries. 
                    We partner with premium courier services (DHL, FedEx) to ensure your fragrances arrive safely and on time.
                </p>
            </PolicySection>

            <PolicySection title="Processing Time">
                <p>
                    All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
                    If we are experiencing a high volume of orders, shipments may be delayed by a few days.
                </p>
            </PolicySection>

            <PolicySection title="Shipping Rates & Delivery Estimates">
                <p>
                    Shipping charges for your order will be calculated and displayed at checkout.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-neutral-400">
                    <li><strong>Standard International:</strong> 7-14 business days</li>
                    <li><strong>Express International:</strong> 3-5 business days</li>
                </ul>
            </PolicySection>

            <PolicySection title="Customs, Duties and Taxes">
                <p>
                    NUR AL NAHAR Perfumes is not responsible for any customs and taxes applied to your order. 
                    All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
                </p>
            </PolicySection>

        </div>
      </Section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-serif text-white mb-4">{title}</h2>
            <div className="text-lg font-light text-neutral-300">
                {children}
            </div>
        </section>
    )
}
