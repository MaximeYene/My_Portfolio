# 🎨 Portfolio Professionnel - Joseph Maxime Yene

## ✨ Spécifications Techniques

### Version de Tailwind CSS
**Tailwind CSS v4** - Version par défaut du template starter v0, plus moderne et performante que la v3.

### Dépendances Principales
- **React 19.2.0** - Framework UI
- **Next.js 16.0.10** - Framework fullstack avec App Router
- **Framer Motion 12.31.0** - Animations fluides et interactions
- **Tailwind CSS v4** - Styling et design system
- **Lucide React** - Icônes modernes
- **next-themes** - Gestion des thèmes clair/sombre
- **Shadcn/ui** - Composants UI réutilisables

## 🎯 Architecture des Composants

### Composants Réutilisables Créés

#### 1. **Navbar** (`/components/navbar.tsx`)
- Navigation fixe avec animations d'apparition
- Toggle thème sombre/clair
- Animation hover sur les liens
- Responsive sur mobile

#### 2. **Hero Section** (`/components/hero.tsx`)
- Section d'introduction avec gradient background
- Avatar avec animations
- Affichage des technologies
- CTA buttons avec hover effects
- Social links animés
- Scroll indicator avec animation continue

#### 3. **Skills** (`/components/skills.tsx`)
- Grid de 4 colonnes (responsive)
- Cartes de compétences avec gradients
- Animation au scroll (Intersection Observer)
- Categorie: Frontend, Backend, DevOps, Machine Learning
- Hover effects sur les compétences

#### 4. **Experience** (`/components/experience.tsx`)
- Timeline verticale avec animations
- Éléments: Minato.ai, Unikeza, Études
- Points de timeline avec icônes
- Réalisations/Achievements listés
- Animations staggered

#### 5. **Projects** (`/components/projects.tsx`)
- Grid de projets 2 colonnes (responsive)
- Cartes interactives avec descriptions
- Tags technologies
- Links externes et Github
- Animations au scroll et au hover

#### 6. **About Section** (`/components/about-section.tsx`)
- Présentation personnelle complète
- Stats (années d'expérience, projets, satisfaction)
- Langues avec barres de progression animées
- Centres d'intérêt avec icônes

#### 7. **Footer** (`/components/footer.tsx`)
- CTA pour contacter
- Liens sociaux
- Contact direct (email, LinkedIn)
- Bouton retour en haut
- Copyright et credits

### Composants Réutilisables Supplémentaires

#### **AnimatedButton** (`/components/animated-button.tsx`)
- Boutons avec animations Framer Motion
- Variantes: primary, secondary
- Support des liens et buttons

#### **Badge** (`/components/badge.tsx`)
- Badges pour les technologies/compétences
- Variantes: primary, secondary, accent, outline
- Tailles: sm, md, lg
- Animations optionnelles

#### **AnimatedCard** (`/components/card-animated.tsx`)
- Cartes réutilisables avec animations
- Effets hover
- Support des gradients

#### **SectionTitle** (`/components/section-title.tsx`)
- Titres de section avec animations
- Gradient text
- Subtitles optionnels

#### **ThemeProvider** (`/components/theme-provider.tsx`)
- Provider pour la gestion des thèmes
- Intégration next-themes

## 🎨 Système de Couleurs

### Thème Clair (Light)
- **Background**: Blanc/Gris très clair (`oklch(0.99 0.001 220)`)
- **Primary**: Bleu foncé professionnel (`oklch(0.32 0.15 260)`)
- **Accent**: Cyan éclatant (`oklch(0.60 0.20 200)`)
- **Secondary**: Bleu clair (`oklch(0.85 0.15 240)`)

### Thème Sombre (Dark)
- **Background**: Noir profond (`oklch(0.10 0.01 220)`)
- **Primary**: Cyan clair (`oklch(0.80 0.18 200)`)
- **Accent**: Cyan brillant (`oklch(0.75 0.22 200)`)
- **Secondary**: Gris foncé (`oklch(0.25 0.08 240)`)

### Palette Complémentaire
- **Destructive**: Rouge/Orange pour les actions critiques
- **Border**: Utilisé pour les séparations subtiles
- **Muted**: Pour textes secondaires

## 🚀 Contenu du Portfolio

Tous les contenus sont extraits de votre CV:

### Sections
1. **Profil** - Présentation générale
2. **À propos** - Informations personnelles, langues, stats
3. **Compétences** - 4 catégories majeures
4. **Expérience** - 3 expériences professionnelles
5. **Projets** - 4 projets innovants avec liens
6. **Contact** - Footer avec informations de contact

## 📱 Responsive Design

- **Mobile**: Stack vertical, full-width
- **Tablet**: 2 colonnes, adaptation
- **Desktop**: 4 colonnes ou plus, layout optimisé

## ⚡ Animations Utilisées

### Framer Motion
- **containerVariants/itemVariants**: Stagger animation au scroll
- **whileHover**: Effets sur hover
- **whileTap**: Feedback au clic
- **initial/animate**: Animations d'entrée
- **transition**: Durée et timing personnalisés

### CSS Animations
- Scrollbar personnalisée
- Transitions smooth globales
- Focus visible states

## 🎬 Features Clés

✅ **Thème Sombre/Clair** - Toggle avec persistance
✅ **Animations Fluides** - Framer Motion partout
✅ **Responsive** - Mobile-first design
✅ **Performance** - Lazy loading des sections
✅ **Accessibilité** - ARIA labels, focus management
✅ **SEO** - Metadata optimisée
✅ **Modular** - Composants réutilisables

## 🛠️ Installation & Déploiement

### Commandes
```bash
# Développement
npm run dev

# Build
npm run build

# Production
npm run start

# Lint
npm run lint
```

### Déploiement
- Prêt pour Vercel (recommandé)
- Supporté sur tout hosting Node.js

## 📝 Personnalisation

### Modifier les Couleurs
Éditer `/app/globals.css` - Section thème (`:root` et `.dark`)

### Modifier le Contenu
- Fichier page: `/app/page.tsx`
- Composants: `/components/*`

### Ajouter des Sections
1. Créer un nouveau composant en `/components`
2. Importer dans `/app/page.tsx`
3. Ajouter à la navigation dans `/components/navbar.tsx`

## 📚 Librairies Utilisées

| Librairie | Version | Utilisation |
|-----------|---------|-------------|
| React | 19.2.0 | Framework UI |
| Next.js | 16.0.10 | Framework fullstack |
| Framer Motion | 12.31.0 | Animations |
| Tailwind CSS | v4 | Styling |
| Lucide React | 0.454.0 | Icônes |
| next-themes | 0.4.6 | Thème clair/sombre |
| Shadcn/ui | - | Composants UI |

## 🎯 Résultat Final

Un portfolio **moderne, élégant et impactant** qui:
- Met fortement en valeur votre profil d'ingénieur
- Présente vos compétences techniques avancées
- Showcase vos projets innovants
- Démontre votre expertise en fullstack & DevOps
- Offre une excellente expérience utilisateur

---

**Portfolio créé avec ❤️ en React, Next.js et Tailwind CSS v4**
