import { useState } from "react";

const TABS = [
  {
    id: "behaviour",
    label: "Behaviour",
    eyebrow: "BEHAVIOUR",
    headline:
      "See the patterns in how your child responds, relates and finds their place — without reducing them to a label.",
    tags: [
      "ARTP behavioural mapping",
      "Habit-loop triggers",
      "Frustration tolerance curve",
    ],
    sampleLabel: "Sample recommendation",
    recommendation:
      "Shift the demand, not the discipline: same task, different entry point.",
  },
  {
    id: "learning",
    label: "Learning",
    eyebrow: "LEARNING",
    headline:
      "Identify how their brain absorbs, questions and locks in knowledge — beyond standard classroom metrics.",
    tags: [
      "Cognitive processing speed",
      "Focus & flow triggers",
      "Information retention arcs",
    ],
    sampleLabel: "Sample recommendation",
    recommendation:
      "Pair visual frameworks with hands-on practice before introducing abstract verbal theory.",
  },
  {
    id: "emotion",
    label: "Emotion",
    eyebrow: "EMOTION",
    headline:
      "Decode their emotional regulation, distress signals and recovery patterns with calm, compassionate clarity.",
    tags: [
      "Co-regulation needs",
      "Emotional recovery curve",
      "Stress overload signals",
    ],
    sampleLabel: "Sample recommendation",
    recommendation:
      "Validate the underlying feeling first before offering solutions to engage their problem-solving state.",
  },
  {
    id: "career",
    label: "Career readiness",
    eyebrow: "CAREER READINESS",
    headline:
      "Discover natural inclinations, curiosity drivers and problem-solving architectures built for the future.",
    tags: [
      "Natural inclination profile",
      "Problem-solving architecture",
      "Emerging leadership traits",
    ],
    sampleLabel: "Sample recommendation",
    recommendation:
      "Encourage open-ended projects that blend instinctive curiosity with tangible real-world outcomes.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Assess",
    description: "See the patterns beneath everyday moments.",
    iconBg: "bg-[#F0EAFA]",
    icon: (
      <svg
        className="w-3.5 h-3.5 text-[#7033a8]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="18" x2="17" y2="7" />
        <circle cx="18" cy="6" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Understand",
    description: "Turn observations into a fuller view.",
    iconBg: "bg-[#E0F6FA]",
    icon: (
      <svg
        className="w-3.5 h-3.5 text-[#0891b2]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 5c-3.2 3.8-3.2 10.2 0 14" />
        <path d="M16 5c3.2 3.8 3.2 10.2 0 14" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Act",
    description: "Move forward with relevant next steps.",
    iconBg: "bg-[#FDE7F0]",
    icon: (
      <svg
        className="w-3.5 h-3.5 text-[#ED196A]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="18" x2="17" y2="7" />
        <circle cx="18" cy="6" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
];

export function NoticeKnowDo() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  const currentTab = TABS[activeTab];

  return (
    <section
      id="lens"
      className="relative w-full bg-[#FAF8FD] py-10 sm:py-14 lg:py-16 overflow-hidden transition-colors"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & 3 Steps */}
          <div className="lg:col-span-5 max-w-lg">
            {/* Eyebrow */}
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#7033a8] mb-3 sm:mb-4">
              NOT ADVICE. A CLEARER LENS.
            </p>

            {/* Fraunces Headline: Notice more. Know more. Do more. (Scaled to balanced proportion) */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.1] tracking-tight mb-5 sm:mb-7">
              <span className="block text-[#110D1A]">Notice more.</span>
              <span className="block text-[#7033a8]">Know more.</span>
              <span className="block text-[#110D1A]">Do more.</span>
            </h2>

            {/* 3 Step Process List with Dividers */}
            <div className="w-full">
              {STEPS.map((step, idx) => {
                return (
                  <div key={step.number} className="w-full">
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className="w-full text-left py-3.5 sm:py-4 flex items-start gap-3.5 transition-all duration-150 hover:opacity-90 group cursor-pointer"
                    >
                      {/* Step Circle Badge */}
                      <div
                        className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${step.iconBg} shadow-xs transition-transform duration-200 group-hover:scale-105`}
                      >
                        {step.icon}
                      </div>

                      {/* Step Content */}
                      <div className="pt-0.5 flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-sans text-xs font-normal text-slate-400">
                            {step.number}
                          </span>
                          <span className="font-display text-base sm:text-lg font-bold text-[#110D1A]">
                            {step.title}
                          </span>
                        </div>
                        <p className="font-sans text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </button>

                    {/* Horizontal Divider Lines */}
                    {idx === 0 && (
                      <div className="w-full h-[1px] bg-slate-200/90" />
                    )}
                    {idx === 1 && (
                      <div className="w-full h-[1.5px] bg-[#110D1A]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Compact, Scaled-down Dark Card */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[580px] bg-[#121026] text-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 lg:p-8 shadow-xl shadow-purple-950/20 border border-white/[0.04]">
              
              {/* Top Navigation Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1">
                {TABS.map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`whitespace-nowrap px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "border border-purple-400/50 bg-[#1E1738] text-purple-200 shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Category Eyebrow in Card */}
              <div className="mt-5 sm:mt-6">
                <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-purple-400">
                  {currentTab.eyebrow}
                </span>

                {/* Main Tab Headline in Fraunces (Compact, balanced text size) */}
                <h3 className="font-display text-base sm:text-lg lg:text-[20px] font-semibold text-white leading-snug mt-2">
                  {currentTab.headline}
                </h3>
              </div>

              {/* Sub-panel: WHAT OSPIRA MAPS (Compact padding & height) */}
              <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl bg-[#1C1A36]/90 border border-white/[0.06] p-4 sm:p-5">
                <span className="block font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400/85 mb-2.5">
                  WHAT OSPIRA MAPS
                </span>

                {/* Pill Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {currentTab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="whitespace-nowrap inline-flex items-center rounded-full bg-[#28244B] border border-white/[0.08] px-3 py-1 font-sans text-[11px] sm:text-xs text-slate-200 font-medium shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Sample Recommendation */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="text-purple-400 text-xs select-none">"</span>
                    <span className="font-sans text-[11px] sm:text-xs font-medium tracking-wide">
                      {currentTab.sampleLabel}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 font-normal italic mt-1 leading-relaxed">
                    {currentTab.recommendation}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
