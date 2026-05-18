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

On every push to `main`, GitHub Actions builds the site and publishes to the **`gh-pages`** branch.

**One-time setup** (required):

1. Open [Settings → Pages](https://github.com/KayGeeJr/coffee-canony/settings/pages)
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** · Folder: **`/ (root)`**
4. Save, then wait ~1 minute after the Actions workflow completes

Live URL: **https://kaygeejr.github.io/coffee-canony/**

> **White screen?** You are likely deploying the `main` branch root (source code). That serves raw `index.html` with `/src/main.jsx`, which does not run in the browser. Use the **`gh-pages`** branch instead.

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
