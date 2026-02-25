"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "@/hooks/use-translations";

const skillsColorMap = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-purple-500 to-pink-500",
  devops: "from-orange-500 to-red-500",
  ml: "from-green-500 to-emerald-500",
};

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

export function Skills() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillsData = [
    {
      key: "frontend" as const,
      category: t.skills.categories.frontend,
      skills: t.skills.skills.frontend,
    },
    {
      key: "backend" as const,
      category: t.skills.categories.backend,
      skills: t.skills.skills.backend,
    },
    {
      key: "devops" as const,
      category: t.skills.categories.devops,
      skills: t.skills.skills.devops,
    },
    {
      key: "ml" as const,
      category: t.skills.categories.ml,
      skills: t.skills.skills.ml,
    },
  ];

  return (
    <section id="competences" ref={ref} className="relative py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillsData.map((skillGroup) => (
            <motion.div
              key={skillGroup.key}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 border border-border/50 transition-all hover:border-accent/50"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 -z-10 bg-linear-to-br ${skillsColorMap[skillGroup.key]} opacity-0 transition-opacity group-hover:opacity-10`}
              />

              {/* Category Title */}
              <h3 className="mb-6 text-xl font-bold text-foreground">
                {skillGroup.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {skillGroup.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`h-2 w-2 rounded-full bg-linear-to-r ${skillsColorMap[skillGroup.key]}`}
                    />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-linear-to-r from-accent/50 to-primary/50 opacity-0 transition-opacity group-hover:opacity-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
