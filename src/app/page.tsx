import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsPreview from "@/components/home/SkillsPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedProjects />
      <SkillsPreview />
      <CTASection />
    </>
  );
}
