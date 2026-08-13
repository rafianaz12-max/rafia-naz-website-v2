"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface CategoryFilterProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === category
              ? "text-white"
              : "text-foreground-muted hover:text-foreground"
          )}
        >
          {active === category && (
            <motion.span
              layoutId="category-pill"
              className="absolute inset-0 rounded-full bg-gradient-primary"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}
