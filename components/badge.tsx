"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function Badge({
  children,
  variant = "secondary",
  size = "md",
  animated = true,
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-2 rounded-full font-medium";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    outline: "border-2 border-accent text-accent",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const Component = (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {Component}
      </motion.div>
    );
  }

  return Component;
}
