import { Nav, Footer } from "./components/Chrome";
import { Quiz } from "./components/Quiz";
import {
  Hero,
  HowItWorks,
  WhatItIs,
  Assessment,
  Programmes,
  Trust,
  Proof,
  FaqCta,
} from "./components/Sections";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Quiz />
        <WhatItIs />
        <Assessment />
        <Programmes />
        <Trust />
        <Proof />
        <FaqCta />
      </main>
      <Footer />
    </div>
  );
}
