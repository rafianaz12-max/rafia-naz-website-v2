import { cn } from "@/utils/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3";
}

export default function GradientText({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return <Tag className={cn("text-gradient", className)}>{children}</Tag>;
}
