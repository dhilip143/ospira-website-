import React from "react";
import { Button } from "./ui/Button";
import { PillBadge } from "./ui/PillBadge";
import { StatCard } from "./ui/StatCard";
import { OspiraSymbol } from "./Motif";

/**
 * LandingHero Component
 * Pure white background, editorial Fraunces typography, DM Sans UI,
 * enlarged hero visual with interactive floating Ospira logo and proof card.
 */
export function LandingHero() {
  return (
    <section
      id="top"
      className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Messaging & Actions */}
          <div className="lg:col-span-6 max-w-2xl">
            {/* Reusable Pill Badge */}
            <PillBadge dot={true} dotColor="bg-[#7033a8]">
              Science-backed child development
            </PillBadge>

            {/* Main Headline (Fraunces Display Serif - Scaled to balanced size) */}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold font-display text-slate-900 tracking-tight leading-[1.12]">
              Your child is more{" "}
              <span className="text-[#7033a8] italic font-display">complex</span>{" "}
              than any report card shows.
            </h1>

            {/* Subtitle (DM Sans) */}
            <p className="mt-4 text-sm sm:text-base font-sans text-slate-600 leading-relaxed max-w-xl">
              The Growing Minds* Assessment maps how your child thinks, learns,
              and connects — then turns that into a plan you can actually use.
            </p>

            {/* Reusable Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button href="#quiz" variant="primary" size="md">
                Start the free check-in
              </Button>
              <Button
                href="#how-it-works"
                variant="secondary"
                size="md"
                icon={<span className="text-base font-normal">↓</span>}
                iconPosition="right"
              >
                See how it works
              </Button>
            </div>

            {/* Key Assessment Badges */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-sans text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-base" role="img" aria-label="child">
                  🧒
                </span>
                <span>Ages 4–18</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base" role="img" aria-label="clock">
                  ⏱️
                </span>
                <span>10 min free check-in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base" role="img" aria-label="lock">
                  🔒
                </span>
                <span>Private & secure</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual (Scaled to balanced proportion) */}
          <div className="lg:col-span-6 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Main Image Frame - balanced & high-impact */}
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-50 shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/80 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.25/1] min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] max-h-[460px]">
                <img
                  src="/hero-crafting.jpg"
                  alt="Mother and son learning and doing paper crafts together"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                />
                {/* Subtle gradient at bottom to ensure floating stat card contrast */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/15 via-transparent to-transparent" />
              </div>

              {/* Floating Ospira Logo Badge (Top-Right) */}
              <div className="absolute -top-3 -right-2.5 sm:-top-4 sm:-right-4 z-20">
                <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white p-2 shadow-[0_10px_26px_rgba(0,0,0,0.13)] border border-slate-100 transition-transform hover:scale-108">
                  <OspiraSymbol className="h-full w-full" title="Ospira Logo" />
                </div>
              </div>

              {/* Pink accent pill on the left edge */}
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 z-20 hidden sm:block">
                <div className="h-7 w-2 rounded-full bg-[#ED196A] shadow-xs" />
              </div>

              {/* Reusable Floating Social Proof Card (Bottom-Left) */}
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-6 sm:left-6 z-20 max-w-[calc(100%-1.75rem)]">
                <StatCard
                  value="87%"
                  label='parents say "finally, clarity"'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-export as Hero for backward compatibility
export const Hero = LandingHero;
export default LandingHero;
