"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounterAnimation(value, isInView);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
