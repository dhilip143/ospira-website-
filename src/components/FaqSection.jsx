import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What age range does Ospira cover?",
    answer:
      "We work with children aged 4–18. Assessment questions are adapted for different age bands.",
  },
  {
    question: "How long does the full programme take?",
    answer:
      "Assessment: 25–35 min. Report within 48 hrs. Coaching programmes run 8–16 weeks.",
  },
  {
    question: "How is this different from a school psychologist assessment?",
    answer:
      "School assessments look for learning difficulties or clinical needs. Ospira maps developmental patterns, strengths, and home routines to empower parents with an actionable coaching plan.",
  },
  {
    question: "What if my child resists the process?",
    answer:
      "The assessment is completed by parents based on everyday observations at home — no testing pressure or specialist visits are required for the child.",
  },
  {
    question: "How is our data handled?",
    answer:
      "All data is encrypted at rest and in transit. We never sell your information, and you can request full data deletion at any time.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. If you complete the debrief session and feel the insights aren't genuinely valuable for your family, we provide a full refund within 14 days.",
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
      className="relative w-full bg-white py-10 sm:py-14 lg:py-16 overflow-hidden transition-colors"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#23092F] tracking-tight leading-tight">
            Frequently asked questions.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="border-b border-[#ECE2E6]">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4 sm:py-4.5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  {/* Question Title */}
                  <span
                    className={`font-sans text-xs sm:text-sm font-semibold transition-colors duration-150 ${
                      isOpen
                        ? "text-[#4A1A6B]"
                        : "text-[#23092F] group-hover:text-[#4A1A6B]"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Toggle Button (+ / x) */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold transition-all duration-200 ${
                      isOpen
                        ? "bg-[#4A1A6B] text-white shadow-xs"
                        : "bg-[#F5EDF8] text-[#4A1A6B]"
                    }`}
                  >
                    <span
                      className={`text-sm leading-none transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="pb-4 sm:pb-5 pr-8">
                    <p className="font-sans text-xs sm:text-[13px] text-[#6B4F66] font-normal leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
