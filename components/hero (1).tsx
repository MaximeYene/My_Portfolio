"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // ✅ easing typé correctement
    },
  },
};

export function Hero() {
  const t = useTranslations();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MaximeYene",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/joseph-maxime-yene-84a1481bb",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:maximeyene@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="profil"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-8 py-20 text-center lg:py-32"
        >
          {/* Avatar */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-accent/50 bg-linear-to-br from-primary to-accent p-1"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-4xl font-bold text-accent">
              JY
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Joseph Maxime YENE
              </span>
            </h1>
            <p className="text-xl font-semibold text-accent md:text-2xl">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            {t.hero.description}
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {t.hero.skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "var(--accent)" }}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#projets"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-linear-to-r from-primary to-accent px-8 py-3 font-semibold text-accent-foreground shadow-lg transition-all"
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="rounded-full bg-secondary p-3 text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        >
          <div className="text-sm text-muted-foreground">{t.hero.scroll}</div>
        </motion.div>
      </div>
    </section>
  );
}
