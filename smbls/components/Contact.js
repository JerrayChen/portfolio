export const Contact = {
  flow: 'y',
  tag: 'section',
  id: 'section-contact',
  align: 'center center',
  padding: 'D B',
  background: 'bgSurface',
  attr: { 'aria-label': 'Contact section' },

  Inner: {
    flow: 'y',
    align: 'center center',
    gap: 'C',
    maxWidth: '1100px',
    width: '100%',

    Header: {
      flow: 'y',
      align: 'center center',
      gap: 'Z',

      Label: {
        extends: 'P',
        text: 'Contact',
        fontSize: 'Z',
        fontWeight: '600',
        color: 'accent',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        textAlign: 'center'
      },

      Heading: {
        extends: 'H2',
        text: "Let's work together.",
        fontSize: 'C',
        fontWeight: '700',
        color: 'textPrimary',
        lineHeight: '1.2',
        textAlign: 'center'
      },

      Sub: {
        extends: 'P',
        text: "I'm open to full-time roles, contract work, and interesting collaborations. Drop me a line.",
        fontSize: 'A',
        color: 'textSecondary',
        textAlign: 'center',
        maxWidth: '480px',
        lineHeight: '1.7'
      }
    },

    Socials: {
      flow: 'x',
      align: 'center center',
      gap: 'A',

      GitHub: {
        extends: 'SocialLink',
        SocialLabel: { text: 'GitHub' },
        SocialHandle: { text: 'JerrayChen' },
        href: 'https://github.com/JerrayChen',
        target: '_blank',
        rel: 'noopener noreferrer',
        attr: { 'aria-label': 'View Jerry Chen GitHub profile' }
      },

      LinkedIn: {
        extends: 'SocialLink',
        SocialLabel: { text: 'LinkedIn' },
        SocialHandle: { text: 'che-jui-chen' },
        href: 'https://www.linkedin.com/in/che-jui-chen/',
        target: '_blank',
        rel: 'noopener noreferrer',
        attr: { 'aria-label': 'View Jerry Chen LinkedIn profile' }
      },

      Email: {
        extends: 'SocialLink',
        SocialLabel: { text: 'Email' },
        SocialHandle: { text: 'cchejui@gmail.com' },
        href: 'mailto:cchejui@gmail.com',
        attr: { 'aria-label': 'Email Jerry Chen' }
      }
    },

    Divider: {
      width: '100%',
      height: '1px',
      background: 'borderSubtle'
    },

    Footer: {
      flow: 'x',
      align: 'center center',
      width: '100%',

      FooterLeft: {
        extends: 'P',
        text: '© 2025 Jerry Chen. Built with Symbols / DOMQL.',
        fontSize: 'Z',
        color: 'textMuted'
      }
    }
  }
}

export const SocialLink = {
  extends: 'Link',
  flow: 'y',
  align: 'center center',
  gap: 'Y',
  padding: 'A B',
  background: 'bgElevated',
  borderRadius: 'Z',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderSubtle',
  textDecoration: 'none',
  cursor: 'pointer',
  minWidth: '140px',
  ':hover': {
    borderColor: 'borderAccent',
    background: 'accentGlow'
  },

  SocialLabel: {
    extends: 'P',
    text: (el) => el.parent.label,
    fontSize: 'Z',
    fontWeight: '600',
    color: 'textMuted',
    letterSpacing: '0.08em',
    textTransform: 'uppercase'
  },

  SocialHandle: {
    extends: 'P',
    text: (el) => el.parent.handle,
    fontSize: 'Z1',
    fontWeight: '500',
    color: 'textSecondary'
  }
}
