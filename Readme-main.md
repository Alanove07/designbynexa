🎨 Nexa Designs — Official Website

A modern and minimal creative portfolio for Nexa Designs, showcasing professional artworks including branding, posters, portraits, illustrations, and social media designs.
The project includes a public portfolio website, a secure admin panel, and an integrated chatbot — powered by Firebase and hosted on GitHub Pages.

🚀 Features
🌐 Public Website

Modern landing page with Nexa branding

Services section with icons

Portfolio with category filters

High-quality artwork gallery

Contact & commission section

Floating WhatsApp button

Built-in Nexa Chatbot

Smooth animations (AOS/Framer Motion)

Fully responsive design

🔐 Admin Panel (Firebase)

Firebase Authentication (Email/Password)

Secure admin-only access

Manage portfolio items (Add / Edit / Delete)

Add services with icons

Upload images (Firebase Storage)

View contact messages

View chatbot messages

Optional AI integration via Cloud Functions

🧩 Tech Stack
Frontend

React (Vite)

Tailwind CSS

AOS / Framer Motion

Backend / Database

Firebase Auth

Firestore

Firebase Storage

Firebase Analytics (optional)

Deployment

GitHub Pages (static hosting)

📁 Project Structure
/src
  /assets          # images, icons
  /components      # Navbar, Footer, Chatbot, Cards, Modals
  /pages           # Home, About, Services, Portfolio, Contact
  /admin           # Login, Dashboard, Upload
  /lib             # firebase.js, firestore helpers
  /hooks           # useAuth, usePortfolio
  /styles          # global.css, tailwind.css
vite.config.js
tailwind.config.js
README.md

🔥 Firebase Setup

Below is the Firebase config you provided, integrated into the project.

You may use either:

✔ Quick start version (direct config)
or
✔ Recommended version (environment variables — safer)

⭐ Quick Start — firebase.js (copy & paste)

src/lib/firebase.js:

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBx-HEoLyah0K9BKl-9ge4oLZ-p2sQvG64",
  authDomain: "designbynexa.firebaseapp.com",
  projectId: "designbynexa",
  storageBucket: "designbynexa.firebasestorage.app",
  messagingSenderId: "1081741118686",
  appId: "1:1081741118686:web:6535dc47fdd4642a48064f",
  measurementId: "G-XLQDSRTYH0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };


⚠️ Firebase API keys are public identifiers — they are safe to include — but Firestore rules must be secure.

⭐ Recommended — firebase.js (environment variables)
Step 1: Create .env.local (DO NOT commit this)
VITE_FIREBASE_API_KEY=AIzaSyBx-HEoLyah0K9BKl-9ge4oLZ-p2sQvG64
VITE_FIREBASE_AUTH_DOMAIN=designbynexa.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=designbynexa
VITE_FIREBASE_STORAGE_BUCKET=designbynexa.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1081741118686
VITE_FIREBASE_APP_ID=1:1081741118686:web:6535dc47fdd4642a48064f
VITE_FIREBASE_MEASUREMENT_ID=G-XLQDSRTYH0

Step 2: Use env-based config

src/lib/firebase.js:

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

// Optional Analytics
let analytics;
try { analytics = getAnalytics(app); } catch (e) { analytics = null; }

export const firebaseApp = app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const firebaseAnalytics = analytics;

🗄️ Firestore Collections
projects
{
  title: "",
  category: "branding | posters | portraits | illustrations | social",
  description: "",
  images: ["url1", "url2"],
  createdAt: timestamp,
  order: number
}

services
{
  title: "",
  description: "",
  icon: "",
  order: number
}

messages
{
  name: "",
  email: "",
  text: "",
  createdAt: timestamp,
  read: false
}

chat_messages
{
  text: "",
  source: "user | bot",
  createdAt: timestamp
}

🔐 Firestore Security Rules

Paste this in Firebase → Firestore → Rules:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /projects/{doc} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }

    match /services/{doc} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }

    match /messages/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null && request.auth.token.admin == true;
    }

    match /chat_messages/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null && request.auth.token.admin == true;
    }
  }
}

📦 Storage Rules (for uploading artwork)

Paste in Firebase → Storage → Rules:

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    match /projects/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}

🎤 Admin Authentication
Steps:

Enable Email/Password in Firebase Auth

Create your admin account manually

Assign admin claim:

Cloud Function or Admin script:

admin.auth().setCustomUserClaims(uid, { admin: true });

Check admin status in frontend:
const token = await auth.currentUser.getIdTokenResult();
if (token.claims.admin) {
  // allow admin panel
}

🤖 Chatbot Overview
Basic Mode

Rule-based replies

Saves chat messages to Firestore

Appears as a floating bubble

Advanced Mode (optional)

Connect to OpenAI API using Firebase Cloud Functions

Never expose API key in client

🖼️ Images Needed (Checklist)
Branding

Logo (light+dark)

Favicon

Hero

Gradient / abstract background

About

Designer portrait

Workspace image (optional)

Services

Minimal icons

Portfolio

Branding mockups

Posters

Portraits

Illustrations

Social media designs

Chatbot

Bot avatar icon

Chat bubble icon

SEO

Open Graph banner

Twitter card

🛠️ Running the project
npm install
npm run dev
npm run build
npm run preview

🚀 Deployment — GitHub Pages

Use GitHub Actions:

.github/workflows/deploy.yml:

name: Deploy Nexa Designs
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

📌 Roadmap

Add AI chatbot capability

Add light/dark mode

Add admin image cropper

Add portfolio search

Add analytics dashboard

🎉 Credits

Designed & Developed by Alanove (Nexa Designs)
Powered by React, Tailwind, Firebase, and GitHub Pages