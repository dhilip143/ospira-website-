import React from "react";
import {
  BookOpen,
  Smartphone,
  Star,
  Heart,
  MessageSquare,
  Compass,
} from "lucide-react";

export function HowItWorksBanner() {
  const results = [
    {
      id: "focus-study",
      title: "Improved Focus & Study Habits",
      description:
        "Boost concentration and learning outcomes with consistent study habits and reduced distractions.",
      icon: BookOpen,
      iconBg: "bg-[#F3EDFB]",
      iconColor: "text-[#7C3AED]",
    },
    {
      id: "screen-time",
      title: "Reduced Screen Time & Dependency",
      description:
        "Support healthier screen time habits and move toward balanced, intentional daily routines.",
      icon: Smartphone,
      iconBg: "bg-[#E0F4FE]",
      iconColor: "text-[#0284C7]",
    },
    {
      id: "confidence-motivation",
      title: "Stronger Self-Confidence & Motivation",
      description:
        "Help your child build self-esteem, feel capable, secure, and motivated to grow.",
      icon: Star,
      iconBg: "bg-[#FEF6E0]",
      iconColor: "text-[#D97706]",
    },
    {
      id: "emotional-regulation",
      title: "Better Emotional Regulation",
      description:
        "Support emotional development with fewer outbursts, greater resilience, and improved self-control.",
      icon: Heart,
      iconBg: "bg-[#E0F7F2]",
      iconColor: "text-[#0D9488]",
    },
    {
      id: "parent-child-comm",
      title: "Stronger Parent-Child Communication",
      description:
        "Improve family communication with more openness, less conflict, and deeper mutual understanding.",
      icon: MessageSquare,
      iconBg: "bg-[#E8F8EE]",
      iconColor: "text-[#16A34A]",
    },
    {
      id: "career-guidance",
      title: "Clearer Career Direction & Guidance",
      description:
        "Get expert career guidance for teens with greater clarity on strengths, interests, and future pathways.",
      icon: Compass,
      iconBg: "bg-[#F2EDFD]",
      iconColor: "text-[#7C3AED]",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#FAF8FE] py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="results-heading"
    >
      <div id="results" />

      {/* Subtle ambient light aura in background */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[450px] w-[450px] rounded-full bg-purple-200/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-[400px] w-[400px] rounded-full bg-emerald-100/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#784AE8]">
            THE RESULTS
          </div>

          {/* Main Headline */}
          <h2
            id="results-heading"
            className="mt-3.5 font-display text-[32px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.015em] text-[#1F0E2E]"
          >
            What Changes for{" "}
            <span className="text-[#8B5CF6]">
              Your Child’s
            </span>
            <br />
            <span className="text-[#8B5CF6]">
              Behaviour, Learning &amp; Development
            </span>
          </h2>

          {/* Subheading - nice legible size as requested */}
          <p className="mt-4 text-[17px] sm:text-[18.5px] leading-[1.65] text-[#5A4860] font-normal">
            Real, visible shifts in how your child learns, behaves, and responds — when you guide
            them with expert-backed clarity.
          </p>
        </div>

        {/* 6 Result Cards Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {results.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl sm:rounded-3xl border border-purple-50/80 bg-white p-7 sm:p-8 shadow-[0_4px_24px_rgba(35,9,47,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-200/80 hover:shadow-[0_16px_36px_-6px_rgba(120,74,232,0.12)] cursor-default"
              >
                {/* Icon Container */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl sm:rounded-2xl ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <IconComp className="h-6 w-6 stroke-[1.9]" />
                </div>

                {/* Card Title - brand display serif font */}
                <h3 className="mt-5 font-display text-[18.5px] sm:text-[20px] font-bold tracking-tight text-[#1F0E2E] transition-colors duration-200 group-hover:text-[#784AE8]">
                  {item.title}
                </h3>

                {/* Card Description - nice comfortable legible size */}
                <p className="mt-2.5 text-[15px] sm:text-[15.5px] leading-[1.62] text-[#5A4860] font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Re-exports for backward compatibility
export const HowItWorks = HowItWorksBanner;
export const ResultsSection = HowItWorksBanner;
export default HowItWorksBanner;
