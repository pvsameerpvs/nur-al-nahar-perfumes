import { cn } from "@/lib/utils";

export function Section({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  return <section id={id} className={cn("w-full px-4", className)}>{children}</section>;
}
