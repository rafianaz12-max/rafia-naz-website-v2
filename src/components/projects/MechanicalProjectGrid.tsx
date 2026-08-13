"use client";

import { motion } from "framer-motion";
import { mechanicalProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export default function MechanicalProjectGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-6 sm:grid-cols-2"
    >
      {mechanicalProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}
