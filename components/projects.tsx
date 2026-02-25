'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const projectGradients = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-orange-500 to-red-500', 'from-green-500 to-emerald-500']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function Projects() {
  const t = useTranslations()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projets" ref={ref} className="relative py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
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
              {t.projects.title}
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2"
        >
          {t.projects.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 transition-all hover:border-accent/50 hover:shadow-2xl"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 -z-10 bg-linear-to-br ${projectGradients[index % projectGradients.length]} opacity-0 transition-opacity group-hover:opacity-5`} />

              {/* Content */}
              <div className="flex flex-col h-full gap-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border/50">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    {t.projects.view}
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-linear-to-r from-accent/50 to-primary/50 opacity-0 transition-opacity group-hover:opacity-10 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
