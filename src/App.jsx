import { Nav, Footer } from "./components/Chrome";
import { LandingHero } from "./components/LandingHero";
import { HowItWorksBanner } from "./components/HowItWorksBanner";
import { InteractiveCheckIn } from "./components/InteractiveCheckIn";
import { NoticeKnowDo } from "./components/NoticeKnowDo";
import { HowOspiraCompares } from "./components/HowOspiraCompares";
import { FullPictureAssessment } from "./components/FullPictureAssessment";
import { WaysWeCanHelp } from "./components/WaysWeCanHelp";
import { SimpleJourney } from "./components/SimpleJourney";
import { WhyTrustUs } from "./components/WhyTrustUs";
import { FaqSection } from "./components/FaqSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBFF] text-foreground">
      <Nav />
      <main>
        <LandingHero />
        <HowItWorksBanner />
        <InteractiveCheckIn />
        <NoticeKnowDo />
        <HowOspiraCompares />
        <FullPictureAssessment />
        <WaysWeCanHelp />
        <SimpleJourney />
        <WhyTrustUs />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
