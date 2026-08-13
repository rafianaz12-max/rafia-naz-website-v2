"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Layers,
  Sparkles,
  Gauge,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { Service } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import { fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Layers,
  Sparkles,
  Gauge,
  PenTool,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div variants={fadeInUp}>
      <GlassCard className="h-full">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-foreground-muted">
          {service.description}
        </p>
        <ul className="mt-4 space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-foreground-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              {feature}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}
