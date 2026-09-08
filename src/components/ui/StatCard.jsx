import React from "react";
import { Sparkles } from "lucide-react";

/**
 * Reusable StatCard / ProofBadge component for floating social proof and statistics.
 */
export function StatCard({
  value = "87%",
  label = 'parents say "finally, clarity"',
  icon = <Sparkles className="h-5 w-5 fill-amber-400 text-amber-500" />,
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.16)] border border-white/90 transition-all hover:shadow-[0_18px_40px_rgba(15,23,42,0.2)] ${className}`}
      {...props}
    >
      {icon && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100/90 text-amber-500 shadow-xs">
          {icon}
        </div>
      )}
      <div className="min-w-0 pr-1">
        <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-tight">
          {value}
        </div>
        <div className="text-[0.72rem] sm:text-xs font-sans text-slate-500 whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
}
