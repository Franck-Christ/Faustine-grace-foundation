# Guide de Configuration - Faustine Grace Foundation

Ce document vous guide pour personnaliser le site web selon vos besoins spécifiques.

## 📋 Checklist de personnalisation

### 1. Informations de base

#### Footer (src/components/Footer.jsx)
- [ ] Adresse postale complète
- [ ] Numéro de téléphone
- [ ] Email de contact
- [ ] Liens réseaux sociaux (Facebook, Instagram, LinkedIn, YouTube)

#### Contact (src/pages/Contact.jsx)
- [ ] Adresse complète du siège
- [ ] Numéros de téléphone (fixe, WhatsApp)
- [ ] Emails de contact
- [ ] Liens réseaux sociaux
- [ ] Horaires d'ouverture
- [ ] Intégration Google Maps

### 2. Équipe (src/pages/About.jsx)

Remplacez les membres de l'équipe dans le tableau `team` :

```javascript
const team = [
  {
    name: 'Nom du membre',
    role: 'Fonction',
    image: 'URL de la photo',
  },
  // Ajoutez autant de membres que nécessaire
]
```

**Photos recommandées :**
- Format : JPG ou PNG
- Dimensions : 400x400 pixels minimum
- Qualité : Haute résolution
- Fond : Professionnel et uniforme

### 3. Programmes (src/pages/Programs.jsx)

Personnalisez vos programmes dans le tableau `programs` :

```javascript
const programs = [
  {
    icon: BookOpen, // Choisissez une icône appropriée
    title: 'Nom du programme',
    description: 'Description détaillée',
    image: 'URL de l\'image',
    color: 'blue', // blue, red, green, purple
  },
]
```

**Images recommandées :**
- Dimensions : 800x600 pixels minimum
- Format : JPG
- Montrez vos actions sur le terrain

### 4. Actualités (src/pages/News.jsx)

Ajoutez vos articles dans le tableau `newsArticles` :

```javascript
const newsArticles = [
  {
    title: 'Titre de l\'article',
    excerpt: 'Résumé court (2-3 lignes)',
    image: 'URL de l\'image',
    date: 'JJ Mois AAAA',
    author: 'Nom de l\'auteur',
    category: 'Catégorie',
  },
]
```

### 5. Méthodes de don (src/pages/GetInvolved.jsx)

#### Virement bancaire
```javascript
{
  icon: Building2,
  title: 'Virement bancaire',
  details: [
    'Banque: [Nom de votre banque]',
    'IBAN: [Votre IBAN]',
    'SWIFT: [Code SWIFT]',
  ],
}
```

#### Mobile Money
```javascript
{
  icon: Smartphone,
  title: 'Mobile Money',
  details: [
    'MTN Mobile Money: [Numéro]',
    'Orange Money: [Numéro]',
    'Moov Money: [Numéro]',
  ],
}
```

#### PayPal/Stripe
```javascript
{
  icon: CreditCard,
  title: 'PayPal',
  details: [
    'PayPal: [Votre email PayPal]',
    'Stripe: Paiement en ligne sécurisé',
  ],
}
```

### 6. Statistiques d'impact (src/pages/Home.jsx)

Mettez à jour vos chiffres dans la section Impact :

```javascript
[
  { number: '1000+', label: 'Bénéficiaires' },
  { number: '50+', label: 'Projets réalisés' },
  { number: '20+', label: 'Partenaires' },
  { number: '10+', label: 'Années d\'expérience' },
]
```

### 7. Textes multilingues (src/i18n.js)

Personnalisez tous les textes en français et anglais :

```javascript
const resources = {
  fr: {
    translation: {
      // Vos textes en français
    },
  },
  en: {
    translation: {
      // Vos textes en anglais
    },
  },
}
```

## 🎨 Personnalisation du design

### Couleurs principales (tailwind.config.js)

Modifiez les couleurs selon votre charte graphique :

```javascript
colors: {
  primary: {
    50: '#eff6ff',   // Très clair
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // Couleur principale
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',  // Très foncé
  },
}
```

**Outils recommandés pour générer des palettes :**
- https://tailwindcolor.com/
- https://uicolors.app/create

### Logo

Remplacez le logo temporaire dans `src/components/Navbar.jsx` et `src/components/Footer.jsx` :

