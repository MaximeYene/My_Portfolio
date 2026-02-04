/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
