import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ResumeSection from "@/components/resume/ResumeSection";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description:
    "View, download, or print Rafia Naz's resume — education, skills, projects, and certificates in one place.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="pt-32 pb-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="CV"
          title="Resume"
          gradientWord="Resume"
          description="A live summary of my background — download the PDF for a shareable copy."
        />
        <ResumeSection />
      </Container>
    </div>
  );
}
