"use client";

import { motion } from "framer-motion";
import { experienceItems } from "@/data/experience";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function AboutTimeline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative border-l border-border pl-8"
    >
      {experienceItems.map((item) => (
        <motion.div key={item.id} variants={fadeInUp} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full bg-gradient-primary shadow-glow-sm" />
          <p className="text-xs font-medium uppercase tracking-wide text-accent-text">
            {item.duration}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="text-sm text-foreground-muted">{item.organization}</p>
          <p className="mt-2 text-sm text-foreground-muted">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
