# 🚀 Guide de Déploiement - Faustine Grace Foundation

Ce guide vous accompagne pour mettre votre site en ligne gratuitement.

---

## 🌐 Option 1 : Netlify (Recommandé - Le plus simple)

### Avantages
- ✅ 100% gratuit pour les sites statiques
- ✅ HTTPS automatique
- ✅ Déploiement en quelques clics
- ✅ Domaine personnalisé gratuit (.netlify.app)
- ✅ Mises à jour automatiques depuis Git

### Étapes de déploiement

#### Méthode A : Drag & Drop (La plus simple)

1. **Créer le build**
   ```bash
   npm run build
   ```
   Un dossier `dist/` sera créé

2. **Créer un compte Netlify**
   - Allez sur https://www.netlify.com/
   - Cliquez sur "Sign up" (gratuit)
   - Inscrivez-vous avec email ou GitHub

3. **Déployer**
   - Cliquez sur "Add new site" → "Deploy manually"
   - Glissez-déposez le dossier `dist/` dans la zone
   - Attendez 30 secondes ⏱️
   - Votre site est en ligne ! 🎉

4. **Personnaliser l'URL**
   - Allez dans "Site settings" → "Change site name"
   - Choisissez : `faustinegrace` → URL : faustinegrace.netlify.app

#### Méthode B : Avec Git (Mises à jour automatiques)

1. **Créer un dépôt GitHub**
   - Allez sur https://github.com/
   - Créez un nouveau repository
   - Nommez-le : `faustine-grace-website`

2. **Pousser votre code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/faustine-grace-website.git
   git push -u origin main
   ```

3. **Connecter à Netlify**
   - Sur Netlify : "Add new site" → "Import from Git"
   - Choisissez GitHub et autorisez l'accès
   - Sélectionnez votre repository
   - Configuration :
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Cliquez sur "Deploy site"

4. **Mises à jour futures**
   ```bash
   git add .
   git commit -m "Mise à jour du contenu"
   git push
   ```
   Le site se met à jour automatiquement ! 🔄

---

## 🔷 Option 2 : Vercel

### Avantages
- ✅ Gratuit
- ✅ Très rapide
- ✅ HTTPS automatique
- ✅ Excellent pour React

### Étapes

1. **Créer un compte**
   - Allez sur https://vercel.com/
   - Inscrivez-vous avec GitHub

2. **Importer le projet**
   - Cliquez sur "Add New" → "Project"
   - Importez votre repository GitHub
   - Vercel détecte automatiquement Vite

3. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez 1-2 minutes
   - Votre site est en ligne !

---

## 📘 Option 3 : GitHub Pages

### Avantages
- ✅ Gratuit
- ✅ Intégré à GitHub
- ✅ Bon pour les projets open source

### Étapes

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modifier package.json**
   Ajoutez :
   ```json
   {
     "homepage": "https://VOTRE-USERNAME.github.io/faustine-grace-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Modifier vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/faustine-grace-website/',
     // ... reste de la config
   })
   ```

4. **Déployer**
   ```bash
   npm run deploy
   ```

5. **Activer GitHub Pages**
   - Allez dans Settings → Pages
   - Source : "gh-pages branch"
   - Sauvegardez

---

## 🌍 Ajouter un nom de domaine personnalisé

### Acheter un domaine

**Registrars recommandés :**
- **Namecheap** : https://www.namecheap.com/ (~10€/an)
- **Google Domains** : https://domains.google/
- **OVH** : https://www.ovh.com/ (France)
- **Gandi** : https://www.gandi.net/ (France)

**Suggestions de noms :**
- `faustinegrace.org`
- `faustinegracefoundation.org`
- `fondationfaustinegrace.org`

### Configurer sur Netlify

1. **Dans Netlify**
   - Allez dans "Domain settings"
   - Cliquez sur "Add custom domain"
   - Entrez votre domaine : `faustinegrace.org`

2. **Chez votre registrar**
   Ajoutez ces DNS records :
   
   **Type A :**
   ```
   @ → 75.2.60.5
   ```
   
   **Type CNAME :**
   ```
   www → votre-site.netlify.app
   ```

3. **Attendre**
   - La propagation DNS prend 24-48h
   - HTTPS s'active automatiquement après

### Configurer sur Vercel

1. **Dans Vercel**
   - Allez dans "Settings" → "Domains"
   - Ajoutez votre domaine

2. **Suivez les instructions**
   - Vercel vous donne les DNS à configurer
   - Ajoutez-les chez votre registrar

---

## 📧 Configurer les emails professionnels

### Option 1 : Google Workspace (Payant ~5€/mois)
- Email : contact@faustinegrace.org
- Stockage : 30GB
- Professionnel et fiable

### Option 2 : Zoho Mail (Gratuit jusqu'à 5 utilisateurs)
1. Allez sur https://www.zoho.com/mail/
2. Créez un compte gratuit
3. Ajoutez votre domaine
4. Configurez les DNS (MX records)
5. Créez vos emails :
   - contact@faustinegrace.org
   - info@faustinegrace.org
   - don@faustinegrace.org

### Option 3 : Redirection (Gratuit)
Redirigez vers votre email existant :
- contact@faustinegrace.org → votre.email@gmail.com
- Configuration dans votre registrar de domaine

---

## 🔒 Sécurité et Performance

### HTTPS
- ✅ Activé automatiquement sur Netlify/Vercel
- ✅ Certificat SSL gratuit (Let's Encrypt)

### Performance
Netlify et Vercel incluent automatiquement :
- ✅ CDN mondial
- ✅ Compression Gzip/Brotli
- ✅ Cache optimisé
- ✅ HTTP/2

### Headers de sécurité (Netlify)

Créez `public/_headers` :
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

### Redirections (Netlify)

Créez `public/_redirects` :
```
# Rediriger www vers non-www
https://www.faustinegrace.org/* https://faustinegrace.org/:splat 301!

