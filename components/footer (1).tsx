'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/MaximeYene',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/joseph-maxime-yene-84a1481bb',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:maximeyene@gmail.com',
    label: 'Email',
  },
]

export function Footer() {
  const t = useTranslations()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20">
          {/* Main Content */}
          <div className="grid gap-12 md:grid-cols-2 mb-12">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t.footer.connect}
                  </span>
                </h3>
                <p className="text-muted-foreground">
                  {t.footer.description}
                </p>
              </div>

              <motion.a
                href="mailto:maximeyene@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-primary to-accent px-6 py-3 font-semibold text-accent-foreground shadow-lg transition-all hover:shadow-xl"
              >
                {t.footer.connect}
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-semibold text-foreground mb-4">{t.footer.contactDirect}</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <motion.a
                      href="mailto:maximeyene@gmail.com"
                      whileHover={{ x: 5 }}
                      className="font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      maximeyene@gmail.com
                    </motion.a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <motion.a
                      href="https://www.linkedin.com/in/joseph-maxime-yene-84a1481bb"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      joseph-maxime-yene
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 h-px w-full origin-left bg-linear-to-r from-border via-accent to-border"
          />

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center text-sm text-muted-foreground"
            >
              <p>{t.footer.copyright}</p>
              <p className="mt-1">{t.footer.technology}</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-secondary p-3 text-secondary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                    title={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-secondary p-3 text-secondary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              title="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
