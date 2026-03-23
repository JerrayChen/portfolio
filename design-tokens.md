# Design Tokens Reference

All valid token names for this project. Use these as values in DOMQL component properties.
Source of truth: `smbls/designSystem/index.js`

---

## Color Tokens

### Backgrounds
| Token       | Value       | Use                          |
|-------------|-------------|------------------------------|
| `bgBase`    | `#0a0e1a`   | Page background, odd sections |
| `bgSurface` | `#111827`   | Card / section surface, even sections |
| `bgElevated`| `#1a2234`   | Hover states, elevated cards  |

### Accent
| Token        | Value       | Use                          |
|--------------|-------------|------------------------------|
| `accent`     | `#00d4ff`   | CTAs, links, highlights, tags |
| `accentDark` | `#0099bb`   | Darker cyan for hover states  |
| `accentGold` | `#f59e0b`   | Awards, secondary highlights  |

### Text
| Token           | Value     | Use                     |
|-----------------|-----------|-------------------------|
| `textPrimary`   | `#e2e8f0` | Headings, primary text  |
| `textSecondary` | `#94a3b8` | Body text, descriptions |
| `textMuted`     | `#475569` | Labels, meta info       |

### Borders
| Token           | Value                    | Use                        |
|-----------------|--------------------------|----------------------------|
| `borderSubtle`  | `rgba(255,255,255,0.07)` | Default card/section borders |
| `borderAccent`  | `rgba(0,212,255,0.25)`   | Accent/highlighted borders  |

### Glow / Overlay
| Token         | Value                    | Use                          |
|---------------|--------------------------|------------------------------|
| `accentGlow`  | `rgba(0,212,255,0.12)`   | Tag backgrounds, subtle fills |
| `accentGlowMd`| `rgba(0,212,255,0.20)`   | Slightly stronger glow        |
| `goldGlow`    | `rgba(245,158,11,0.15)`  | Award badge backgrounds       |
| `whiteFaint`  | `rgba(255,255,255,0.04)` | Very subtle white overlay     |
| `whiteMuted`  | `rgba(255,255,255,0.60)` | Semi-transparent white        |
| `whiteSubtle` | `rgba(255,255,255,0.35)` | Subtle white (carousel dots)  |
| `overlayDark` | `rgba(10,14,26,0.85)`    | Dark modal / overlay          |

> ⚠️ There is NO `white` token. Use `rgba(255,255,255,1)` for solid white.
> ⚠️ There is NO `black` token. Use `rgba(0,0,0,1)` or `rgba(0,0,0,0.X)`.

---

## Spacing Scale

Symbols uses a numeric scale. These token names are used for `padding`, `margin`, `gap`, `fontSize`, etc.

| Token | px value |
|-------|----------|
| `X`   | 3px      |
| `Y`   | 6px      |
| `Z`   | 10px     |
| `Z1`  | 12px     |
| `Z2`  | 14px     |
| `A`   | 16px     |
| `A1`  | 18px     |
| `A2`  | 20px     |
| `B`   | 26px     |
| `B1`  | 32px     |
| `B2`  | 36px     |
| `C`   | 42px     |
| `D`   | 67px     |
| `E`   | 107px    |
| `F`   | 172px    |

---

## Typography Presets (reference only — not tokens, apply manually)

| Role         | fontSize | fontWeight | notes              |
|--------------|----------|------------|--------------------|
| Hero name    | `D`      | `700`      | lineHeight `1.1`   |
| Hero title   | `B`      | `400`      |                    |
| Section head | `C`      | `700`      |                    |
| Card title   | `B`      | `600`      |                    |
| Body         | `A`      | `400`      | lineHeight `1.7`   |
| Small        | `Z1`     | `400`      |                    |
| Label        | `Z`      | `600`      | uppercase, 0.1em spacing |
