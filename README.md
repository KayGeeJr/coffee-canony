# Coffee Canony

High-end animated landing page for **Coffee Canony** — a specialty coffee shop at Karaglen Mall, Edenvale.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on push to `main`.

**One-time setup** in your repo on GitHub:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow builds with base path `/coffee-canony/`

Live site: **https://kaygeejr.github.io/coffee-canony/**

> If Pages was set to deploy the `main` branch root directly, you would see a white screen — the app must be built first (Vite outputs to `dist/`).

## Stack

- React 18 + Vite
- Framer Motion (scroll reveals, hero parallax, menu transitions)
- CSS Modules with brand palette (chocolate brown, peach, gold)

## Sections

- Hero with storefront imagery and CTAs
- Trust bar (5.0 rating, price range, location)
- About / story
- Interactive menu viewer (coffee & food menus)
- Photo gallery
- Visit (hours, open/closed status, map, directions)
