"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import AnimatedBackground from "@/components/home/AnimatedBackground";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <AnimatedBackground />
      <Container className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-8xl font-bold text-gradient sm:text-9xl"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl"
        >
          This page took a wrong turn.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-3 max-w-md text-foreground-muted"
        >
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Let&apos;s get you back to{" "}
          <GradientText>somewhere useful</GradientText>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button href="/" icon={Home} iconPosition="left">
            Back to Home
          </Button>
          <Button href="/projects" variant="secondary" icon={ArrowLeft}>
            View Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
