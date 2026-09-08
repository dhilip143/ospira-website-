import React from "react";

/**
 * Reusable PillBadge component for category/topic headers.
 */
export function PillBadge({
  children,
  dot = true,
  dotColor = "bg-[#7033a8]",
  className = "",
  ...props
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/70 px-3.5 py-1.5 text-xs sm:text-sm font-sans font-medium text-purple-950 shadow-xs backdrop-blur-xs ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColor} animate-pulse`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}
