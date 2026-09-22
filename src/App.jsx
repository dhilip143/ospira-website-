import { Nav, Footer } from "./components/Chrome";
import { LandingHero } from "./components/LandingHero";
import { HowItWorksBanner } from "./components/HowItWorksBanner";
import { NoticeKnowDo } from "./components/NoticeKnowDo";
import { WaysWeCanHelp } from "./components/WaysWeCanHelp";
import { SimpleJourney } from "./components/SimpleJourney";
import { WhyTrustUs } from "./components/WhyTrustUs";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { OriChatbot } from "./components/OriChatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBFF] text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <LandingHero />
        <HowItWorksBanner />
        <NoticeKnowDo />
        <WaysWeCanHelp />
        <SimpleJourney />
        <WhyTrustUs />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      {/* Ori — floating AI chat assistant */}
      <OriChatbot />
    </div>
  );
}

