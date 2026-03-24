export const Experience = {
  flow: 'y',
  tag: 'section',
  id: 'section-experience',
  align: 'center center',
  padding: 'D B',
  background: 'bgBase',
  attr: { 'aria-label': 'Experience section' },

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
        text: 'Experience',
        fontSize: 'Z',
        fontWeight: '600',
        color: 'accent',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      },

      Heading: {
        extends: 'H2',
        text: '10+ years across 4 industries.',
        fontSize: 'C',
        fontWeight: '700',
        color: 'textPrimary',
        lineHeight: '1.2'
      }
    },

    Timeline: {
      flow: 'y',
      gap: 'B',
      position: 'relative',

      Line: {
        position: 'absolute',
        left: 'Z1',
        top: '0',
        bottom: '0',
        width: '1px',
        background: 'borderSubtle'
      },

      JobSymbols: {
        extends: 'JobCard',
        Dot: { extends: 'JobDot', DotCircle: { background: 'accent' } },
        Card: {
          extends: 'JobCardInner',
          Role:     { extends: 'H3', text: 'Software Engineer', fontSize: 'A', fontWeight: '600', color: 'textPrimary' },
          Company:  { extends: 'P', text: 'Symbols.app · Remote', fontSize: 'Z1', color: 'accent', fontWeight: '500' },
          Period:   { extends: 'P', text: 'Feb 2025 — Present', fontSize: 'Z', color: 'textMuted' },
          Bullets: {
            extends: 'BulletList',
            B1: { extends: 'BulletItem', content:'Built 50+ reusable UI components using DOMQL, enabling faster feature development and consistent design' },
            B2: { extends: 'BulletItem', content:'Developed DOMQL-based project templates using Antigravity and Gemini, improving AI training data quality' },
            B3: { extends: 'BulletItem', content:'Added new features and resolved bugs for a Figma-like collaborative canvas' },
            B4: { extends: 'BulletItem', content:'Collaborated with cross-functional teams to optimize canvas performance and editing experience' }
          },
          Tags: {
            extends: 'TagList',
            T1: { extends: 'TechTag', text: 'DOMQL' },
            T2: { extends: 'TechTag', text: 'JavaScript' },
            T3: { extends: 'TechTag', text: 'Symbols' },
            T4: { extends: 'TechTag', text: 'Antigravity' },
            T5: { extends: 'TechTag', text: 'Gemini' }
          }
        }
      },

      JobKoyo: {
        extends: 'JobCard',
        Dot: { extends: 'JobDot', DotCircle: { background: 'textMuted' } },
        Card: {
          extends: 'JobCardInner',
          Role:     { extends: 'H3', text: '.NET Developer', fontSize: 'A', fontWeight: '600', color: 'textPrimary' },
          Company:  { extends: 'P', text: 'Koyo Solutions · North Richland Hills, TX', fontSize: 'Z1', color: 'accent', fontWeight: '500' },
          Period:   { extends: 'P', text: 'Oct 2020 — May 2024', fontSize: 'Z', color: 'textMuted' },
          Bullets: {
            extends: 'BulletList',
            B1: { extends: 'BulletItem', content:'Redesigned PeopleZone landing page in React/VB.NET — reduced load time by 50%, increased job seekers by 10%' },
            B2: { extends: 'BulletItem', content:'Built ticketing system with Angular + VB.NET API, reducing issue resolution time by 15%' },
            B3: { extends: 'BulletItem', content:'Constructed Customer Management System with reusable jQuery components — 40% increase in user adoption' },
            B4: { extends: 'BulletItem', content:'Delivered B2B community platform Hostly for renting spaces and services' }
          },
          Tags: {
            extends: 'TagList',
            T1: { extends: 'TechTag', text: 'React' },
            T2: { extends: 'TechTag', text: 'VB.NET' },
            T3: { extends: 'TechTag', text: 'Angular' },
            T4: { extends: 'TechTag', text: 'C#.NET' },
            T5: { extends: 'TechTag', text: 'Azure DevOps' }
          }
        }
      },

      JobDevMountain: {
        extends: 'JobCard',
        Dot: { extends: 'JobDot', DotCircle: { background: 'textMuted' } },
        Card: {
          extends: 'JobCardInner',
          Role:     { extends: 'H3', text: 'Developer', fontSize: 'A', fontWeight: '600', color: 'textPrimary' },
          Company:  { extends: 'P', text: 'DevMountain Bootcamp · Dallas, TX', fontSize: 'Z1', color: 'accent', fontWeight: '500' },
          Period:   { extends: 'P', text: 'Nov 2019 — Feb 2020', fontSize: 'Z', color: 'textMuted' },
          Bullets: {
            extends: 'BulletList',
            B1: { extends: 'BulletItem', content:'Built Jiabon — full-stack homemade food app with Google Maps API and Stripe; awarded Best Business Solution' },
            B2: { extends: 'BulletItem', content:'Collaborated on Meal Thyme — meal planning app with scheduling and grocery list generation' },
            B3: { extends: 'BulletItem', content:'Created reusable components that increased team development efficiency by 10%' }
          },
          Tags: {
            extends: 'TagList',
            T1: { extends: 'TechTag', text: 'ReactJS' },
            T2: { extends: 'TechTag', text: 'NodeJS' },
            T3: { extends: 'TechTag', text: 'PostgreSQL' },
            T4: { extends: 'TechTag', text: 'Google Maps API' },
            T5: { extends: 'TechTag', text: 'Stripe' }
          }
        }
      },

      JobEVA: {
        extends: 'JobCard',
        Dot: { extends: 'JobDot', DotCircle: { background: 'textMuted' } },
        Card: {
          extends: 'JobCardInner',
          Role:     { extends: 'H3', text: 'Software Engineer', fontSize: 'A', fontWeight: '600', color: 'textPrimary' },
          Company:  { extends: 'P', text: 'EVA Air · Taoyuan, Taiwan', fontSize: 'Z1', color: 'accent', fontWeight: '500' },
          Period:   { extends: 'P', text: 'Sept 2010 — Jan 2015', fontSize: 'Z', color: 'textMuted' },
          Bullets: {
            extends: 'BulletList',
            B1: { extends: 'BulletItem', content:'Led front-end of mobile warehouse system with SOAP API back-end — 30% reduction in management time' },
            B2: { extends: 'BulletItem', content:'Partnered with Panasonic Avionics to build in-flight duty-free ordering system — reduced selling time by 25%' },
            B3: { extends: 'BulletItem', content:'Translated 50+ complex business requirements into technical specs for real-time in-flight POS support' },
            B4: { extends: 'BulletItem', content:'Optimized shared codebase — new developers onboard 20% faster' }
          },
          Tags: {
            extends: 'TagList',
            T1: { extends: 'TechTag', text: 'SOAP API' },
            T2: { extends: 'TechTag', text: 'VB.NET' },
            T3: { extends: 'TechTag', text: 'Mobile' },
            T4: { extends: 'TechTag', text: 'POS Systems' }
          }
        }
      }
    }
  }
}

