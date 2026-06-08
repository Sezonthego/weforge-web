import { ContactSection } from "@/components/contact-section";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Footer } from "@/components/footer";
import { Hero3DStage } from "@/components/hero-3d-stage";
import { InsightsPreview } from "@/components/insights-preview";
import { PracticeSection } from "@/components/practice-section";
import ProductPillars from "@/components/ProductPillars";
import { SystemIntegrations } from "@/components/system-integrations";
import { TherapeuticAreasSection } from "@/components/therapeutic-areas-section";
// import { Trusted } from "@/components/trusted";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero3DStage />
      <Features />
      {/* <ParticipantJourneySection /> */}
      <SystemIntegrations />
      {/* <Agent /> */}
      <PracticeSection />
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
