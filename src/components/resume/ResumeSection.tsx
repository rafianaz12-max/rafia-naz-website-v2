"use client";

import { motion } from "framer-motion";
import { Download, Printer } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { experienceItems } from "@/data/experience";
import { certificates } from "@/data/certificates";
import { allProjects } from "@/data/projects";
import { formatDate } from "@/utils/formatDate";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function ResumeSection() {
  const handlePrint = () => window.print();

  return (
    <div className="print:bg-white">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4 print:hidden">
        <Button
          href="/resume/rafia_naz.pdf"
          external
          icon={Download}
          iconPosition="left"
        >
          Download PDF
        </Button>
        <Button variant="secondary" onClick={handlePrint} icon={Printer} iconPosition="left">
          Print Resume
        </Button>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <GlassCard hover={false}>
            <h1 className="font-display text-2xl font-bold text-foreground">
              {personalInfo.name}
            </h1>
            <p className="mt-1 text-sm text-primary-text">
              {personalInfo.roles.join(" • ")}
            </p>
            <p className="mt-4 text-sm text-foreground-muted">
              {personalInfo.careerGoal}
            </p>
            <p className="mt-3 text-xs text-foreground-muted">
              {personalInfo.email} • {personalInfo.location}
            </p>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard hover={false}>
            <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
              Education
            </h2>
            <p className="text-sm font-medium text-foreground">
              {personalInfo.degree}
            </p>
            <p className="text-sm text-foreground-muted">
              {personalInfo.university}
            </p>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard hover={false}>
            <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
              Skills
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <p className="mb-1 text-sm font-medium text-foreground">
                    {category.title}
                  </p>
                  <p className="text-xs text-foreground-muted">
                    {category.skills.map((skill) => skill.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard hover={false}>
            <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
              Experience & Learning
            </h2>
            <div className="space-y-4">
              {experienceItems.map((item) => (
                <div key={item.id}>
                  <p className="text-sm font-medium text-foreground">
                    {item.title} — {item.organization}
                  </p>
                  <p className="text-xs text-foreground-muted">
                    {item.duration}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard hover={false}>
            <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
              Projects
            </h2>
            <div className="space-y-2">
              {allProjects.slice(0, 4).map((project) => (
                <p key={project.slug} className="text-sm text-foreground-muted">
                  <span className="font-medium text-foreground">
                    {project.title}
                  </span>{" "}
                  — {project.shortDescription}
                </p>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard hover={false}>
            <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
              Certificates
            </h2>
            <div className="space-y-2">
              {certificates.map((certificate) => (
                <p key={certificate.id} className="text-sm text-foreground-muted">
                  <span className="font-medium text-foreground">
                    {certificate.title}
                  </span>{" "}
                  — {certificate.issuer}, {formatDate(certificate.date)}
                </p>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
