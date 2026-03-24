export const Hero = {
  flow: 'y',
  tag: 'section',
  id: 'section-hero',
  align: 'center center',
  minHeight: '100vh',
  padding: 'D B',
  background: 'bgBase',
  position: 'relative',
  overflow: 'hidden',
  attr: { 'aria-label': 'Hero section' },

  BgGrid: {
    position: 'absolute',
    top: '0', left: '0', right: '0', bottom: '0',
    backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    pointerEvents: 'none'
  },

  GlowOrb: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
    top: '10%',
    right: '10%',
    pointerEvents: 'none'
  },

  Inner: {
    flow: 'x',
    align: 'center center',
    gap: 'C',
    maxWidth: '1100px',
    width: '100%',
    position: 'relative',

    TextCol: {
      flow: 'y',
      gap: 'B',
      flex: '1',

      Eyebrow: {
        flow: 'x',
        align: 'center flex-start',
        gap: 'Z',

        Dot: {
          width: 'Z',
          height: 'Z',
          borderRadius: '50%',
          background: 'accent'
        },

        Label: {
          extends: 'P',
          text: 'Available for opportunities',
          fontSize: 'Z',
          color: 'accent',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }
      },

      Name: {
        extends: 'H1',
        text: 'Jerry Chen',
        fontSize: 'D',
        fontWeight: '700',
        color: 'textPrimary',
        lineHeight: '1.05',
        letterSpacing: '-0.02em'
      },

      Title: {
        extends: 'H2',
        text: 'Software Engineer',
        fontSize: 'C',
        fontWeight: '400',
        color: 'accent',
        lineHeight: '1.2'
      },

      Tagline: {
        extends: 'P',
        text: 'Math brain. Engineer hands. Currently building the future of UI at Symbols.',
        fontSize: 'A',
        color: 'textSecondary',
        lineHeight: '1.7',
        maxWidth: '480px'
      },

      CTAs: {
        flow: 'x',
        gap: 'A',
        align: 'center flex-start',
        marginTop: 'Y',

        BtnWork: {
          tag: 'button',
          text: 'See My Work',
          fontSize: 'Z1',
          fontWeight: '600',
          color: 'bgBase',
          background: 'accent',
          padding: 'Z B',
          borderRadius: 'Z',
          borderWidth: '0',
          cursor: 'pointer',
          letterSpacing: '0.02em',
          attr: { 'aria-label': 'Scroll to Projects section' },
          ':hover': { background: 'accentDark' },
          onClick: (e, el) => el.call('scrollTo', 'section-projects')
        },

        BtnContact: {
          tag: 'button',
          text: 'Contact Me',
          fontSize: 'Z1',
          fontWeight: '600',
          color: 'accent',
          background: 'transparent',
          padding: 'Z B',
          borderRadius: 'Z',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'accent',
          cursor: 'pointer',
          letterSpacing: '0.02em',
          attr: { 'aria-label': 'Scroll to Contact section' },
          ':hover': { background: 'accentGlow' },
          onClick: (e, el) => el.call('scrollTo', 'section-contact')
        }
      }
    },

    PhotoCol: {
      flow: 'x',
      align: 'center center',
      position: 'relative',

      PhotoRing: {
        position: 'absolute',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'borderAccent',
        background: 'accentGlow'
      },

      Photo: {
        extends: 'Img',
        src: 'https://jerraychen.github.io/files/head.jpeg',
        alt: 'Jerry Chen — Software Engineer',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        objectFit: 'cover',
        position: 'relative',
        zIndex: '1',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'accent'
      }
    }
  },

  ScrollHint: {
    flow: 'y',
    align: 'center center',
    gap: 'Y',
    position: 'absolute',
    bottom: 'B',
    left: '50%',
    transform: 'translateX(-50%)',

    ScrollText: {
      extends: 'P',
      text: 'scroll',
      fontSize: 'Z',
      color: 'textMuted',
      letterSpacing: '0.15em',
      textTransform: 'uppercase'
    },

    ScrollLine: {
      width: '1px',
      height: 'B',
      background: 'textMuted'
    }
  }
}
