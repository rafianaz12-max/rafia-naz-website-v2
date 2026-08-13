"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function SkillsPreview() {
  const topSkills = skillCategories.flatMap((category) => category.skills)
    .sort((a, b) => b.level - a.level)
    .slice(0, 10);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Technologies"
          gradientWord="Technologies"
          description="A snapshot of the tools and technologies I use most — see the full breakdown with proficiency levels on the Skills page."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3"
        >
          {topSkills.map((skill) => (
            <motion.div key={skill.name} variants={fadeInUp}>
              <Badge className="px-4 py-2 text-sm">{skill.name}</Badge>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="/skills" variant="secondary" icon={ArrowRight}>
            See Full Skill Set
          </Button>
        </div>
      </Container>
    </section>
  );
}
