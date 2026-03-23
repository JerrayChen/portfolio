const BASE = 'https://raw.githubusercontent.com/JerrayChen/JerrayChen.github.io/source/public/ProjectsPics'

export const Projects = {
  extends: 'Flex',
  tag: 'section',
  id: 'section-projects',
  flexDirection: 'column',
  flexAlign: 'center center',
  padding: 'D B',
  background: 'bgBase',
  attr: { 'aria-label': 'Projects section' },

  Inner: {
    extends: 'Flex',
    flexDirection: 'column',
    gap: 'C',
    maxWidth: '1100px',
    width: '100%',

    Header: {
      extends: 'Flex',
      flexDirection: 'column',
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
      extends: 'Flex',
      flexDirection: 'column',
      gap: 'B',

      Jiabon: {
        extends: 'ProjectCard',
        Carousel: {
          attr: {
            'data-imgs': [BASE+'/Jiabon1.png', BASE+'/Jiabon2.png', BASE+'/Jiabon3.png', BASE+'/Jiabon4.png'].join(',')
          },
          Img: { attr: { src: BASE+'/Jiabon1.png', alt: 'Jiabon app screenshot' } }
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
            GithubLink: { attr: { href: 'https://github.com/JerrayChen/jiabon', 'aria-label': 'Jiabon GitHub', target: '_blank', rel: 'noopener noreferrer' } }
          }
        }
      },

      MealThyme: {
        extends: 'ProjectCard',
        Carousel: {
          attr: {
            'data-imgs': [BASE+'/MT1.png', BASE+'/MT2.png', BASE+'/MT3.png', BASE+'/MT4.png'].join(',')
          },
          Img: { attr: { src: BASE+'/MT1.png', alt: 'Meal Thyme app screenshot' } }
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
            GithubLink: { attr: { href: 'https://github.com/JerrayChen/meal-thyme', 'aria-label': 'Meal Thyme GitHub', target: '_blank', rel: 'noopener noreferrer' } }
          }
        }
      },

      TeamRocket: {
        extends: 'ProjectCard',
        Carousel: {
          attr: {
            'data-imgs': [BASE+'/TRM1.png', BASE+'/TRM2.png', BASE+'/TRM3.png', BASE+'/TRM4.png'].join(',')
          },
          Img: { attr: { src: BASE+'/TRM1.png', alt: 'Team Rocket Market screenshot' } }
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
            GithubLink: { attr: { href: 'https://github.com/JerrayChen/team-rocket-market', 'aria-label': 'Team Rocket Market GitHub', target: '_blank', rel: 'noopener noreferrer' } }
          }
        }
      }
    }
  }
}

export const ProjectCard = {
  extends: 'Flex',
  flexDirection: 'column',
  background: 'bgSurface',
  borderRadius: 'A',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderSubtle',
  overflow: 'hidden',
  width: '100%',
  Carousel: {
    extends: 'Box',
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
      extends: 'Box',
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
      extends: 'Flex',
      flexAlign: 'center center',
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
      extends: 'Flex',
      flexAlign: 'center center',
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
      opacity: '1',
      extends: 'Flex',
      flexDirection: 'row',
      flexAlign: 'center center',
      position: 'absolute',
      bottom: 'Z',
      left: '0',
      right: '0',
      gap: 'Y',
      zIndex: '3',

      D1: { extends: 'CarouselDot', attr: { 'data-dot': '0' }, background: 'accent', transform: 'scale(1.3)' },
      D2: { extends: 'CarouselDot', attr: { 'data-dot': '1' } },
      D3: { extends: 'CarouselDot', attr: { 'data-dot': '2' } },
      D4: { extends: 'CarouselDot', attr: { 'data-dot': '3' } }
    }
  },

  Content: {
    extends: 'Flex',
    flexDirection: 'column',
    gap: 'A',
    padding: 'B',

    Meta: {
      extends: 'Flex',
      flexDirection: 'row',
      flexAlign: 'flex-start center',
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
      extends: 'Flex',
      flexDirection: 'row',
      flexAlign: 'flex-start center',
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
      extends: 'Flex',
      flexDirection: 'row',
      gap: 'Y',
      flexWrap: 'wrap',
      width: '100%'
    },

    Links: {
      extends: 'Flex',
      flexDirection: 'row',
      gap: 'A',
      marginTop: 'Y',

      GithubLink: {
        extends: 'Flex',
        tag: 'a',
        flexDirection: 'row',
        flexAlign: 'flex-start center',
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
        IconLabel: { extends: 'P', text: '⌥' },
        Label: { extends: 'P', text: 'GitHub' }
      }
    }
  }
}

export const CarouselDot = {
  extends: 'Box',
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.35)',
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
