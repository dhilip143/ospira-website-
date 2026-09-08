import React, { useState } from "react";
import { OspiraSymbol } from "./Motif";
import {
  Zap,
  Lightbulb,
  Heart,
  Rocket,
  Users,
  Sprout,
  Check,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";

/**
 * Question data matching the user's reference screenshots.
 */
const QUESTIONS = [
  {
    id: "behaviour",
    category: "Behaviour",
    tagColor: "bg-[#7033a8]",
    lightBadge: "bg-pink-50 text-pink-700 border-pink-100",
    question: "When your child hits a frustrating task, they usually...",
    options: [
      {
        key: "A",
        text: "Stay with it and try different angles",
        trait: "persistence under pressure",
      },
      {
        key: "B",
        text: "Get upset quickly and need help to reset",
        trait: "high sensitivity & deep feeling",
      },
      {
        key: "C",
        text: "Give up and switch to something easier",
        trait: "adaptive curiosity & exploration",
      },
    ],
  },
  {
    id: "learning",
    category: "Learning",
    tagColor: "bg-teal-700",
    lightBadge: "bg-pink-50 text-pink-700 border-pink-100",
    question: "How does your child best absorb new information?",
    options: [
      {
        key: "A",
        text: "By doing — hands-on, trial and error",
        trait: "experiential learning agility",
      },
      {
        key: "B",
        text: "By watching — they observe before trying",
        trait: "reflective analytical observation",
      },
      {
        key: "C",
        text: "By listening — explanation is enough",
        trait: "strong auditory & verbal processing",
      },
    ],
  },
  {
    id: "emotion",
    category: "Emotion",
    tagColor: "bg-[#be185d]",
    lightBadge: "bg-pink-50 text-pink-700 border-pink-100",
    question: "When your child is upset, they typically...",
    options: [
      {
        key: "A",
        text: "Come to you and talk it through",
        trait: "collaborative co-regulation",
      },
      {
        key: "B",
        text: "Withdraw and process it alone",
        trait: "independent emotional buffering",
      },
      {
        key: "C",
        text: "Act out — words come later, if at all",
        trait: "high physiological sensitivity",
      },
    ],
  },
  {
    id: "motivation",
    category: "Motivation",
    tagColor: "bg-[#854d0e]",
    lightBadge: "bg-pink-50 text-pink-700 border-pink-100",
    question: "Your child is most energised by...",
    options: [
      {
        key: "A",
        text: "Recognition — praise and achievement drive them",
        trait: "clear goals & encouraging feedback",
      },
      {
        key: "B",
        text: "The process itself — they love the doing",
        trait: "intrinsic mastery & passion",
      },
      {
        key: "C",
        text: "People — collaboration over solo wins",
        trait: "connection & social engagement",
      },
    ],
  },
  {
    id: "relationships",
    category: "Relationships",
    tagColor: "bg-[#7033a8]",
    lightBadge: "bg-pink-50 text-pink-700 border-pink-100",
    question: "In a group, your child tends to...",
    options: [
      {
        key: "A",
        text: "Take the lead — they organise and direct",
        trait: "emergent leadership & initiative",
      },
      {
        key: "B",
        text: "Observe first, then contribute selectively",
        trait: "strategic social awareness",
      },
      {
        key: "C",
        text: "Prefer to follow — standing out feels uncomfortable",
        trait: "supportive teamwork & cooperation",
      },
    ],
  },
];

const CATEGORIES = [
  { name: "Behaviour", color: "bg-[#7033a8]" },
  { name: "Learning", color: "bg-teal-700" },
  { name: "Emotion", color: "bg-[#be185d]" },
  { name: "Motivation", color: "bg-[#854d0e]" },
  { name: "Relationships", color: "bg-[#7033a8]" },
];

/**
 * InteractiveCheckIn Component
 * Exact match to user screenshots:
 * - Screen 0: Intro hook with Ospira logo & 6 dimension tiles
 * - Screens 1-5: Questions 1 to 5 with dynamic checklist, highlighted category pill, top progress bar & options
 * - Screen 6 (After Q5): "Here's what 5 answers already reveal." + STRENGTH SPOTTED + OPEN QUESTION + Unlock CTA
 */
export function InteractiveCheckIn() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Intro, 1..5 = Questions, 6 = Result
  const [answers, setAnswers] = useState({});

  const activeQuestionIndex = currentStep - 1;
  const currentQ = QUESTIONS[activeQuestionIndex];

  const handleSelectOption = (optionKey) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionKey,
    }));

    // Auto-advance to next question smoothly
    if (currentStep < QUESTIONS.length) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 250);
    } else {
      setTimeout(() => {
        setCurrentStep(6);
      }, 300);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  return (
    <section id="quiz" className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ----------------- LEFT COLUMN: Messaging & Status ----------------- */}
          <div className="lg:col-span-5 max-w-xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-sky-50 px-3.5 py-1 text-xs font-sans font-semibold text-sky-800 shadow-xs">
              <span>{currentStep === 6 ? "Partial result" : "Free 2-minute check-in"}</span>
            </div>

            {/* Dynamic Headline (Fraunces - Scaled to balanced size) */}
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2.4rem] font-bold font-display text-slate-900 tracking-tight leading-[1.15]">
              {currentStep === 0 ? (
                <>How well do you really know your child?</>
              ) : currentStep <= 5 ? (
                <>Answer from your own observations.</>
              ) : (
                <>Here's what 5 answers already reveal.</>
              )}
            </h2>

            {/* Dynamic Subtitle (DM Sans) */}
            <p className="mt-3 text-sm sm:text-base font-sans text-slate-500 leading-relaxed">
              {currentStep === 0 ? (
                "5 quick questions. Instant partial result. Full profile free."
              ) : currentStep <= 5 ? (
                "No right or wrong answers — choose what's most true right now."
              ) : (
                "The full profile maps all 6 dimensions + a personalised action plan."
              )}
            </p>

            {/* Dynamic Checkmark List */}
            <div className="mt-6 space-y-3 font-sans text-sm sm:text-base text-slate-700 font-medium">
              {currentStep === 0 ? (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>2 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>No sign-up needed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>Instant result</span>
                  </div>
                </>
              ) : currentStep <= 5 ? (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>Q{currentStep} of 5</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{currentQ?.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>2 minutes</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>Instant partial result</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>Full profile free</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7033a8] text-white text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>No spam, ever</span>
                  </div>
                </>
              )}
            </div>

            {/* Pill Tags Row (Visible for Questions 0-5, Hidden on Result Screen 6 matching Screenshot 2) */}
            {currentStep <= 5 && (
              <div className="mt-7 flex flex-wrap items-center gap-2">
                {CATEGORIES.map((cat, idx) => {
                  const isCurrent = currentStep === idx + 1;
                  const isAnswered = answers[cat.name.toLowerCase()] !== undefined;

                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setCurrentStep(idx + 1)}
                      className={`rounded-full px-3.5 py-1 text-xs font-sans font-semibold transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? `${cat.color} text-white shadow-xs scale-105`
                          : isAnswered
                          ? "bg-purple-100 text-purple-900 hover:bg-purple-200"
                          : "bg-purple-50/70 text-purple-900/70 hover:bg-purple-100"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Bottom Security / Trust Micro-Row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-sans text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🔒</span> Private & secure
              </span>
              <span className="flex items-center gap-1.5">
                <span>🧒</span> Ages 4–18
              </span>
              <span className="flex items-center gap-1.5">
                <span>⚡</span> Instant result
              </span>
            </div>
          </div>

          {/* ----------------- RIGHT COLUMN: Interactive Card ----------------- */}
          <div className="lg:col-span-7 w-full">
            <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
              {/* Top Linear Progress Bar */}
              {currentStep >= 1 && (
                <div className="relative h-1.5 w-full bg-slate-100">
                  <div
                    className="h-full bg-[#7033a8] transition-all duration-300 ease-out"
                    style={{
                      width: currentStep === 6 ? "100%" : `${(currentStep / 5) * 100}%`,
                    }}
                  />
                </div>
              )}

              {/* Card Body - Refined compact padding */}
              <div className="p-5 sm:p-7 lg:p-8">
                {/* ------------------- SCREEN 0: INTRO ------------------- */}
                {currentStep === 0 && (
                  <div className="text-center animate-in fade-in duration-300">
                    {/* Ospira Logo Symbol */}
                    <div className="flex justify-center">
                      <div className="h-14 w-14 sm:h-16 sm:w-16">
                        <OspiraSymbol className="h-full w-full" title="Ospira" />
                      </div>
                    </div>

                    <h3 className="mt-3 text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
                      5 questions about your child
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-sans text-slate-400">
                      Behaviour · Learning · Emotion · Motivation · Relationships
                    </p>

                    {/* 6 Category Tiles Grid - Refined sizes */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-center">
                      <div className="flex flex-col items-center justify-center rounded-2xl bg-purple-50/70 border border-purple-100/60 p-3 sm:p-3.5 text-purple-950 transition-all hover:bg-purple-100/70">
                        <Zap className="h-4.5 w-4.5 text-amber-500 fill-amber-400" />
                        <span className="mt-1.5 text-xs sm:text-sm font-sans font-semibold">
                          Behaviour
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-2xl bg-sky-50/70 border border-sky-100/60 p-3 sm:p-3.5 text-sky-950 transition-all hover:bg-sky-100/70">
                        <Lightbulb className="h-4.5 w-4.5 text-amber-400 fill-amber-300" />
                        <span className="mt-1.5 text-xs sm:text-sm font-sans font-semibold">
                          Learning
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-2xl bg-pink-50/70 border border-pink-100/60 p-3 sm:p-3.5 text-pink-950 transition-all hover:bg-pink-100/70">
                        <Heart className="h-4.5 w-4.5 text-[#ED196A] fill-[#ED196A]" />
                        <span className="mt-1.5 text-xs sm:text-sm font-sans font-semibold">
                          Emotion
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-2xl bg-amber-50/70 border border-amber-100/60 p-3 sm:p-3.5 text-amber-950 transition-all hover:bg-amber-100/70">
                        <Rocket className="h-4.5 w-4.5 text-rose-500 fill-rose-400" />
                        <span className="mt-1.5 text-xs sm:text-sm font-sans font-semibold">
                          Motivation
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-50/60 border border-indigo-100/60 p-3 sm:p-3.5 text-indigo-950 transition-all hover:bg-indigo-100/70">
                        <Users className="h-4.5 w-4.5 text-indigo-600 fill-indigo-400" />
                        <span className="mt-1.5 text-xs sm:text-sm font-sans font-semibold">
                          Relationships
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-2xl bg-emerald-50/60 border border-emerald-100/60 p-3 sm:p-3.5 text-emerald-950 transition-all hover:bg-emerald-100/70">
                        <Sprout className="h-4.5 w-4.5 text-emerald-600" />
                        <span className="mt-1.5 text-xs sm:text-sm font-sans font-semibold">
                          Readiness
                        </span>
                      </div>
                    </div>

                    {/* Start Button */}
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="w-full rounded-xl bg-[#7033a8] hover:bg-[#581c87] py-3 sm:py-3.5 text-sm sm:text-base font-sans font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
                      >
                        Start the check-in →
                      </button>
                    </div>

                    <p className="mt-3 text-xs font-sans text-slate-400">
                      Free · No account needed · 2 minutes
                    </p>
                  </div>
                )}

                {/* ------------------- SCREENS 1 TO 5: QUESTIONS ------------------- */}
                {currentStep >= 1 && currentStep <= 5 && (
                  <div key={currentQ.id} className="animate-in fade-in duration-200">
                    {/* Top Segmented Dots Indicator */}
                    <div className="flex items-center justify-center gap-1.5 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          onClick={() => setCurrentStep(s)}
                          className={`cursor-pointer transition-all duration-300 ${
                            s === currentStep
                              ? "h-2 w-6 rounded-full bg-[#7033a8]"
                              : answers[QUESTIONS[s - 1].id]
                              ? "h-2 w-2 rounded-full bg-purple-300"
                              : "h-2 w-2 rounded-full bg-slate-200"
                          }`}
                          title={`Go to question ${s}`}
                        />
                      ))}
                    </div>

                    {/* Category Tag & Step Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-xs font-sans font-semibold text-pink-700 border border-pink-100/70">
                        {currentQ.category}
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-medium text-slate-400">
                        {currentStep} / 5
                      </span>
                    </div>

                    {/* Question Title (Fraunces - Refined balanced size) */}
                    <h3 className="mt-3.5 text-lg sm:text-xl lg:text-[1.35rem] font-bold font-display text-slate-900 tracking-tight leading-snug">
                      {currentQ.question}
                    </h3>

                    {/* Checkbox / Radio Option Cards - Refined spacing */}
                    <div className="mt-5 space-y-2.5">
                      {currentQ.options.map((opt) => {
                        const isSelected = answers[currentQ.id] === opt.key;

                        return (
                          <div
                            key={opt.key}
                            onClick={() => handleSelectOption(opt.key)}
                            className={`group flex items-center gap-3 sm:gap-3.5 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 border transition-all duration-200 cursor-pointer select-none ${
                              isSelected
                                ? "border-[#7033a8] bg-purple-50/40 shadow-xs"
                                : "border-slate-200/90 bg-white hover:border-[#7033a8]/50 hover:bg-slate-50/60"
                            }`}
                          >
                            {/* Letter Circle / Check Indicator */}
                            <div
                              className={`flex h-7 w-7 sm:h-7.5 sm:w-7.5 shrink-0 items-center justify-center rounded-full border text-xs sm:text-sm font-sans font-semibold transition-colors ${
                                isSelected
                                  ? "border-[#7033a8] bg-[#7033a8] text-white"
                                  : "border-slate-300 bg-white text-slate-500 group-hover:border-[#7033a8]/50"
                              }`}
                            >
                              {isSelected ? <Check className="h-3.5 w-3.5 stroke-[2.5]" /> : opt.key}
                            </div>

                            {/* Option Text */}
                            <span className="font-sans text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                              {opt.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Step Navigation Controls */}
                    <div className="mt-7 flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                        className="text-xs sm:text-sm font-sans font-medium text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        ← {currentStep === 1 ? "Overview" : "Previous"}
                      </button>

                      {answers[currentQ.id] && currentStep < 5 && (
                        <button
                          type="button"
                          onClick={() => setCurrentStep((prev) => prev + 1)}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-[#7033a8] hover:text-[#581c87] cursor-pointer"
                        >
                          Next question <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* ------------------- SCREEN 6: RESULTS (Screenshot 2 Match) ------------------- */}
                {currentStep === 6 && (
                  <div className="animate-in fade-in duration-300 text-left">
                    {/* Top Amber Badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/70 px-3.5 py-1 text-xs font-sans font-semibold text-amber-800">
                      <Sparkles className="h-3.5 w-3.5 fill-amber-500 text-amber-600" />
                      <span>Partial result ready</span>
                    </div>

                    {/* Box 1: STRENGTH SPOTTED */}
                    <div className="relative overflow-hidden rounded-2xl bg-sky-50/70 border border-sky-100 p-4 sm:p-5 mt-5">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-500 rounded-l-2xl" />
                      <p className="text-[0.72rem] font-sans font-bold tracking-[0.14em] text-sky-800 uppercase">
                        STRENGTH SPOTTED
                      </p>
                      <p className="mt-1.5 text-sm sm:text-base font-sans text-slate-800 leading-relaxed">
                        Your child shows strong{" "}
                        <strong className="font-bold text-slate-900">
                          persistence under pressure
                        </strong>{" "}
                        — a real developmental asset.
                      </p>
                    </div>

                    {/* Box 2: OPEN QUESTION */}
                    <div className="relative overflow-hidden rounded-2xl bg-amber-50/70 border border-amber-100 p-4 sm:p-5 mt-4">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400 rounded-l-2xl" />
                      <p className="text-[0.72rem] font-sans font-bold tracking-[0.14em] text-amber-800 uppercase">
                        OPEN QUESTION
                      </p>
                      <p className="mt-1.5 text-sm sm:text-base font-sans text-slate-800 leading-relaxed">
                        Are the environments around them matching how they're motivated?
                      </p>
                    </div>

                    {/* Sub-strip Banner */}
                    <div className="rounded-xl bg-purple-50/70 border border-purple-100/60 py-3.5 px-4 text-center mt-5">
                      <p className="text-xs sm:text-sm font-sans text-slate-600">
                        Full profile covers all 6 dimensions.{" "}
                        <strong className="font-bold text-slate-900">It's free.</strong>
                      </p>
                    </div>

                    {/* Main CTA Button */}
                    <div className="mt-4">
                      <a
                        href="#final-cta"
                        className="block w-full rounded-xl bg-[#7033a8] hover:bg-[#581c87] py-3.5 sm:py-4 text-center text-sm sm:text-base font-sans font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
                      >
                        Unlock the full profile →
                      </a>
                    </div>

                    {/* Retake Check-in Option */}
                    <div className="mt-3.5 text-center">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="h-3 w-3" />
                        <span>Retake check-in</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-export as Quiz for backward compatibility
export const Quiz = InteractiveCheckIn;
export default InteractiveCheckIn;
