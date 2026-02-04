/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { motion } from 'framer-motion'
import { Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useContext, useEffect, useState } from 'react'
import { useTranslations } from '@/hooks/use-translations'
import { LanguageContext } from '@/components/language-context'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const languageContext = useContext(LanguageContext)
  const { language, setLanguage } = languageContext || { language: 'fr', setLanguage: () => {} }
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: t.nav.profil, href: '#profil' },
    { name: t.nav.competences, href: '#competences' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projets, href: '#projets' },
    { name: t.nav.contact, href: '#contact' },
  ]

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            JY
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ color: 'var(--accent)' }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="rounded-lg bg-secondary p-2 text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                title="Change language"
              >
                <Globe className="h-5 w-5" />
              </motion.button>

              {mounted && showLanguageMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-background shadow-lg"
                >
                  <button
                    onClick={() => {
                      setLanguage('fr')
                      setShowLanguageMenu(false)
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === 'fr'
                        ? 'bg-accent text-accent-foreground font-semibold'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setShowLanguageMenu(false)
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === 'en'
                        ? 'bg-accent text-accent-foreground font-semibold'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    English
                  </button>
                </motion.div>
              )}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="rounded-lg bg-secondary p-2 text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
