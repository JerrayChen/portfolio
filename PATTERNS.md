# DOMQL v3 Patterns — What Works & What Doesn't

A living reference of patterns discovered during development. Update this whenever something new is confirmed or fails.

---

## ✅ Confirmed Working

### Hover effects via CSS pseudo-class
```js
Element: {
  opacity: '0',
  transition: 'opacity 0.25s ease',
  ':hover': {
    opacity: '1'
  }
}
```

### Hover on parent to reveal direct div children
```js
Carousel: {
  ':hover > div': {
    opacity: '1'
  },
  PrevBtn: { opacity: '0', transition: 'opacity 0.25s ease' },  // div → revealed on hover
  NextBtn: { opacity: '0', transition: 'opacity 0.25s ease' },  // div → revealed on hover
  Dots:    { opacity: '1' },  // div → already visible, unaffected
  Img:     { ... }            // img → not targeted by > div, unaffected
}
```
> Note: all direct children that are `<div>` get targeted. Pin `opacity: '1'` on children that should stay visible.

### Adjacent sibling hover selector
```js
Div: {
  ':hover + img': {
    opacity: '0.6'
  }
}
```
Applies to the immediately following sibling `<img>` when `Div` is hovered.

### Raw CSS color values
```js
color: 'rgba(255,255,255,1)'   // ✅ white
background: 'rgba(0,0,0,0.35)' // ✅ semi-transparent black
```

### Setting text directly on a Flex container
```js
PrevBtn: {
  extends: 'Flex',
  text: '❮',
  fontSize: 'B',
  color: 'rgba(255,255,255,1)'
}
```
No need for a child `P` element just to render text.

### onClick with DOM manipulation
```js
onClick: (e, el) => {
  e.stopPropagation()
  const parent = el.parent.node       // parent DOM node
  const val = parent.getAttribute('data-foo')
  parent.querySelector('img').src = newSrc
  parent.querySelectorAll('[data-dot]').forEach(d => { d.style.background = '...' })
}
```

### Storing state in data attributes
```js
attr: { 'data-imgs': 'url1,url2,url3', 'data-cur': '0' }
// Read in event handler:
const imgs = carousel.getAttribute('data-imgs').split(',')
const cur = parseInt(carousel.getAttribute('data-cur') || '0')
carousel.setAttribute('data-cur', String(next))
```

### Flex wrapping for tag chips
```js
Tags: {
  extends: 'Flex',
  flexWrap: 'wrap',
  width: '100%'
},
TechTag: {
  whiteSpace: 'nowrap',   // prevents text wrap inside tag
  flexShrink: '0'         // prevents tag from shrinking
}
```

### Preventing text overflow in nested flex
```js
Content: {
  extends: 'Flex',
  flexDirection: 'column',
  minWidth: '0'   // required to allow text truncation in flex children
}
```

### CSS properties not supported as direct keys
```js
Element: {
  style: {
    'text-shadow': 'black 3px 0 10px',
    'some-unsupported-prop': 'value'
  }
}
```

---

## ❌ Does Not Work / Avoid

### `color: 'white'` or `color: 'black'`
These are looked up as design tokens — no `white` or `black` token exists, so nothing gets applied.
**Use:** `color: 'rgba(255,255,255,1)'` or `color: 'rgba(0,0,0,1)'`

### `color: '#ffffff'` (hex values for color token)
May not resolve correctly in DOMQL's token system.
**Use:** `rgba(255,255,255,1)` instead.

### `onMouseEnter` / `onMouseLeave` for hover effects
DOMQL only fires these on real trusted browser events. Browser automation tools (synthetic events) won't trigger them. CSS `:hover` is more reliable.
**Use:** `':hover': { ... }` pseudo-class instead.

### Parent-to-child hover with arbitrary selectors
`:hover .childName` or `:hover [data-attr]` — unknown if supported.
**Use:** `:hover > div` (direct child by tag) which is confirmed working.

### `extends: 'P'` child just to show text in a button
The `P` component's default color token can override your `color` value.
**Use:** Set `text`, `fontSize`, `color` directly on the parent Flex/Box element.

### Fixed height on image containers
Causes images to be cropped.
**Use:** `width: '100%'`, `height: 'auto'` on the `Img` element — preserves aspect ratio.

### `overflow: 'hidden'` on the card root
Clips tags and content below the image area.
**Use:** `overflow: 'hidden'` only on the `Carousel` / image container, not the whole card.
