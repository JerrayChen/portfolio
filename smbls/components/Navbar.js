export const Navbar = {
  flow: 'x',
  tag: 'nav',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '100',
  align: 'center space-between',
  padding: 'A B',
  background: 'overlayDark',
  backdropFilter: 'blur(12px)',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'borderSubtle',
  attr: { 'aria-label': 'Main navigation' },

  Brand: {
    flow: 'y',
    gap: 'Y',
    tag: 'button',
    cursor: 'pointer',
    background: 'transparent',
    borderWidth: '0',
    padding: '0',
    attr: { 'aria-label': 'Jerry Chen — back to top' },
    onClick: (e, el) => el.call('scrollTo', 'section-hero'),
    onKeyDown: (e, el) => {
      if (e.key === 'Enter') el.call('scrollTo', 'section-hero')
    },

    Name: {
      extends: 'P',
      text: 'Jerry Chen',
      fontSize: 'B',
      fontWeight: '700',
      color: 'accent',
      lineHeight: '1'
    },

    JobTitle: {
      extends: 'P',
      text: 'Software Engineer',
      fontSize: 'Z',
      fontWeight: '400',
      color: 'textSecondary',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  },

  NavLinks: {
    flow: 'x',
    gap: 'A',
    align: 'center center',
    role: 'list',

    NavAbout: {
      extends: 'NavLink',
      text: 'About',
      attr: { 'aria-label': 'Navigate to About section' },
      role: 'listitem',
      onClick: (e, el) => el.call('scrollTo', 'section-about')
    },

    NavExperience: {
      extends: 'NavLink',
      text: 'Experience',
      attr: { 'aria-label': 'Navigate to Experience section' },
      role: 'listitem',
      onClick: (e, el) => el.call('scrollTo', 'section-experience')
    },

    NavSkills: {
      extends: 'NavLink',
      text: 'Skills',
      attr: { 'aria-label': 'Navigate to Skills section' },
      role: 'listitem',
      onClick: (e, el) => el.call('scrollTo', 'section-skills')
    },

    NavProjects: {
      extends: 'NavLink',
      text: 'Projects',
      attr: { 'aria-label': 'Navigate to Projects section' },
      role: 'listitem',
      onClick: (e, el) => el.call('scrollTo', 'section-projects')
    },

    NavContact: {
      extends: 'NavLink',
      text: 'Contact',
      attr: { 'aria-label': 'Navigate to Contact section' },
      role: 'listitem',
      onClick: (e, el) => el.call('scrollTo', 'section-contact')
    }
  }
}
