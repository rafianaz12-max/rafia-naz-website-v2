import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "Rafia Naz's professional timeline education, self directed learning, project experience, and future career goals.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Timeline"
          title="Experience & Growth"
          gradientWord="Growth"
          description="From engineering fundamentals to frontend craft to AI here's how the path has unfolded so far."
        />

        <ExperienceTimeline />
      </Container>
    </div>
  );
}
