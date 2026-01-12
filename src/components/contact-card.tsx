"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function normalizePhoneForWhatsApp(phone: string) {
  return phone.replace(/[\s()-]/g, "").replace(/^\+/, "");
}

export default function ContactCard() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+971 50 123 4567";
  const wa = `https://wa.me/${normalizePhoneForWhatsApp(phone)}?text=${encodeURIComponent(
    "Hello NUR AL NAHAR Perfumes — I’d like to enquire."
  )}`;

  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle>Message us</CardTitle>
          <CardDescription>Minimal, direct, and premium—just like the brand.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-xs tracking-[0.22em] text-white/60">NAME</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 rounded-2xl border border-white/10 bg-black/50 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/25"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs tracking-[0.22em] text-white/60">EMAIL</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-12 rounded-2xl border border-white/10 bg-black/50 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/25"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs tracking-[0.22em] text-white/60">MESSAGE</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/25"
                placeholder="Tell us what you’re looking for (wholesale, retail, brand partnership)..."
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg">Send Message</Button>
              <Button type="button" variant="secondary" size="lg" asChild>
                <a href={wa} target="_blank" rel="noreferrer">WhatsApp Us</a>
              </Button>
            </div>

            <Separator className="my-2" />

            <div className="text-sm text-white/75">
              <span className="text-white/60">Phone / WhatsApp:</span> {phone}
            </div>

            <div className="text-xs text-white/55">
              Tip: set <span className="text-white/75">NEXT_PUBLIC_CONTACT_PHONE</span> in your environment to your official number.
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message prepared</DialogTitle>
            <DialogDescription>
              This form is front‑end only (no server action wired). Connect it to your email/CRM or WhatsApp workflow when deploying.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <div className="text-xs tracking-[0.22em] text-white/60">PREVIEW</div>
            <div className="mt-2"><span className="text-white/60">Name:</span> {form.name}</div>
            <div className="mt-1"><span className="text-white/60">Email:</span> {form.email}</div>
            <div className="mt-3 whitespace-pre-wrap">
              <span className="text-white/60">Message:</span> {form.message}
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="secondary" asChild>
              <a href={wa} target="_blank" rel="noreferrer">Continue on WhatsApp</a>
            </Button>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
