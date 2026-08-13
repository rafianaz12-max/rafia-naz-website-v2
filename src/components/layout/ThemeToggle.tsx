"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:scale-105"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-accent-400" />
      ) : (
        <Moon className="h-4 w-4 text-primary-500" />
      )}
    </button>
  );
}
