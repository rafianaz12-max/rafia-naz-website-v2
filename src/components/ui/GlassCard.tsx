"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowOnHover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glowOnHover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
          : undefined
      }
      className={cn(
        "glass rounded-2xl p-6 shadow-glass transition-shadow duration-300",
        glowOnHover && "hover:shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
