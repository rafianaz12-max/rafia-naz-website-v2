"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, Target } from "lucide-react";
import { ExperienceItem, ExperienceType } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/utils/cn";

interface TimelineItemProps {
  item: ExperienceItem;
  align: "left" | "right";
}

const iconMap: Record<ExperienceType, typeof GraduationCap> = {
  education: GraduationCap,
  internship: Briefcase,
  learning: BookOpen,
  goal: Target,
};

const typeLabel: Record<ExperienceType, string> = {
  education: "Education",
  internship: "Experience",
  learning: "Learning",
  goal: "Goal",
};

export default function TimelineItem({ item, align }: TimelineItemProps) {
  const Icon = iconMap[item.type];

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "relative flex flex-col gap-4 md:flex-row md:items-center",
        align === "right" && "md:flex-row-reverse"
      )}
    >
      <div className="flex-1">
        <GlassCard hover={false}>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <Badge>{typeLabel[item.type]}</Badge>
            {item.current && (
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
            )}
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-accent-text">
            {item.duration}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="text-sm text-foreground-muted">{item.organization}</p>
          <p className="mt-2 text-sm text-foreground-muted">
            {item.description}
          </p>
        </GlassCard>
      </div>
      <div className="hidden w-2.5 shrink-0 justify-center md:flex">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-primary shadow-glow-sm" />
      </div>
      <div className="flex-1 max-md:hidden" />
    </motion.div>
  );
}
