import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { TechnologySection } from "@/components/home/TechnologySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <DoctorsSection />
      <ServicesSection />
      <TechnologySection />
      <TestimonialsSection />
    </>
  );
}
