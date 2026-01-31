export interface Activity {
  id: string;
  name: string;
  description: string;
  category: 'clubs' | 'sports' | 'arts' | 'service';
  meetingSchedule: string;
  advisor: string;
  imageSrc: string;
}

export const activities: Activity[] = [
  {
    id: 'debate-club',
    name: 'Debate Club',
    description: 'Develop public speaking skills and learn to construct compelling arguments on important topics.',
    category: 'clubs',
    meetingSchedule: 'Tuesdays and Thursdays, 3:30 PM',
    advisor: 'Ms. Grace Sirleaf',
    imageSrc: '/images/activities/debate.jpg',
  },
  {
    id: 'science-club',
    name: 'Science Club',
    description: 'Explore scientific concepts through hands-on experiments and prepare for science competitions.',
    category: 'clubs',
    meetingSchedule: 'Wednesdays, 3:30 PM',
    advisor: 'Mr. Samuel Johnson',
    imageSrc: '/images/activities/science-club.jpg',
  },
  {
    id: 'drama-club',
    name: 'Drama Club',
    description: 'Express yourself through acting, directing, and stagecraft. Annual school play production.',
    category: 'arts',
    meetingSchedule: 'Mondays and Fridays, 3:30 PM',
    advisor: 'Ms. Mary Harris',
    imageSrc: '/images/activities/drama.jpg',
  },
  {
    id: 'chess-club',
    name: 'Chess Club',
    description: 'Develop strategic thinking and compete in inter-school chess tournaments.',
    category: 'clubs',
    meetingSchedule: 'Thursdays, 3:30 PM',
    advisor: 'Mr. Emmanuel Toe',
    imageSrc: '/images/activities/chess.jpg',
  },
  {
    id: 'basketball',
    name: 'Basketball Team',
    description: 'Compete in regional leagues and represent the school as an Eagle on the court.',
    category: 'sports',
    meetingSchedule: 'Daily practice, 4:00 PM',
    advisor: 'Mr. Daniel Cooper',
    imageSrc: '/images/activities/basketball.jpg',
  },
  {
    id: 'football',
    name: 'Football Team',
    description: 'Join our football program and develop teamwork, fitness, and competitive skills.',
    category: 'sports',
    meetingSchedule: 'Daily practice, 4:00 PM',
    advisor: 'Mr. Daniel Cooper',
    imageSrc: '/images/activities/football.jpg',
  },
  {
    id: 'track-field',
    name: 'Track & Field',
    description: 'Train in sprints, distance running, jumping, and throwing events.',
    category: 'sports',
    meetingSchedule: 'Tuesdays and Thursdays, 4:00 PM',
    advisor: 'Mr. Daniel Cooper',
    imageSrc: '/images/activities/track.jpg',
  },
  {
    id: 'choir',
    name: 'School Choir',
    description: 'Share your voice in school assemblies, community events, and competitions.',
    category: 'arts',
    meetingSchedule: 'Wednesdays, 3:30 PM',
    advisor: 'Mrs. Patricia Flomo',
    imageSrc: '/images/activities/choir.jpg',
  },
  {
    id: 'art-club',
    name: 'Art Club',
    description: 'Explore painting, sculpture, and other visual arts. Display work in annual exhibition.',
    category: 'arts',
    meetingSchedule: 'Fridays, 3:30 PM',
    advisor: 'Ms. Mary Harris',
    imageSrc: '/images/activities/art-club.jpg',
  },
  {
    id: 'community-service',
    name: 'Community Service Club',
    description: 'Make a difference through volunteer projects and community outreach programs.',
    category: 'service',
    meetingSchedule: 'Saturdays (monthly projects)',
    advisor: 'Mrs. Rebecca Massaquoi',
    imageSrc: '/images/activities/community-service.jpg',
  },
  {
    id: 'environment-club',
    name: 'Environmental Club',
    description: 'Lead sustainability initiatives on campus and in the broader community.',
    category: 'service',
    meetingSchedule: 'Mondays, 3:30 PM',
    advisor: 'Mr. Samuel Johnson',
    imageSrc: '/images/activities/environment.jpg',
  },
  {
    id: 'computer-club',
    name: 'Computer & Coding Club',
    description: 'Learn programming, web design, and prepare for technology competitions.',
    category: 'clubs',
    meetingSchedule: 'Tuesdays, 3:30 PM',
    advisor: 'Mr. Joseph Gaye',
    imageSrc: '/images/activities/coding.jpg',
  },
];

export function getActivitiesByCategory(category: Activity['category']): Activity[] {
  return activities.filter((activity) => activity.category === category);
}

export const activityCategories = [
  { value: 'all', label: 'All Activities' },
  { value: 'clubs', label: 'Clubs' },
  { value: 'sports', label: 'Sports' },
  { value: 'arts', label: 'Arts' },
  { value: 'service', label: 'Community Service' },
];
