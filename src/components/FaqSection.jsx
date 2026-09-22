import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQS = [
  {
    id: "ages",
    question: "What ages does Ospira work with?",
    answer:
      "Ospira is designed for young people aged 10–21+, with age-appropriate questions calibrated for each stage.",
  },
  {
    id: "duration",
    question: "How long does the programme take?",
    answer:
      "The initial check-in takes 10–15 minutes, while comprehensive assessments take 25–35 minutes. Coaching programmes are tailored from 4 to 12 weeks based on your selected roadmap.",
  },
  {
    id: "school-counselling",
    question: "How is this different from school counselling?",
    answer:
      "School counselling typically addresses classroom performance or immediate academic stress. Ospira evaluates six developmental dimensions to provide whole-child clarity and practical, parent-led guidance at home.",
  },
  {
    id: "data-handling",
    question: "How do you handle my child's data?",
    answer:
      "All assessment responses and family details are encrypted at rest and in transit. We never sell your information to third parties, and you can request full data deletion at any time.",
  },
  {
    id: "refund",
    question: "What is your refund policy?",
    answer:
      "If you complete your first coaching session and feel the insights are not valuable for your family, reach out within 14 days for a full, no-questions-asked refund.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#FAF8FE] py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Subtle ambient light glows */}
      <div
        className="pointer-events-none absolute top-10 right-10 h-[450px] w-[450px] rounded-full bg-purple-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-emerald-100/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="max-w-md">
            {/* Eyebrow */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#784AE8] font-sans">
              FAQS
            </div>

            {/* Main Headline */}
            <h2
              id="faq-heading"
              className="mt-3.5 font-display text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[54px] font-bold text-[#1F0E2E] leading-[1.1] tracking-tight"
            >
              Questions <br />
              families ask <br />
              before starting.
            </h2>

            {/* Subhead */}
            <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#5A4860] font-normal">
              Placeholder answers — pending sign-off from the Ospira team.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="w-full divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={item.id} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left transition-colors cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    {/* Question Text */}
                    <span
                      className={`font-display text-[17px] sm:text-[18.5px] font-bold tracking-tight transition-colors duration-200 ${
                        isOpen
                          ? "text-[#784AE8]"
                          : "text-[#1F0E2E] group-hover:text-[#784AE8]"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Toggle Button (+ / x) */}
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#784AE8] text-white shadow-xs rotate-0"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      {isOpen ? (
                        <X className="h-4 w-4 stroke-[2.2]" />
                      ) : (
                        <Plus className="h-4 w-4 stroke-[2.2]" />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  {isOpen && (
                    <div className="mt-3.5 pr-8 transition-all animate-in fade-in duration-200">
                      <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#5A4860] font-normal">
                        {item.answer}
                      </p>
                    </div>
                  )}
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
export const FAQ = FaqSection;
export default FaqSection;
