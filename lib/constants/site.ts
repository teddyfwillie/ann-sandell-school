export const siteConfig = {
  name: 'Ann Sandell High School',
  shortName: 'Ann Sandell',
  description: 'A premier educational institution located on Police Academy Road, Liberia, dedicated to academic excellence and holistic student development.',
  url: 'https://annsandell.edu',

  contact: {
    email: 'info@annsandell.edu',
    phone: '+231 XXX XXX XXX',
    address: {
      street: 'Police Academy Road',
      city: 'Monrovia',
      country: 'Liberia',
    },
  },

  social: {
    facebook: 'https://www.facebook.com/AnnSandellSchool',
    twitter: 'https://twitter.com/annsandellhs',
    instagram: 'https://instagram.com/annsandellhs',
    linkedin: 'https://linkedin.com/company/annsandellhs',
  },

  stats: {
    founded: 1985,
    students: 850,
    teachers: 65,
    graduationRate: 98,
  },
} as const;

export type SiteConfig = typeof siteConfig;
