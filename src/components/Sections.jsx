import { useState } from "react";
import { Bloom, BloomSeam, BloomWatermark } from "./Motif";
export { LandingHero as Hero } from "./LandingHero";
export { HowItWorksBanner as HowItWorks } from "./HowItWorksBanner";
export { NoticeKnowDo } from "./NoticeKnowDo";
export { HowOspiraCompares } from "./HowOspiraCompares";
export { FullPictureAssessment } from "./FullPictureAssessment";
export { WaysWeCanHelp } from "./WaysWeCanHelp";
export { SimpleJourney } from "./SimpleJourney";
export { WhyTrustUs } from "./WhyTrustUs";
export { FaqSection } from "./FaqSection";

/* --------------------------- What Ospira is ------------------------------- */

const PILLARS = [
  {
    key: "Emotional",
    body: "How your child regulates, recovers and asks for help — measured, not assumed.",
    points: ["Regulation under stress", "Recovery speed", "Help-seeking pattern"],
  },
  {
    key: "Social",
    body: "Where they sit in their world: belonging, influence, and who they turn to first.",
    points: ["Belonging signals", "Peer influence", "Conflict style"],
  },
  {
    key: "Motivational",
    body: "What actually moves them — and what looks like laziness but isn't.",
    points: ["Drive sources", "Avoidance triggers", "Effort tolerance"],
  },
  {
    key: "Directional",
    body: "The story they tell themselves about their own future, in their own words.",
    points: ["Self-narrative", "Aspiration clarity", "Readiness gaps"],
  },
];

