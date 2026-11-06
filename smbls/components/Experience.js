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
            B2: { extends: 'BulletItem', content:'Developed DOMQL-based project templates using Claude Code, Antigravity and Gemini, improving AI training data quality' },
            B3: { extends: 'BulletItem', content:'Added new features and resolved bugs for a Figma-like collaborative canvas' }
          },
          Tags: {
            extends: 'TagList',
            T1: { extends: 'TechTag', text: 'DOMQL' },
            T2: { extends: 'TechTag', text: 'JavaScript' },
            T3: { extends: 'TechTag', text: 'Symbols' },
            T4: { extends: 'TechTag', text: 'Antigravity' },
            T5: { extends: 'TechTag', text: 'Gemini' },
            T6: { extends: 'TechTag', text: 'Claude Code' }
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
            B1: { extends: 'BulletItem', content:'Sole developer on the PeopleZone landing page rebuild: replaced an older .NET Framework front end with a React single-page app and VB.NET API, so switching tabs no longer reloads the page' },
            B2: { extends: 'BulletItem', content:'Primary developer of a customer management system: designed the MySQL database, built the C# ASP.NET Web API and reusable jQuery components' },
            B3: { extends: 'BulletItem', content:'Developed dozens of REST API endpoints in VB.NET for Hostly, a B2B platform for renting spaces and booking services' },
            B4: { extends: 'BulletItem', content:'Built an Angular front-end prototype for a ticketing system, with a custom workflow for each department' }
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
          Role:     { extends: 'H3', text: 'Student', fontSize: 'A', fontWeight: '600', color: 'textPrimary' },
          Company:  { extends: 'P', text: 'DevMountain Bootcamp · Dallas, TX', fontSize: 'Z1', color: 'accent', fontWeight: '500' },
          Period:   { extends: 'P', text: 'Nov 2019 — Feb 2020', fontSize: 'Z', color: 'textMuted' },
          Bullets: {
            extends: 'BulletList',
            B1: { extends: 'BulletItem', content:'Built Jiabon — full-stack homemade food app with Google Maps API and Stripe; awarded Best Business Solution' },
            B2: { extends: 'BulletItem', content:'Collaborated on Meal Thyme — meal planning app with scheduling and grocery list generation' }
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
            B1: { extends: 'BulletItem', content:'Led front-end of mobile warehouse system with JavaScript and jQuery, and built its SOAP API back end with C#, VB.NET, and Oracle SQL' },
            B2: { extends: 'BulletItem', content:'Managed a partnership with Panasonic Avionics to let passengers order duty-free goods through the in-flight entertainment system' },
            B3: { extends: 'BulletItem', content:'Translated 50+ business requirements into technical specs for the in-flight POS system' },
            B4: { extends: 'BulletItem', content:'Merged copy-pasted code of 3 warehouses into shared classes with inheritance, so a change to the main warehouse also reaches the 2 smaller ones' }
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

// TechTag is defined in Projects.js — canonical definition lives there
