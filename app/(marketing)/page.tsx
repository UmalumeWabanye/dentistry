import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { TreatmentJourneySection } from "@/components/home/TreatmentJourneySection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { InsuranceSection } from "@/components/home/InsuranceSection";
import { FAQSectionHome } from "@/components/home/FAQSectionHome";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TreatmentJourneySection />
      <DoctorsSection />
      <TestimonialsSection />
      <TechnologySection />
      <InsuranceSection />
      <FAQSectionHome />
      <CTABanner />
    </>
  );
}
