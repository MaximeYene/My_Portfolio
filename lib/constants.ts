// Personal Information
export const PERSONAL_INFO = {
  name: 'Joseph Maxime Yene',
  title: 'Ingénieur Fullstack & DevOps',
  email: 'maximeyene@gmail.com',
  location: 'Cameroon',
  nationality: 'Camerounaise',
  initials: 'JY',
}

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/MaximeYene',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joseph-maxime-yene-84a1481bb',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:maximeyene@gmail.com',
    icon: 'Mail',
  },
]

// Navigation Items
export const NAVIGATION = [
  { name: 'Profil', href: '#profil' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Projets', href: '#projets' },
  { name: 'Contact', href: '#contact' },
]

// Tech Skills
export const TECH_SKILLS = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'Authentification'],
  DevOps: ['Docker', 'Kubernetes', 'Vercel', 'AWS', 'Déploiement'],
  ML: ['Intégration ML', 'Modèles AI', 'Data Processing', 'Optimisation'],
}

// Projects
export const PROJECTS = [
  {
    title: 'GlycoTrack',
    description: 'Application web de suivi des patients diabétiques avec IA pour améliorer les traitements médicaux en milieu hospitalier et consultation externe.',
    tags: ['React', 'Node.js', 'ML', 'Healthcare', 'TypeScript'],
    link: 'https://glyco-track.vercel.app/',
    period: '09/2024 - Aujourd\'hui',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'minato.ai',
    description: 'Plateforme destinée aux créateurs de contenu pour améliorer la vente et distribution de leurs biens et services auprès de différents publics.',
    tags: ['React', 'AI Integration', 'E-commerce', 'SaaS', 'Startup'],
    link: 'https://minato-ai.vercel.app/',
    period: '06/2024 - Aujourd\'hui',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Skip Hire',
    description: 'Plateforme web de location de bennes avec interface intuitive et gestion des réservations en temps réel.',
    tags: ['React', 'Next.js', 'Database', 'Booking System'],
    link: 'https://skip-hire-three.vercel.app/',
    period: '06/2025 - 07/2025',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Movego',
    description: 'Application mobile de livraison de colis avec intégration IA pour optimisation des routes et prévisions.',
    tags: ['Mobile', 'AI/ML', 'Real-time', 'Logistics', 'React Native'],
    link: 'https://github.com/MaximeYene/MOVEGO',
    period: '08/2025 - Aujourd\'hui',
    gradient: 'from-green-500 to-emerald-500',
  },
]

// Experiences
export const EXPERIENCES = [
  {
    title: 'Ingénieur Fullstack & DevOps',
    company: 'minato.ai',
    period: '06/2024 – 08/2025',
    description: 'Responsable du développement frontend et backend, intégration ML et déploiement.',
    achievements: [
      'Développement de fonctionnalités frontend et backend performantes',
      'Intégration de modèles Machine Learning',
      'Gestion des noms de domaine et déploiement en environnement startup',
      'Garantie de la disponibilité continue des services'
    ],
  },
  {
    title: 'Développeur Fullstack',
    company: 'Unikeza',
    period: '06/2023 - 02/2024',
    description: 'Contribution au développement fullstack, API et optimisation des performances.',
    achievements: [
      'Conception et développement de nouvelles fonctionnalités',
      'Optimisation des performances web',
      'Résolution de bugs critiques',
      'Mise en place d\'outils de suivi des performances'
    ],
  },
  {
    title: 'Études Académiques',
    company: 'ENSP Douala',
    period: '2013 – 2014',
    description: 'Formation en génie logiciel avec excellence académique.',
    achievements: [
      'Génie logiciel - École Nationale Supérieure Polytechnique',
      'Baccalauréat - Collège Père Monti',
      'Fondations solides en algorithmique et conception',
    ],
  },
]

// Interests
export const INTERESTS = [
  { icon: 'Music', label: 'Musique', description: 'Passion pour les différents genres musicaux' },
  { icon: 'Plane', label: 'Voyage', description: 'Explorer le monde et les cultures' },
  { icon: 'Gamepad2', label: 'Jeux vidéo', description: 'Gaming et compétition' },
  { icon: 'Zap', label: 'Sports', description: 'Activité physique et bien-être' },
  { icon: 'Code', label: 'Programmation', description: 'Création d\'innovations technologiques' },
]

// Stats
export const STATS = [
  { number: '5+', label: 'Années\nd\'expérience' },
  { number: '10+', label: 'Projets\ncomplétés' },
  { number: '100%', label: 'Satisfaction\nclient' },
  { number: '3', label: 'Équipes\ndirigées' },
]

// Animation Configs
export const ANIMATION_CONFIG = {
  duration: 0.8,
  staggerDelay: 0.1,
  hoverScale: 1.05,
  tapScale: 0.95,
}
