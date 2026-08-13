"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export default function ServicesGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  );
}
