export const NavLink = {
  tag: 'button',
  fontSize: 'Z1',
  fontWeight: '500',
  color: 'textSecondary',
  background: 'transparent',
  borderWidth: '0',
  padding: 'Y Z',
  borderRadius: 'Y',
  cursor: 'pointer',
  letterSpacing: '0.02em',
  tabindex: '0',
  ':hover': {
    color: 'accent'
  },
  onKeyDown: (e, el) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      el.node.click()
    }
  }
}
