import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" &&
          "bg-primary-500/10 text-primary-text border border-primary-500/20",
        variant === "outline" &&
          "border border-border text-foreground-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
