const COMPARISON_ROWS = [
  {
    feature: "Whole-child, four-dimension view",
    traditional: false,
    ospira: true,
    singleDimension: false,
  },
  {
    feature: "Rooted in validated psychometrics",
    traditional: true,
    ospira: true,
    singleDimension: true,
  },
  {
    feature: "AI-personalized, actionable plan",
    traditional: false,
    ospira: true,
    singleDimension: false,
  },
  {
    feature: "Fast, low-pressure for the child",
    traditional: false,
    ospira: true,
    singleDimension: true,
  },
  {
    feature: "Ongoing dashboard & coaching",
    traditional: false,
    ospira: true,
    singleDimension: false,
  },
];

export function HowOspiraCompares() {
  return (
    <section
      id="comparison"
      className="relative w-full bg-white py-10 sm:py-14 lg:py-16 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow / Section Title */}
        <h2 className="text-center font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#7033a8] mb-6 sm:mb-8">
          HOW OSPIRA COMPARES
        </h2>

        {/* Comparison Table Card with space for overhanging badge */}
        <div className="overflow-x-auto no-scrollbar pt-6 pb-2">
          <div className="relative min-w-[620px] rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-xs">
            <table className="w-full border-collapse text-left font-sans">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-slate-100">
                  {/* Col 1: Empty Header */}
                  <th className="w-[38%] py-4 sm:py-4.5 pl-6 sm:pl-8 pr-4 align-bottom" />

                  {/* Col 2: Traditional Counselling */}
                  <th className="w-[20%] py-4 sm:py-4.5 px-3 text-center align-bottom">
                    <span className="block font-sans text-xs sm:text-sm font-medium text-slate-500 leading-tight">
                      Traditional
                      <br />
                      Counselling
                    </span>
                  </th>

                  {/* Col 3: Ospira (Hero Column with Yellow Best Fit Badge) */}
                  <th className="w-[22%] px-2 pt-0 pb-0 text-center align-bottom relative bg-[#FAF7FD]">
                    {/* Golden Yellow "Best fit" sticker badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="inline-flex flex-col items-center justify-center rounded-full bg-[#FFD105] text-[#110D1A] font-sans font-bold text-[10px] sm:text-[11px] leading-tight px-3 py-1 shadow-sm border border-amber-300">
                        <span>Best</span>
                        <span>fit</span>
                      </div>
                    </div>

                    {/* Ospira Purple Header Block */}
                    <div className="rounded-t-xl bg-[#7033a8] text-white py-3 sm:py-3.5 px-3 font-sans text-sm sm:text-base font-bold shadow-xs">
                      Ospira
                    </div>
                  </th>

                  {/* Col 4: Single-Dimension Tests */}
                  <th className="w-[20%] py-4 sm:py-4.5 px-3 pr-6 sm:pr-8 text-center align-bottom">
                    <span className="block font-sans text-xs sm:text-sm font-medium text-slate-500 leading-tight">
                      Single-Dimension
                      <br />
                      Tests
                    </span>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 font-sans">
                {COMPARISON_ROWS.map((row, idx) => {
                  const isLast = idx === COMPARISON_ROWS.length - 1;
                  return (
                    <tr
                      key={row.feature}
                      className="hover:bg-slate-50/40 transition-colors"
                    >
                      {/* Feature Name */}
                      <td
                        className={`py-4 sm:py-4.5 pl-6 sm:pl-8 pr-4 font-sans text-xs sm:text-sm font-medium text-[#110D1A] ${
                          isLast ? "rounded-bl-2xl sm:rounded-bl-3xl" : ""
                        }`}
                      >
                        {row.feature}
                      </td>

                      {/* Traditional Counselling Column */}
                      <td className="py-4 sm:py-4.5 px-3 text-center align-middle">
                        {row.traditional ? (
                          <div className="mx-auto flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-full bg-[#E8F8EE] text-[#16A34A]">
                            <svg
                              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="mx-auto flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-full bg-[#F1F5F9]">
                            <span className="block h-0.5 w-2.5 sm:w-3 rounded-full bg-slate-300" />
                          </div>
                        )}
                      </td>

                      {/* Ospira Column (Tinted Lavender Background) */}
                      <td
                        className={`py-4 sm:py-4.5 px-3 text-center align-middle bg-[#FAF7FD] ${
                          isLast ? "rounded-b-xl" : ""
                        }`}
                      >
                        <div className="mx-auto flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-full bg-[#7033a8] text-white shadow-xs">
                          <svg
                            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </td>

                      {/* Single-Dimension Tests Column */}
                      <td
                        className={`py-4 sm:py-4.5 px-3 pr-6 sm:pr-8 text-center align-middle ${
                          isLast ? "rounded-br-2xl sm:rounded-br-3xl" : ""
                        }`}
                      >
                        {row.singleDimension ? (
                          <div className="mx-auto flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-full bg-[#E8F8EE] text-[#16A34A]">
                            <svg
                              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="mx-auto flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-full bg-[#F1F5F9]">
                            <span className="block h-0.5 w-2.5 sm:w-3 rounded-full bg-slate-300" />
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="sm:hidden text-center mt-2.5 font-sans text-[11px] text-slate-400">
          ← Swipe table horizontally to compare →
        </p>
      </div>
    </section>
  );
}
