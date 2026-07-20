import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Transformation from "@/components/Transformation";
import WhatsInside from "@/components/WhatsInside";
import ShowDontTell from "@/components/ShowDontTell";
import WhyItWorks from "@/components/WhyItWorks";
import FreeCheatSheetPromo from "@/components/FreeCheatSheetPromo";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Hero />
      <Pain />
      <Transformation />
      <WhatsInside />
      <ShowDontTell />
      <WhyItWorks />
      <FreeCheatSheetPromo />
      <SocialProof />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <ExitIntentModal />
    </main>
  );
}
