const STATS = [
  { value: "120+", label: "Questions" },
  { value: "6", label: "Dimensions" },
  { value: "25–35", label: "Minutes" },
  { value: "18–24", label: "Pages" },
];

const FEATURES = [
  {
    title: "Psychometrically validated",
    description:
      "Built with developmental psychologists and tested across 500+ children before launch.",
    icon: (
      <svg
        className="w-4 h-4 text-slate-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
      </svg>
    ),
  },
  {
    title: "Parent-completed",
    description:
      "No specialist visit required. Your observations power the assessment.",
    icon: (
      <svg
        className="w-4 h-4 text-slate-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2.5" ry="2.5" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        <line x1="8.5" y1="6.5" x2="15.5" y2="6.5" />
        <line x1="8.5" y1="10" x2="15.5" y2="10" />
        <line x1="8.5" y1="13.5" x2="13" y2="13.5" />
      </svg>
    ),
  },
  {
    title: "Explicitly connected to coaching",
    description:
      "The report feeds directly into your coaching sessions — nothing gets lost.",
    icon: (
      <svg
        className="w-4 h-4 text-slate-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

export function FullPictureAssessment() {
  return (
    <section
      id="full-assessment"
      className="relative w-full bg-[#12082A] py-10 sm:py-14 lg:py-16 overflow-hidden text-white"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Stats & CTA */}
          <div className="lg:col-span-7 max-w-xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center rounded-full bg-[#2A1742] border border-amber-500/20 px-3 py-1 text-[11px] font-semibold text-[#FFD105] shadow-xs mb-4 sm:mb-5 font-sans">
              Growing Minds® Assessment
            </div>

            {/* Main Headline in Fraunces (Scaled to balanced proportion) */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-[1.12] tracking-tight mb-4 sm:mb-5">
              You started this in 60 seconds. Here's the full picture.
            </h2>

            {/* Description in DM Sans */}
            <p className="font-sans text-xs sm:text-[13.5px] text-slate-300/80 leading-relaxed max-w-lg mb-6 sm:mb-8">
              A psychometrically validated instrument covering all six development
              dimensions. 25–35 minutes. Complete from home. Produces a report that
              tells you something actionable.
            </p>

            {/* 4 Metric / Stat Boxes (More compact) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-md mb-6 sm:mb-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-[#1D1136]/90 border border-white/[0.07] p-2.5 sm:p-3 text-center shadow-xs transition-colors hover:border-purple-500/30"
                >
                  <p className="font-display text-lg sm:text-xl lg:text-[22px] font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="font-sans text-[10px] sm:text-[11px] text-slate-400 font-normal mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div>
              <a
                href="#start-assessment"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFD105] hover:bg-[#FACC15] text-[#110D1A] font-sans font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 shadow-md shadow-amber-500/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Start my child's full assessment</span>
                <span className="font-bold text-sm sm:text-base">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards (More compact) */}
          <div className="lg:col-span-5 w-full space-y-2.5 sm:space-y-3">
            {FEATURES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl sm:rounded-2xl bg-[#1D1136]/90 border border-white/[0.07] p-4 sm:p-4.5 flex items-start gap-3 sm:gap-4 shadow-lg shadow-purple-950/20 transition-all duration-200 hover:border-purple-500/30"
              >
                <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm sm:text-[15px] font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[12.5px] text-slate-300/80 font-normal mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
