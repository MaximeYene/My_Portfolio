# 📦 Guide d'Installation - Portfolio Joseph Maxime Yene

## 🚀 Installation Rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Git

### Étapes d'Installation

#### 1. Cloner ou Télécharger le Projet
```bash
# Si vous avez le lien Git
git clone <repository-url>

# Ou télécharger le ZIP et extraire
cd portfolio-joseph-maxime
```

#### 2. Installer les Dépendances
```bash
npm install
# ou
yarn install
```

#### 3. Lancer le Serveur de Développement
```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ✅ Vérification des Versions

### Tailwind CSS - V4 ✓
La version installée est **Tailwind CSS v4** (la plus récente et performante).
```json
{
  "@tailwindcss/postcss": "^4.1.9",
  "tailwindcss": "^4.1.9"
}
```

### Framer Motion - ✓
```json
{
  "framer-motion": "12.31.0"
}
```

### Next.js 16 - ✓
```json
{
  "next": "16.0.10"
}
```

## 🎨 Personnalisation

### 1. Modifier les Informations Personnelles

**Fichier**: `/lib/constants.ts`

```typescript
export const PERSONAL_INFO = {
  name: 'Votre Nom',
  title: 'Votre Titre',
  email: 'votre@email.com',
  // ... autres infos
}
```

### 2. Personnaliser les Couleurs

**Fichier**: `/app/globals.css`

Modifier les variables CSS dans `:root` (thème clair) et `.dark` (thème sombre):

```css
:root {
  --primary: oklch(0.32 0.15 260); /* Bleu primaire */
  --accent: oklch(0.60 0.20 200);  /* Cyan accent */
  /* ... autres couleurs */
}

.dark {
  --primary: oklch(0.80 0.18 200);
  /* ... autres couleurs */
}
```

### 3. Changer les Projets

**Fichier**: `/lib/constants.ts`

```typescript
export const PROJECTS = [
  {
    title: 'Votre Projet',
    description: 'Description...',
    tags: ['React', 'Next.js'],
    link: 'https://...',
    period: 'Date',
    gradient: 'from-color-500 to-color-500',
  },
  // ... ajouter d'autres projets
]
```

### 4. Mettre à Jour l'Expérience

**Fichier**: `/lib/constants.ts`

```typescript
export const EXPERIENCES = [
  {
    title: 'Votre Poste',
    company: 'Votre Entreprise',
    period: 'Date',
    description: 'Description...',
    achievements: [
      'Réalisation 1',
      'Réalisation 2',
    ],
  },
]
```

### 5. Modifier les Compétences

**Fichier**: `/lib/constants.ts`

```typescript
export const TECH_SKILLS = {
  'Votre Catégorie': ['Skill 1', 'Skill 2'],
  // ... ajouter d'autres catégories
}
```

### 6. Changer les Liens Sociaux

**Fichier**: `/lib/constants.ts`

```typescript
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/votreProfil',
    icon: 'Github',
  },
  // ... ajouter d'autres liens
]
```

## 🎯 Ajouter Vos Images

### 1. Avatar/Profil
Modifiez le composant `Hero` (`/components/hero.tsx`) pour ajouter une véritable image:

```tsx
// À la place du texte "JY"
<Image 
  src="/your-avatar.jpg" 
  alt="Profile"
  width={128}
  height={128}
  className="rounded-full"
/>
```

### 2. Images de Projets
Améliorez les cartes projets avec des images:

```tsx
// Dans Projects.tsx
<Image 
  src={`/projects/${project.slug}.jpg`}
  alt={project.title}
  className="rounded-lg mb-4"
/>
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repo GitHub
3. Vercel déploie automatiquement

```bash
# Ou via CLI
npm i -g vercel
vercel
```

### Autres Plateformes

#### Netlify
```bash
npm run build
# Déployer le dossier .next
```

#### GitHub Pages
```bash
npm run build
# Déployer le contenu généré
```

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer en production
npm run start

# Linter
npm run lint

# Formatter (optionnel)
npm run format
```

## 🎨 Éditer le Design avec Design Mode

Si vous utilisez v0:
1. Cliquez sur **Design** dans la sidebar gauche
2. Utilisez les contrôles UI pour modifier les couleurs, fonts, etc.
3. Les changements sont appliqués en temps réel

## 📱 Tester le Responsive

```bash
# Ouvrir DevTools (F12)
# Cliquer sur le bouton "Toggle device toolbar"
# Tester sur les différentes résolutions
```

## 🐛 Dépannage

### Erreur: "Module not found"
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### Animations ne fonctionnent pas
- Vérifier que Framer Motion est installé: `npm list framer-motion`
- Vérifier que les composants utilisent `'use client'`

### Thème ne persiste pas
- Vérifier que `next-themes` est installé
- Vérifier le `ThemeProvider` dans `layout.tsx`

## 📚 Ressources Utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [Shadcn/ui](https://ui.shadcn.com)

## 💡 Conseils de Performance

1. **Images**: Optimiser vos images avant upload
2. **Animations**: Utiliser `prefers-reduced-motion` pour l'accessibilité
3. **Lazy Loading**: Les sections se chargent au scroll
4. **Caching**: Nextjs cache automatiquement les routes

## 🔒 Sécurité

- ✅ Pas de données sensibles en dur
- ✅ Utiliser des variables d'environnement pour les URLs
- ✅ HTTPS forcé en production
- ✅ Pas de tokens exposés

## 📞 Support

Si vous avez besoin d'aide:
1. Consultez la [documentation de v0](https://v0.app)
2. Vérifiez les ressources des librairies utilisées
3. Vérifiez la console du navigateur pour les erreurs

---

**Prêt à lancer votre portfolio? 🎉**

```bash
npm run dev
```
