/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-context'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Joseph Maxime Yene - Ingénieur Fullstack & DevOps',
  description: 'Portfolio professionnel - Ingénieur Fullstack, DevOps, Machine Learning | minato.ai | Expertise Startup',
  icons: {
    icon: [
      {
        url: '/globe.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/globe.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/globe.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/globe.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme-preference">
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
