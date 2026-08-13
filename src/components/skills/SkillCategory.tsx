"use client";

import { motion } from "framer-motion";
import { SkillCategoryData } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import SkillBar from "./SkillBar";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface SkillCategoryProps {
  category: SkillCategoryData;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <GlassCard hover={false} className="h-full">
        <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
          {category.title}
        </h3>
        <div className="space-y-5">
          {category.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
