import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, LockKeyhole, Play } from "lucide-react";
import gsap from "gsap";

const HEADLINE_WORDS = "Every child has a story worth understanding.".split(" ");
const heroImage = "/hero-crafting.jpg";

export function LandingHero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const containerRef = useRef(null);
  const visualRef = useRef(null);
  const pathRevealRef = useRef(null);
  const tag1Ref = useRef(null);
  const tag2Ref = useRef(null);
  const tag3Ref = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event) =>
      setReduceMotion(event?.matches ?? mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const tags = [tag1Ref.current, tag2Ref.current, tag3Ref.current].filter(Boolean);
    const path = pathRevealRef.current;
    const container = containerRef.current;
    if (!container) return;

    if (reduceMotion) {
      const words = container.querySelectorAll(".anim-word");
      gsap.set(["#eyebrow", "#subhead", "#cta1", "#cta2", "#meta", "#visual", ...tags], {
        opacity: 1,
        y: 0,
        scale: 1,
      });
      if (words.length) gsap.set(words, { y: "0%" });
      if (path) gsap.set(path, { strokeDashoffset: 0 });
      return;
    }

    const context = gsap.context(() => {
      const words = container.querySelectorAll(".anim-word");

      if (path) {
        gsap.set(path, { strokeDasharray: 1, strokeDashoffset: 1 });
      }

      // One orchestrated, buttery-smooth load sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to("#eyebrow", { opacity: 1, y: 0, duration: 0.6 })
        .to(words, { y: "0%", duration: 0.9, ease: "power4.out", stagger: 0.045 }, "-=0.25")
        .to("#subhead", { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
        .to(["#cta1", "#cta2"], { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 }, "-=0.4")
        .to("#meta", { opacity: 1, y: 0, duration: 0.55 }, "-=0.3")
        .to("#visual", { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.7");

      if (path) {
        tl.to(path, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" }, "<");
      }

      tl.to(tags, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, "-=0.5");

      // Once the tags have landed, hand them off to an endless, gentle bob —
      // each on its own duration/offset so the three drift instead of syncing
      tags.forEach((el, i) => {
        gsap.to(el, {
          y: "+=" + (10 + i * 3),
          duration: 2.4 + i * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1.1 + i * 0.15,
        });
      });
    }, containerRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="landing-hero-container relative overflow-hidden text-[var(--foreground)] bg-[var(--background)] min-h-[calc(100vh-5rem)] flex flex-col justify-center"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&display=swap');

        .landing-hero-container {
          --background: #FFFBFF;
          --foreground: #23092F;
          --primary: #4A1A6B;
          --primary-foreground: #FFFBFF;
          --secondary: #C87E4F;
          --secondary-foreground: #23092F;
          --muted: #F5EDF0;
          --muted-foreground: #6B4F66;
          --accent: #FFD89E;
          --accent-foreground: #23092F;
          --border: #ECE2E6;
          --card: #FFFFFF;
          --card-foreground: #23092F;
          --soft-purple: #F4EAF5;
          --sage: #8FB8A6;
          --deep-sage: #3E6F5C;
          --shadow-photo: 0 32px 75px -36px rgba(35, 9, 47, 0.48);
          --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
          --font-display: "Lora", Georgia, serif;
          font-family: var(--font-sans);
        }

        .landing-hero-container * {
          box-sizing: border-box;
          border-color: var(--border);
        }

        .hero-wrap {
          width: 100%;
          padding: 40px 32px;
        }

        .hero-grid {
          width: min(1240px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(450px, 0.84fr);
          align-items: center;
          gap: clamp(74px, 9vw, 144px);
        }

        .hero-copy {
          padding: 30px 0 26px;
          max-width: 660px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--deep-sage);
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          opacity: 0;
          transform: translateY(10px);
        }

        .eyebrow span {
          width: 24px;
          height: 2px;
          background: var(--deep-sage);
        }

        .hero-title {
          max-width: 680px;
          margin: 23px 0 24px;
          font-family: var(--font-display);
          font-size: clamp(48px, 5.5vw, 78px);
          line-height: 1.03;
          font-weight: 500;
          letter-spacing: 0;
        }

        .word-clip {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          margin-bottom: -0.12em;
          padding-bottom: 0.12em;
        }

        .anim-word {
          display: inline-block;
          transform: translateY(115%);
          will-change: transform;
        }

        .hero-subhead {
          max-width: 590px;
          margin: 0;
          color: var(--muted-foreground);
          font-size: 18px;
          line-height: 1.75;
          opacity: 0;
          transform: translateY(14px);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 17px;
          margin-top: 34px;
        }

        .primary-action,
        .secondary-action {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          opacity: 0;
          transform: translateY(14px);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .primary-action {
          padding: 0 23px;
          color: var(--primary-foreground);
          background: var(--primary);
          box-shadow: 0 14px 26px -17px var(--primary);
        }

        .primary-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 30px -17px var(--primary);
        }

        .secondary-action {
          padding: 0 8px;
          color: inherit;
        }

        .secondary-action:hover {
          color: var(--primary);
        }

        .play-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 50%;
          background: var(--card);
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin: 34px 0 0;
          padding: 25px 0 0;
          list-style: none;
          border-top: 1px solid var(--border);
          color: var(--muted-foreground);
          font-size: 12px;
          font-weight: 700;
          opacity: 0;
          transform: translateY(14px);
        }

        .hero-meta li {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .meta-icon {
          width: 23px;
          height: 23px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--deep-sage);
          background: rgba(143, 184, 166, 0.22);
        }

        .hero-visual {
          position: relative;
          width: 100%;
          max-width: 520px;
          justify-self: end;
          padding-left: 36px;
          opacity: 0;
          transform: scale(0.96);
          transform-origin: center bottom;
        }

        .image-frame {
          position: relative;
          z-index: 1;
          aspect-ratio: 5 / 6;
          overflow: hidden;
          border-radius: 8px 8px 100px 8px;
          background: var(--soft-purple);
          box-shadow: var(--shadow-photo);
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .image-wash {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            165deg,
            rgba(74, 26, 107, 0.16),
            transparent 45%,
            rgba(200, 126, 79, 0.12)
          );
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .image-note {
          position: absolute;
          z-index: 2;
          right: 22px;
          bottom: 22px;
          display: flex;
          flex-direction: column;
          padding: 13px 16px;
          border-radius: 5px;
          color: var(--foreground);
          background: rgba(255, 255, 255, 0.91);
          backdrop-filter: blur(8px);
          font-size: 12px;
        }

        .image-note strong {
          font-family: var(--font-display);
          font-size: 16px;
        }

        .journey-line {
          position: absolute;
          z-index: 2;
          left: -64px;
          top: -14px;
          height: calc(100% + 28px);
          width: 178px;
          color: var(--secondary);
          overflow: visible;
          pointer-events: none;
        }

        .journey-tag {
          position: absolute;
          z-index: 3;
          width: 142px;
          height: 45px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 12px 6px 7px;
          border: 1px solid rgba(74, 26, 107, 0.13);
          border-radius: 5px;
          color: var(--primary);
          background: var(--card);
          box-shadow: 0 12px 25px -17px rgba(35, 9, 47, 0.5);
          font-size: 13px;
          font-weight: 800;
          will-change: transform;
          opacity: 0;
          transform: translateY(18px);
        }

        .tag-index {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border-radius: 3px;
          color: var(--primary-foreground);
          background: var(--primary);
          font-family: var(--font-display);
          font-size: 11px;
        }

        .tag-one { left: -86px; top: 12%; }
        .tag-two { left: -49px; top: 47%; }
        .tag-three { left: -75px; bottom: 9%; }

        @media (max-width: 980px) {
          .hero-wrap { padding: 48px 24px; }
          .hero-grid { grid-template-columns: 1fr; gap: 54px; }
          .hero-copy { max-width: 740px; }
          .hero-visual { justify-self: center; width: min(90%, 560px); }
        }

        @media (max-width: 640px) {
          .hero-wrap { padding: 36px 18px; }
          .hero-title { font-size: 46px; }
          .hero-subhead { font-size: 16px; line-height: 1.65; }
          .hero-actions { align-items: stretch; flex-direction: column; }
          .primary-action, .secondary-action { width: 100%; }
          .secondary-action { border: 1px solid var(--border); }
          .hero-meta { gap: 14px 20px; }
          .hero-visual { width: calc(100% - 30px); padding-left: 0; margin-left: 30px; }
          .journey-line { left: -50px; width: 132px; }
          .journey-tag { width: 121px; height: 40px; font-size: 11px; padding: 5px; }
          .tag-index { width: 28px; height: 28px; }
          .tag-one { left: -45px; }
          .tag-two { left: -30px; }
          .tag-three { left: -44px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .eyebrow,
          .hero-subhead,
          .primary-action,
          .secondary-action,
          .hero-meta,
          .hero-visual,
          .anim-word,
          .journey-tag {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section id="top" className="hero-wrap" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <div id="eyebrow" className="eyebrow">
              <span aria-hidden="true" /> Science-backed child development
            </div>
            <h1 id="hero-heading" className="hero-title">
              {HEADLINE_WORDS.map((word, index) => (
                <span className="word-clip" key={`${word}-${index}`}>
                  <span className="anim-word">{word}&nbsp;</span>
                </span>
              ))}
            </h1>
            <p id="subhead" className="hero-subhead">
              Growing Minds maps how your child thinks, learns, and connects—then turns those
              insights into a calm, practical path forward for your family.
            </p>

            <div className="hero-actions">
              <a href="#quiz" id="cta1" className="primary-action">
                Start the free check-in <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" id="cta2" className="secondary-action">
                <span className="play-icon">
                  <Play size={13} fill="currentColor" />
                </span>
                See how it works
              </a>
            </div>

            <ul id="meta" className="hero-meta" aria-label="Check-in details">
              <li>
                <span className="meta-icon">
                  <Check size={14} />
                </span>
                Ages 4–18
              </li>
              <li>
                <span className="meta-icon">
                  <Check size={14} />
                </span>
                10-minute check-in
              </li>
              <li>
                <span className="meta-icon">
                  <LockKeyhole size={13} />
                </span>
                Private &amp; secure
              </li>
            </ul>
          </div>

          <div id="visual" className="hero-visual" ref={visualRef}>
            <div className="image-frame">
              <img
                src={heroImage}
                alt="A mother and daughter sharing a high-five while learning together"
                width={1200}
                height={1440}
                loading="eager"
              />
              <div className="image-wash" aria-hidden="true" />
              <div className="image-note">
                <strong>Small moments.</strong>
                <span>Meaningful signals.</span>
              </div>
            </div>

            <svg className="journey-line" viewBox="0 0 180 620" fill="none" aria-hidden="true">
              <defs>
                <mask id="path-reveal">
                  <path
                    ref={pathRevealRef}
                    pathLength="1"
                    d="M151 22C40 54 24 121 94 178C170 240 159 311 77 350C-3 389 8 480 105 511C158 528 168 566 130 601"
                    stroke="white"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </mask>
              </defs>
              <path
                d="M151 22C40 54 24 121 94 178C170 240 159 311 77 350C-3 389 8 480 105 511C158 528 168 566 130 601"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 13"
                mask="url(#path-reveal)"
              />
              <circle cx="151" cy="22" r="5" fill="currentColor" />
              <circle cx="130" cy="601" r="5" fill="currentColor" />
            </svg>

            <div ref={tag1Ref} className="journey-tag badge-tag tag-one">
              <span className="tag-index">01</span>
              <span>Curiosity</span>
            </div>
            <div ref={tag2Ref} className="journey-tag badge-tag tag-two">
              <span className="tag-index">02</span>
              <span>Confidence</span>
            </div>
            <div ref={tag3Ref} className="journey-tag badge-tag tag-three">
              <span className="tag-index">03</span>
              <span>Clarity</span>
            </div>
          </div>
        </div>
      </section>

      <div id="check-in" />
    </div>
  );
}

// Re-export for backward compatibility
export const Hero = LandingHero;
export default LandingHero;