export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'campus' | 'events' | 'athletics' | 'student-life';
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/campus-main.jpg',
    alt: 'Main campus building',
    title: 'Main Administration Building',
    category: 'campus',
    width: 1200,
    height: 800,
  },
  {
    id: '2',
    src: '/images/gallery/campus-library.jpg',
    alt: 'School library interior',
    title: 'The Learning Center',
    category: 'campus',
    width: 1200,
    height: 900,
  },
  {
    id: '3',
    src: '/images/gallery/campus-lab.jpg',
    alt: 'Science laboratory',
    title: 'Science Laboratory',
    category: 'campus',
    width: 1200,
    height: 800,
  },
  {
    id: '4',
    src: '/images/gallery/event-graduation.jpg',
    alt: 'Graduation ceremony',
    title: 'Class of 2025 Graduation',
    category: 'events',
    width: 1200,
    height: 800,
  },
  {
    id: '5',
    src: '/images/gallery/event-cultural-day.jpg',
    alt: 'Cultural day celebration',
    title: 'Cultural Day Celebrations',
    category: 'events',
    width: 1200,
    height: 900,
  },
  {
    id: '6',
    src: '/images/gallery/event-science-fair.jpg',
    alt: 'Science fair exhibition',
    title: 'Annual Science Fair',
    category: 'events',
    width: 1200,
    height: 800,
  },
  {
    id: '7',
    src: '/images/gallery/athletics-basketball.jpg',
    alt: 'Basketball team in action',
    title: 'Eagles Basketball',
    category: 'athletics',
    width: 1200,
    height: 800,
  },
  {
    id: '8',
    src: '/images/gallery/athletics-football.jpg',
    alt: 'Football match',
    title: 'Football Championship',
    category: 'athletics',
    width: 1200,
    height: 900,
  },
  {
    id: '9',
    src: '/images/gallery/athletics-track.jpg',
    alt: 'Track and field event',
    title: 'Inter-House Sports Day',
    category: 'athletics',
    width: 1200,
    height: 800,
  },
  {
    id: '10',
    src: '/images/gallery/student-classroom.jpg',
    alt: 'Students in classroom',
    title: 'Engaged Learning',
    category: 'student-life',
    width: 1200,
    height: 800,
  },
  {
    id: '11',
    src: '/images/gallery/student-club.jpg',
    alt: 'Student club meeting',
    title: 'Debate Club Practice',
    category: 'student-life',
    width: 1200,
    height: 900,
  },
  {
    id: '12',
    src: '/images/gallery/student-art.jpg',
    alt: 'Art class in progress',
    title: 'Creative Expression',
    category: 'student-life',
    width: 1200,
    height: 800,
  },
  {
    id: '13',
    src: '/images/gallery/campus-garden.jpg',
    alt: 'School garden',
    title: 'Campus Gardens',
    category: 'campus',
    width: 1200,
    height: 900,
  },
  {
    id: '14',
    src: '/images/gallery/event-assembly.jpg',
    alt: 'School assembly',
    title: 'Morning Assembly',
    category: 'events',
    width: 1200,
    height: 800,
  },
  {
    id: '15',
    src: '/images/gallery/athletics-volleyball.jpg',
    alt: 'Volleyball game',
    title: 'Volleyball Tournament',
    category: 'athletics',
    width: 1200,
    height: 800,
  },
  {
    id: '16',
    src: '/images/gallery/student-study.jpg',
    alt: 'Students studying together',
    title: 'Study Groups',
    category: 'student-life',
    width: 1200,
    height: 900,
  },
];

export function getImagesByCategory(category: GalleryImage['category']): GalleryImage[] {
  return galleryImages.filter((image) => image.category === category);
}

export const galleryCategories = [
  { value: 'all', label: 'All Photos' },
  { value: 'campus', label: 'Campus' },
  { value: 'events', label: 'Events' },
  { value: 'athletics', label: 'Athletics' },
  { value: 'student-life', label: 'Student Life' },
];

export const featuredGalleryImages = galleryImages.slice(0, 6);
