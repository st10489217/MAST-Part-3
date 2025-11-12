# Mast POE - Menu Management App

A React Native menu management application with course filtering and price tracking.

## Quick Start (Web)

No emulator needed — run in your browser:

```powershell
npm install
npm run web
```

The app will start on `http://localhost:19006` (or similar) and open automatically.

## Scripts

- `npm run web` — Start the web development server (hot reload enabled)
- `npm run typecheck` — Run TypeScript type checking
- `npm start` — Start Expo (for mobile if you have Expo Go app)

## Project Structure

```
src/
  ├── App.tsx                 # Main app entry point
  ├── components/             # Reusable React components
  │   └── MenuList.tsx
  ├── models/                 # TypeScript models
  │   └── MenuItem.ts
  ├── screens/                # App screens (Home, Manage, Filter)
  │   ├── HomeScreen.tsx
  │   ├── FilterScreen.tsx
  │   └── ManageMenuScreen.tsx
  ├── store/                  # State management
  │   └── menuStore.ts
  └── utils/                  # Utilities
      └── priceUtils.ts
```

## Features

- **View Menu** — Browse all menu items by course
- **Manage Menu** — Add/remove menu items and prices
- **Filter by Course** — Guest view to filter items by course
- **Price Tracking** — Calculate and display average price per course
- **Local Storage** — Menu data persists between sessions
