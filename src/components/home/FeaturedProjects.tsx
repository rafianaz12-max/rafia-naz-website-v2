"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedWebProjects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export default function FeaturedProjects() {
  const featured = getFeaturedWebProjects();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          gradientWord="Projects"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="/projects" variant="secondary" icon={ArrowRight}>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
