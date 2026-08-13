"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Biography() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-4"
    >
      {personalInfo.bio.map((paragraph, index) => (
        <motion.p
          key={index}
          variants={fadeInUp}
          className="text-base leading-relaxed text-foreground-muted md:text-lg"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
}
