# Nexa Designs - Premium Creative Studio Website

A modern, premium website for Nexa Designs built with React, Firebase, and Tailwind CSS. Features include a stunning portfolio showcase, admin panel for content management, and an integrated chatbot.

![Nexa Designs](./Img/Nexa-Logo-Dark.png)

## ✨ Features

- **Premium Design**: Modern dark theme with smooth animations and glass morphism effects
- **Portfolio Showcase**: Filterable portfolio with category navigation and lightbox view
- **Admin Panel**: Complete Firebase-powered content management system
- **Chatbot**: Interactive chatbot with automated responses
- **Responsive**: Fully responsive design optimized for all devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend/Auth**: Firebase (Authentication, Firestore, Storage)
- **Routing**: React Router DOM (HashRouter for GitHub Pages)
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js 16+ and npm
- Firebase account
- Git

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
cd DesignbyNexa
npm install
```

### 2. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable the following services:
   - **Authentication**: Enable Email/Password sign-in
   - **Firestore Database**: Create in production mode
   - **Storage**: Enable Firebase Storage

4. Get your Firebase configuration:
   - Go to Project Settings → General
   - Scroll down to "Your apps" and click the web icon (`</>`)
   - Register your app and copy the configuration

5. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

6. Fill in your Firebase credentials in `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Create Firebase Admin User

Open Firebase Console → Authentication → Add User:
- Email: `admin@nexadesigns.com` (or your preferred email)
- Password: Create a strong password

### 4. Firestore Security Rules

In Firebase Console → Firestore Database → Rules, add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access
    match /portfolioItems/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /services/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 5. Storage Security Rules

In Firebase Console → Storage → Rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /portfolio/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 💻 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## 🎨 Admin Panel

Access the admin panel at `/#/admin`

**Features**:
- Portfolio Management (Add/Edit/Delete projects)
- Services Management (Manage service offerings)
- Image Upload (Direct to Firebase Storage)
- Real-time updates

## 📁 Project Structure

```
DesignbyNexa/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Chatbot.jsx
│   │   └── admin/      # Admin components
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── admin/      # Admin pages
│   ├── config/
│   │   └── firebase.js # Firebase configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Icons/              # Service icons
├── Img/                # Logo images
├── Wallpaper/          # Background images
├── Hero-Img/           # Hero section images
└── About-Img/          # About section images
```

## 🚀 Deployment to GitHub Pages

### 1. Update Repository

In `vite.config.js`, ensure the `base` path matches your repository name:

```javascript
base: '/DesignbyNexa/',
```

### 2. Deploy

```bash
npm run build
npm run deploy
```

The site will be deployed to: `https://yourusername.github.io/DesignbyNexa/`

### 3. GitHub Pages Settings

1. Go to your repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

## 📝 Usage Guide

### Adding Portfolio Items

1. Login to admin panel at `/#/admin`
2. Navigate to Portfolio Manager
3. Click "Add New Item"
4. Fill in details:
   - Title
   - Description
   - Category
   - Client (optional)
   - Tags
   - Upload image
5. Click "Add Item"

### Managing Services

1. Go to Services Manager
2. Click "Add New Service"
3. Fill in:
   - Title
   - Description
   - Select icon
   - Choose color gradient
   - Set display order
4. Click "Add Service"

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: { /* your colors */ },
      dark: { /* your colors */ },
    }
  }
}
```

### Fonts

Update Google Fonts import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Chatbot Responses

Edit `src/components/Chatbot.jsx` to customize automated responses:

```javascript
const responses = {
  services: 'Your custom response...',
  pricing: 'Your custom response...',
  // ... add more
};
```

## 🐛 Troubleshooting

### Firebase Connection Issues

- Verify `.env` file exists and has correct values
- Check Firebase project is active
- Ensure all Firebase services are enabled

### Build Errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Routing Issues on GitHub Pages

- Make sure you're using HashRouter (already configured)
- Verify `base` path in `vite.config.js`

### Images Not Loading

- Ensure images are in the `public` folder
- Use absolute paths starting with `/`
- Check Firebase Storage CORS settings

## 📧 Support

For issues or questions:
- Email: contact@nexadesigns.com
- Created by: Alanove

## 📄 License

© 2025 Nexa Designs by Alanove. All rights reserved.

---

Built with ❤️ using React, Firebase, and Tailwind CSS
