export const Contact = {
  extends: 'Flex',
  tag: 'section',
  id: 'section-contact',
  flexDirection: 'column',
  flexAlign: 'center center',
  padding: 'D B',
  background: 'bgSurface',
  attr: { 'aria-label': 'Contact section' },

  Inner: {
    extends: 'Flex',
    flexDirection: 'column',
    flexAlign: 'center center',
    gap: 'C',
    maxWidth: '1100px',
    width: '100%',

    Header: {
      extends: 'Flex',
      flexDirection: 'column',
      flexAlign: 'center center',
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

    // Social links row
    Socials: {
      extends: 'Flex',
      flexAlign: 'center center',
      gap: 'A',

      GitHub: {
        extends: 'SocialLink',
        SocialLabel: { text: 'GitHub' },
        SocialHandle: { text: 'JerrayChen' },
        attr: {
          href: 'https://github.com/JerrayChen',
          'aria-label': 'View Jerry Chen GitHub profile',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      },

      LinkedIn: {
        extends: 'SocialLink',
        SocialLabel: { text: 'LinkedIn' },
        SocialHandle: { text: 'che-jui-chen' },
        attr: {
          href: 'https://www.linkedin.com/in/che-jui-chen/',
          'aria-label': 'View Jerry Chen LinkedIn profile',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      },

      Email: {
        extends: 'SocialLink',
        SocialLabel: { text: 'Email' },
        SocialHandle: { text: 'cchejui@gmail.com' },
        attr: {
          href: 'mailto:cchejui@gmail.com',
          'aria-label': 'Email Jerry Chen'
        }
      }
    },

    Divider: {
      extends: 'Box',
      width: '100%',
      height: '1px',
      background: 'borderSubtle'
    },

    Footer: {
      extends: 'Flex',
      flexAlign: 'center center',
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
  extends: 'Flex',
  tag: 'a',
  flexDirection: 'column',
  flexAlign: 'center center',
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
  onMouseEnter: (e, el) => {
    el.node.style.borderColor = 'rgba(0,212,255,0.3)'
    el.node.style.background = 'rgba(0,212,255,0.05)'
  },
  onMouseLeave: (e, el) => {
    el.node.style.borderColor = 'rgba(255,255,255,0.07)'
    el.node.style.background = '#1a2234'
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
