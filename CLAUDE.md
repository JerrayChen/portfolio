# CLAUDE.md — Project Context for Claude

This file gives Claude the context needed to work effectively on this project without re-explaining things every session.

---

## What This Project Is

A personal developer portfolio for Jerry Chen, built entirely with **Symbols / DOMQL v3**.
It is a single-page app with sections: Hero, About, Skills, Experience, Projects, Contact.

- Repo: `C:/Users/Jerry/Code/claude/portfolio/`
- Components: `smbls/components/`
- Design system: `smbls/designSystem/index.js`
- Entry: `smbls/components/index.js`

---

## DOMQL v3 — Key Rules

### Component structure
- Components are plain JS objects exported as named exports
- Use `extends` to inherit from a base component (`'Flex'`, `'Box'`, `'P'`, `'H2'`, `'Img'`, `'A'`, etc.)
- Children are named keys (no arrays): `Header: { ... }`, `Inner: { ... }`
- No JSX, no React, no template strings

### Layout
- `extends: 'Flex'` — flexbox container
- `flexDirection: 'column'` or `'row'`
- `flexAlign: 'justify-content align-items'` — two values space-separated, e.g. `'center center'`, `'flex-start flex-start'`
- `gap`, `padding`, `margin` accept spacing tokens or raw CSS strings

### Styling
- All CSS properties are camelCase keys: `borderRadius`, `fontSize`, `fontWeight`, etc.
- Values are either **design tokens** (see `design-tokens.md`) or **raw CSS strings**
- For raw CSS values that aren't tokens, use the full CSS string: `'rgba(0,0,0,0.35)'`, `'100%'`, `'1px'`
- Use `style: { 'css-property': 'value' }` for CSS properties that aren't supported as direct keys

### Pseudo-classes / CSS selectors
- Supported as string keys: `':hover'`, `':hover > div'`, `':hover + img'`
- Example: `':hover': { opacity: '0.6' }`
- Example: `':hover > div': { opacity: '1' }` — targets all direct div children on parent hover

### Events
- `onClick`, `onMouseEnter`, `onMouseLeave` are supported but **only fire on real trusted browser events** — not synthetic/dispatched events
- Signature: `(e, el) => { ... }` where `el.node` is the DOM element, `el.parent.node` is the parent DOM element
- **Prefer `:hover` CSS pseudo-class over `onMouseEnter`/`onMouseLeave` for hover effects** — it's cleaner and more reliable

### HTML attributes
- Use `attr: { 'data-foo': 'bar', href: '...', src: '...', alt: '...' }` for HTML attributes
- Use `tag: 'a'` / `tag: 'section'` etc. to override the rendered HTML tag

### Text
- `text: 'Hello'` sets the text content directly on the element
- Can be set on any element type, including `Flex` containers
- Avoid using a child `P` element just to render text inside a button/flex — set `text` directly on the parent

---

## Project Conventions

- Max content width: `1100px`
- Section padding: `'D B'` (67px vertical, 26px horizontal)
- Alternating section backgrounds: `bgBase` and `bgSurface`
- Accent color for labels/highlights: `accent` token
- All sections have `tag: 'section'`, `id: 'section-xxx'`, `attr: { 'aria-label': '...' }`

---

## Git Rules (from Jerry)

- **Do not commit unless explicitly asked**
- Prefer committing only the files that were changed in that task
- Always include `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` in commit messages
