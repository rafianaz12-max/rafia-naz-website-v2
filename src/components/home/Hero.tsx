"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { Linkedin, Instagram, Music2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import AnimatedBackground from "./AnimatedBackground";
import MouseGlow from "./MouseGlow";
import TypingText from "./TypingText";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap = { Linkedin, Instagram, Music2 };

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <AnimatedBackground />
      <MouseGlow />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent-text"
            >
              Portfolio
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m {personalInfo.name}
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="mt-4 font-display text-2xl font-semibold text-foreground-muted sm:text-3xl md:text-4xl"
            >
              <TypingText words={personalInfo.roles} className="text-gradient" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-base text-foreground-muted md:text-lg"
            >
              {personalInfo.tagline} Final-year student at{" "}
              {personalInfo.university}, building AIz-powered web applications
              with Next.js, TypeScript, and agentic AI tooling.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button href="/projects" icon={ArrowRight}>
                View Projects
              </Button>
              <Button
                href="/resume/rafia_naz.pdf"
                external
                variant="secondary"
                icon={Download}
                iconPosition="left"
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full glass transition-all hover:-translate-y-1 hover:shadow-glow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative mx-auto aspect-square w-full max-w-sm"
          >
            <div className="glow-ring relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/profile/rafia-naz.jpg"
                alt={`Portrait of ${personalInfo.name}`}
                fill
                priority
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl glass px-5 py-3 shadow-glow-sm">
              <p className="text-xs text-foreground-muted">Studying at</p>
              <p className="text-sm font-semibold text-foreground">
                {personalInfo.university}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