# Rediriger HTTP vers HTTPS
http://faustinegrace.org/* https://faustinegrace.org/:splat 301!
```

---

## 📊 Analytics (Statistiques de visite)

### Google Analytics (Gratuit)

1. **Créer un compte**
   - Allez sur https://analytics.google.com/
   - Créez une propriété

2. **Obtenir l'ID de suivi**
   - Format : `G-XXXXXXXXXX`

3. **Installer dans le site**
   
   Ajoutez dans `index.html` (avant `</head>`) :
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Alternative : Plausible Analytics
- Plus respectueux de la vie privée
- Pas de cookies
- Interface simple
- https://plausible.io/

---

## 🔍 SEO (Référencement)

### Fichier sitemap.xml

Créez `public/sitemap.xml` :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://faustinegrace.org/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://faustinegrace.org/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://faustinegrace.org/programs</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://faustinegrace.org/news</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://faustinegrace.org/get-involved</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://faustinegrace.org/contact</loc>
    <priority>0.6</priority>
  </url>
</urlset>
```

### Fichier robots.txt

Créez `public/robots.txt` :
```
User-agent: *
Allow: /
Sitemap: https://faustinegrace.org/sitemap.xml
```

### Google Search Console

1. Allez sur https://search.google.com/search-console/
2. Ajoutez votre site
3. Vérifiez la propriété
4. Soumettez votre sitemap

---

## 📱 Réseaux sociaux

### Open Graph (Facebook, LinkedIn)

Dans `index.html` :
```html
<meta property="og:title" content="Faustine Grace Foundation" />
<meta property="og:description" content="ONG engagée pour un monde plus juste" />
<meta property="og:image" content="https://faustinegrace.org/images/og-image.jpg" />
<meta property="og:url" content="https://faustinegrace.org" />
<meta property="og:type" content="website" />
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Faustine Grace Foundation" />
<meta name="twitter:description" content="ONG engagée pour un monde plus juste" />
<meta name="twitter:image" content="https://faustinegrace.org/images/twitter-card.jpg" />
```

**Image recommandée :**
- Dimensions : 1200x630px
- Format : JPG
- Poids : < 1MB

---

## ✅ Checklist de déploiement

### Avant le déploiement
- [ ] Toutes les informations sont à jour
- [ ] Les images sont optimisées
- [ ] Le formulaire de contact fonctionne
- [ ] Les liens de réseaux sociaux sont corrects
- [ ] Le site est testé sur mobile et desktop
- [ ] Les traductions sont complètes
- [ ] Le build fonctionne sans erreur (`npm run build`)

### Après le déploiement
- [ ] Le site est accessible
- [ ] HTTPS est actif
- [ ] Toutes les pages se chargent
- [ ] Les images s'affichent
- [ ] Le formulaire fonctionne
- [ ] La navigation mobile fonctionne
- [ ] Les liens externes s'ouvrent correctement

### SEO et Analytics
- [ ] Google Analytics configuré
- [ ] Sitemap.xml créé
- [ ] Robots.txt créé
- [ ] Google Search Console configuré
- [ ] Meta tags Open Graph ajoutés
- [ ] Favicon visible

### Domaine personnalisé (si applicable)
- [ ] Domaine acheté
- [ ] DNS configurés
- [ ] Email professionnel configuré
- [ ] Redirection www → non-www
- [ ] HTTPS actif sur le domaine

---

## 🆘 Dépannage

### Le site ne se charge pas
1. Vérifiez que le build est réussi
2. Vérifiez le dossier de publication (doit être `dist`)
3. Consultez les logs de déploiement

### Les images ne s'affichent pas
1. Vérifiez que les images sont dans `public/`
2. Vérifiez les chemins (doivent commencer par `/`)
3. Vérifiez la taille des images (< 1MB)

### Le formulaire ne fonctionne pas
1. Configurez un service comme EmailJS ou Formspree
2. Vérifiez la configuration dans `Contact.jsx`

### DNS ne fonctionne pas
1. Attendez 24-48h pour la propagation
2. Vérifiez avec https://dnschecker.org/
3. Vérifiez la configuration chez votre registrar

---

## 📞 Support

### Documentation officielle
- **Netlify** : https://docs.netlify.com/
- **Vercel** : https://vercel.com/docs
- **Vite** : https://vitejs.dev/guide/

### Communautés
- **Stack Overflow** : https://stackoverflow.com/
- **Reddit r/webdev** : https://reddit.com/r/webdev

---

## 🎉 Félicitations !

Une fois déployé, votre site sera accessible 24/7 partout dans le monde !

**Prochaines étapes :**
1. Partagez l'URL sur vos réseaux sociaux
2. Ajoutez-le à vos cartes de visite
3. Mettez-le dans votre signature email
4. Référencez-le dans vos documents officiels

**Votre impact commence maintenant ! 🌍**
