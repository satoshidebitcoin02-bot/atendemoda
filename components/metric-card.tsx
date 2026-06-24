import type { LucideIcon } from "lucide-react";

type MetricCardProps = {
  label: string;
  value: string;
  helper: string;
  icon: LucideIcon;
};

export function MetricCard({ label, value, helper, icon: Icon }: MetricCardProps) {
  return (
    <article className="rounded-lg border border-black/10 bg-white/80 p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ink/60">{label}</p>
          <p className="mt-3 text-3xl font-black text-ink">{value}</p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-md bg-coral/10 text-coral">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm text-ink/55">{helper}</p>
    </article>
  );
}
