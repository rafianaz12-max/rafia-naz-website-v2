"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { experienceItems } from "@/data/experience";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export default function ExperienceTimeline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-8"
    >
      {experienceItems.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          align={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </motion.div>
  );
}
