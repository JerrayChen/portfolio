export const Skills = {
  flow: 'y',
  tag: 'section',
  id: 'section-skills',
  align: 'center center',
  padding: 'D B',
  background: 'bgSurface',
  attr: { 'aria-label': 'Skills section' },

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
        text: 'Skills',
        fontSize: 'Z',
        fontWeight: '600',
        color: 'accent',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      },

      Heading: {
        extends: 'H2',
        text: 'Tools I build with.',
        fontSize: 'C',
        fontWeight: '700',
        color: 'textPrimary',
        lineHeight: '1.2'
      }
    },

    Groups: {
      flow: 'y',
      gap: 'B',

      GroupFrontend: {
        extends: 'SkillGroup',
        GroupLabel: { extends: 'P', text: 'Frontend', fontSize: 'Z1', fontWeight: '600', color: 'textPrimary', marginBottom: 'Z' },
        Chips: {
          flow: 'x',
          gap: 'Y',
          flexWrap: 'wrap',
          C1:  { extends: 'SkillChip', text: 'ReactJS' },
          C2:  { extends: 'SkillChip', text: 'JavaScript' },
          C3:  { extends: 'SkillChip', text: 'TypeScript' },
          C4:  { extends: 'SkillChip', text: 'HTML' },
          C5:  { extends: 'SkillChip', text: 'CSS / Sass' },
          C6:  { extends: 'SkillChip', text: 'Angular' },
          C7:  { extends: 'SkillChip', text: 'jQuery' },
          C8:  { extends: 'SkillChip', text: 'Bootstrap' },
          C9:  { extends: 'SkillChip', text: 'AntDesign' },
          C10: { extends: 'SkillChip', text: 'DOMQL / Symbols' }
        }
      },

      GroupBackend: {
        extends: 'SkillGroup',
        GroupLabel: { extends: 'P', text: 'Backend', fontSize: 'Z1', fontWeight: '600', color: 'textPrimary', marginBottom: 'Z' },
        Chips: {
          flow: 'x',
          gap: 'Y',
          flexWrap: 'wrap',
          C1: { extends: 'SkillChip', text: 'NodeJS' },
          C2: { extends: 'SkillChip', text: 'Express' },
          C3: { extends: 'SkillChip', text: 'VB.NET' },
          C4: { extends: 'SkillChip', text: 'C#.NET' },
          C5: { extends: 'SkillChip', text: 'RESTful API' },
          C6: { extends: 'SkillChip', text: 'SOAP API' }
        }
      },

      GroupDatabase: {
        extends: 'SkillGroup',
        GroupLabel: { extends: 'P', text: 'Databases', fontSize: 'Z1', fontWeight: '600', color: 'textPrimary', marginBottom: 'Z' },
        Chips: {
          flow: 'x',
          gap: 'Y',
          flexWrap: 'wrap',
          C1: { extends: 'SkillChip', text: 'MySQL' },
          C2: { extends: 'SkillChip', text: 'PostgreSQL' },
          C3: { extends: 'SkillChip', text: 'Oracle SQL' }
        }
      },

      GroupTools: {
        extends: 'SkillGroup',
        GroupLabel: { extends: 'P', text: 'Tools & Platforms', fontSize: 'Z1', fontWeight: '600', color: 'textPrimary', marginBottom: 'Z' },
        Chips: {
          flow: 'x',
          gap: 'Y',
          flexWrap: 'wrap',
          C1: { extends: 'SkillChip', text: 'Azure DevOps' },
          C2: { extends: 'SkillChip', text: 'Postman' },
          C3: { extends: 'SkillChip', text: 'Google Maps API' },
          C4: { extends: 'SkillChip', text: 'Stripe API' },
          C5: { extends: 'SkillChip', text: 'FullCalendarJS' },
          C6: { extends: 'SkillChip', text: 'bcryptjs' },
          C7: { extends: 'SkillChip', text: 'Antigravity' },
          C8: { extends: 'SkillChip', text: 'Gemini' },
          C9: { extends: 'SkillChip', text: 'Agile' }
        }
      }
    }
  }
}

export const SkillGroup = {
  flow: 'y',
  padding: 'A B',
  background: 'bgElevated',
  borderRadius: 'A',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderSubtle'
}

export const SkillChip = {
  extends: 'P',
  fontSize: 'Z',
  fontWeight: '500',
  color: 'textSecondary',
  background: 'bgSurface',
  padding: 'Y A',
  borderRadius: 'Z',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'borderSubtle',
  cursor: 'default'
}
