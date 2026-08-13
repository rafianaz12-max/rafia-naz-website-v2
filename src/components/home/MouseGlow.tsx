"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none absolute -z-10 hidden h-96 w-96 rounded-full bg-primary-500/10 blur-[90px] transition-transform duration-300 ease-out lg:block"
      style={{ transform: `translate(${x - 192}px, ${y - 192}px)` }}
    />
  );
}