export const JobCard = {
  flow: 'x',
  align: 'flex-start flex-start',
  gap: 'A'
}

export const JobDot = {
  flow: 'y',
  align: 'flex-start center',
  flexShrink: '0',
  width: 'A',
  paddingTop: 'A1',

  DotCircle: {
    width: 'Z1',
    height: 'Z1',
    borderRadius: '50%',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'bgBase'
  }
}

export const JobCardInner = {
  flow: 'y',
  gap: 'A',
  flex: '1',
  padding: 'B',
  background: 'bgSurface',
  borderRadius: 'A',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderSubtle'
}

export const BulletList = {
  flow: 'y',
  gap: 'Z'
}

export const BulletItem = {
  flow: 'x',
  align: 'flex-start flex-start',
  gap: 'Z',

  BulletDot: {
    extends: 'P',
    text: '▸',
    fontSize: 'Z1',
    color: 'accent',
    flexShrink: '0',
    lineHeight: '1.6'
  },

  BulletText: {
    extends: 'P',
    text: (el) => el.parent.content,
    fontSize: 'Z1',
    color: 'textSecondary',
    lineHeight: '1.6'
  }
}

export const TagList = {
  flow: 'x',
  gap: 'Y',
  flexWrap: 'wrap'
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
  borderColor: 'borderAccent'
}
