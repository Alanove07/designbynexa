# Nexa Designs - AI Agent Instructions

## Architecture Overview

This is a **React + Vite + Firebase portfolio website** with a public showcase and secure admin panel. The app uses **HashRouter** (not BrowserRouter) for GitHub Pages compatibility, meaning all routes use `/#/path` format.

**Key architectural decisions:**
- **Static assets in root**: Images live in root-level folders (`/Icons/`, `/Wallpaper/`, `/Hero-Img/`, `/About-Img/`) NOT in `public/` or `src/assets/`
- **Firebase as backend**: No traditional API - all data operations use Firestore SDK directly in components
- **Environment-based config**: Firebase credentials MUST use `import.meta.env.VITE_*` variables, never hardcoded
- **Dual data pattern**: Components fallback to hardcoded defaults if Firebase fetch fails (see `Portfolio.jsx` line 17-44)

## Critical File Locations

```
src/
  config/firebase.js          # Firebase initialization - all services exported here
  App.jsx                     # HashRouter setup with admin route protection
  pages/
    Home.jsx                  # Main landing page (imports all section components)
    admin/
      Login.jsx               # Firebase email/password auth
      Dashboard.jsx           # Admin hub with navigation cards
      PortfolioManager.jsx    # CRUD for portfolio items with image upload
      ServicesManager.jsx     # CRUD for services
  components/
    admin/ProtectedRoute.jsx  # Auth guard using onAuthStateChanged
    Portfolio.jsx             # Filterable gallery with Framer Motion
    PortfolioModal.jsx        # Lightbox for portfolio details
```

## Firebase Integration Patterns

### Authentication Flow
- Admin routes protected by `ProtectedRoute` component wrapping routes in `App.jsx`
- Auth state managed via `onAuthStateChanged` listener (NOT manual checks)
- No custom claims or role system - any authenticated user = admin access

### Firestore Collections
```javascript
portfolioItems: { title, description, category, client, tags[], imageUrl, createdAt }
services: { title, description, icon, order }
messages: { name, email, message, timestamp } // Contact form submissions
```

### Storage Pattern
Upload to `portfolio/{timestamp}_{filename}` path:
```javascript
const storageRef = ref(storage, `portfolio/${Date.now()}_${file.name}`);
await uploadBytes(storageRef, file);
const url = await getDownloadURL(storageRef);
```

## Development Workflow

### Commands
- `npm run dev` - Start dev server on port 5173
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run deploy` - Deploy to GitHub Pages (builds + pushes to `gh-pages` branch)

### Important: Base Path Configuration
`vite.config.js` has `base: '/DesignbyNexa/'` - this MUST match the GitHub repo name for deployment to work. When testing locally, assets load from root.

### Styling System
- **Tailwind custom theme** in `tailwind.config.js`:
  - `dark-bg` (#0f172a), `dark-card` (#1e293b), `dark-lighter` (#334155)
  - `primary-*` (blue scale), `accent-purple/pink/orange`
- **No CSS modules or styled-components** - use Tailwind utility classes exclusively
- **Glass morphism pattern**: `bg-white/10 backdrop-blur-lg border border-white/20`

## Component Patterns

### Data Fetching (Standard Pattern)
```javascript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'collectionName'));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(list);
    } catch (error) {
      console.error('Error:', error);
      setData(defaultFallbackData); // Always provide fallback
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
```

### Portfolio Category Filtering
Categories are hardcoded: `['All', 'Branding', 'Posters', 'Portraits', 'Illustrations', 'Social Media']`
Filter happens client-side with `useEffect` watching `activeCategory` state.

### Image Upload in Admin
- Always use `ref(storage, path)` and `uploadBytes()` pattern
- Store Firebase Storage URLs (not local paths) in Firestore
- Show upload progress with `uploading` state + disabled button

## Common Pitfalls

1. **Route paths**: Use `path="/admin"` in routes but link to `/#/admin` in anchors (HashRouter)
2. **Asset imports**: Reference as `/Icons/icon.svg` NOT `./Icons/icon.svg` or `import icon from...`
3. **Firebase rules**: Remember to configure Firestore/Storage security rules in Firebase Console (not in code)
4. **Environment variables**: Create `.env` file locally - it's gitignored but REQUIRED for dev
5. **Array fields in Firestore**: Tags are stored as arrays - split CSV input with `.split(',').map(t => t.trim())`

## Adding New Features

### New Portfolio Category
1. Add to `categories` array in `Portfolio.jsx` (line 14)
2. Add to `categories` array in `PortfolioManager.jsx` (line 23)
3. Update category buttons in both components

### New Admin Section
1. Create page in `src/pages/admin/`
2. Add protected route in `App.jsx` using `<ProtectedRoute>` wrapper
3. Add navigation card to `Dashboard.jsx`
4. Follow Firestore CRUD pattern from `PortfolioManager.jsx`

### New Public Section
1. Create component in `src/components/`
2. Import and render in `pages/Home.jsx`
3. Add smooth scroll anchor with `id="section-name"`
4. Update `Navbar.jsx` with new nav link using `react-scroll` Link component

## Testing Considerations

- **Firebase emulator NOT configured** - all dev/test uses production Firebase
- Test admin features by creating test items, then deleting via admin panel
- Image uploads are permanent - no cleanup job configured
- No automated tests - manual testing in browser required

## Deployment Checklist

1. Verify `vite.config.js` base path matches repo name
2. Ensure `.env` vars are set in hosting environment (GitHub Pages uses build-time vars)
3. Run `npm run build` locally to catch build errors before deploy
4. After `npm run deploy`, check GitHub Pages settings points to `gh-pages` branch
