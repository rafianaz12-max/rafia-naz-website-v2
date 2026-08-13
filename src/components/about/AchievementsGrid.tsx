"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { personalInfo } from "@/data/personal";
import GlassCard from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function AchievementsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {personalInfo.achievements.map((achievement) => (
        <motion.div key={achievement.title} variants={fadeInUp}>
          <GlassCard className="h-full">
            <Award className="mb-3 h-6 w-6 text-accent-text" />
            <h3 className="font-display text-base font-semibold text-foreground">
              {achievement.title}
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              {achievement.description}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
