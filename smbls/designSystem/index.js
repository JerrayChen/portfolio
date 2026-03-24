export default {
  // Rule 0: keys must be lowercase
  color: {
    // ── Backgrounds ──────────────────────────────────────────────
    bgBase:     '#0a0e1a',   // deep navy black — page background
    bgSurface:  '#111827',   // card / section surface
    bgElevated: '#1a2234',   // hover / elevated surface

    // ── Accents ───────────────────────────────────────────────────
    accent:     '#00d4ff',   // electric cyan — CTAs, links, highlights
    accentDark: '#0099bb',   // darker cyan for hover states
    accentGold: '#f59e0b',   // amber gold — awards, secondary highlights

    // ── Text ──────────────────────────────────────────────────────
    textPrimary:   '#e2e8f0',
    textSecondary: '#94a3b8',
    textMuted:     '#475569',

    // ── Borders ───────────────────────────────────────────────────
    borderSubtle: 'rgba(255,255,255,0.07)',
    borderAccent: 'rgba(0,212,255,0.25)',

    // ── Named opacity tokens ──────────────────────────────────────
    accentGlow:    'rgba(0,212,255,0.12)',
    accentGlowMd:  'rgba(0,212,255,0.20)',
    goldGlow:      'rgba(245,158,11,0.15)',
    whiteFaint:    'rgba(255,255,255,0.04)',
    whiteMuted:    'rgba(255,255,255,0.60)',
    whiteSubtle:   'rgba(255,255,255,0.35)',
    overlayDark:   'rgba(10,14,26,0.85)',
  },

  theme: {
    dark: {
      background:    '#0a0e1a',
      surface:       '#111827',
      text:          '#e2e8f0',
      primary:       '#00d4ff',
      secondary:     '#f59e0b',
    }
  },

  // ── Spacing scale reference ────────────────────────────────────
  // X=3  Y=6  Z=10  A=16  B=26  C=42  D=67  E=107  F=172
  // Intermediate: Z1=12  Z2=14  A1=18  A2=20  B1=32  B2=36

  typography: {
    heroName:    { fontSize: 'D',  fontWeight: '700', lineHeight: '1.1' },
    heroTitle:   { fontSize: 'B',  fontWeight: '400' },
    sectionHead: { fontSize: 'C',  fontWeight: '700' },
    cardTitle:   { fontSize: 'B',  fontWeight: '600' },
    body:        { fontSize: 'A',  fontWeight: '400', lineHeight: '1.7' },
    small:       { fontSize: 'Z1', fontWeight: '400' },
    label:       { fontSize: 'Z',  fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' },
  }
}
