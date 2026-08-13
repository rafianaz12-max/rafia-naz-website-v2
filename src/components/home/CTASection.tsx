"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glow-ring glass relative overflow-hidden rounded-3xl px-8 py-16 text-center"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-radial-glow" />
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s build something{" "}
            <GradientText>intelligent</GradientText> together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-muted">
            Open to internships, collaborations, and frontend or AI-integration
            projects. If it involves clean interfaces and useful AI, I&apos;m
            interested.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" icon={Mail} iconPosition="left">
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
