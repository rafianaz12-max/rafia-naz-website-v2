"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Certificate } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { fadeInUp } from "@/lib/animations";

interface CertificateCardProps {
  certificate: Certificate;
  onView: (certificate: Certificate) => void;
}

export default function CertificateCard({
  certificate,
  onView,
}: CertificateCardProps) {
  return (
    <motion.button
      type="button"
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      onClick={() => onView(certificate)}
      className="group glass block w-full overflow-hidden rounded-2xl text-left shadow-glass transition-shadow hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
          <Eye className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-sm font-semibold text-foreground">
          {certificate.title}
        </h3>
        <p className="mt-1 text-xs text-foreground-muted">
          {certificate.issuer} • {formatDate(certificate.date)}
        </p>
      </div>
    </motion.button>
  );
}
