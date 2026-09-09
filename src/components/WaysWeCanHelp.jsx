const PROGRAMMES = [
  {
    id: "career",
    age: "Ages 14–18",
    ageColor: "text-[#3E6F5C]",
    title: "Career Discovery",
    description:
      "For adolescents navigating subject choices, career direction, and self-identity.",
    items: [
      "Growing Minds® Assessment",
      "Career aptitude mapping",
      "3 coaching sessions",
      "Growth Roadmap",
      "Dashboard access",
    ],
    checkColor: "text-[#3E6F5C]",
    buttonText: "Start Career Discovery →",
    buttonBg:
      "bg-[#E8F3EE] hover:bg-[#D9ECE3] text-[#3E6F5C] border border-[#CDE5DA]",
    isPopular: false,
    borderColor: "border border-[#ECE2E6]",
  },
  {
    id: "development",
    age: "Ages 4–13",
    ageColor: "text-[#4A1A6B]",
    title: "Child Development",
    description:
      "A full developmental picture — all six dimensions plus an actionable family plan.",
    items: [
      "Growing Minds® Assessment",
      "Comprehensive Report",
      "Family Alignment Session",
      "4 coaching sessions",
      "Growth Roadmap",
      "Dashboard access",
    ],
    checkColor: "text-[#4A1A6B]",
    buttonText: "Start Child Development →",
    buttonBg:
      "bg-[#4A1A6B] hover:bg-[#381254] text-white shadow-md shadow-[#4A1A6B]/20",
    isPopular: true,
    borderColor: "border-2 border-[#4A1A6B]",
  },
  {
    id: "transformation",
    age: "All ages",
    ageColor: "text-[#C87E4F]",
    title: "Complete Transformation",
    description:
      "For families committed to sustained change — extended coaching and quarterly reviews.",
    items: [
      "Everything in both programmes",
      "8 coaching sessions",
      "Quarterly reviews",
      "Priority support",
      "Sibling assessment",
    ],
    checkColor: "text-[#C87E4F]",
    buttonText: "Start Complete Transformation →",
    buttonBg:
      "bg-[#FAF1EC] hover:bg-[#F5E5DC] text-[#C87E4F] border border-[#F0D5C7]",
    isPopular: false,
    borderColor: "border border-[#ECE2E6]",
  },
];

export function WaysWeCanHelp() {
  return (
    <section
      id="ways-we-help"
      className="relative w-full bg-[#FAF7FC] py-10 sm:py-14 lg:py-16 overflow-hidden transition-colors"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#23092F] leading-tight tracking-tight">
            Here are the ways we can help.
          </h2>
          <p className="font-sans text-xs sm:text-[13px] text-[#6B4F66] font-normal mt-2">
            Every path starts with the assessment — not a discovery call.
          </p>
        </div>

        {/* 3 Pricing / Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {PROGRAMMES.map((prog) => {
            return (
              <div
                key={prog.id}
                className={`bg-white rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 relative ${prog.borderColor}`}
              >
                {/* Top Section */}
                <div>
                  {/* Most Popular Badge for Center Card */}
                  {prog.isPopular ? (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#4A1A6B] text-white px-2.5 py-0.5 font-sans text-[11px] font-semibold shadow-xs mb-2.5">
                      <span className="text-[#FFD105] text-[11px]">★</span>
                      <span>Most popular</span>
                    </div>
                  ) : null}

                  {/* Age Tag */}
                  <div
                    className={`font-sans text-[11px] sm:text-xs font-semibold tracking-wide ${prog.ageColor} mb-1`}
                  >
                    {prog.age}
                  </div>

                  {/* Card Title in Fraunces */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#23092F] tracking-tight mb-1.5">
                    {prog.title}
                  </h3>

                  {/* Short Description in DM Sans */}
                  <p className="font-sans text-xs text-[#6B4F66] font-normal leading-relaxed mb-4 sm:mb-5">
                    {prog.description}
                  </p>

                  {/* What's Included Section */}
                  <div>
                    <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B4F66]/70 mb-2.5">
                      WHAT'S INCLUDED
                    </span>

                    {/* Checklist */}
                    <ul className="space-y-2 font-sans text-xs sm:text-[12.5px] text-[#23092F]/85">
                      {prog.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span
                            className={`font-bold select-none text-xs sm:text-[13px] mt-0.5 shrink-0 ${prog.checkColor}`}
                          >
                            ✓
                          </span>
                          <span className="font-medium text-[#23092F]/85 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6">
                  <a
                    href={`#enroll-${prog.id}`}
                    className={`w-full block text-center font-sans font-semibold text-xs sm:text-[13px] py-2.5 px-3.5 rounded-xl transition-all duration-150 cursor-pointer ${prog.buttonBg}`}
                  >
                    {prog.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
