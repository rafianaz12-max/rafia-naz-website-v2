"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingTextProps {
  words: string[];
  className?: string;
}

export default function TypingText({ words, className }: TypingTextProps) {
  const text = useTypingEffect({ words });

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-accent-400 align-middle" />
    </span>
  );
}
