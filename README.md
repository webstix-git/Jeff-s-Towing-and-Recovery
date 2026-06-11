# Jeff's Towing & Recovery — Next.js

Marketing site for Jeff's Towing & Recovery LLC, migrated from the bundled HTML design to **Next.js 15 App Router** for Vercel deployment.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Original design system CSS (pixel-perfect preservation)

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services detail (`#roadside`, `#flatbed`, `#tire`, `#jump`, `#fuel`, `#lockout`) |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for SEO metadata (canonical URLs, Open Graph, sitemap).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain
4. Deploy — no extra configuration required

## Project structure

```
app/
  layout.tsx          # Root layout + global metadata
  page.tsx            # Home route
  services/page.tsx   # Services route
  globals.css         # Full design system from original HTML
  services.css        # Services page extensions
components/
  home/HomeContent.tsx
  services/ServicesContent.tsx
  layout/             # Header, footer, shell
  interactions/       # Client-side scroll, drawer, carousel
public/
  images/             # Extracted photography & logo
  fonts/              # Archivo woff2 subsets
```

## Migration notes

The source `option-1-html.html` was a self-contained HTML bundle (not Vite/React). The migration:

- Extracted embedded assets, CSS, and markup from the bundler manifest
- Converted `index.html` → `/` and `services.html` links → `/services`
- Ported vanilla JS interactions to a client `SiteInteractions` component
- Added `sitemap.xml`, `robots.txt`, and Open Graph metadata for SEO
