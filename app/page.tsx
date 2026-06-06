import { ContactSection } from "@/components/contact-section";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Footer } from "@/components/footer";
import { Hero3DStage } from "@/components/hero-3d-stage";
import { InsightsPreview } from "@/components/insights-preview";
import ProductPillars from "@/components/ProductPillars";
import { TherapeuticAreasSection } from "@/components/therapeutic-areas-section";
import Agent from "@/components/agent";
// import { Trusted } from "@/components/trusted";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero3DStage />
      <Features />
      {/* <ParticipantJourneySection /> */}
      <Agent />
      <TherapeuticAreasSection />
      {/* <Speed /> */}
      <ProductPillars />  
      <FeaturesSecondary />
      {/* <Trusted />  */}
      <FeaturesTertiary />
      <InsightsPreview />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
