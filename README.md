# Tony Eisenhauer Site

Fresh Cloudflare Pages–ready rebuild of [tony-eisenhauer.com](https://www.tony-eisenhauer.com).

**Stack:** Vite + React + TypeScript + Tailwind CSS v4 + react-router-dom

## Local development

```bash
cd tony-eisenhauer-site
npm install
npm run dev
```

Preview production build:

```bash
npm run build
npm run preview
```

Build output: `dist/`

## Cloudflare Pages deploy

1. Create a GitHub repository and push this project.
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → connect the GitHub repo.
3. Use (or attach to) the existing Pages project **`tony-eisenhauer-site`**.
4. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Framework preset: Vite (optional)
5. Attach custom domain **tony-eisenhauer.com** (and www) to this Pages project.
6. SPA routing is handled by `public/_redirects` (`/* /index.html 200`).

Do not use Git-less direct upload long-term if you want continuous deploys — connect Git.

## Form backend (TODO)

`/submit-deal` and `/newsletter` currently collect fields and show a success state locally. Wire to:

- Cloudflare Pages Forms, or
- Formspree / similar endpoint

Search the codebase for `TODO:` markers.

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/about` | About |
| `/buy-box` | Buy Box |
| `/submit-deal` | Submit a Deal |
| `/luxury-str` | Peak & Pine Retreat |
| `/contact` | Contact |
| `/newsletter` | Newsletter |
| `/resources` | Resources |

See `REFRESH.md` for what changed vs the previous live site.
