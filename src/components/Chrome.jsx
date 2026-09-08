import { useState } from "react";
import { OspiraSymbol, Wordmark } from "./Motif";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "How it works", href: "#how-it-works" },
  { label: "The quiz", href: "#quiz" },
  { label: "Assessment", href: "#full-assessment" },
  { label: "Programmes", href: "#ways-we-help" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="shrink-0 transition-opacity hover:opacity-90">
          <Wordmark />
        </a>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#final-cta"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#final-cta"
            className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs"
          >
            Book a call
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-card/95 px-5 py-4 backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#final-cta"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm"
              >
                Book a call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ink-panel relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Wordmark inverted={true} />
            <p className="mt-4 text-sm text-ink-foreground/75 leading-relaxed">
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
        <div className="mt-12 flex flex-col gap-2 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
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
              className="text-ink-foreground/75 transition-colors hover:text-white"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
