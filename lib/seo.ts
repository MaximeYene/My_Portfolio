import type { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'Joseph Maxime Yene - Ingénieur Fullstack & DevOps',
  description: 'Portfolio professionnel - Ingénieur Fullstack & DevOps spécialisé en Machine Learning, innovation startup et solutions cloud.',
  keywords: [
    'Ingénieur Fullstack',
    'DevOps',
    'Machine Learning',
    'React',
    'Node.js',
    'TypeScript',
    'Startup',
    'Cameroun',
    'Portfolio',
  ],
  authors: [{ name: 'Joseph Maxime Yene' }],
  openGraph: {
    title: 'Joseph Maxime Yene - Ingénieur Fullstack & DevOps',
    description: 'Découvrez mon portfolio professionnel avec mes projets innovants, expériences et compétences techniques.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://josephmaxime.dev',
    siteName: 'Portfolio Joseph Maxime Yene',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Maxime Yene - Ingénieur Fullstack & DevOps',
    description: 'Portfolio professionnel - Ingénieur Fullstack & DevOps | minato.ai',
  },
  alternates: {
    canonical: 'https://josephmaxime.dev',
  },
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joseph Maxime Yene',
  title: 'Ingénieur Fullstack & DevOps',
  url: 'https://josephmaxime.dev',
  email: 'maximeyene@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/joseph-maxime-yene-84a1481bb',
    'https://github.com/MaximeYene',
  ],
  jobTitle: 'Senior Software Engineer',
  knowsLanguage: ['fr', 'en'],
  nationality: {
    '@type': 'Country',
    name: 'Cameroon',
  },
}
