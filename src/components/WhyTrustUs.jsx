import React from "react";
import { Lock, Landmark, MessageSquare } from "lucide-react";

const TRUST_PILLARS = [
  {
    id: "data-privacy",
    title: "Your child's data stays yours",
    description: "Encrypted at rest, never sold. Request deletion any time.",
    icon: <Lock className="w-6 h-6 stroke-[1.8] text-[#D97706]" />,
  },
  {
    id: "science",
    title: "Grounded in established science",
    description:
      "Every dimension has a peer-reviewed basis. We cite sources in the report.",
    icon: <Landmark className="w-6 h-6 stroke-[1.8] text-[#0D9488]" />,
  },
  {
    id: "indian-families",
    title: "Built for Indian families",
    description: "Founded in Bengaluru, normed on Indian children.",
    icon: (
      <svg
        className="w-6 h-6 text-[#0D9488]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M7 14.5l3-3.5 2.5 2.5 4.5-4.5" />
      </svg>
    ),
  },
  {
    id: "transparency",
    title: "Transparent about what we don't do",
    description:
      "We're not a diagnostic service. We'll tell you when a referral is needed.",
    icon: <MessageSquare className="w-6 h-6 stroke-[1.8] text-[#7C3AED]" />,
  },
];

export function WhyTrustUs() {
  return (
    <section
      id="trust"
      className="relative w-full bg-[#FAF8FE] py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Subtle ambient light backdrops */}
      <div
        className="pointer-events-none absolute top-1/2 -left-32 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-32 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-emerald-100/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="trust-heading"
            className="font-display text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#1F0E2E] leading-tight tracking-tight"
          >
            Here is why you can trust us.
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] leading-relaxed text-[#5A4860] font-normal">
            You're handing us sensitive information about your child. We take that seriously.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-[0_4px_24px_rgba(35,9,47,0.03)] hover:shadow-xl hover:border-purple-200/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start cursor-default"
            >
              {/* Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[17px] sm:text-[18px] font-bold text-[#1F0E2E] leading-snug mb-2 transition-colors duration-200 group-hover:text-[#784AE8]">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#5A4860] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Re-exports for backward compatibility
export const TrustSection = WhyTrustUs;
export default WhyTrustUs;
