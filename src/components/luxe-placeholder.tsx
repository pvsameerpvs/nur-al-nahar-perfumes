import { cn } from "@/lib/utils";

export default function LuxePlaceholder({
  className,
  label = "PERFUME VISUAL"
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-soft",
        className
      )}
      aria-label={label}
    >
      <div className="absolute inset-0 noise opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.20),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,.10),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative flex h-full items-end p-5">
        <div className="text-xs tracking-[0.32em] text-white/70">{label}</div>
      </div>
    </div>
  );
}
