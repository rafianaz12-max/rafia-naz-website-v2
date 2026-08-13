"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Statistic } from "@/types";

const stats: Statistic[] = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies Learned", value: 18, suffix: "+" },
  { label: "Certificates Earned", value: 4 },
  { label: "Years of Study", value: 3, suffix: "+" },
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass rounded-2xl px-6 py-8 text-center"
            >
              <p className="font-display text-3xl font-bold text-gradient md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-foreground-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
