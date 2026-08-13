"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { webProjects, webProjectCategories } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectSearch from "./ProjectSearch";
import CategoryFilter from "./CategoryFilter";
import { staggerContainer } from "@/lib/animations";

export default function ProjectGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return webProjects.filter((project) => {
      const matchesCategory =
        category === "All" || project.category === category;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div>
      <div className="mb-10 space-y-6">
        <ProjectSearch value={search} onChange={setSearch} />
        <CategoryFilter
          categories={webProjectCategories}
          active={category}
          onChange={setCategory}
        />
      </div>

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={`${search}-${category}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-foreground-muted"
          >
            No projects match your search. Try a different keyword or
            category.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
