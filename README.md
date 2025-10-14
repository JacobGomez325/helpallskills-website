# HelpAll Skills - Landing Page

Landing page moderne pour la plateforme HelpAll Skills, spécialisée dans le coaching et les formations tech.

## Technologies Utilisées

- **Next.js**: Framework React pour le rendu côté serveur et la génération de sites statiques
- **TypeScript**: Typage statique pour JavaScript
- **Tailwind CSS**: Framework CSS utility-first pour un design rapide et responsive
- **Framer Motion**: Bibliothèque d'animations pour React
- **React Three Fiber / Drei**: Bibliothèque pour créer des éléments 3D avec React
- **Lottie**: Animations vectorielles interactives

## Fonctionnalités

- Design moderne et épuré avec palette de couleurs personnalisée
- Animations fluides avec Framer Motion
- Modèle 3D interactif avec React Three Fiber
- Page entièrement responsive (mobile, tablette, desktop)
- Formulaire de contact interactif
- Témoignages avec slider animé
- SEO optimisé

## Structure du Projet

```
helpall-skills/
├── public/              # Fichiers statiques
├── src/
│   ├── app/             # Pages de l'application Next.js
│   ├── components/      # Composants React
│   │   ├── 3d/          # Composants 3D avec React Three Fiber
│   │   ├── layout/      # Composants de mise en page (Header, Footer)
│   │   ├── sections/    # Sections principales de la landing page
│   │   └── ui/          # Composants UI réutilisables
│   └── lib/
│       └── animations/  # Utilitaires pour les animations
├── tailwind.config.js   # Configuration Tailwind CSS
└── README.md            # Documentation
```

## Palette de Couleurs

- Blanc: `#FFFFFF`
- Turquoise: `#0AB9A6`
- Bleu vif: `#1261AC`
- Bleu moyen: `#1660A9`
- Noir: `#000000`

## Typographie

La police Poppins est utilisée pour toute la typographie du site, avec différentes épaisseurs pour créer une hiérarchie visuelle claire.

## Installation et Démarrage

1. Cloner le dépôt:
   ```bash
   git clone <url-du-depot>
   cd helpall-skills
   ```

2. Installer les dépendances:
   ```bash
   npm install
   ```

3. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```

4. Ouvrir http://localhost:3000 dans votre navigateur

## Déploiement

Cette landing page peut être déployée sur n'importe quelle plateforme supportant Next.js, comme Vercel, Netlify ou GitHub Pages.

## Possibilités d'Évolution

- Intégration d'un système de blog
- Ajout d'une authentification pour un espace membre
- Intégration avec un CMS headless (Contentful, Strapi)
- Ajout d'un système de paiement pour les inscriptions aux formations
- Implémentation d'un chat en direct pour l'assistance client
- Multilingue (anglais, espagnol, etc.)

## Licence

Ce projet est sous licence MIT.
