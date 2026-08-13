"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SuccessAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center gap-4 py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
      >
        <CheckCircle2 className="h-16 w-16 text-accent-text" />
      </motion.div>
      <h3 className="font-display text-xl font-semibold text-foreground">
        Message sent!
      </h3>
      <p className="max-w-xs text-sm text-foreground-muted">
        Thanks for reaching out — I&apos;ll reply to your email as soon as
        possible.
      </p>
    </motion.div>
  );
}
