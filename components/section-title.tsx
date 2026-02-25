"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={centered ? "text-center" : ""}
    >
      <h2 className="text-4xl font-bold md:text-5xl">
        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
