import React from "react";
import { ClipboardCheck, FileText, UserCheck, Compass } from "lucide-react";

const STEPS = [
  {
    time: "25–35 MIN",
    title: "Take the assessment",
    description: "Complete from home, at your own pace, when it suits you.",
    icon: ClipboardCheck,
    iconColor: "text-[#784AE8]",
    iconBg: "bg-[#F3EDFB]",
  },
  {
    time: "48 HRS",
    title: "Get your report",
    description: "Receive your comprehensive family report and dashboard access.",
    icon: FileText,
    iconColor: "text-[#0284C7]",
    iconBg: "bg-[#E0F4FE]",
  },
  {
    time: "WEEK 1",
    title: "Meet your coach",
    description: "Walk through findings together and agree on core focus areas.",
    icon: UserCheck,
    iconColor: "text-[#0D9488]",
    iconBg: "bg-[#E0F7F2]",
  },
  {
    time: "ONGOING",
    title: "Follow the roadmap",
    description: "A month-by-month actionable plan with regular check-ins built in.",
    icon: Compass,
    iconColor: "text-[#D97706]",
    iconBg: "bg-[#FEF6E0]",
  },
];

export function SimpleJourney() {
  return (
    <section
      id="journey"
      className="relative w-full bg-[#FAF8FE] py-16 sm:py-20 lg:py-26 overflow-hidden"
      aria-labelledby="journey-heading"
    >
      {/* Subtle ambient light backdrops */}
      <div
        className="pointer-events-none absolute top-10 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-1/4 h-[350px] w-[350px] rounded-full bg-emerald-100/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#784AE8] font-sans">
            SIMPLE PROCESS
          </div>
          <h2
            id="journey-heading"
            className="mt-3.5 font-display text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#1F0E2E] leading-tight tracking-tight"
          >
            Here is how simple the journey is.
          </h2>
          <p className="mt-3.5 font-sans text-[15px] sm:text-[16.5px] text-[#5A4860] font-normal leading-relaxed">
            4 simple steps. Realistic time commitments designed for busy families.
          </p>
        </div>

        {/* 4 Step Timeline */}
        <div className="relative mt-14 sm:mt-16">
          {/* Connecting line on desktop */}
          <div
            className="absolute top-7 left-[15%] right-[15%] h-[2px] hidden lg:block bg-gradient-to-r from-[#784AE8]/30 via-[#0D9488]/30 to-[#D97706]/30"
            aria-hidden="true"
          />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative flex flex-col items-center text-center rounded-2xl sm:rounded-3xl bg-white border border-slate-100/90 p-6 sm:p-7 shadow-[0_4px_24px_rgba(35,9,47,0.03)] hover:shadow-xl hover:border-purple-200/70 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Step Number Tag */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1F0E2E] text-white px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase shadow-2xs font-sans">
                    0{idx + 1}
                  </span>

                  {/* Icon Box */}
                  <div
                    className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs mt-1`}
                  >
                    <IconComponent className="w-6 h-6 stroke-[1.9]" />
                  </div>

                  {/* Time Tag */}
                  <span className="font-sans font-bold text-[11px] sm:text-[12px] tracking-wider uppercase text-[#784AE8] mt-4 mb-1.5 block">
                    {step.time}
                  </span>

                  {/* Step Title in Fraunces */}
                  <h3 className="font-display text-[17px] sm:text-[18px] font-bold text-[#1F0E2E] leading-snug mb-2 transition-colors duration-200 group-hover:text-[#784AE8]">
                    {step.title}
                  </h3>

                  {/* Step Description in DM Sans */}
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#5A4860] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-exports for backward compatibility
export const JourneySection = SimpleJourney;
export default SimpleJourney;
