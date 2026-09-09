import React, { useState } from "react";
import { Play, X } from "lucide-react";

/**
 * HowItWorksBanner Component
 * Replicates the "Sixty seconds. The full picture." banner with:
 * - Editorial Fraunces heading & DM Sans typography
 * - Left image with interactive white & purple floating play button
 * - Clean white card with subtle elevation and right-hand watermark rings
 * - Interactive video modal
 * - 100% mobile responsive
 */
export function HowItWorksBanner({
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="how-it-works"
      className="relative bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] bg-white border border-slate-100 shadow-[0_12px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_18px_54px_rgba(15,23,42,0.09)]">
          {/* Subtle concentric circles watermark on far right background */}
          <div
            className="pointer-events-none absolute -right-16 sm:-right-10 top-1/2 -translate-y-1/2 select-none opacity-[0.04]"
            aria-hidden="true"
          >
            <svg
              className="h-64 w-64 sm:h-80 sm:w-80 text-[#4A1A6B]"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="100" cy="100" r="90" strokeWidth="14" />
              <circle cx="100" cy="100" r="60" strokeWidth="12" />
              <circle cx="100" cy="100" r="30" strokeWidth="10" />
            </svg>
          </div>

          <div className="grid md:grid-cols-12 items-center">
            {/* Left Column: Image Thumbnail & Floating Play Button */}
            <div className="relative md:col-span-5 lg:col-span-4 h-56 sm:h-64 md:h-full md:min-h-[220px] overflow-hidden bg-slate-100">
              <img
                src="/children-reading.jpg"
                alt="Two children reading an illustrated storybook together"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />

              {/* Floating Play Button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:translate-x-0 md:-right-6 z-20 flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(35,9,47,0.18)] border border-[#ECE2E6] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_30px_rgba(74,26,107,0.3)] active:scale-95 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A1A6B]"
                aria-label="Play Sixty Seconds Overview Video"
              >
                <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-[#4A1A6B] text-[#4A1A6B] ml-0.5 transition-transform duration-200 group-hover:scale-105" />
              </button>
            </div>

            {/* Right Column: Text Content */}
            <div className="relative z-10 md:col-span-7 lg:col-span-8 p-6 sm:p-8 md:pl-10 lg:pl-12 lg:pr-14">
              {/* Eyebrow in Sage Green */}
              <div className="flex items-center gap-2 text-[0.72rem] sm:text-xs font-sans font-extrabold tracking-[0.18em] text-[#3E6F5C] uppercase">
                <span className="w-5 h-0.5 bg-[#3E6F5C]" aria-hidden="true" />
                <span>See How Ospira Works</span>
              </div>

              {/* Heading (Fraunces Display Serif in Deep Aubergine #23092F) */}
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[2.2rem] font-bold font-display text-[#23092F] tracking-tight leading-[1.18]">
                Sixty seconds. The full picture.
              </h2>

              {/* Subheading (DM Sans in Mauve-Slate #6B4F66) */}
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base font-sans text-[#6B4F66] leading-relaxed max-w-lg">
                A quick walk through the Ospira journey, from your first check-in
                to your child's plan.
              </p>

              {/* Action Link */}
              <div className="mt-4 sm:mt-5">
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-sans font-semibold text-[#4A1A6B] hover:text-[#381254] transition-all group cursor-pointer focus:outline-none"
                >
                  <span>Watch Video</span>
                  <span
                    aria-hidden="true"
                    className="text-base transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Responsive Video Container (16:9) */}
            <div className="relative aspect-video w-full">
              <iframe
                className="h-full w-full border-0"
                src={videoUrl}
                title="Sixty seconds. The full picture."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Re-export as HowItWorks for backward compatibility
export const HowItWorks = HowItWorksBanner;
export default HowItWorksBanner;
