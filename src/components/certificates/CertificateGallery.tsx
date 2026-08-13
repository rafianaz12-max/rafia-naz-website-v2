"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certificates";
import { Certificate } from "@/types";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import { staggerContainer } from "@/lib/animations";

export default function CertificateGallery() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onView={setSelected}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <CertificateModal
            certificate={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
