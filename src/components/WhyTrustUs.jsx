const TRUST_PILLARS = [
  {
    title: "Your child's data stays yours",
    description: "Encrypted at rest, never sold. Request deletion any time.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="10" rx="2.5" fill="#F59E0B" />
        <path
          d="M8 11V7a4 4 0 0 1 8 0v4"
          stroke="#64748B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="1.5" fill="#B45309" />
      </svg>
    ),
  },
  {
    title: "Grounded in established science",
    description:
      "Every dimension has a peer-reviewed basis. We cite sources in the report.",
    icon: (
      <svg
        className="w-6 h-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3L2 7h20L12 3z" />
      </svg>
    ),
  },
  {
    title: "Built for Indian families",
    description: "Founded in Bengaluru, normed on Indian children.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#0EA5E9" />
        <path
          d="M12 3a9 9 0 0 0-9 9c0 1.6.4 3.1 1.2 4.4L8 15l2-2 1.5 1.5 2-1 1 2 2.5-1.5.5 2.5A9 9 0 0 0 21 12a9 9 0 0 0-9-9z"
          fill="#22C55E"
        />
        <circle cx="12" cy="12" r="9" stroke="#0284C7" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Transparent about what we don't do",
    description:
      "We're not a diagnostic service. We'll tell you when a referral is needed.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5c-1.5 0-2.9-.4-4.1-1.1L3 19l1.4-4.7A7.5 7.5 0 1 1 20 11.5z"
          fill="#DDD6FE"
          stroke="#A78BFA"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function WhyTrustUs() {
  return (
    <section
      id="trust"
      className="relative w-full bg-[#FAF8FD] py-10 sm:py-14 lg:py-16 overflow-hidden transition-colors"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-11">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#110D1A] leading-tight tracking-tight">
            Here is why you can trust us.
          </h2>
          <p className="font-sans text-xs sm:text-[13px] text-slate-500 font-normal mt-2 leading-relaxed">
            You're handing us sensitive information about your child. We take
            that seriously.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-5.5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start"
            >
              {/* Pillar Icon */}
              <div className="mb-3.5 sm:mb-4">{pillar.icon}</div>

              {/* Pillar Title in Fraunces */}
              <h3 className="font-display text-sm sm:text-[15px] font-bold text-[#110D1A] leading-snug mb-1.5">
                {pillar.title}
              </h3>

              {/* Pillar Description in DM Sans */}
              <p className="font-sans text-xs text-slate-400 font-normal leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
