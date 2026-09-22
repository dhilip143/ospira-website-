import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function WaysWeCanHelp() {
  const plans = [
    {
      id: "career-discovery",
      title: "Career Discovery",
      description: "Turn uncertainty about the future into a confident next step.",
      items: [
        "Growing Minds® Career Assessment",
        "Career Report",
        "One 45-min coach session",
      ],
      buttonText: "Start Career Discovery",
      isPopular: false,
      isComingSoon: false,
      href: "#quiz",
    },
    {
      id: "child-development",
      title: "Child Development",
      description: "A complete view of where your child is, and what helps next.",
      items: [
        "Full Growing Minds® Assessment (child + parent)",
        "AI-generated combined report",
        "Two separate 45-min coach sessions",
        "Structured Growth Roadmap",
      ],
      buttonText: "Start Child Development",
      isPopular: false,
      isComingSoon: false,
      href: "#quiz",
    },
    {
      id: "complete-transformation",
      title: "Complete Transformation",
      description: "Sustained support for families ready to go deeper.",
      items: [
        "Everything in Child Development",
        "Extended coaching",
        "Ongoing progress support",
      ],
      buttonText: "Start Transformation",
      isPopular: true,
      isComingSoon: false,
      href: "#quiz",
    },
    {
      id: "ongoing-family-support",
      title: "Ongoing Family Support",
      description:
        "Longer-term guidance for families who want continued support after their roadmap.",
      items: [
        "Regular family check-ins",
        "Progress reviews",
        "Continued coaching support",
      ],
      buttonText: "Not available yet",
      isPopular: false,
      isComingSoon: true,
      href: null,
    },
  ];

  return (
    <section
      id="ways-we-help"
      className="relative bg-[#FAF8FE] py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="programmes-heading"
    >
      <div id="programmes" />
      <div id="quiz" />

      {/* Subtle background ambient auras */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 h-[450px] w-[450px] rounded-full bg-purple-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-100/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#784AE8]">
            CHOOSE YOUR STARTING POINT.
          </div>

          <h2
            id="programmes-heading"
            className="mt-3.5 font-display text-[30px] sm:text-[44px] lg:text-[54px] font-semibold text-[#1F0E2E] tracking-tight leading-[1.12]"
          >
            Four ways forward.
          </h2>

          <p className="mt-3.5 text-[16px] sm:text-[17.5px] leading-relaxed text-[#5A4860] font-normal">
            Start with the question your family needs answered most.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-white border-2 border-[#784AE8] shadow-[0_14px_40px_rgba(120,74,232,0.14)] hover:shadow-2xl hover:-translate-y-1.5 z-20"
                    : plan.isComingSoon
                    ? "bg-[#F9F8FA] border border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                    : "bg-white border border-slate-100 shadow-[0_4px_24px_rgba(35,9,47,0.04)] hover:shadow-xl hover:-translate-y-1 hover:border-purple-200/70"
                }`}
              >
                {/* Most Popular Floating Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#784AE8] px-4 py-1 text-[10.5px] font-bold tracking-[0.14em] uppercase text-white shadow-sm">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Coming Soon Pill */}
                  {plan.isComingSoon && (
                    <div className="mb-2.5 inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase text-slate-500">
                      COMING SOON
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-display text-[20px] sm:text-[22px] font-bold tracking-tight text-[#1F0E2E]">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-2 text-[13.5px] sm:text-[14.5px] leading-relaxed min-h-[44px] ${
                      plan.isComingSoon ? "text-slate-500" : "text-[#5A4860]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span
                      className={`block text-[11px] font-bold tracking-[0.14em] uppercase mb-3.5 ${
                        plan.isComingSoon ? "text-slate-400" : "text-[#784AE8]"
                      }`}
                    >
                      WHAT'S INCLUDED
                    </span>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {plan.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          {plan.isComingSoon ? (
                            <Check className="h-4 w-4 stroke-[2.2] text-slate-400 shrink-0 mt-0.5" />
                          ) : (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F8F0] text-[#10B981] shrink-0 mt-0.5">
                              <Check className="h-3 w-3 stroke-[2.5]" />
                            </div>
                          )}
                          <span
                            className={`text-[13.5px] sm:text-[14px] leading-snug font-medium ${
                              plan.isComingSoon ? "text-slate-500" : "text-[#1F0E2E]"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-2">
                  {plan.isComingSoon ? (
                    <div className="w-full text-center rounded-xl bg-slate-100/90 py-3 px-4 text-[13.5px] font-medium text-slate-400 cursor-not-allowed select-none">
                      {plan.buttonText}
                    </div>
                  ) : plan.isPopular ? (
                    <a
                      href={plan.href}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#784AE8] py-3 px-4 text-[14px] sm:text-[14.5px] font-semibold text-white shadow-[0_8px_20px_rgba(120,74,232,0.35)] transition-all duration-200 hover:bg-[#6839DC] hover:shadow-[0_12px_26px_rgba(120,74,232,0.5)] active:translate-y-0"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <a
                      href={plan.href}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 px-4 text-[14px] sm:text-[14.5px] font-semibold text-[#1F0E2E] transition-all duration-200 hover:border-[#784AE8] hover:text-[#784AE8] hover:bg-purple-50/40 active:translate-y-0"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-slate-400 group-hover:text-[#784AE8]" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Re-exports for backward compatibility
export const Programmes = WaysWeCanHelp;
export default WaysWeCanHelp;
