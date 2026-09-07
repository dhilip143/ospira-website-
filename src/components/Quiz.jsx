import { useState } from "react";
import { Bloom, BloomWatermark } from "./Motif";

const QUESTIONS = [
  {
    id: "motivation",
    prompt: "When your child gives up on something hard, what is usually behind it?",
    options: [
      { label: "I could tell you exactly why", weight: 2 },
      { label: "I have a good guess", weight: 1 },
      { label: "Honestly, I'd be guessing", weight: 0 },
    ],
  },
  {
    id: "friendship",
    prompt: "Who does your child go to first when something goes wrong at school?",
    options: [
      { label: "I know the name", weight: 2 },
      { label: "Probably me — I think", weight: 1 },
      { label: "No idea", weight: 0 },
    ],
  },
  {
    id: "future",
    prompt: "If you asked what they want their life to look like at 25, would their answer surprise you?",
    options: [
      { label: "Not at all", weight: 2 },
      { label: "A little", weight: 1 },
      { label: "Completely", weight: 0 },
    ],
  },
];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const done = step >= QUESTIONS.length;
  const score = answers.reduce((a, b) => a + b, 0);
  const max = QUESTIONS.length * 2;
  const pct = Math.round((score / max) * 100);

  const band =
    pct >= 80
      ? {
          title: "Closely tuned in",
          note: "You read your child well. The gaps that remain are the subtle ones — and those are the ones that shape the next ten years.",
        }
      : pct >= 45
        ? {
            title: "Partly tuned in",
            note: "You know the surface clearly, and you're guessing underneath it. That's the most common place parents sit — and the easiest to move from.",
          }
        : {
            title: "More distance than you'd expect",
            note: "There's a version of your child you haven't met yet. Nothing is wrong; the picture is just incomplete.",
          };

  return (
    <section id="quiz" className="relative overflow-hidden bg-surface py-24">
      <BloomWatermark className="-right-24 top-6 h-80 w-80" />
      <div className="relative mx-auto max-w-3xl px-5">
        <p className="eyebrow text-primary">The hook</p>
        <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
          How well do you <span className="brand-text">really</span> know your child?
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Three questions. Ninety seconds. You'll see part of your result immediately.
        </p>

        <div className="surface-card mt-8 p-7 sm:p-9">
          {!done ? (
            <div key={step} className="rise">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Question {step + 1} of {QUESTIONS.length}
                </span>
                <div className="flex gap-1.5">
                  {QUESTIONS.map((q, i) => (
                    <span
                      key={q.id}
                      className={`h-1.5 w-8 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-5 font-display text-xl leading-snug sm:text-2xl">
                {QUESTIONS[step].prompt}
              </p>
              <div className="mt-6 grid gap-3">
                {QUESTIONS[step].options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => {
                      setAnswers((a) => [...a, o.weight]);
                      setStep((s) => s + 1);
                    }}
                    className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-left text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[var(--shadow-soft)]"
                  >
                    {o.label}
                    <Bloom className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="rise">
              <p className="eyebrow text-bloom">Partial result</p>
              <h3 className="mt-2 text-2xl">{band.title}</h3>
              <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${Math.max(pct, 8)}%`, background: "var(--gradient-brand)" }}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{band.note}</p>

              <div className="mt-7 rounded-xl bg-secondary/70 p-5">
                <p className="text-sm font-semibold">
                  The full read — all four dimensions, plus what to do first.
                </p>
                {sent ? (
                  <p className="mt-3 text-sm text-primary">
                    On its way. Check your inbox in a minute or two.
                  </p>
                ) : (
                  <form
                    className="mt-3 flex flex-col gap-2 sm:flex-row"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
                    />
                    <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                      Send my full result
                    </button>
                  </form>
                )}
                <p className="mt-3 text-xs text-muted-foreground">
                  One email. No newsletter, no sharing of your data.
                </p>
              </div>

              <button
                onClick={() => {
                  setStep(0);
                  setAnswers([]);
                  setSent(false);
                }}
                className="mt-5 text-xs font-semibold text-muted-foreground underline-offset-4 hover:underline"
              >
                Retake the quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
