# 🚀 Démarrage Rapide - Faustine Grace Foundation

## Installation en 3 étapes

### 1️⃣ Installer Node.js
Si ce n'est pas déjà fait, téléchargez Node.js depuis :
👉 https://nodejs.org/ (version LTS recommandée)

### 2️⃣ Installer les dépendances
Ouvrez un terminal dans ce dossier et exécutez :
```bash
npm install
```
⏱️ Cela prendra 2-3 minutes

### 3️⃣ Lancer le site
```bash
npm run dev
```
✅ Le site sera accessible sur : **http://localhost:5173**

---

## 📁 Fichiers importants

| Fichier | Description |
|---------|-------------|
| **README.md** | Documentation complète du projet |
| **GUIDE_CONFIGURATION.md** | Guide détaillé de personnalisation |
| **CAHIER_DES_CHARGES_COMPLETE.md** | Cahier des charges avec checklist |

---

## ✏️ Personnalisation rapide

### Changer les coordonnées
📍 **Fichiers à modifier :**
- `src/components/Footer.jsx` (lignes 40-60)
- `src/pages/Contact.jsx` (lignes 30-50)

### Ajouter votre équipe
👥 **Fichier :** `src/pages/About.jsx` (lignes 30-50)

### Modifier les programmes
🌱 **Fichier :** `src/pages/Programs.jsx` (lignes 10-40)

### Ajouter des actualités
📰 **Fichier :** `src/pages/News.jsx` (lignes 10-80)

### Configurer les dons
💰 **Fichier :** `src/pages/GetInvolved.jsx` (lignes 30-60)

---

## 🎨 Changer les couleurs

**Fichier :** `tailwind.config.js`

Modifiez les valeurs dans la section `colors.primary`

---

## 🌍 Langues

Le site supporte **Français** et **Anglais**.

Pour modifier les traductions :
📝 **Fichier :** `src/i18n.js`

---

## 📦 Build pour production

Quand vous êtes prêt à mettre en ligne :
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

---

## 🌐 Déploiement gratuit

### Option 1 : Netlify (Recommandé)
1. Créez un compte sur https://www.netlify.com/
2. Glissez-déposez le dossier `dist/`
3. Votre site est en ligne ! 🎉

### Option 2 : Vercel
1. Créez un compte sur https://vercel.com/
2. Importez ce projet
3. Déployez en un clic

---

## ❓ Commandes utiles

| Commande | Action |
|----------|--------|
| `npm run dev` | Lancer le serveur de développement |
| `npm run build` | Créer la version de production |
| `npm run preview` | Prévisualiser la version de production |
| `npm run lint` | Vérifier le code |

---

## 🆘 Problèmes courants

### ❌ "npm: command not found"
➡️ Installez Node.js depuis https://nodejs.org/

### ❌ Erreur lors de `npm install`
➡️ Supprimez le dossier `node_modules` et `package-lock.json`, puis réessayez

### ❌ Le site ne s'affiche pas
➡️ Vérifiez que le port 5173 n'est pas utilisé par une autre application

---

## 📞 Besoin d'aide ?

Consultez les fichiers de documentation :
- 📖 **README.md** - Documentation technique
- 🔧 **GUIDE_CONFIGURATION.md** - Guide de personnalisation
- ✅ **CAHIER_DES_CHARGES_COMPLETE.md** - Checklist complète

---

## ✅ Checklist avant mise en ligne

- [ ] J'ai personnalisé les coordonnées
- [ ] J'ai ajouté les photos de l'équipe
- [ ] J'ai configuré les méthodes de paiement
- [ ] J'ai ajouté les liens des réseaux sociaux
- [ ] J'ai testé le formulaire de contact
- [ ] J'ai vérifié sur mobile et desktop
- [ ] J'ai créé le build de production
- [ ] J'ai déployé le site

---

**🎉 Bon démarrage avec votre nouveau site web !**
