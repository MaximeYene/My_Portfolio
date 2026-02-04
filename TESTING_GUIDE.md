# Guide de Test - Traduction & Thème

## 🧪 Tester les Fonctionnalités

### 1. Test du Thème Sombre/Clair

#### Procédure:
1. Lancez le portfolio: `npm run dev`
2. Accédez à `http://localhost:3000`
3. Localisez le bouton ☀️/🌙 dans la navbar (haut-droit)
4. Cliquez sur le bouton

#### Résultats attendus:
- ✅ Le thème bascule immédiatement
- ✅ L'icône change (Sun ☀️ ↔️ Moon 🌙)
- ✅ Les couleurs changent sur toute la page
- ✅ Le changement s'applique à tous les éléments
- ✅ Rafraîchissez la page - le thème est conservé
- ✅ Les animations restent fluides

#### Éléments à vérifier:
```
Thème Clair:
- Background blanc ✅
- Texte noir/bleu foncé ✅
- Accents cyan bleu ✅
- Cartes blanches ✅

Thème Sombre:
- Background noir profond ✅
- Texte blanc/gris clair ✅
- Accents cyan éclatant ✅
- Cartes gris foncé ✅
```

---

### 2. Test du Système de Traduction

#### Procédure:
1. Localisez le bouton 🌐 dans la navbar (haut-droit)
2. Cliquez sur le bouton 🌐
3. Un menu déroulant apparaît avec:
   - Français
   - English

#### Test Français:
1. Cliquez sur "Français"
2. Vérifiez que tout le contenu est en français:
   - Navigation: "Profil, Compétences, Expérience, Projets, Contact" ✅
   - Hero: "Ingénieur Fullstack & DevOps" ✅
   - Section À propos: "À propos de moi" ✅
   - Compétences: "Compétences" ✅
   - Expérience: "Expérience professionnelle" ✅
   - Projets: "Projets" ✅

#### Test Anglais:
1. Cliquez sur "English"
2. Vérifiez que TOUT le contenu est en anglais:
   - Navigation: "Profile, Skills, Experience, Projects, Contact" ✅
   - Hero: "Fullstack Engineer & DevOps" ✅
   - About: "About" ✅
   - Skills: "Skills" ✅
   - Experience: "Professional Experience" ✅
   - Projects: "Projects" ✅

#### Éléments à vérifier pour chaque langue:
```
❓ Les titres sont-ils traduits?
❓ Les descriptions sont-elles traduites?
❓ Les étiquettes (tags) sont-elles traduites?
❓ Les boutons sont-ils traduits?
❓ Les sections complètes sont-elles en une seule langue?
```

---

### 3. Test de Combinaison (Thème + Langue)

#### Scénario 1: FR + Clair
1. Sélectionnez "Français"
2. Sélectionnez thème "Clair" (🌙 clickable)
3. Vérifiez: Texte français, background blanc ✅

#### Scénario 2: EN + Sombre
1. Sélectionnez "English"
2. Sélectionnez thème "Sombre" (☀️ clickable)
3. Vérifiez: Texte anglais, background noir ✅

#### Scénario 3: Changement rapide
1. Alternez rapidement entre français/anglais
2. Alternez rapidement entre clair/sombre
3. Vérifiez que tout change correctement ✅

---

### 4. Test de Persistance

#### Procédure:
1. Sélectionnez "English"
2. Sélectionnez thème "Sombre"
3. Fermez le navigateur complètement
4. Rouvrez le site
5. Vérifiez que la langue et thème sont conservés ✅

#### Qu'est-ce qui devrait être sauvegardé:
- ✅ Langue sélectionnée (English)
- ✅ Thème sélectionné (Dark)
- ✅ Les deux devraient persister après fermeture

---

### 5. Test de Responsive

#### Mobile (320px):
1. Ouvrez les DevTools (F12)
2. Passez en mode mobile (320x568)
3. Vérifiez:
   - Navbar reste accessible ✅
   - Boutons (🌐, ☀️/🌙) sont cliquables ✅
   - Pas de déformation du contenu ✅
   - Textes restent lisibles ✅

#### Tablet (768px):
1. Passez en mode tablet
2. Vérifiez la mise en page adaptée ✅

