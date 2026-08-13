import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Biography from "@/components/about/Biography";
import EducationCard from "@/components/about/EducationCard";
import AchievementsGrid from "@/components/about/AchievementsGrid";
import AboutTimeline from "@/components/about/AboutTimeline";
import DownloadResumeButton from "@/components/about/DownloadResumeButton";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Rafia Naz, a Final Year Mechanical Engineering student, Web Developer, and Agentic AI Developer building AI powered web applications.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          gradientWord="Me"
          align="left"
          className="mx-0"
        />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            <Biography />
            <DownloadResumeButton />

            <div>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                My Journey
              </h2>
              <AboutTimeline />
            </div>
          </div>

          <div className="space-y-6">
            <EducationCard />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
            Achievements
          </h2>
          <AchievementsGrid />
        </div>
      </Container>
    </div>
  );
}
