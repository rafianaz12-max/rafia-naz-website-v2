import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "@/components/projects/ProjectGrid";
import MechanicalProjectGrid from "@/components/projects/MechanicalProjectGrid";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore Rafia Naz's web development projects (Next.js, TypeScript, AI-powered platforms) and mechanical engineering projects (robotics, instrumentation).",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects & Case Studies"
          gradientWord="Projects"
          description="Five live web applications built with Next.js and AI, plus hands-on mechanical engineering and robotics builds."
        />

        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Web Development Projects
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Live, deployed applications — each with a full case study.
          </p>
        </div>
        <ProjectGrid />

        <div className="mb-6 mt-20">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Mechanical Engineering Projects
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Hands-on hardware builds spanning robotics and instrumentation.
          </p>
        </div>
        <MechanicalProjectGrid />
      </Container>
    </div>
  );
}
