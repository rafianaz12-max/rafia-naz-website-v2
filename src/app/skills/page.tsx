import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategory from "@/components/skills/SkillCategory";
import CircularProgress from "@/components/skills/CircularProgress";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "A detailed breakdown of Rafia Naz's frontend, backend, AI, tooling, and soft skills with proficiency levels.",
  path: "/skills",
});

const highlightSkills = [
  { name: "Next.js", level: 88 },
  { name: "TypeScript", level: 82 },
  { name: "AI Prompting", level: 85 },
  { name: "Tailwind CSS", level: 92 },
];

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Proficiency"
          gradientWord="Proficiency"
          description="A transparent view of where I'm strong today, and where backend and AI skills are actively growing."
        />

        <div className="mb-16 flex flex-wrap justify-center gap-10">
          {highlightSkills.map((skill) => (
            <CircularProgress
              key={skill.name}
              label={skill.name}
              value={skill.level}
            />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </div>
  );
}
