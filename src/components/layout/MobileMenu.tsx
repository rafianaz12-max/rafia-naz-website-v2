"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const { isActive } = useActiveSection();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
    >
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
        }}
        className="flex h-full flex-col items-center justify-center gap-4"
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.href}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className={cn(
                "font-display text-2xl font-semibold transition-colors",
                isActive(link.href)
                  ? "text-gradient"
                  : "text-foreground-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
