// NOTE: BASE is a module-level constant — flagged for Rule 33 (vars outside scope lost after serialization).
// Should be moved into designSystem or el.scope if serialization is required.
const BASE = 'https://raw.githubusercontent.com/JerrayChen/JerrayChen.github.io/source/public/ProjectsPics'

export const Projects = {
  flow: 'y',
  tag: 'section',
  id: 'section-projects',
  align: 'center center',
  padding: 'D B',
  background: 'bgBase',
  attr: { 'aria-label': 'Projects section' },

  Inner: {
    flow: 'y',
    gap: 'C',
    maxWidth: '1100px',
    width: '100%',

    Header: {
      flow: 'y',
      gap: 'Z',

      Label: {
        extends: 'P',
        text: 'Projects',
        fontSize: 'Z',
        fontWeight: '600',
        color: 'accent',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      },

      Heading: {
        extends: 'H2',
        text: "Things I've built.",
        fontSize: 'C',
        fontWeight: '700',
        color: 'textPrimary',
        lineHeight: '1.2'
      },

      Sub: {
        extends: 'P',
        text: 'Personal and group projects from bootcamp and beyond.',
        fontSize: 'A',
        color: 'textSecondary'
      }
    },

    Cards: {
      flow: 'y',
      gap: 'B',

      Jiabon: {
        extends: 'ProjectCard',
        Carousel: {
          attr: {
            'data-imgs': [BASE+'/Jiabon1.png', BASE+'/Jiabon2.png', BASE+'/Jiabon3.png', BASE+'/Jiabon4.png'].join(',')
          },
          Img: { src: BASE+'/Jiabon1.png', alt: 'Jiabon app screenshot' }
        },
        Content: {
          Meta: { Type: { text: 'Personal Project' }, Num: { text: '01' } },
          Title: { text: 'Jiabon' },
          Award: {
            display: 'flex',
            Star: { text: '★' },
            AwardText: { text: 'Best Business Solution — DevMountain' }
          },
          Desc: { text: 'A mobile-first app connecting home cooks with nearby buyers. Shows available meals, time slots, and sellers on an interactive map.' },
          Tags: {
            T1: { extends: 'TechTag', text: 'ReactJS' },
            T2: { extends: 'TechTag', text: 'NodeJS' },
            T3: { extends: 'TechTag', text: 'Express' },
            T4: { extends: 'TechTag', text: 'PostgreSQL' },
            T5: { extends: 'TechTag', text: 'Google Maps' },
            T6: { extends: 'TechTag', text: 'Stripe' }
          },
          Links: {
            GithubLink: {
              href: 'https://github.com/JerrayChen/jiabon',
              target: '_blank',
              rel: 'noopener noreferrer',
              attr: { 'aria-label': 'Jiabon GitHub' }
            }
          }
        }
      },

      MealThyme: {
        extends: 'ProjectCard',
        Carousel: {
          attr: {
            'data-imgs': [BASE+'/MT1.png', BASE+'/MT2.png', BASE+'/MT3.png', BASE+'/MT4.png'].join(',')
          },
          Img: { src: BASE+'/MT1.png', alt: 'Meal Thyme app screenshot' }
        },
        Content: {
          Meta: { Type: { text: 'Group Project' }, Num: { text: '02' } },
          Title: { text: 'Meal Thyme' },
          Desc: { text: 'A full-stack meal planning website. Manage recipes, plan weekly meals, review nutritional info, and auto-generate grocery lists.' },
          Tags: {
            T1: { extends: 'TechTag', text: 'ReactJS' },
            T2: { extends: 'TechTag', text: 'NodeJS' },
            T3: { extends: 'TechTag', text: 'PostgreSQL' },
            T4: { extends: 'TechTag', text: 'Sass' },
            T5: { extends: 'TechTag', text: 'FullCalendarJS' }
          },
          Links: {
            GithubLink: {
              href: 'https://github.com/JerrayChen/meal-thyme',
              target: '_blank',
              rel: 'noopener noreferrer',
              attr: { 'aria-label': 'Meal Thyme GitHub' }
            }
          }
        }
      },

      TeamRocket: {
        extends: 'ProjectCard',
        Carousel: {
          attr: {
            'data-imgs': [BASE+'/TRM1.png', BASE+'/TRM2.png', BASE+'/TRM3.png', BASE+'/TRM4.png'].join(',')
          },
          Img: { src: BASE+'/TRM1.png', alt: 'Team Rocket Market screenshot' }
        },
        Content: {
          Meta: { Type: { text: 'Personal Project' }, Num: { text: '03' } },
          Title: { text: 'Team Rocket Market' },
          Desc: { text: 'A Pokémon trading marketplace where users browse, list, and trade cards. Built as a focused sprint project in four days.' },
          Tags: {
            T1: { extends: 'TechTag', text: 'ReactJS' },
            T2: { extends: 'TechTag', text: 'NodeJS' },
            T3: { extends: 'TechTag', text: 'Express' }
          },
          Links: {
            GithubLink: {
              href: 'https://github.com/JerrayChen/team-rocket-market',
              target: '_blank',
              rel: 'noopener noreferrer',
              attr: { 'aria-label': 'Team Rocket Market GitHub' }
            }
          }
        }
      }
    }
  }
}

