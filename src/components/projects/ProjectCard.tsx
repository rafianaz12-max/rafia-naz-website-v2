"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/types";
import Badge from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isWeb = project.kind === "web";

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group glass overflow-hidden rounded-2xl shadow-glass transition-shadow duration-300 hover:shadow-glow"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
          <Image
            src={project.bannerImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Badge>{project.category}</Badge>
          {isWeb && (
            <div className="flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-foreground-muted transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-foreground-muted transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        <Link href={`/projects/${project.slug}`}>
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary-text">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-foreground-muted">
          {project.shortDescription}
        </p>

        {isWeb ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow-sm transition-shadow hover:shadow-glow"
          >
            View Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
