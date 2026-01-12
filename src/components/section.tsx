import { cn } from "@/lib/utils";

export function Section({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn("mx-auto max-w-6xl px-4", className)}>{children}</section>;
}