export const ProjectCard = {
  flow: 'y',
  background: 'bgSurface',
  borderRadius: 'A',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderSubtle',
  overflow: 'hidden',
  width: '100%',

  Carousel: {
    position: 'relative',
    width: '100%',
    background: 'bgElevated',
    ':hover > div': {
      opacity: '1'
    },

    Img: {
      extends: 'Img',
      width: '100%',
      height: 'auto',
      display: 'block'
    },

    Overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'rgba(0,0,0,0.28)',
      opacity: '0',
      transition: 'opacity 0.25s ease',
      zIndex: '1',
      pointerEvents: 'none'
    },

    PrevBtn: {
      flow: 'x',
      align: 'center center',
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '0',
      width: '56px',
      background: 'rgba(0,0,0,0.35)',
      cursor: 'pointer',
      zIndex: '3',
      opacity: '0',
      transition: 'opacity 0.25s ease',
      text: '❮',
      fontSize: 'B',
      color: 'rgba(255,255,255,1)',
      // NOTE: carousel DOM manipulation flagged for Rule 30 refactor
      onClick: (e, el) => {
        e.stopPropagation()
        const carousel = el.parent.node
        const imgs = carousel.getAttribute('data-imgs').split(',')
        const cur = parseInt(carousel.getAttribute('data-cur') || '0')
        const prev = (cur - 1 + imgs.length) % imgs.length
        carousel.setAttribute('data-cur', String(prev))
        carousel.querySelector('img').src = imgs[prev]
        carousel.querySelectorAll('[data-dot]').forEach((d, i) => {
          d.style.background = i === prev ? '#00d4ff' : 'rgba(255,255,255,0.35)'
          d.style.transform = i === prev ? 'scale(1.3)' : 'scale(1)'
        })
      }
    },

    NextBtn: {
      flow: 'x',
      align: 'center center',
      position: 'absolute',
      right: '0',
      top: '0',
      bottom: '0',
      width: '56px',
      background: 'rgba(0,0,0,0.35)',
      cursor: 'pointer',
      zIndex: '3',
      opacity: '0',
      transition: 'opacity 0.25s ease',
      text: '❯',
      fontSize: 'B',
      color: 'rgba(255,255,255,1)',
      // NOTE: carousel DOM manipulation flagged for Rule 30 refactor
      onClick: (e, el) => {
        e.stopPropagation()
        const carousel = el.parent.node
        const imgs = carousel.getAttribute('data-imgs').split(',')
        const cur = parseInt(carousel.getAttribute('data-cur') || '0')
        const next = (cur + 1) % imgs.length
        carousel.setAttribute('data-cur', String(next))
        carousel.querySelector('img').src = imgs[next]
        carousel.querySelectorAll('[data-dot]').forEach((d, i) => {
          d.style.background = i === next ? '#00d4ff' : 'rgba(255,255,255,0.35)'
          d.style.transform = i === next ? 'scale(1.3)' : 'scale(1)'
        })
      }
    },

    Dots: {
      flow: 'x',
      align: 'center center',
      position: 'absolute',
      bottom: 'Z',
      left: '0',
      right: '0',
      gap: 'Y',
      zIndex: '3',
      opacity: '1',

      D1: { extends: 'CarouselDot', attr: { 'data-dot': '0' }, background: 'accent', transform: 'scale(1.3)' },
      D2: { extends: 'CarouselDot', attr: { 'data-dot': '1' } },
      D3: { extends: 'CarouselDot', attr: { 'data-dot': '2' } },
      D4: { extends: 'CarouselDot', attr: { 'data-dot': '3' } }
    }
  },

  Content: {
    flow: 'y',
    gap: 'A',
    padding: 'B',
    minWidth: '0',

    Meta: {
      flow: 'x',
      align: 'flex-start center',
      gap: 'Z',

      Type: {
        extends: 'P',
        fontSize: 'Z',
        color: 'textMuted',
        fontWeight: '500',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        flex: '1'
      },

      Num: {
        extends: 'P',
        fontSize: 'Z',
        fontWeight: '700',
        color: 'accent',
        letterSpacing: '0.1em'
      }
    },

    Title: {
      extends: 'H3',
      fontSize: 'B',
      fontWeight: '700',
      color: 'textPrimary'
    },

    Award: {
      flow: 'x',
      align: 'flex-start center',
      gap: 'Y',
      display: 'none',

      Star: {
        extends: 'P',
        fontSize: 'Z1',
        color: 'accentGold'
      },

      AwardText: {
        extends: 'P',
        fontSize: 'Z1',
        fontWeight: '600',
        color: 'accentGold'
      }
    },

    Desc: {
      extends: 'P',
      fontSize: 'Z1',
      color: 'textSecondary',
      lineHeight: '1.7'
    },

    Tags: {
      flow: 'x',
      gap: 'Y',
      flexWrap: 'wrap',
      width: '100%'
    },

    Links: {
      flow: 'x',
      gap: 'A',
      marginTop: 'Y',

      GithubLink: {
        extends: 'Link',
        flow: 'x',
        align: 'flex-start center',
        gap: 'Y',
        fontSize: 'Z1',
        fontWeight: '600',
        color: 'textSecondary',
        textDecoration: 'none',
        padding: 'Y A',
        borderRadius: 'Y',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'borderSubtle',
        cursor: 'pointer',
        ':hover': { color: 'accent', borderColor: 'borderAccent' },
        IconLabel: { extends: 'P', text: '⌥' },
        Label: { extends: 'P', text: 'GitHub' }
      }
    }
  }
}

export const CarouselDot = {
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  background: 'whiteSubtle',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
}

export const TechTag = {
  extends: 'P',
  fontSize: 'Z',
  fontWeight: '500',
  color: 'accent',
  background: 'accentGlow',
  padding: 'Y Z',
  borderRadius: 'Y',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderAccent',
  whiteSpace: 'nowrap',
  flexShrink: '0'
}
