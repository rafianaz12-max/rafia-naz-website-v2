"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

interface ButtonAsButton extends BaseButtonProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  primary:
    "bg-gradient-primary text-white shadow-glow-sm hover:shadow-glow",
  secondary:
    "glass text-foreground hover:border-primary-400/40",
  ghost: "text-foreground-muted hover:text-foreground",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon: Icon,
    iconPosition = "right",
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out-expo",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" />}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className={classes}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButton;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      className={cn(classes, disabled && "cursor-not-allowed opacity-50")}
    >
      {content}
    </motion.button>
  );
}
