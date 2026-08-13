"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

interface ProjectBannerProps {
  project: Project;
}

export default function ProjectBanner({ project }: ProjectBannerProps) {
  const isWeb = project.kind === "web";

  return (
    <section className="relative pt-32">
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src={project.bannerImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>

      <Container className="relative -mt-24">
        <div className="glass rounded-3xl p-8 md:p-10">
          <Badge>{project.category}</Badge>
          <h1 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            {project.shortDescription}
          </p>

          {isWeb ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={project.liveUrl} external icon={ExternalLink}>
                Live Demo
              </Button>
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                icon={Github}
                iconPosition="left"
              >
                View Code
              </Button>
            </div>
          ) : (
            <div className="mt-6">
              <span className="inline-flex items-center rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-text">
                Mechanical Engineering Project
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
