import React from "react";
import { Eye, Sparkles, Compass } from "lucide-react";

export function NoticeKnowDo() {
  const steps = [
    {
      id: "assess",
      number: "01",
      subtitle: "NOTICE MORE.",
      title: "Assess",
      icon: Eye,
      description:
        "Child and parent each complete the Growing Minds® Assessment independently — 25–35 minutes of questions that surface what school reports and gut instincts miss.",
      tags: ["Behaviour", "Learning", "Emotion"],
    },
    {
      id: "understand",
      number: "02",
      subtitle: "KNOW MORE.",
      title: "Understand",
      icon: Sparkles,
      description:
        "You receive a combined family report that translates the data into plain language. Six dimensions mapped. Strengths surfaced. Gaps named.",
      tags: ["Career Readiness", "Social Skills", "Focus"],
    },
    {
      id: "act",
      number: "03",
      subtitle: "DO MORE.",
      title: "Act",
      icon: Compass,
      description:
        "Two coaching sessions — one with your child, one with you — turn insight into a practical Growth Roadmap your family can actually follow.",
      tags: ["Growth Roadmap", "Coach Sessions", "Family Plan"],
    },
  ];

  const dimensions = [
    "Behaviour",
    "Learning & Attention",
    "Emotional Intelligence",
    "Career Readiness",
    "Social Skills",
    "Self-Regulation",
  ];

  return (
    <section
      id="approach"
      className="relative bg-[#632299] text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="approach-heading"
    >
      <div id="lens" />

      {/* Subtle ambient light glow overlays */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-400/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-400/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-white/70 font-sans">
            OUR APPROACH
          </div>

          <h2
            id="approach-heading"
            className="mt-4 font-display text-[28px] xs:text-[32px] sm:text-[44px] lg:text-[54px] font-medium leading-[1.12] tracking-tight text-white"
          >
            Notice more. <span className="italic font-serif text-white/95">Know</span>
            <br />
            <span className="italic font-serif text-white/95">more.</span> Do more.
          </h2>

          {/* Subheading with nice comfortable legible size */}
          <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.68] text-white/80 font-normal max-w-2xl">
            Three steps — built around how families actually work, not how clinicians prefer to
            think about child development.
          </p>
        </div>

        {/* 3 Approach Step Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.id}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.08] p-6 sm:p-7 lg:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-2xl"
              >
                <div>
                  {/* Top Header: Step Number & Circular Icon */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-display text-[40px] sm:text-[46px] font-bold text-white/20 leading-none select-none block">
                        {step.number}
                      </span>
                      <span className="font-sans text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-white/80 block mt-1">
                        {step.subtitle}
                      </span>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white/90 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:border-white/40">
                      <IconComp className="h-4 w-4 stroke-[2]" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-5 font-display text-[22px] sm:text-[24px] font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Step Description - nice legible size */}
                  <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] leading-[1.65] text-white/80 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Pill Tags */}
                <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11.5px] sm:text-[12px] font-medium text-white shadow-2xs transition-colors hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section: SIX DIMENSIONS WE MEASURE */}
        <div className="mt-16 sm:mt-20">
          <div className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-white/70 mb-3.5">
            SIX DIMENSIONS WE MEASURE
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {dimensions.map((dimension) => (
              <div
                key={dimension}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] sm:text-[14px] font-medium text-white shadow-xs backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/35"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" aria-hidden="true" />
                <span>{dimension}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-exports for backward compatibility
export const ApproachSection = NoticeKnowDo;
export default NoticeKnowDo;
