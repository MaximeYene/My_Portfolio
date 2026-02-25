'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

export function Experience() {
  const t = useTranslations()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="relative py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
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
              {t.experience.title}
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {t.experience.positions.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== t.experience.positions.length - 1 && (
                <div className="absolute left-8 top-24 -bottom-12 w-1 bg-linear-to-b from-accent to-primary/50" />
              )}

              <div className="flex gap-8">
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-primary"
                >
                  {experience.role.includes('Ingénieur') || experience.role.includes('Fullstack') ? (
                    <Briefcase className="h-8 w-8 text-accent-foreground" />
                  ) : (
                    <Calendar className="h-8 w-8 text-accent-foreground" />
                  )}
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground">{experience.role}</h3>
                      <p className="text-lg font-semibold text-accent">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <motion.ul
                    className="mt-6 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {experience.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
