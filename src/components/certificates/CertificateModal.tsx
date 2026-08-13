"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import { Certificate } from "@/types";
import { formatDate } from "@/utils/formatDate";
import Button from "@/components/ui/Button";

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="glass w-full max-w-2xl overflow-hidden rounded-3xl"
      >
        <div className="relative aspect-[16/10] w-full bg-surface">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {certificate.title}
          </h3>
          <p className="mt-1 text-sm text-foreground-muted">
            {certificate.issuer} • {formatDate(certificate.date)}
          </p>
          <p className="mt-3 text-sm text-foreground-muted">
            {certificate.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={certificate.image} external icon={Download} iconPosition="left">
              Download
            </Button>
            {certificate.credentialUrl && (
              <Button
                href={certificate.credentialUrl}
                external
                variant="secondary"
                icon={ExternalLink}
              >
                Verify Credential
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
