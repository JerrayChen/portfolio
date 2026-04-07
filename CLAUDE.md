# CLAUDE.md — Symbols / DOMQL v3 Strict Rules

> Source: https://github.com/symbo-ls/skills/blob/main/CLAUDE.md
> NOTE: Where this doc conflicts with live MCP rules (`symbols-mcp get_project_rules`), the MCP rules win.
> Known conflict: this doc uses `flexAlign`, but current v3 uses `align` for flex shorthand.

This comprehensive guide documents the declarative component system for Symbols/DOMQL v3, enforcing strict syntax patterns and architectural principles.

## Core Architecture

**Components are plain JavaScript objects, never functions.** The framework uses a "no-import" model where components register once and reuse through declarative trees. Props flatten directly into component objects without wrapper objects.

### v3 Syntax Requirements

| Pattern | v3 (Correct) | v2 (Forbidden) |
|---------|--------------|----------------|
| Inheritance | `extends: 'Component'` | `extend: 'Component'` |
| Child extends | `childExtends: 'Component'` | `childExtend: 'Component'` |
| Props structure | Root level | `props: { }` wrapper |
| Event handlers | `onClick: fn` | `on: { click: fn }` |

## Project Structure

```
smbls/
├── index.js                 # Root export
├── components/              # UI components (PascalCase)
├── pages/                   # Routes
├── functions/               # Utilities (called via el.call())
├── state/                   # Application state
└── designSystem/            # Design tokens
```

## Strict Rules

1. **No JavaScript imports between project files.** Reference by name; call functions via `el.call()`.
2. **All folders must be completely flat.** No subfolders anywhere.
3. **PascalCase keys auto-extend.** `{ UpChart: { flex: '1' } }` = `{ UpChart: { extends: 'UpChart', flex: '1' } }`.
4. **Props always flatten directly.** No `props:` wrapper ever.
5. **Events use `onX` prefix.** `onClick`, `onRender` — never `on: { }` wrapper.
6. **Components are objects, never functions.**

## Component Anatomy

```js
export const ComponentName = {
  extends: 'Flex',
  childExtends: 'ListItem',
  padding: 'A B',
  background: 'surface',
  borderRadius: 'B',
  onClick: (e, el, state) => {},
  onRender: (el, state) => {},
  isActive: false,
  '.isActive': { background: 'primary' },
  '@mobile': { padding: 'A' },
  Header: {},
  Content: { Article: { text: 'Hello' } },
  Footer: {}
}
```

## Spacing Scale

| Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|
| X | 3 | Z | 10 | A | 16 |
| Y | 6 | Z1 | 12 | B | 26 |
| | | Z2 | 14 | C | 42 |
| | | A1 | 18-20 | D | 67 |
| | | B1 | 32 | E | 109 |

## Shorthand Props

```js
flow: 'y'                    // flexFlow: 'column'
flow: 'x'                    // flexFlow: 'row'
align: 'center center'       // alignItems + justifyContent
round: 'B'                   // borderRadius
size: 'C'                    // width + height
```

## Responsive & Conditional

```js
'@mobile': { fontSize: 'A' }
'@tablet': { padding: 'B' }
isCompleted: true,
'.isCompleted': { textDecoration: 'line-through' }
```

## CSS Selectors & Pseudo Elements

```js
':hover': { background: 'deepFir' }
':active': { background: 'deepFir 1 +5' }
':focus-visible': { outline: 'solid X blue.3' }
':hover > div': { opacity: '1' }
```

## State Management

```js
s.update({ key: value })       // Update + re-render
s.root.update({...})           // Update root state
s.toggle('isActive')           // Toggle boolean
```

## Dynamic Props

```js
text: (el, s) => `Count: ${s.count}`
hide: (el, s) => !s.items.length
background: (el, s) => el.call('getColor', s.status)
```

## Children Pattern

```js
List: {
  children: (el, state) => state.items,
  childrenAs: 'state',
  childExtends: 'ListItem'
}
```

## el.call() Context

```js
// functions/myFn.js
export const myFn = function myFn(arg) {
  const el = this    // 'this' IS the element
}
// In component:
onClick: (e, el) => el.call('myFn', someArg)  // ✅
onClick: (e, el) => el.call('myFn', el, someArg)  // ❌ el passed twice
```

## onRender Guard

```js
onRender: (el) => {
  if (el.__initialized) return
  el.__initialized = true
  el.call('initLogic')
}
```

## CRITICAL: Icon in Buttons

```js
// ❌ BROKEN
MyBtn: { extends: 'Button', Icon: { name: 'heart' } }

// ✅ CORRECT
MyBtn: {
  extends: 'Flex', tag: 'button', align: 'center center',
  Svg: { viewBox: '0 0 24 24', width: '22', height: '22',
    html: '<path d="..." fill="currentColor"/>' }
}
```

## Suffix Naming (Multiple Same-Type Children)

```js
NavButton: { text: 'All' },
NavButton_add: { icon: 'plus', text: 'Add' }
```

## DO's and DON'Ts

**DO:** `extends`, `childExtends`, flat props, `onX` events, `el.call()`, design tokens, flat folders
**DON'T:** `extend`/`childExtend` (v2), `props: {}` wrapper, `on: {}` wrapper, cross-file imports, function components, subfolders, hardcoded px values
