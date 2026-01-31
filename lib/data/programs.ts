export interface Program {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  level: 'junior' | 'senior';
  subjects: string[];
}

export const programs: Program[] = [
  {
    id: 'stem',
    title: 'Science & Technology',
    description: 'Explore mathematics, physics, chemistry, biology, and computer science with hands-on laboratory experiences.',
    imageSrc: '/images/programs/stem.jpg',
    level: 'senior',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
  },
  {
    id: 'humanities',
    title: 'Humanities & Social Sciences',
    description: 'Develop critical thinking through literature, history, geography, and social studies.',
    imageSrc: '/images/programs/humanities.jpg',
    level: 'senior',
    subjects: ['Literature', 'History', 'Geography', 'Economics', 'Civics'],
  },
  {
    id: 'arts',
    title: 'Creative Arts',
    description: 'Express yourself through visual arts, music, drama, and creative writing programs.',
    imageSrc: '/images/programs/arts.jpg',
    level: 'senior',
    subjects: ['Visual Arts', 'Music', 'Drama', 'Creative Writing'],
  },
  {
    id: 'languages',
    title: 'Languages',
    description: 'Master English, French, and develop strong communication skills for global success.',
    imageSrc: '/images/programs/languages.jpg',
    level: 'junior',
    subjects: ['English', 'French', 'Literature', 'Public Speaking'],
  },
  {
    id: 'business',
    title: 'Business Studies',
    description: 'Learn accounting, economics, and entrepreneurship fundamentals for future success.',
    imageSrc: '/images/programs/business.jpg',
    level: 'senior',
    subjects: ['Accounting', 'Economics', 'Business Management', 'Entrepreneurship'],
  },
  {
    id: 'vocational',
    title: 'Vocational Training',
    description: 'Gain practical skills in agriculture, home economics, and technical education.',
    imageSrc: '/images/programs/vocational.jpg',
    level: 'junior',
    subjects: ['Agriculture', 'Home Economics', 'Technical Drawing', 'Woodwork'],
  },
];

export const featuredPrograms = programs.slice(0, 3);
