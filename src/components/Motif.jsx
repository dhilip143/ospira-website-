/**
 * Official Ospira Logo & Brand Motifs.
 * Primary Brand Palette:
 * Yellow: #FFD105
 * Cyan/Sky: #46CEF5
 * Magenta/Pink: #ED196A
 * Purple/Indigo: #783FAA
 */

export function OspiraSymbol({ className = "h-8 w-8", title = "Ospira", withBg = false }) {
  return (
    <svg
      viewBox="0 0 194 194"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      {withBg && <circle cx="97" cy="97" r="97" fill="white" />}
      {/* Outer ring quadrants */}
      <path
        d="M166.59 96.8045C166.59 58.265 135.348 27.0227 96.8087 27.0227V0C150.274 0 193.613 43.3406 193.613 96.8045H166.59Z"
        fill="#FFD105"
      />
      <path
        d="M27.0279 96.8045C27.0279 58.265 58.2702 27.0227 96.8097 27.0227V0C43.3448 0 0 43.3406 0 96.8045H27.0279Z"
        fill="#46CEF5"
      />
      <path
        d="M96.8097 166.586C135.349 166.586 166.592 135.344 166.592 96.8044H193.614C193.614 150.269 150.274 193.614 96.8097 193.614V166.586Z"
        fill="#ED196A"
      />
      <path
        d="M27.0279 96.8044C27.0279 135.344 58.2702 166.586 96.8097 166.586V193.615C43.3448 193.615 0 150.269 0 96.8055L27.0279 96.8044Z"
        fill="#783FAA"
      />

      {/* Spacer white ring for contrast */}
      <circle cx="96.5" cy="96.8" r="62" stroke="white" strokeWidth="6" fill="none" />

      {/* Inner split circle */}
      <path
        d="M96.342 38.267C128.672 38.267 154.879 64.4744 154.879 96.8045C154.879 129.14 128.672 155.347 96.342 155.347V38.267Z"
        fill="#FFD105"
      />
      <path
        d="M96.342 155.347C64.0066 155.347 37.7993 129.14 37.7993 96.8045C37.7993 64.4744 64.0066 38.267 96.342 38.267V155.347Z"
        fill="#783FAA"
      />
    </svg>
  );
}

/** Backward compatibility alias for Bloom */
export function Bloom({ className, title }) {
  return <OspiraSymbol className={className} title={title} />;
}

/** Watermark version for subtle background branding */
export function BloomWatermark({ className }) {
  return (
    <div
      className={`pointer-events-none absolute select-none opacity-[0.06] ${className ?? ""}`}
      aria-hidden
    >
      <OspiraSymbol className="motif-drift h-full w-full" />
    </div>
  );
}

/** Repeating seam divider between sections */
export function BloomSeam({ className }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`} aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <OspiraSymbol className="h-4 w-4 opacity-80" />
      <OspiraSymbol className="h-3 w-3 opacity-50" />
      <OspiraSymbol className="h-4 w-4 opacity-80" />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

/** Official Ospira Wordmark */
export function Wordmark({ inverted = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <OspiraSymbol className="h-8 w-8 shrink-0 drop-shadow-xs" title="Ospira" />
      <span className="leading-tight">
        <span
          className={`block font-display text-xl font-bold tracking-tight ${
            inverted ? "text-white" : "text-slate-900"
          }`}
        >
          Ospira
        </span>
        <span
          className={`block text-[0.62rem] font-sans font-semibold tracking-[0.22em] uppercase ${
            inverted ? "text-white/60" : "text-slate-500"
          }`}
        >
          Technologies
        </span>
      </span>
    </span>
  );
}
