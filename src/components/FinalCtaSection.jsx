import React from "react";
import { ArrowRight, Check } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="relative bg-gradient-to-b from-[#13071E] via-[#150720] to-[#160822] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle ambient light backdrops */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-[650px] rounded-full bg-purple-600/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-block text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.22em] uppercase text-[#86EFAC] font-sans">
          START WITH A CONVERSATION
        </div>

        {/* Main Headline */}
        <h2
          id="cta-heading"
          className="mt-4 font-display text-[28px] xs:text-[32px] sm:text-[44px] lg:text-[54px] font-semibold text-white leading-[1.14] tracking-tight max-w-3xl mx-auto"
        >
          Your child doesn’t need another <br className="hidden sm:inline" />
          test. They need a clear answer.
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-[15px] sm:text-[17.5px] leading-relaxed text-[#E2D4E8]/85 font-normal max-w-2xl mx-auto">
          20-minute free call. Zero pressure. Real clarity — for both of you.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#784AE8] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(120,74,232,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6839DC] hover:shadow-[0_16px_36px_rgba(120,74,232,0.6)] active:translate-y-0"
          >
            <span>Book a Free Call</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="#ways-we-help"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-[15px] font-medium text-white/95 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/35 active:translate-y-0"
          >
            <span>Start the Assessment instead</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-white/70 group-hover:text-white" />
          </a>
        </div>

        {/* Trust Badges / Checkmarks */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] sm:text-[13px] font-medium text-white/90 backdrop-blur-sm">
            <Check className="h-3.5 w-3.5 stroke-[2.5] text-[#86EFAC]" />
            <span>20-min free consultation</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] sm:text-[13px] font-medium text-white/90 backdrop-blur-sm">
            <Check className="h-3.5 w-3.5 stroke-[2.5] text-[#86EFAC]" />
            <span>100% science-backed</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] sm:text-[13px] font-medium text-white/90 backdrop-blur-sm">
            <Check className="h-3.5 w-3.5 stroke-[2.5] text-[#86EFAC]" />
            <span>Zero pressure, pure clarity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-exports for backward compatibility
export const FinalCta = FinalCtaSection;
export default FinalCtaSection;
