# Faustine Grace Foundation - Site Web Officiel

Site web moderne et responsive pour l'ONG Faustine Grace Foundation, développé avec React, TailwindCSS et Vite.

## 🌟 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fluide entre les pages
- ✅ Support multilingue (Français/Anglais)
- ✅ Formulaire de contact fonctionnel
- ✅ Section de dons avec plusieurs méthodes de paiement
- ✅ Galerie de programmes et actualités
- ✅ Optimisé pour les performances
- ✅ Animations et transitions élégantes

## 📋 Pages du site

1. **Accueil** - Page d'accueil avec présentation et statistiques
2. **À propos** - Histoire, mission, valeurs et équipe
3. **Nos Programmes** - Présentation des différents programmes
4. **Actualités** - Blog et dernières nouvelles
5. **S'impliquer** - Options de dons et bénévolat
6. **Contact** - Formulaire de contact et coordonnées

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. Ouvrez un terminal dans le dossier du projet

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse : `http://localhost:5173`

### Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js`. Vous pouvez les modifier selon votre charte graphique.

### Contenu

Pour personnaliser le contenu :

1. **Textes multilingues** : Modifiez `src/i18n.js`
2. **Images** : Remplacez les URLs d'images Unsplash par vos propres images
3. **Coordonnées** : Mettez à jour les informations dans `src/components/Footer.jsx` et `src/pages/Contact.jsx`
4. **Équipe** : Modifiez la liste dans `src/pages/About.jsx`
5. **Programmes** : Personnalisez dans `src/pages/Programs.jsx`
6. **Actualités** : Ajoutez vos articles dans `src/pages/News.jsx`

### Méthodes de don

Configurez vos méthodes de paiement dans `src/pages/GetInvolved.jsx` :
- Coordonnées bancaires
- Numéros Mobile Money
- PayPal/Stripe

## 📱 Réseaux sociaux

Mettez à jour les liens de vos réseaux sociaux dans :
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## 🌍 Langues

Le site supporte le français et l'anglais. Pour changer de langue, cliquez sur le bouton avec l'icône de globe dans la navigation.

Pour ajouter d'autres langues, modifiez `src/i18n.js`.

## 📦 Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utility-first
- **React Router** - Navigation
- **Lucide React** - Icônes modernes
- **i18next** - Internationalisation

## 📝 Structure du projet

```
ONG/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/          # Pages du site
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── News.jsx
│   │   ├── GetInvolved.jsx
│   │   └── Contact.jsx
│   ├── lib/            # Utilitaires
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   ├── i18n.js         # Configuration multilingue
│   └── index.css       # Styles globaux
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Configuration

### Google Maps

Pour intégrer Google Maps dans la page Contact :
1. Obtenez une clé API Google Maps
2. Remplacez la section placeholder dans `src/pages/Contact.jsx`

### Formulaire de contact

Le formulaire de contact affiche actuellement une alerte. Pour l'intégrer avec un backend :
1. Créez une API endpoint
2. Modifiez la fonction `handleSubmit` dans `src/pages/Contact.jsx`

### Système de dons

Pour intégrer un système de paiement réel :
1. Créez des comptes PayPal/Stripe
2. Intégrez leurs SDK dans le projet
3. Ajoutez les boutons de paiement dans `src/pages/GetInvolved.jsx`

## 📄 Mentions légales

N'oubliez pas d'ajouter vos mentions légales et politique de confidentialité conformément aux réglementations locales (RGPD, etc.).

## 🤝 Support

Pour toute question ou assistance, contactez :
- Email: contact@faustinegrace.org
- Téléphone: [À compléter]

## 📜 Licence

© 2024 Faustine Grace Foundation. Tous droits réservés.

---

**Développé avec ❤️ pour Faustine Grace Foundation**
