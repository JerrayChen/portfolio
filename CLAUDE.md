# Portfolio — Jerry Chen

Single-page developer portfolio built with Symbols / DOMQL v3. Sections, in order: Hero, About,
Skills, Experience, Projects, Contact — one component file each in `smbls/components/`, plus
`Navbar.js` / `NavLink.js`.

Deployed to GitHub Pages **and** the Symbols platform.

## Framework rules

Don't look them up here. `symbols-mcp get_project_rules` is the live source of truth, and the
`smbls-*` skills cover atoms, migration, and accessibility. This file previously inlined a copy
of those rules; it drifted and started contradicting the framework, so it's gone.

Workspace-level `PATTERNS.md` and `design-tokens.md` hold the browser-verified findings that
aren't in the official rules — read those for the quirks.

## Conventions in this repo

- Max content width `1100px`, section padding `'D B'` — applied per section, see `About.js:6`
- Sections alternate `bgBase` / `bgSurface` backgrounds; `accent` for labels and highlights
- Every section carries `tag: 'section'`, an `id: 'section-xxx'`, and an `aria-label`
- `smbls/pages/index.js` registers **both** `'/'` and `'/portfolio'` — the second is required for
  the GitHub Pages subdirectory deploy, since the router reads the first path segment. Don't
  remove it. Full context in `deploy-github-pages.md` at the workspace root.
