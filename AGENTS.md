# AGENTS.md

Static wedding invitation site (Vanilla JS, no build toolchain).

## Setup

```bash
cp .env.example .env
# Edit .env with real credentials
```

## Build & Deploy

- No `npm`/`package.json` — no dependency installation needed
- `node build.js` injects `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `AMAP_API_KEY` from env into `index.html`
- Deployed on Vercel (domain: `lepaulski.asia`); push to `main` triggers deployment

## Project Structure

- `index.html` — single page; scripts loaded via `<script>` tags in order (no ES modules)
- `js/supabase.js` — Supabase client init; credentials hardcoded here (build.js does NOT touch this file)
- `js/` — `app.js` (entry), `rsvp.js`, `realtime.js`, `map.js`, `countdown.js`
- `css/style.css` — all styles
- `supabase/migrations/001_create_rsvp_table.sql` — DB schema (RSVP table + RLS + Realtime)
- `images/` — gitignored (except `.gitkeep`); add `welcome-design.jpg` manually

## Gotchas

- `js/supabase.js` has hardcoded credentials; `.env` / `build.js` only replaces values in `index.html`, not in JS files
- Amap API key appears in `index.html:91` as well as `.env.example`
- No tests, no linting, no typechecking configured
- `.worktrees/` and `.superpowers/` are gitignored