export function WhatItIs() {
  const [active, setActive] = useState(0);
  return (
    <section id="what-it-is" className="mx-auto max-w-6xl px-5 py-24">
      <p className="eyebrow text-primary">What Ospira is</p>
      <h2 className="mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl">
        Four dimensions, one child, one coach who reads all of it together.
      </h2>

      <div className="mt-9 flex flex-wrap gap-2">
        {PILLARS.map((p, i) => (
          <button
            key={p.key}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === i
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-primary/40"
            }`}
          >
            {p.key}
          </button>
        ))}
      </div>

      <div key={active} className="surface-card rise mt-5 grid gap-6 p-7 sm:grid-cols-[1fr_1fr] sm:p-9">
        <div>
          <h3 className="text-2xl">{PILLARS[active].key} dimension</h3>
          <p className="mt-3 text-muted-foreground">{PILLARS[active].body}</p>
        </div>
        <ul className="space-y-3">
          {PILLARS[active].points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-sm font-medium">
              <Bloom className="mt-0.5 h-4 w-4 shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </div>

      <BloomSeam className="my-14" />

      <h3 className="text-2xl">Why it's different</h3>
      <div className="mt-6 overflow-hidden rounded-2xl border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-secondary/70">
            <tr>
              {["", "Traditional counselling", "Single-dimension tests", "Ospira"].map((h) => (
                <th key={h} className="px-5 py-4 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Starts from", "A presenting problem", "One trait score", "A full four-dimension read"],
              ["Who is coached", "Usually the child", "Nobody", "The parent"],
              ["Output", "Session notes", "A number", "A plan you can act on Monday"],
              ["Timeline", "Open-ended", "One-off", "6-week structured programme"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-border bg-card">
                <th className="px-5 py-4 text-left font-semibold">{row[0]}</th>
                <td className="px-5 py-4 text-muted-foreground">{row[1]}</td>
                <td className="px-5 py-4 text-muted-foreground">{row[2]}</td>
                <td className="px-5 py-4 font-medium text-primary">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ------------------------------- Assessment ------------------------------- */

export function Assessment() {
  return (
    <section id="assessment" className="ink-panel relative overflow-hidden py-24">
      <BloomWatermark className="-left-16 top-10 h-80 w-80 opacity-[0.12]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="eyebrow text-sun">The assessment</p>
        <h2 className="mt-3 max-w-2xl text-3xl leading-tight sm:text-5xl">
          Is your child ready for life?
        </h2>
        <p className="mt-5 max-w-xl text-ink-foreground/70">
          A structured assessment for your child, a debrief for you, and a written plan that names
          the next three moves.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Four-dimension profile", "Emotional, social, motivational and directional read in one document."],
            ["Parent debrief call", "45 minutes with the coach who scored the assessment."],
            ["Strength map", "What is already working, so you stop accidentally breaking it."],
            ["Risk flags", "Quiet patterns worth watching, written plainly."],
            ["Action plan", "Three moves for the next 30 days, specific to your household."],
            ["Re-read at 90 days", "Same instrument, so change is measured, not felt."],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-ink-foreground/12 bg-ink-foreground/[0.04] p-6 transition-colors hover:border-sun/40"
            >
              <Bloom className="h-6 w-6" />
              <p className="mt-4 font-display text-lg font-semibold">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/65">{d}</p>
            </div>
          ))}
        </div>

        <a
          href="#final-cta"
          className="mt-12 inline-flex rounded-full bg-sun px-6 py-3 text-sm font-semibold text-sun-foreground transition-transform hover:-translate-y-0.5"
        >
          Request the assessment
        </a>
      </div>
    </section>
  );
}

/* ------------------------------- Programmes ------------------------------- */

const PROGRAMMES = [
  {
    name: "Foundation",
    age: "Ages 6–10",
    blurb: "Build the emotional vocabulary early, while habits are still soft.",
    steps: ["Assessment week", "Parent debrief", "Four coaching sessions", "90-day re-read"],
  },
  {
    name: "Navigator",
    age: "Ages 11–15",
    blurb: "The years where motivation and peers rewrite everything.",
    steps: ["Assessment week", "Parent + child debrief", "Six coaching sessions", "School liaison note", "90-day re-read"],
  },
  {
    name: "Launch",
    age: "Ages 16–19",
    blurb: "Direction, independence, and the conversations before they leave.",
    steps: ["Assessment week", "Direction workshop", "Six coaching sessions", "Transition plan"],
  },
];

export function Programmes() {
  const [open, setOpen] = useState(1);
  return (
    <section id="programmes" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-primary">Programmes</p>
        <h2 className="mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Pick the stage your child is in. The journey opens up inside.
        </h2>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {PROGRAMMES.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.name} className="surface-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className="eyebrow text-muted-foreground">{p.age}</span>
                    <span className="mt-2 block font-display text-xl font-semibold">{p.name}</span>
                    <span className="mt-2 block text-sm text-muted-foreground">{p.blurb}</span>
                  </span>
                  <span
                    className={`mt-1 shrink-0 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <ol className="rise space-y-3 border-t border-border bg-secondary/50 px-6 py-5">
                    {p.steps.map((s, si) => (
                      <li key={s} className="flex items-center gap-3 text-sm font-medium">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[0.7rem] font-bold text-primary-foreground">
                          {si + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Trust --------------------------------- */

const PROFILES = {
  Parents: [
    ["Your data stays yours", "Assessment results are shared with you and your coach only."],
    ["One coach, start to finish", "No handovers, no rotating team."],
    ["No labels, ever", "We report patterns, not diagnoses."],
  ],
  Schools: [
    ["Cohort-level reporting", "Aggregate reads without exposing individual children."],
    ["Counsellor-compatible", "Our output slots into existing pastoral care."],
    ["Consent-first rollout", "Parents opt in before any child is assessed."],
  ],
};

export function Trust() {
  const keys = Object.keys(PROFILES);
  const [profile, setProfile] = useState("Parents");

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-primary">Trust</p>
          <h2 className="mt-3 max-w-xl text-3xl leading-tight sm:text-4xl">
            Built carefully, because it's your child.
          </h2>
        </div>
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setProfile(k)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                profile === k ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <div key={profile} className="rise mt-8 grid gap-4 md:grid-cols-3">
        {PROFILES[profile].map(([t, d]) => (
          <div key={t} className="surface-card p-6">
            <Bloom className="h-5 w-5" />
            <p className="mt-4 font-display text-lg font-semibold">{t}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        <span>Psychometrics reviewed by licensed practitioners</span>
        <span>Encrypted at rest and in transit</span>
        <span>Never sold, never shared</span>
      </div>
    </section>
  );
}

/* ---------------------------------- Proof --------------------------------- */

const QUOTES = [
  {
    quote:
      "The assessment told me my son wasn't unmotivated — he was avoiding failure. Six weeks later we have a different house.",
    who: "Meera R., parent of a 13-year-old",
  },
  {
    quote:
      "I expected a report. I got a script for the conversation I'd been avoiding for two years.",
    who: "Arun D., parent of a 17-year-old",
  },
  {
    quote: "Our counsellor uses the four-dimension read as a starting point now. It saves months.",
    who: "Head of Pastoral Care, Bengaluru",
  },
];

export function Proof() {
  const [i, setI] = useState(0);
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-4xl px-5">
        <p className="eyebrow text-primary">Proof</p>
        <div key={i} className="surface-card rise mt-6 p-8 sm:p-11">
          <Bloom className="h-8 w-8" />
          <blockquote className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
            “{QUOTES[i].quote}”
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-muted-foreground">{QUOTES[i].who}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {QUOTES.map((q, qi) => (
              <button
                key={q.who}
                onClick={() => setI(qi)}
                aria-label={`Testimonial ${qi + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  qi === i ? "w-10 bg-primary" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <CarouselBtn
              label="Previous"
              onClick={() => setI((v) => (v - 1 + QUOTES.length) % QUOTES.length)}
            >
              ←
            </CarouselBtn>
            <CarouselBtn
              label="Next"
              onClick={() => setI((v) => (v + 1) % QUOTES.length)}
            >
              →
            </CarouselBtn>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl leading-relaxed text-muted-foreground">
          We believe most parenting problems are really information problems. Give a parent an
          accurate picture, and they usually know what to do.
        </p>
      </div>
    </section>
  );
}

function CarouselBtn({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-sm transition-colors hover:border-primary/50 hover:text-primary"
    >
      {children}
    </button>
  );
}

/* -------------------------------- FAQ + CTA ------------------------------- */

const FAQS = [
  [
    "Does my child have to be struggling?",
    "No. Most families come to us before anything is wrong — that's when the assessment is most useful.",
  ],
  [
    "How long does the assessment take?",
    "About 40 minutes for your child, plus a 45-minute debrief call with you.",
  ],
  [
    "Is this therapy?",
    "No. We assess and we coach parents. If clinical support is warranted, we say so and refer.",
  ],
  [
    "Who sees the results?",
    "You and your assigned coach. Nothing is shared with schools unless you ask us to.",
  ],
  [
    "What if we're not in India?",
    "Coaching runs online, so timezone is the only real constraint.",
  ],
];

export function FaqCta() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-14 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Questions parents actually ask.</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQS.map(([q, a], i) => (
              <div key={q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left font-semibold"
                >
                  {q}
                  <span
                    className={`shrink-0 text-primary transition-transform ${open === i ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {open === i ? (
                  <p className="rise pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div id="final-cta" className="surface-card relative overflow-hidden p-8 sm:p-9">
          <BloomWatermark className="-right-12 -top-10 h-56 w-56" />
          <div className="relative">
            <Bloom className="h-8 w-8" />
            <h3 className="mt-5 text-2xl leading-snug">
              So — how well do you really know your child?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Leave your details and a coach will call you within one working day. No sales script.
            </p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Field label="Your name" type="text" placeholder="Priya Sharma" />
              <Field label="Email" type="email" placeholder="priya@email.com" />
              <Field label="Child's age" type="number" placeholder="13" />
              <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5">
                Book my call
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              We use your details only to arrange the call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</span>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
      />
    </label>
  );
}
