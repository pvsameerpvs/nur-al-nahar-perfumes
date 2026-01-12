import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function FusionSection() {
  return (
    <Section className="pb-20">
      <Card>
        <CardHeader>
          <CardTitle>Arabic × French Fusion</CardTitle>
          <CardDescription>Dubai is the meeting point—so our fragrance language is bilingual.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <div className="text-xs tracking-[0.32em] text-white/60">ARABIC SIGNATURE</div>
            <p className="mt-3 text-sm text-white/75">
              Oud, amber, musk—depth and presence that lasts in the city’s rhythm.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <div className="text-xs tracking-[0.32em] text-white/60">FRENCH STRUCTURE</div>
            <p className="mt-3 text-sm text-white/75">
              Bright openings, clean transitions, elegant dry‑downs—refined and intentional.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <div className="text-xs tracking-[0.32em] text-white/60">DUBAI EDIT</div>
            <p className="mt-3 text-sm text-white/75">
              Trend‑aware blends, balanced projection, and a finish that feels premium—not loud.
            </p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
