export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time?: string;
  endTime?: string;
  location: string;
  category: 'academic' | 'sports' | 'arts' | 'community' | 'holiday';
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Second Term Examinations Begin',
    description: 'Mid-year examinations for all grade levels. Students should review their study guides and arrive on time.',
    date: '2026-02-10',
    endDate: '2026-02-21',
    time: '8:00 AM',
    location: 'Main Campus',
    category: 'academic',
  },
  {
    id: '2',
    title: 'Regional Basketball Finals',
    description: 'The Eagles face Monrovia Academy in the regional championship. Come support our team!',
    date: '2026-02-01',
    time: '3:00 PM',
    endTime: '5:00 PM',
    location: 'National Stadium',
    category: 'sports',
  },
  {
    id: '3',
    title: 'Parent-Teacher Conference',
    description: 'Meet with your child\'s teachers to discuss academic progress and upcoming goals.',
    date: '2026-02-15',
    time: '9:00 AM',
    endTime: '3:00 PM',
    location: 'School Auditorium',
    category: 'community',
  },
  {
    id: '4',
    title: 'Science Club Field Trip',
    description: 'Visit to the National Museum for an exhibition on sustainable technology.',
    date: '2026-02-18',
    time: '8:30 AM',
    endTime: '2:00 PM',
    location: 'National Museum',
    category: 'academic',
  },
  {
    id: '5',
    title: 'Armed Forces Day (School Holiday)',
    description: 'School will be closed in observance of Armed Forces Day.',
    date: '2026-02-11',
    location: 'N/A',
    category: 'holiday',
  },
  {
    id: '6',
    title: 'Spring Art Exhibition',
    description: 'Student artwork on display. All families welcome to attend the opening reception.',
    date: '2026-02-25',
    time: '4:00 PM',
    endTime: '7:00 PM',
    location: 'Art Gallery',
    category: 'arts',
  },
  {
    id: '7',
    title: 'Career Day',
    description: 'Professionals from various fields share their experiences and advice with students.',
    date: '2026-03-05',
    time: '9:00 AM',
    endTime: '1:00 PM',
    location: 'School Auditorium',
    category: 'academic',
  },
  {
    id: '8',
    title: 'Inter-House Sports Day',
    description: 'Annual athletics competition between school houses. Multiple events throughout the day.',
    date: '2026-03-12',
    time: '8:00 AM',
    endTime: '4:00 PM',
    location: 'School Field',
    category: 'sports',
  },
];

export const upcomingEvents = events
  .filter((event) => new Date(event.date) >= new Date())
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 5);

export function getEventsByCategory(category: Event['category']): Event[] {
  return events.filter((event) => event.category === category);
}

export function getEventsByMonth(year: number, month: number): Event[] {
  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
}

export const eventCategories = [
  { value: 'academic', label: 'Academic' },
  { value: 'sports', label: 'Sports' },
  { value: 'arts', label: 'Arts & Culture' },
  { value: 'community', label: 'Community' },
  { value: 'holiday', label: 'Holidays' },
];
