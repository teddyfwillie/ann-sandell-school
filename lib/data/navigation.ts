export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our School', href: '/about' },
      { label: 'Academics', href: '/about/academics' },
      { label: 'Extracurricular', href: '/about/extracurricular' },
    ],
  },
  {
    label: 'Staff',
    href: '/staff',
  },
  {
    label: 'Calendar',
    href: '/calendar',
  },
  {
    label: 'Admissions',
    href: '/admissions',
  },
  {
    label: 'Students',
    href: '/students',
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  about: [
    { label: 'Our School', href: '/about' },
    { label: 'Academics', href: '/about/academics' },
    { label: 'Extracurricular', href: '/about/extracurricular' },
    { label: 'Staff Directory', href: '/staff' },
  ],
  admissions: [
    { label: 'Apply Now', href: '/admissions' },
    { label: 'Schedule a Tour', href: '/admissions#tour' },
    { label: 'Tuition & Fees', href: '/admissions#tuition' },
    { label: 'FAQs', href: '/admissions#faq' },
  ],
  students: [
    { label: 'Student Resources', href: '/students' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'News', href: '/news' },
    { label: 'Gallery', href: '/gallery' },
  ],
  connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Directions', href: '/contact#map' },
    { label: 'Newsletter', href: '/contact#newsletter' },
  ],
};
