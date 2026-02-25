/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Plane, Gamepad2, Zap, Code } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const interests = [
  {
    icon: Music,
    label: "Musique",
    description: "J'aime écouter et créer de la musique dans mon temps libre.",
  },
  {
    icon: Plane,
    label: "Voyages",
    description:
      "Explorer de nouveaux pays et cultures est un passe-temps que je chéris.",
  },
  {
    icon: Gamepad2,
    label: "Jeux vidéo",
    description: "Je joue régulièrement à des jeux vidéo pour me détendre.",
  },
  {
    icon: Zap,
    label: "Technologie",
    description:
      "Je suis toujours à la recherche des dernières avancées technologiques.",
  },
  {
    icon: Code,
    label: "Développement",
    description:
      "Coder est ma passion et je m'efforce constamment d'améliorer mes compétences.",
  },
];

export function AboutSection() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interestsData = [
    { icon: Music, label: t.about.interests_list[0] },
    { icon: Plane, label: t.about.interests_list[1] },
    { icon: Gamepad2, label: t.about.interests_list[2] },
    { icon: Zap, label: t.about.interests_list[3] },
    { icon: Code, label: t.about.interests_list[4] },
  ];

  const years = t.about.YearsExperience;

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold md:text-5xl mb-8">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="grid gap-8 md:grid-cols-2 items-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>

              <div className="pt-6">
                <p className="text-sm font-semibold text-accent mb-3">
                  {t.about.languages.french.toUpperCase()} /{" "}
                  {t.about.languages.english.toUpperCase()}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {t.about.languages.french}
                    </span>
                    <span className="text-xs text-accent">
                      {t.about.languages.level_native}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {t.about.languages.english}
                    </span>
                    <span className="text-xs text-accent">
                      {t.about.languages.level_professional}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 gap-4">
              {[
                { number: "2+", label: "Années\nd'expérience" },
                { number: "3+", label: "Projets\ncomplétés" },
                { number: "100%", label: "Satisfaction\nclient" },
                { number: "2", label: "Équipes\ndirigées" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="rounded-xl bg-linear-to-br from-primary/20 to-accent/20 border border-border p-6 text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-12">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.about.interests}
            </span>
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-6 md:grid-cols-5 sm:grid-cols-2"
          >
            {interestsData.map((interest) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.label}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group rounded-xl bg-card border border-border/50 p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-accent/20 to-primary/20"
                  >
                    <Icon className="h-6 w-6 text-accent" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {interest.label}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
