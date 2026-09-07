/**
 * The Ospira Bloom — the signature SVG motif used across the whole site.
 * Four arcs (one per brand colour) opening outward from a single centre:
 * one child, four dimensions, growing in the same direction.
 */
export function Bloom({ className, title }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" strokeLinecap="round" strokeWidth="5">
        <path d="M32 32C32 18 40 8 54 8" stroke="var(--sun)" />
        <path d="M32 32C46 32 56 40 56 54" stroke="var(--sky)" />
        <path d="M32 32C32 46 24 56 10 56" stroke="var(--bloom)" />
        <path d="M32 32C18 32 8 24 8 10" stroke="var(--primary)" />
      </g>
      <circle cx="32" cy="32" r="3.6" fill="var(--primary)" />
    </svg>
  );
}

/** Large, low-contrast watermark version for section backgrounds. */
export function BloomWatermark({ className }) {
  return (
    <div
      className={`pointer-events-none absolute select-none opacity-[0.07] ${className ?? ""}`}
      aria-hidden
    >
      <Bloom className="motif-drift h-full w-full" />
    </div>
  );
}

/** Repeating bloom seam used as a divider between story beats. */
export function BloomSeam({ className }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`} aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <Bloom className="h-4 w-4 opacity-70" />
      <Bloom className="h-3 w-3 opacity-40" />
      <Bloom className="h-4 w-4 opacity-70" />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Wordmark({ inverted = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <Bloom className="h-7 w-7" title="Ospira" />
      <span className="leading-none">
        <span
          className={`block font-display text-lg font-semibold tracking-tight ${
            inverted ? "text-ink-foreground" : "text-foreground"
          }`}
        >
          Ospira
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Technologies
        </span>
      </span>
    </span>
  );
}
