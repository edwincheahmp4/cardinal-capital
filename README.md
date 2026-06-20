# Cardinal & Capital — Website

A weekly finance newsletter website built with Next.js, deployable on Vercel.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import that repo
3. Vercel auto-detects Next.js — click Deploy. Done.
4. Copy your Vercel URL (e.g. `cardinal-and-capital.vercel.app`)

## Adding a new issue

Each Friday, the scheduled task generates a new newsletter HTML file. To publish it to the site:

1. Copy the generated HTML into `public/issues/YYYY-MM-DD.html`
2. Add a new entry to `data/issues.json` (prepend to the array — newest first):

```json
{
  "slug": "2026-06-27",
  "volume": "Vol. 2",
  "date": "June 27, 2026",
  "isoDate": "2026-06-27",
  "headline": "Your headline here",
  "summary": "Brief 1-2 sentence summary.",
  "file": "/issues/2026-06-27.html"
}
```

3. `git push` → Vercel auto-redeploys in ~30 seconds.

## "Read in browser" link

Update the scheduled task prompt with your Vercel URL so generated newsletters
include a working "Read in browser" link pointing to:
`https://YOUR-SITE.vercel.app/issues/YYYY-MM-DD.html`

## Local dev

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Structure

```
website/
├── data/
│   └── issues.json        ← Add new issues here (newest first)
├── pages/
│   ├── index.js           ← Homepage (latest issue)
│   └── archive.js         ← All issues
├── public/
│   └── issues/
│       └── 2026-06-20.html  ← Newsletter HTML files go here
└── styles/
    └── globals.css
```
