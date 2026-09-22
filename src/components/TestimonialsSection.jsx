import React, { useState, useEffect, useRef } from "react";
import { Pause, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "1",
      quote:
        "Ospira showed us that our son wasn't unmotivated — his learning pace just needed different framing. The personalized roadmap brought back his joy and confidence in weeks.",
      avatar: "P2",
      avatarBg: "bg-[#A7F3D0] text-[#065F46]",
      name: "Priya Sundaram",
      role: "Parent of a 15-year-old",
      tag: "Career Discovery",
    },
    {
      id: "2",
      quote:
        "As a developmental psychologist, I appreciate the psychometric rigor behind Ospira. It translates validated behavioral metrics into actionable steps parents can easily adopt at home.",
      avatar: "Dr",
      avatarBg: "bg-[#EDE9FE] text-[#6D28D9]",
      name: "Dr. Ananya Sharma",
      role: "Child Psychologist & Family Consultant",
      tag: "Child Development",
    },
    {
      id: "3",
      quote:
        "The coaching sessions gave us vocabulary to talk without escalating into conflict. Our family finally has calm, productive conversations and a clear path forward.",
      avatar: "R4",
      avatarBg: "bg-[#FEF3C7] text-[#92400E]",
      name: "Rajesh Mukherjee",
      role: "Parent of an 18-year-old",
      tag: "Complete Transformation",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="stories"
      className="relative w-full bg-[#FAF8FE] py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="stories-heading"
    >
      {/* Subtle ambient light glows */}
      <div
        className="pointer-events-none absolute top-10 left-10 h-[450px] w-[450px] rounded-full bg-purple-200/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-emerald-100/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.25fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle & Interactive Controls */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#784AE8] font-sans">
              STORIES &amp; RESULTS
            </div>

            {/* Main Headline */}
            <h2
              id="stories-heading"
              className="mt-3.5 font-display text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[52px] font-semibold leading-[1.08] tracking-tight text-[#1F0E2E]"
            >
              What Parents and <br />
              Child Psychologists <br />
              <span className="text-[#8B5CF6]">
                Say About Ospira
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-[#5A4860] font-normal">
              Real reviews from parents and child psychologists on Ospira’s child development
              assessments and parenting coaching — see why families trust us.
            </p>

            {/* Carousel Controls */}
            <div className="mt-8 flex items-center gap-3">
              {/* Pause / Resume Button */}
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-white hover:border-slate-300 transition-all cursor-pointer select-none"
                aria-label={isPaused ? "Resume testimonials" : "Pause testimonials"}
              >
                {isPaused ? (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current text-slate-700" />
                    <span>Resume testimonials</span>
                  </>
                ) : (
                  <>
                    <Pause className="h-3.5 w-3.5 fill-current text-slate-700" />
                    <span>Pause testimonials</span>
                  </>
                )}
              </button>

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-2xs hover:bg-white hover:border-slate-300 transition-all cursor-pointer select-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-2xs hover:bg-white hover:border-slate-300 transition-all cursor-pointer select-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Elevated Testimonial Card */}
          <div className="w-full">
            <div className="relative rounded-3xl border border-slate-100/90 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_20px_50px_-10px_rgba(35,9,47,0.08)] transition-all duration-300 min-h-[250px] sm:min-h-[270px] flex flex-col justify-between">
              <div>
                {/* Quote Mark */}
                <div className="text-[#784AE8] select-none">
                  <Quote className="h-7 w-7 fill-[#784AE8] opacity-85 rotate-180" />
                </div>

                {/* Quote Text */}
                <p className="mt-4 font-serif text-[17px] sm:text-[20px] text-[#1F0E2E] leading-relaxed font-normal transition-opacity duration-300">
                  {current.quote}
                </p>
              </div>

              {/* Author & Tag Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Avatar Pill */}
                  <div
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full font-bold text-xs sm:text-sm select-none ${current.avatarBg}`}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-[14.5px] sm:text-[15.5px] text-[#1F0E2E] leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-[12px] sm:text-[12.5px] text-[#5A4860] mt-0.5 font-normal">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Pill Tag */}
                <span className="rounded-full border border-purple-100 bg-purple-50 px-3.5 py-1 text-xs font-semibold text-[#784AE8] select-none">
                  {current.tag}
                </span>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? "w-6 bg-[#784AE8]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Subtitle Caption */}
            <div className="mt-3 text-center text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.2em] text-slate-400 select-none">
              SAMPLE ENTRIES · CONFIG DRIVEN
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Re-exports for backward compatibility
export const Testimonials = TestimonialsSection;
export default TestimonialsSection;
