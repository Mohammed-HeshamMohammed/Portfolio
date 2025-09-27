import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection/ExperienceSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection/PortfolioSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./components/navigation/header";
import { SkillsSection } from "./sections/SkillsSection/SkillsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { WhyHireMeSection } from "./sections/WhyHireMeSection/WhyHireMeSection";

export const Desktop = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen items-center bg-white overflow-x-hidden">
      <ServicesSection />
      <ProjectsSection />
      <HeroSection />
      <ExperienceSection />
      <WhyHireMeSection />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};