```javascript
// Remplacez cette section :
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
  <span className="text-white font-bold text-xl">FG</span>
</div>

// Par votre logo :
<img src="/path/to/your/logo.png" alt="Logo" className="h-10" />
```

## 📸 Gestion des images

### Option 1 : Images locales

1. Créez un dossier `public/images/`
2. Placez vos images dedans
3. Référencez-les : `/images/nom-image.jpg`

### Option 2 : Service d'hébergement

Utilisez un service comme :
- Cloudinary
- ImgBB
- AWS S3

### Optimisation des images

Avant de les utiliser :
- Compressez-les avec TinyPNG ou Squoosh
- Utilisez le format WebP pour de meilleures performances
- Dimensions recommandées :
  - Hero images : 1920x1080px
  - Photos d'équipe : 400x400px
  - Images de programmes : 800x600px
  - Actualités : 800x600px

## 🗺️ Intégration Google Maps

1. Obtenez une clé API sur https://console.cloud.google.com/
2. Dans `src/pages/Contact.jsx`, remplacez :

```javascript
<div className="aspect-video bg-gray-200 flex items-center justify-center">
  // Section placeholder
</div>

// Par :
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

## 📧 Configuration du formulaire de contact

### Option 1 : EmailJS (Gratuit)

1. Créez un compte sur https://www.emailjs.com/
2. Installez le package :
```bash
npm install @emailjs/browser
```

3. Modifiez `src/pages/Contact.jsx` :

```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message envoyé avec succès !')
    setFormData({ name: '', email: '', phone: '', message: '' })
  })
  .catch((error) => {
    alert('Erreur lors de l\'envoi du message.')
    console.error(error)
  })
}
```

### Option 2 : Backend personnalisé

Créez une API endpoint et envoyez les données :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const response = await fetch('https://your-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      alert('Message envoyé avec succès !')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }
  } catch (error) {
    alert('Erreur lors de l\'envoi du message.')
  }
}
```

## 💳 Intégration des paiements

### PayPal

1. Créez un compte Business PayPal
2. Installez le SDK :
```bash
npm install @paypal/react-paypal-js
```

3. Ajoutez le bouton PayPal dans `src/pages/GetInvolved.jsx`

### Stripe

1. Créez un compte Stripe
2. Installez le SDK :
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

3. Intégrez Stripe Checkout

## 🌐 Déploiement

### Option 1 : Netlify (Recommandé)

1. Créez un compte sur https://www.netlify.com/
2. Connectez votre dépôt Git
3. Configuration :
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 2 : Vercel

1. Créez un compte sur https://vercel.com/
2. Importez votre projet
3. Déployez automatiquement

### Option 3 : Hébergement traditionnel

1. Exécutez `npm run build`
2. Uploadez le contenu du dossier `dist/` sur votre serveur

## 📱 SEO et métadonnées

Modifiez `index.html` pour le SEO :

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Votre description (150-160 caractères)" />
  <meta name="keywords" content="ONG, humanitaire, Faustine Grace, ..." />
  <meta property="og:title" content="Faustine Grace Foundation" />
  <meta property="og:description" content="Votre description" />
  <meta property="og:image" content="URL de votre image de partage" />
  <title>Faustine Grace Foundation - ONG</title>
</head>
```

## 🔒 Mentions légales et RGPD

Créez les pages suivantes :
- `src/pages/Privacy.jsx` - Politique de confidentialité
- `src/pages/Legal.jsx` - Mentions légales

Ajoutez-les au routeur dans `src/App.jsx`

## ✅ Checklist finale avant mise en ligne

- [ ] Toutes les informations de contact sont à jour
- [ ] Les images sont optimisées et chargées
- [ ] Les liens de réseaux sociaux fonctionnent
- [ ] Le formulaire de contact est configuré
- [ ] Les méthodes de paiement sont actives
- [ ] Google Maps est intégré
- [ ] Les textes sont relus et corrigés
- [ ] Le site est testé sur mobile et desktop
- [ ] Les mentions légales sont présentes
- [ ] Le SEO est optimisé
- [ ] Le site est déployé et accessible

## 🆘 Besoin d'aide ?

Si vous rencontrez des difficultés, consultez :
- Documentation React : https://react.dev/
- Documentation TailwindCSS : https://tailwindcss.com/
- Documentation Vite : https://vitejs.dev/

---

**Bonne configuration ! 🚀**
