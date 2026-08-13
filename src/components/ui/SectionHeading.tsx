"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import GradientText from "./GradientText";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  gradientWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const parts = gradientWord ? title.split(gradientWord) : [title];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-text">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {gradientWord ? (
          <>
            {parts[0]}
            <GradientText>{gradientWord}</GradientText>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base text-foreground-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
