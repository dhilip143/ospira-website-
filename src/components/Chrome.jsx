import { useEffect, useState } from "react";
import { OspiraSymbol, Wordmark } from "./Motif";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV = [
  { label: "How it works", href: "#how-it-works" },
  { label: "The quiz", href: "#quiz" },
  { label: "Assessment", href: "#full-assessment" },
  { label: "Programmes", href: "#ways-we-help" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Trigger neat logo entrance + "Ospira" unfolding reveal on mount / refresh
    const timer = setTimeout(() => {
      setBrandVisible(true);
    }, 180);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ease-out ${
        scrolled
          ? "border-[#E2D2E6] bg-[#F4EAF5]/92 shadow-[0_10px_30px_-8px_rgba(74,26,107,0.12)] backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 sm:px-8 transition-[height] duration-300 ease-out ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Animated Brand Logo - "Ospira" text smoothly unfolds from the logo on page load / refresh */}
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 shrink-0 select-none transition-transform duration-300 active:scale-95"
          aria-label="Ospira Home"
        >
          {/* Logo Symbol - smooth scale entrance */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              brandVisible ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 -rotate-12"
            }`}
          >
            <img
              src="/ospira-logo.svg"
              alt="Ospira Logo"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-contain shadow-xs transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Animated "ospira" Text - Exact official lowercase geometric font */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              brandVisible
                ? "max-w-[160px] opacity-100 translate-x-0"
                : "max-w-0 opacity-0 -translate-x-3 pointer-events-none"
            }`}
          >
            <span
              className="block font-logo text-[1.85rem] sm:text-[2.1rem] font-normal lowercase tracking-[-0.035em] text-[#18181b] whitespace-nowrap leading-none transition-colors duration-200 group-hover:text-[#4A1A6B]"
              style={{ fontFamily: "'Century Gothic', 'Questrial', -apple-system, sans-serif", fontWeight: 400 }}
            >
              ospira
            </span>
          </div>
        </a>

        {/* Center Floating Pill Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#ECE2E6]/90 bg-white/75 p-1.5 shadow-[0_2px_12px_-2px_rgba(35,9,47,0.04)] backdrop-blur-md md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-1.5 text-[13.5px] font-medium text-[#6B4F66] transition-all duration-200 hover:bg-[#F4EAF5] hover:text-[#4A1A6B]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button - Pixel-aligned with hero photo card */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#final-cta"
            className="group inline-flex items-center gap-2 rounded-full bg-[#4A1A6B] px-5 py-2.5 text-sm font-semibold text-[#FFFBFF] shadow-[0_8px_20px_-6px_rgba(74,26,107,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3D1358] hover:shadow-[0_12px_24px_-6px_rgba(74,26,107,0.6)] active:translate-y-0"
          >
            <span>Book a call</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2.5 md:hidden">
          <a
            href="#final-cta"
            className="rounded-full bg-[#4A1A6B] px-3.5 py-1.5 text-xs font-semibold text-[#FFFBFF] shadow-xs transition-transform duration-300 active:scale-95"
          >
            Book a call
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#23092F] transition-colors hover:bg-[#F4EAF5] focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="relative block h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`overflow-hidden border-b ${
          scrolled ? "border-[#E2D2E6] bg-[#F4EAF5]/95" : "border-[#ECE2E6] bg-[#FFFBFF]/95"
        } backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col space-y-2 px-6 py-4">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: mobileMenuOpen ? `${i * 35}ms` : "0ms" }}
              className={`block rounded-lg px-3 py-2 text-base font-medium text-[#23092F] transition-all duration-300 hover:bg-[#F4EAF5] hover:text-[#4A1A6B] ${
                mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
              }`}
            >
              {n.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#final-cta"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4A1A6B] py-2.5 text-center text-sm font-semibold text-[#FFFBFF] shadow-[0_8px_20px_-6px_rgba(74,26,107,0.45)] transition-transform duration-300 active:scale-95"
            >
              <span>Book a call</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
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
