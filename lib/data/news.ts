export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageSrc: string;
  date: string;
  category: string;
  author: string;
  featured?: boolean;
}

export const news: NewsArticle[] = [
  {
    id: '1',
    slug: 'annual-science-fair-winners-announced',
    title: 'Annual Science Fair Winners Announced',
    excerpt: 'Students showcase innovative projects addressing local environmental challenges at this year\'s science fair.',
    content: `
      <p>The annual Ann Sandell High School Science Fair concluded last Friday with outstanding displays of student innovation and scientific inquiry. This year's theme, "Science for Sustainable Development," challenged students to create projects that address environmental challenges facing our community.</p>

      <p>First place went to senior students Comfort Davies and Abraham Toe for their solar-powered water purification system designed for rural communities. Their project demonstrated how accessible technology can provide clean drinking water to underserved areas.</p>

      <p>"We wanted to create something that could actually help people in our community," explained Comfort Davies. "Clean water shouldn't be a luxury."</p>

      <p>Second place was awarded to junior student Maria Johnson for her research on soil conservation techniques suitable for Liberian agriculture. Her project included practical demonstrations that local farmers could implement.</p>

      <p>Science Department Head Mr. Samuel Johnson expressed pride in the students' achievements: "This year's projects show remarkable creativity and social awareness. Our students are thinking about how science can solve real-world problems."</p>

      <p>The winning projects will represent Ann Sandell High School at the National Science Competition next month.</p>
    `,
    imageSrc: '/images/news/science-fair.jpg',
    date: '2026-01-25',
    category: 'Academics',
    author: 'School Communications',
    featured: true,
  },
  {
    id: '2',
    slug: 'basketball-team-advances-to-regionals',
    title: 'Basketball Team Advances to Regional Championships',
    excerpt: 'The Eagles secure their spot in the regional finals after a thrilling victory against Central High.',
    content: `
      <p>The Ann Sandell Eagles basketball team has advanced to the regional championships after defeating Central High School 72-65 in an exciting semifinal match last Saturday.</p>

      <p>Team captain Marcus Williams led the scoring with 28 points, while point guard David Freeman contributed 18 points and 10 assists. The victory marks the team's first regional finals appearance in five years.</p>

      <p>"The team has worked incredibly hard all season," said Coach Daniel Cooper. "This victory is a testament to their dedication and teamwork."</p>

      <p>The Eagles will face Monrovia Academy in the regional finals next Saturday at the National Stadium. Students and families are encouraged to attend and show their support.</p>
    `,
    imageSrc: '/images/news/basketball.jpg',
    date: '2026-01-20',
    category: 'Athletics',
    author: 'School Communications',
  },
  {
    id: '3',
    slug: 'new-computer-lab-opens',
    title: 'State-of-the-Art Computer Lab Opens',
    excerpt: 'A generous donation enables the opening of a modern computer laboratory with 30 new workstations.',
    content: `
      <p>Ann Sandell High School proudly inaugurated its new computer laboratory this week, featuring 30 modern workstations, high-speed internet connectivity, and dedicated software for STEM education.</p>

      <p>The facility was made possible through a generous donation from the Liberian Education Foundation and matching funds from the Ministry of Education.</p>

      <p>"This lab will transform how our students learn," said Principal Dr. James Kollie at the ribbon-cutting ceremony. "Digital literacy is essential for success in today's world."</p>

      <p>Computer Science teacher Mr. Joseph Gaye has already implemented new coding courses that will begin next term. Students will learn programming languages including Python and JavaScript.</p>
    `,
    imageSrc: '/images/news/computer-lab.jpg',
    date: '2026-01-15',
    category: 'Facilities',
    author: 'School Communications',
  },
  {
    id: '4',
    slug: 'cultural-day-celebration',
    title: 'Annual Cultural Day Celebrates Liberian Heritage',
    excerpt: 'Students and staff come together to celebrate the rich cultural traditions of Liberia\'s diverse ethnic groups.',
    content: `
      <p>The school grounds transformed into a vibrant celebration of Liberian culture as students and staff gathered for the annual Cultural Day festivities.</p>

      <p>Representatives from various ethnic groups showcased traditional music, dance, clothing, and cuisine. The event featured performances by student groups and guest artists from the local community.</p>

      <p>"Cultural Day reminds us of the beautiful diversity that makes Liberia special," said Vice Principal Mrs. Martha Weah. "It's important for our students to understand and appreciate their heritage."</p>

      <p>Highlights included a traditional dance competition, a fashion show featuring authentic tribal attire, and a food fair where families shared recipes passed down through generations.</p>
    `,
    imageSrc: '/images/news/cultural-day.jpg',
    date: '2026-01-10',
    category: 'Events',
    author: 'School Communications',
  },
  {
    id: '5',
    slug: 'scholarship-program-launch',
    title: 'New Merit Scholarship Program Launched',
    excerpt: 'Ann Sandell announces a new scholarship program to support outstanding students from underserved communities.',
    content: `
      <p>Ann Sandell High School is proud to announce the launch of the Excellence Scholarship Program, designed to provide educational opportunities to talented students from underserved communities.</p>

      <p>The program will offer full tuition scholarships to five students each academic year, covering all fees, books, and uniforms. Recipients will be selected based on academic performance, community involvement, and demonstrated financial need.</p>

      <p>"Education should be accessible to every child with the desire to learn," said Dr. James Kollie. "This program will help us reach students who might otherwise miss the opportunity for quality education."</p>

      <p>Applications for the 2026-2027 academic year are now open. Interested families should contact the Admissions Office for more information.</p>
    `,
    imageSrc: '/images/news/scholarship.jpg',
    date: '2026-01-05',
    category: 'Admissions',
    author: 'School Communications',
  },
];

export const featuredNews = news.filter((article) => article.featured);
export const recentNews = news.slice(0, 3);

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return news.find((article) => article.slug === slug);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return news.filter((article) => article.category === category);
}

export const newsCategories = [...new Set(news.map((article) => article.category))];