#### Desktop (1440px):
1. Passez en mode desktop full-width
2. Vérifiez la mise en page complète ✅

---

### 6. Test des Sections Complètes

#### Navbar & Menus
- [ ] Logo "JY" visible et stylisé
- [ ] Navigation items visibles
- [ ] Bouton langue (🌐) fonctionnel
- [ ] Bouton thème (☀️/🌙) fonctionnel
- [ ] Menu langue déroulant apparaît/disparaît

#### Hero Section
- [ ] Titre traduit correctement
- [ ] Sous-titre traduit
- [ ] Description traduite
- [ ] Bouton CTA traduit
- [ ] Compétences affichées (même en toutes langues)
- [ ] Liens sociaux présents

#### About Section
- [ ] Titre "À propos" / "About"
- [ ] Description complète traduite
- [ ] Centres d'intérêt traduits
- [ ] Langues affichées correctement

#### Skills Section
- [ ] Titre "Compétences" / "Skills"
- [ ] 4 catégories visibles
- [ ] Catégories traduites
- [ ] Compétences listées

#### Experience Section
- [ ] Titre "Expérience" / "Experience"
- [ ] 3 postes affichés
- [ ] Dates visibles
- [ ] Achievements listées

#### Projects Section
- [ ] Titre "Projets" / "Projects"
- [ ] 4 projets affichés
- [ ] Titres projets listés
- [ ] Tags technos affichées

#### Footer
- [ ] Section Contact visible
- [ ] Bouton "Me contacter" / "Contact Me"
- [ ] Liens sociaux
- [ ] Copyright affiché

---

### 7. Test de Validation

#### Tous les textes sont-ils présents?
- [ ] Aucun texte manquant en FR
- [ ] Aucun texte manquant en EN
- [ ] Aucune clé de traduction non définie

#### Tous les éléments réagissent aux changements?
- [ ] Contenu met à jour quand on change de langue
- [ ] Thème met à jour quand on bascule
- [ ] Pas de lag ou délai

#### Aucun bug d'hydratation?
- [ ] Pas de contenu clignotant au chargement
- [ ] Pas de désynchronisation serveur/client
- [ ] Pas de console warnings

---

## 🐛 Dépannage

### Problème: Le thème ne change pas
**Solution**: Assurez-vous que:
1. Vous êtes bien dans un onglet du navigateur
2. DevTools ne cache pas le contenu
3. Le cache du navigateur est vidé (Ctrl+Shift+Delete)
4. Le serveur dev est redémarré

### Problème: La langue ne change pas
**Solution**:
1. Cliquez sur le bouton 🌐
2. Vérifiez que le menu déroulant apparaît
3. Cliquez directement sur "Français" ou "English"
4. Attendez 1 seconde pour que tout update

### Problème: Les textes ne sont pas tous traduits
**Solution**:
1. Ouvrez la console browser (F12)
2. Cherchez les erreurs
3. Ouvrez `/lib/translations.ts`
4. Vérifiez que la clé existe pour les deux langues

### Problème: Thème/Langue ne persiste pas
**Solution**:
1. Vérifiez que localStorage n'est pas désactivé
2. Vérifiez que le site n'est pas en mode privé/incognito
3. Vérifiez les paramètres de confidentialité du navigateur

---

## ✅ Checklist Finale

- [ ] Thème clair fonctionne
- [ ] Thème sombre fonctionne
- [ ] Thème persiste après rechargement
- [ ] Langue FR fonctionne
- [ ] Langue EN fonctionne
- [ ] Langue persiste après rechargement
- [ ] Tous les textes sont traduits
- [ ] Responsive sur mobile
- [ ] Responsive sur tablet
- [ ] Responsive sur desktop
- [ ] Pas de console errors
- [ ] Pas de flickering
- [ ] Animations fluides
- [ ] Boutons cliquables et interactifs

---

## 📊 Résultats d'Attendus

Après tous les tests, vous devriez avoir:

✅ Portfolio entièrement bilingue (FR/EN)
✅ Thème sombre/clair 100% fonctionnel
✅ Persiste des préférences utilisateur
✅ Interface fluide et rapide
✅ Zéro bug ou erreur

**Prêt pour la production!** 🚀
