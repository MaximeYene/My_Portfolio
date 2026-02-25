"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
}

export function AnimatedCard({
  children,
  className = "",
  hover = true,
  gradient,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hover ? { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" } : {}
      }
      className={`rounded-2xl bg-card border border-border/50 p-8 transition-all ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {gradient && (
        <div
          className={`absolute inset-0 -z-10 bg-linear-to-br ${gradient} opacity-0 transition-opacity group-hover:opacity-5 rounded-2xl`}
        />
      )}
      {children}
    </motion.div>
  );
}
