const STEPS = [
  {
    time: "25–35 MIN",
    title: "Take the assessment",
    description: "Complete from home, at your own pace.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          fill="#FAF7FC"
          stroke="#C2B5C6"
          strokeWidth="1.5"
        />
        <polyline
          points="14 2 14 8 20 8"
          fill="#ECE2E6"
          stroke="#C2B5C6"
          strokeWidth="1.5"
        />
        <path
          d="M9 13.5l4.5-4.5 1.5 1.5-4.5 4.5-2 .5.5-2z"
          fill="#FAF1EC"
          stroke="#C87E4F"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    time: "48 HRS",
    title: "Get your report",
    description: "Comprehensive Report + Dashboard access.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          fill="#FAF7FC"
          stroke="#C2B5C6"
          strokeWidth="1.5"
        />
        <rect x="7" y="12" width="2.5" height="6" rx="0.5" fill="#3E6F5C" />
        <rect x="10.75" y="8" width="2.5" height="10" rx="0.5" fill="#4A1A6B" />
        <rect x="14.5" y="10.5" width="2.5" height="7.5" rx="0.5" fill="#C87E4F" />
      </svg>
    ),
  },
  {
    time: "WEEK 1",
    title: "Meet your coach",
    description: "Walk through findings, agree focus areas.",
    icon: (
      <svg
        className="w-5 h-5 text-[#4A1A6B]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    time: "ONGOING",
    title: "Follow the roadmap",
    description: "Month-by-month plan with check-ins built in.",
    icon: (
      <svg
        className="w-5 h-5 text-[#3E6F5C]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
];

export function SimpleJourney() {
  return (
    <section
      id="journey"
      className="relative w-full bg-white py-10 sm:py-14 lg:py-16 overflow-hidden transition-colors"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#23092F] leading-tight tracking-tight">
            Here is how simple the journey is.
          </h2>
          <p className="font-sans text-xs sm:text-[13px] text-[#6B4F66] font-normal mt-2">
            4 steps. Realistic time commitments.
          </p>
        </div>

        {/* 4 Step Timeline */}
        <div className="relative">
          
          {/* Connecting Harmonic Brand Gradient Line (Desktop & Tablet) */}
          <div
            className="absolute top-6 sm:top-7 left-[12%] right-[12%] h-[2px] -translate-y-1/2 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, #4A1A6B 0%, #3E6F5C 38%, #C87E4F 72%, #4A1A6B 100%)",
            }}
          />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {STEPS.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                
                {/* Icon Box (Squircle) */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-[#ECE2E6] shadow-xs flex items-center justify-center relative z-10 transition-transform duration-200 hover:scale-105">
                  {step.icon}
                </div>

                {/* Time Tag */}
                <span className="font-sans font-bold text-[10px] sm:text-[11px] tracking-wider uppercase text-[#4A1A6B] mt-3.5 sm:mt-4 mb-1 block">
                  {step.time}
                </span>

                {/* Step Title in Fraunces */}
                <h3 className="font-display text-sm sm:text-base font-bold text-[#23092F] leading-snug mb-1">
                  {step.title}
                </h3>

                {/* Step Description in DM Sans */}
                <p className="font-sans text-xs text-[#6B4F66] font-normal leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
