import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Play,
  Sparkles,
  Target,
  Users,
  Heart,
  MessageCircle,
  Lightbulb,
} from "lucide-react";

export function LandingHero() {
  const [activePillar, setActivePillar] = useState(null);

  const pillars = [
    {
      id: "focus",
      label: "Focus & Motivation",
      score: 78,
      color: "#8FE5C1",
      trackColor: "bg-emerald-50",
      iconBg: "bg-[#E6F8F0]",
      iconColor: "text-[#10B981]",
      icon: Target,
      floatClass: "animate-float-pill-1",
      pos: "top-[4%] -left-3 sm:-left-7 lg:-left-10",
    },
    {
      id: "confidence",
      label: "Social Confidence",
      score: 64,
      color: "#784AE8",
      trackColor: "bg-purple-50",
      iconBg: "bg-[#F2EDFD]",
      iconColor: "text-[#784AE8]",
      icon: Users,
      floatClass: "animate-float-pill-2",
      pos: "top-[3%] -right-2 sm:-right-6 lg:-right-10",
    },
    {
      id: "wellbeing",
      label: "Emotional Wellbeing",
      score: 82,
      color: "#FDBA74",
      trackColor: "bg-amber-50",
      iconBg: "bg-[#FFF3E6]",
      iconColor: "text-[#F97316]",
      icon: Heart,
      floatClass: "animate-float-pill-3",
      pos: "top-[27%] -left-6 sm:-left-12 lg:-left-16",
    },
    {
      id: "communication",
      label: "Communication",
      score: 72,
      color: "#93C5FD",
      trackColor: "bg-sky-50",
      iconBg: "bg-[#E8F4FD]",
      iconColor: "text-[#0284C7]",
      icon: MessageCircle,
      floatClass: "animate-float-pill-4",
      pos: "top-[28%] -right-3 sm:-right-7 lg:-right-11",
    },
    {
      id: "curiosity",
      label: "Curiosity & Learning",
      score: 88,
      color: "#5EEAD4",
      trackColor: "bg-teal-50",
      iconBg: "bg-[#E6F9F5]",
      iconColor: "text-[#0D9488]",
      icon: Lightbulb,
      floatClass: "animate-float-pill-5",
      pos: "top-[47%] -left-4 sm:-left-8 lg:-left-12",
    },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF9FD] text-[#23092F] pt-6 pb-20 sm:pt-10 sm:pb-28 lg:pt-12 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <style>{`
        @keyframes float-1 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(0.8deg); }
        }
        @keyframes float-2 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-12px) rotate(-0.9deg); }
        }
        @keyframes float-3 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(0.6deg); }
        }
        @keyframes float-4 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-11px) rotate(-0.7deg); }
        }
        @keyframes float-5 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-9px) rotate(0.7deg); }
        }
        @keyframes float-insight {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-9px); }
        }

        .animate-float-pill-1 {
          animation: float-1 4.2s ease-in-out infinite alternate;
        }
        .animate-float-pill-2 {
          animation: float-2 4.8s ease-in-out 0.6s infinite alternate;
        }
        .animate-float-pill-3 {
          animation: float-3 3.9s ease-in-out 1.2s infinite alternate;
        }
        .animate-float-pill-4 {
          animation: float-4 4.5s ease-in-out 0.4s infinite alternate;
        }
        .animate-float-pill-5 {
          animation: float-5 4.1s ease-in-out 1.7s infinite alternate;
        }
        .animate-float-card {
          animation: float-insight 5.2s ease-in-out 0.8s infinite alternate;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float-pill-1,
          .animate-float-pill-2,
          .animate-float-pill-3,
          .animate-float-pill-4,
          .animate-float-pill-5,
          .animate-float-card {
            animation: none !important;
          }
        }
      `}</style>

      {/* Fresh organic mint glow at bottom-left exactly as in Figma design */}
      <div
        className="pointer-events-none absolute -bottom-28 -left-24 h-[440px] w-[440px] rounded-full bg-[#B6F0DE]/55 blur-[80px]"
        aria-hidden="true"
      />
      {/* Soft lavender atmospheric backlight */}
      <div
        className="pointer-events-none absolute top-10 right-1/4 h-[450px] w-[450px] rounded-full bg-purple-200/35 blur-[90px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-10 xl:gap-16">
          {/* Left Column: Copy & Actions */}
          <div className="relative z-10 flex flex-col items-start max-w-[590px]">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-100/90 bg-white/90 px-3.5 py-1.5 text-[12.5px] sm:text-[13px] font-medium text-[#23092F] shadow-xs backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#784AE8]" />
              <span>Science-backed clarity, for the whole family</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="mt-6 font-display text-[34px] xs:text-[40px] sm:text-[54px] lg:text-[66px] xl:text-[74px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#1F0E2E]"
            >
              Is your child <br className="hidden sm:inline" />
              ready{" "}
              <span className="text-[#6E42E5]">
                for life?
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.68] text-[#5A4860]">
              Discover your child’s strengths, challenges, and readiness for what’s ahead — through
              a personalized, science-backed assessment for both of you.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#quiz"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#784AE8] px-6 sm:px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_-6px_rgba(120,74,232,0.48)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6839DC] hover:shadow-[0_16px_32px_-6px_rgba(120,74,232,0.6)] active:translate-y-0"
              >
                <span>Start the free check-in</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DFD7E8] bg-white/80 px-5 sm:px-6 py-3.5 text-[15px] font-semibold text-[#23092F] shadow-xs backdrop-blur-sm transition-all duration-200 hover:bg-white hover:border-[#784AE8]/40 hover:text-[#784AE8]"
              >
                <Play className="h-4 w-4 text-[#784AE8] fill-[#784AE8]/20" />
                <span>See how it works (60s)</span>
              </a>
            </div>

            {/* Trust / Feature Checkmarks */}
            <div className="mt-9 flex flex-wrap items-center gap-y-2 gap-x-5 text-[13px] font-medium text-[#2E1838]">
              <div className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[2.5] text-[#10B981]" />
                <span>Ages 10–21+</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[2.5] text-[#10B981]" />
                <span>Science-backed</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[2.5] text-[#10B981]" />
                <span>No sign-up needed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Circular Avatar, 5 Floating Badges, & 2 Overlapping Cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] sm:max-w-[530px] pt-4 pb-8 sm:pb-12">
              
              {/* Central Portrait Circle Frame */}
              <div className="relative mx-auto w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[390px] lg:h-[390px] rounded-full border-[7px] border-white bg-[#E9E4F0] shadow-[0_24px_60px_-15px_rgba(35,9,47,0.18)] ring-1 ring-purple-100/70 overflow-hidden select-none">
                <img
                  src="/hero-teen.jpg"
                  alt="Thoughtful teenage boy smiling"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#23092F]/15 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* The 5 Floating Pillar Badges around the circle */}
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                const isHovered = activePillar === pillar.id;

                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => setActivePillar(pillar.id)}
                    onMouseLeave={() => setActivePillar(null)}
                    className={`absolute z-30 cursor-pointer ${pillar.pos} ${pillar.floatClass}`}
                    style={{
                      animationPlayState: isHovered ? "paused" : "running",
                    }}
                  >
                    <div
                      className={`inline-flex items-center gap-2.5 rounded-full border bg-white/95 px-3 py-1.5 sm:px-3.5 sm:py-2 backdrop-blur-md transition-all duration-300 select-none ${
                        isHovered
                          ? "scale-105 border-[#784AE8]/50 shadow-[0_16px_36px_-6px_rgba(120,74,232,0.35)]"
                          : "border-slate-100/90 shadow-[0_8px_24px_-4px_rgba(35,9,47,0.12)] hover:shadow-lg"
                      }`}
                    >
                      <div
                        className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full ${pillar.iconBg} ${pillar.iconColor}`}
                      >
                        <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-bold tracking-tight text-[#1F0E2E] pr-1 whitespace-nowrap">
                        {pillar.label}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Overlapping Composition: Development Profile Card + Key Insight Card */}
              <div className="relative -mt-4 sm:-mt-8 z-20">
                {/* Card 1: Your Child's Development Profile */}
                <div className="w-[88%] sm:w-[370px] rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_24px_55px_-12px_rgba(35,9,47,0.15)] transition-all duration-300">
                  <div className="flex items-start justify-between pb-2.5 border-b border-slate-100/80">
                    <h3 className="font-display text-[14.5px] sm:text-[15.5px] font-bold text-[#1F0E2E] leading-snug">
                      Your Child’s Development<br className="hidden sm:inline" /> Profile
                    </h3>
                    <a
                      href="#quiz"
                      className="text-[11px] sm:text-[11.5px] font-semibold text-[#784AE8] hover:text-[#5821C7] transition-colors flex items-center gap-0.5 whitespace-nowrap mt-0.5"
                    >
                      <span>View Detailed</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>

                  {/* 5 Progress Bars matching the 5 pillars */}
                  <div className="mt-3 space-y-2">
                    {pillars.map((pillar) => {
                      const isHighlighted = activePillar === pillar.id;
                      return (
                        <div
                          key={pillar.id}
                          onMouseEnter={() => setActivePillar(pillar.id)}
                          onMouseLeave={() => setActivePillar(null)}
                          className={`flex items-center justify-between gap-3 text-[11px] sm:text-[11.5px] transition-colors duration-200 cursor-pointer rounded px-1 -mx-1 ${
                            isHighlighted ? "bg-purple-50/70" : ""
                          }`}
                        >
                          <span className="font-medium text-[#2E1838] w-[125px] sm:w-[135px] shrink-0 truncate">
                            {pillar.label}
                          </span>
                          <div className={`h-1.5 sm:h-2 flex-1 rounded-full ${pillar.trackColor} overflow-hidden`}>
                            <div
                              className="h-full rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: `${pillar.score}%`,
                                backgroundColor: pillar.color,
                              }}
                            />
                          </div>
                          <span className="font-semibold text-slate-400 w-7 text-right shrink-0">
                            {pillar.score}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card 2: Floating Key Insight Card overlapping on the right */}
                <div className="animate-float-card absolute top-3 -right-2 sm:-right-6 lg:-right-10 z-30 w-[185px] sm:w-[215px] rounded-2xl border border-purple-100/90 bg-white p-3.5 sm:p-4 shadow-[0_20px_45px_-10px_rgba(35,9,47,0.18)]">
                  <div className="flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-bold text-[#784AE8]">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" />
                    <span>Key Insight</span>
                  </div>
                  <p className="mt-1.5 text-[10.5px] sm:text-[11px] leading-relaxed text-[#4A3B52]">
                    They show strong curiosity, but confidence drops when expectations feel unclear.
                  </p>
                  <span className="mt-2 block text-[9.5px] sm:text-[10px] font-medium text-slate-400">
                    Dynamic report preview
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="check-in" />
    </section>
  );
}

// Re-export for backward compatibility
export const Hero = LandingHero;
export default LandingHero;