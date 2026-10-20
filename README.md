# JBF — Portfolio Aparté (React / TypeScript)

Portfolio de **Jacob Brayan Fotso**, développé à partir du projet `Portfolio.zip` et de la direction visuelle **Aparté V3**. Il privilégie une typographie éditoriale, des espaces généreux, des transitions légères et de vrais visuels de projets.

## Démarrage

Prérequis : **Node.js 20 ou supérieur** et npm.

```bash
npm ci
npm run dev
```

Le serveur Vite utilise le port **8080** par défaut. Ouvrir l'URL indiquée dans le terminal, généralement `http://localhost:8080/`.

Pour un build de production :

```bash
npm run build
npm run preview
```

Déploiement : le `Dockerfile` multi-stage et la configuration `nginx.conf` sont fournis. Le serveur Nginx gère la réécriture SPA vers `index.html` pour les pages `/projects/:slug`.

## Fonctionnalités incluses

- Accueil éditorial responsive (desktop, tablette, mobile).
- **Kazou**, projet phare : description fidèle du module livraison **NestJS**, au sein d'un écosystème composé de plusieurs backends et mécanismes de communication.
- **WhatAsso**, prototype de commerce conversationnel et de logistique : aperçu de conversation **HTML/CSS** réactif à la langue EN/FR, et 3 parcours interactifs (client, commerçant, livreur) dans l'étude de cas. **Aucun paiement connecté**, aucune intégration WhatsApp en direct.
- Aje7, CAA ISO Manager et autres expériences/projets.
- Pages de projets `/projects/kazou`, `/projects/whatasso`, `/projects/aje7`, `/projects/caa-iso-manager`, `/projects/assoh`, `/projects/flex-engineering`, `/projects/listeo`.
- Section compétences organisée à partir des CV : frontend/mobile, backend/APIs, données, DevOps, qualité/observabilité, cloud.
- Bilingue EN/FR : détection de la langue navigateur à la première ouverture, choix conservé en `localStorage`, éléments de navigation, descriptions, méta-description, scénarios WhatAsso traduits.
- Animation `framer-motion` sur les révélations au scroll. Respect de `prefers-reduced-motion`.
- Navigation mobile, progression de lecture, liens sociaux, email, titre de page localisé, routes d'erreur.

## Organisation du code

```text
src/
  assets/                   # Photos et captures provenant du portfolio d'origine
  components/portfolio/     # Reveal, WhatsAppPreview, ScrollToTop
  content/                  # projects.ts, skills.ts
  i18n/                     # Dictionnaires EN/FR, LanguageProvider
  layout/                   # Header, Footer
  pages/                    # Home, ProjectDetail, NotFound
  styles/portfolio.css      # Design system et responsive
  App.tsx                   # Router
  main.tsx                  # Entrée React
```

### Ajouter / modifier un projet

Modifier `src/content/projects.ts` : contenu éditorial bilingue, capture réelle, technologies réellement utilisées et lien éventuel. La homepage utilise les 4 premiers projets comme projets principaux ; les suivants apparaissent dans la liste « More selected work ». Toutes les pages d'études de cas sont rendues à partir des mêmes données.

### Modifier les textes d'interface

Modifier `src/i18n/translations.ts`. Pour changer les conversations WhatsApp (illustratives), modifier `src/components/portfolio/WhatsAppPreview.tsx`. La conversation est rendue en HTML : il ne faut **pas** produire deux images localisées.

### Modifier le style

La direction **Aparté** est dans `src/styles/portfolio.css`. Palette : papier `#efede7`, charbon `#1b1d1b`, accent terre cuite `#ad644d`. Typographies Google Fonts : Manrope, Playfair Display (italique), DM Sans, IBM Plex Mono.

## À compléter avant publication

1. **CV** : un PDF source n'était pas présent dans le ZIP. Ajoutez un document validé dans `public/` puis créez un lien « Download CV / Télécharger le CV » depuis le Header ou la section contact. Ne publiez pas une copie non vérifiée.
2. **Listeo** : contribution exacte, description et visuels à confirmer. La page actuelle indique clairement ces limites.
3. **Assoh / WhatAsso** : leur relation éventuelle n'est **pas présumée** ; les éléments sont présentés séparément.
4. **Kazou** : topologie interne et mécanismes précis non dévoilés. Le schéma est conceptuel, pas une documentation d'architecture authentifiée.
5. **WhatAsso** : les messages sont des exemples UX, non des captures de conversations clients ; pas de paiement en ligne.
6. Confirmer les liens de démonstration externes avant déploiement : ces URLs proviennent du portfolio d'origine.
7. Remplacer les méta Open Graph génériques par des URL absolues et une image de partage après l'achat du domaine.

## Notes de validation

La syntaxe de tous les fichiers TS/TSX a été contrôlée avec le parseur TypeScript disponible localement. **Le build npm/Vite n'a pas pu être exécuté dans l'environnement de création : l'accès DNS au registre npm est bloqué.** Sur votre ordinateur, exécutez `npm ci && npm run build` puis `npm run dev`. Les dépendances sont définies dans le `package-lock.json` d'origine.
