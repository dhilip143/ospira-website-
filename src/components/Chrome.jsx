import { Bloom, Wordmark } from "./Motif";

const NAV = [
  { label: "How it works", href: "#how-it-works" },
  { label: "The quiz", href: "#quiz" },
  { label: "Assessment", href: "#assessment" },
  { label: "Programmes", href: "#programmes" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="shrink-0">
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#final-cta"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ink-panel relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <span className="flex items-center gap-2.5">
              <Bloom className="h-8 w-8" title="Ospira" />
              <span className="font-display text-xl font-semibold">Ospira</span>
            </span>
            <p className="mt-4 text-sm text-ink-foreground/70">
              Ospira Technologies Pvt Ltd — parenting coaching built on assessment, not advice.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <FooterCol
              title="Explore"
              links={["How it works", "The quiz", "Assessment", "Programmes"]}
            />
            <FooterCol title="Company" links={["About", "Coaches", "Careers", "Contact"]} />
            <FooterCol title="Legal" links={["Privacy", "Data handling", "Terms"]} />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Ospira Technologies Pvt Ltd. All rights reserved.</span>
          <span>Made for parents who want to know, not guess.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="eyebrow text-sun">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#top"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
