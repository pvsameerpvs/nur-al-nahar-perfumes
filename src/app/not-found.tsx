import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-24">
        <div className="text-xs tracking-[0.32em] text-white/60">404</div>
        <h1 className="font-serif text-4xl">Page not found</h1>
        <p className="max-w-xl text-sm text-white/70">
          The page you’re looking for doesn’t exist. Head back to the main site.
        </p>
        <Button asChild variant="secondary"><Link href="/">Go home</Link></Button>
      </div>
    </div>
  );
}
