export const About = {
  flow: 'y',
  tag: 'section',
  id: 'section-about',
  align: 'center center',
  padding: 'D B',
  background: 'bgSurface',
  attr: { 'aria-label': 'About section' },

  Inner: {
    flow: 'x',
    align: 'center flex-start',
    gap: 'D',
    maxWidth: '1100px',
    width: '100%',

    LeftCol: {
      flow: 'y',
      align: 'center center',
      gap: 'B',
      flex: '0 0 auto',

      PhotoWrap: {
        position: 'relative',
        width: '240px',
        height: '240px',

        PhotoBorder: {
          position: 'absolute',
          top: '-6px',
          left: '-6px',
          right: '-6px',
          bottom: '-6px',
          borderRadius: 'A',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'borderAccent'
        },

        Photo: {
          extends: 'Img',
          src: 'https://jerraychen.github.io/files/head.jpeg',
          alt: 'Jerry Chen',
          width: '240px',
          height: '240px',
          borderRadius: 'A',
          objectFit: 'cover',
          display: 'block'
        }
      },

      Facts: {
        flow: 'y',
        gap: 'Z',
        width: '100%',

        FactCats:   { extends: 'FactItem', icon: '🐱', label: 'Cat dad' },
        FactMusic:  { extends: 'FactItem', icon: '🎵', label: 'Music lover' },
        FactGames:  { extends: 'FactItem', icon: '🎮', label: 'Board & video games' },
        FactFood:   { extends: 'FactItem', icon: '🍜', label: 'Home cook' },
        FactMath:   { extends: 'FactItem', icon: '📐', label: 'Math graduate' }
      }
    },

    RightCol: {
      flow: 'y',
      gap: 'B',
      flex: '1',

      SectionLabel: {
        extends: 'P',
        text: 'About Me',
        fontSize: 'Z',
        fontWeight: '600',
        color: 'accent',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      },

      Heading: {
        extends: 'H2',
        text: 'Engineer by craft,\nmathematician by training.',
        fontSize: 'C',
        fontWeight: '700',
        color: 'textPrimary',
        lineHeight: '1.2',
        whiteSpace: 'pre-line'
      },

      Bio1: {
        extends: 'P',
        text: 'My journey started with mathematics at National Chengchi University, but a Python course changed everything. Once I wrote my first program, I never looked back. That same analytical mindset I developed studying math now shapes how I approach every engineering challenge.',
        fontSize: 'A',
        color: 'textSecondary',
        lineHeight: '1.8'
      },

      Bio2: {
        extends: 'P',
        text: "Over 10+ years I've shipped software across airlines, enterprise platforms, and now cutting-edge design tooling at Symbols. I care about writing clean, reusable code that actually solves problems — not just code that compiles.",
        fontSize: 'A',
        color: 'textSecondary',
        lineHeight: '1.8'
      },

      Bio3: {
        extends: 'P',
        text: "Outside of work I'm petting my cats, making food (which inspired two of my projects), and playing board games. I believe the best engineers are curious about everything — not just code.",
        fontSize: 'A',
        color: 'textSecondary',
        lineHeight: '1.8'
      },

      Highlights: {
        flow: 'x',
        gap: 'A',
        marginTop: 'Y',

        Years: {
          extends: 'StatCard',
          StatNumber: { extends: 'P', text: '10+', fontSize: 'C', fontWeight: '700', color: 'accent', lineHeight: '1' },
          StatLabel: { extends: 'P', text: 'Years experience', fontSize: 'Z', color: 'textSecondary', textAlign: 'center' }
        },
        Companies: {
          extends: 'StatCard',
          StatNumber: { extends: 'P', text: '4', fontSize: 'C', fontWeight: '700', color: 'accent', lineHeight: '1' },
          StatLabel: { extends: 'P', text: 'Companies', fontSize: 'Z', color: 'textSecondary', textAlign: 'center' }
        },
        Components: {
          extends: 'StatCard',
          StatNumber: { extends: 'P', text: '50+', fontSize: 'C', fontWeight: '700', color: 'accent', lineHeight: '1' },
          StatLabel: { extends: 'P', text: 'UI components built', fontSize: 'Z', color: 'textSecondary', textAlign: 'center' }
        }
      }
    }
  }
}

export const FactItem = {
  flow: 'x',
  align: 'center flex-start',
  gap: 'Z',

  Icon: {
    extends: 'P',
    text: (el) => el.parent.icon,
    fontSize: 'A'
  },

  Text: {
    extends: 'P',
    text: (el) => el.parent.label,
    fontSize: 'Z1',
    color: 'textSecondary'
  }
}

export const StatCard = {
  flow: 'y',
  align: 'center center',
  padding: 'A',
  background: 'bgElevated',
  borderRadius: 'Z',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderSubtle',
  flex: '1'
}
