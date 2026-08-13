import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Lightbulb,
  Puzzle,
  Sparkles,
  Target,
  Cpu,
  ClipboardList,
} from "lucide-react";
import { allProjects, getProjectBySlug } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import ProjectBanner from "@/components/projects/ProjectBanner";
import ProjectGallery from "@/components/projects/ProjectGallery";
import Badge from "@/components/ui/Badge";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project)
    return buildMetadata({
      title: "Project Not Found",
      description: "This project could not be found.",
      path: `/projects/${slug}`,
    });

  return buildMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
    image: project.bannerImage,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-20">
      <ProjectBanner project={project} />

      <Container className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-12">
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
              Overview
            </h2>
            <p className="text-foreground-muted">{project.description}</p>
          </section>

          {project.kind === "web" ? (
            <>
              <section>
                <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                  <Sparkles className="h-5 w-5 text-accent-text" />
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-foreground-muted"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                  <Puzzle className="h-5 w-5 text-accent-text" />
                  Development Process
                </h2>
                <ul className="space-y-2">
                  {project.developmentProcess.map((step) => (
                    <li key={step} className="text-foreground-muted">
                      • {step}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                  Challenges
                </h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="text-foreground-muted">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                  <Lightbulb className="h-5 w-5 text-accent-text" />
                  Solutions
                </h2>
                <ul className="space-y-2">
                  {project.solutions.map((solution) => (
                    <li key={solution} className="text-foreground-muted">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                  Conclusion
                </h2>
                <p className="text-foreground-muted">{project.conclusion}</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                  <Target className="h-5 w-5 text-accent-text" />
                  Objectives
                </h2>
                <ul className="space-y-2">
                  {project.objectives.map((objective) => (
                    <li
                      key={objective}
                      className="flex items-start gap-2 text-foreground-muted"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                      {objective}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                  <ClipboardList className="h-5 w-5 text-accent-text" />
                  Methodology
                </h2>
                <ul className="space-y-2">
                  {project.methodology.map((step) => (
                    <li key={step} className="text-foreground-muted">
                      • {step}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                  <Cpu className="h-5 w-5 text-accent-text" />
                  Working Principle
                </h2>
                <p className="text-foreground-muted">
                  {project.workingPrinciple}
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                  Outcomes
                </h2>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="text-foreground-muted">
                      • {outcome}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                  Conclusion
                </h2>
                <p className="text-foreground-muted">{project.conclusion}</p>
              </section>
            </>
          )}

          {project.gallery.length > 0 && (
            <section>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                Gallery
              </h2>
              <ProjectGallery images={project.gallery} title={project.title} />
            </section>
          )}
        </div>

        <aside className="glass h-fit rounded-2xl p-6">
          {project.kind === "web" ? (
            <>
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                Tools Used
              </h3>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.toolsUsed.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                Specifications
              </h3>
              <dl className="space-y-3">
                {project.specifications.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs uppercase tracking-wide text-foreground-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </>
          )}
        </aside>
      </Container>
    </div>
  );
}
