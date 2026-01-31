export interface StaffMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  department: string;
  imageSrc: string;
  email: string;
  phone?: string;
  bio: string;
  education: string[];
  specializations: string[];
  yearsAtSchool: number;
}

export const staff: StaffMember[] = [
  {
    id: '1',
    slug: 'james-kollie',
    name: 'Dr. James Kollie',
    title: 'Principal',
    department: 'Administration',
    imageSrc: '/images/staff/principal.jpg',
    email: 'j.kollie@annsandell.edu',
    phone: '+231 XXX XXX XXX',
    bio: 'Dr. James Kollie has dedicated over 25 years to education in Liberia. As Principal of Ann Sandell High School, he leads with a vision of academic excellence and holistic student development. His commitment to creating an inclusive learning environment has transformed the school into one of the region\'s most respected institutions.',
    education: ['Ph.D. in Educational Leadership, University of Liberia', 'M.Ed. in Curriculum Development', 'B.A. in English Literature'],
    specializations: ['Educational Leadership', 'Curriculum Development', 'School Administration'],
    yearsAtSchool: 15,
  },
  {
    id: '2',
    slug: 'martha-weah',
    name: 'Mrs. Martha Weah',
    title: 'Vice Principal',
    department: 'Administration',
    imageSrc: '/images/staff/vice-principal.jpg',
    email: 'm.weah@annsandell.edu',
    phone: '+231 XXX XXX XXX',
    bio: 'Mrs. Martha Weah brings 18 years of educational experience to her role as Vice Principal. She oversees academic affairs and student discipline, ensuring that every student receives the support they need to succeed.',
    education: ['M.Ed. in School Administration', 'B.Sc. in Mathematics'],
    specializations: ['Academic Administration', 'Student Affairs', 'Mathematics Education'],
    yearsAtSchool: 12,
  },
  {
    id: '3',
    slug: 'samuel-johnson',
    name: 'Mr. Samuel Johnson',
    title: 'Head of Sciences',
    department: 'Science Department',
    imageSrc: '/images/staff/science-head.jpg',
    email: 's.johnson@annsandell.edu',
    bio: 'Mr. Samuel Johnson leads the Science Department with a passion for inquiry-based learning. His innovative laboratory programs have won regional recognition and inspired many students to pursue careers in STEM fields.',
    education: ['M.Sc. in Physics', 'B.Sc. in Physical Sciences'],
    specializations: ['Physics', 'Laboratory Management', 'STEM Education'],
    yearsAtSchool: 10,
  },
  {
    id: '4',
    slug: 'grace-sirleaf',
    name: 'Ms. Grace Sirleaf',
    title: 'Head of Humanities',
    department: 'Humanities Department',
    imageSrc: '/images/staff/humanities-head.jpg',
    email: 'g.sirleaf@annsandell.edu',
    bio: 'Ms. Grace Sirleaf brings literature and history to life in her classrooms. As Head of Humanities, she encourages students to think critically about the world around them and to appreciate the rich cultural heritage of Liberia.',
    education: ['M.A. in African History', 'B.A. in English Literature'],
    specializations: ['Literature', 'African History', 'Critical Thinking'],
    yearsAtSchool: 8,
  },
  {
    id: '5',
    slug: 'emmanuel-toe',
    name: 'Mr. Emmanuel Toe',
    title: 'Mathematics Teacher',
    department: 'Mathematics Department',
    imageSrc: '/images/staff/math-teacher.jpg',
    email: 'e.toe@annsandell.edu',
    bio: 'Mr. Emmanuel Toe makes mathematics accessible and engaging for all students. His patient teaching style and real-world applications help students overcome math anxiety and develop strong problem-solving skills.',
    education: ['B.Sc. in Mathematics', 'Diploma in Education'],
    specializations: ['Algebra', 'Calculus', 'Statistics'],
    yearsAtSchool: 6,
  },
  {
    id: '6',
    slug: 'patricia-flomo',
    name: 'Mrs. Patricia Flomo',
    title: 'English Teacher',
    department: 'Languages Department',
    imageSrc: '/images/staff/english-teacher.jpg',
    email: 'p.flomo@annsandell.edu',
    bio: 'Mrs. Patricia Flomo nurtures a love of language and literature in her students. Her creative writing programs have produced award-winning student authors and improved literacy rates throughout the school.',
    education: ['M.A. in English', 'B.A. in Linguistics'],
    specializations: ['Creative Writing', 'Grammar', 'Public Speaking'],
    yearsAtSchool: 7,
  },
  {
    id: '7',
    slug: 'daniel-cooper',
    name: 'Mr. Daniel Cooper',
    title: 'Physical Education Teacher',
    department: 'Physical Education',
    imageSrc: '/images/staff/pe-teacher.jpg',
    email: 'd.cooper@annsandell.edu',
    bio: 'Mr. Daniel Cooper promotes health and wellness through dynamic physical education programs. As coach of multiple sports teams, he has led students to numerous regional championships.',
    education: ['B.Sc. in Physical Education', 'Certified Sports Coach'],
    specializations: ['Football', 'Basketball', 'Track and Field'],
    yearsAtSchool: 5,
  },
  {
    id: '8',
    slug: 'rebecca-massaquoi',
    name: 'Mrs. Rebecca Massaquoi',
    title: 'School Counselor',
    department: 'Student Services',
    imageSrc: '/images/staff/counselor.jpg',
    email: 'r.massaquoi@annsandell.edu',
    bio: 'Mrs. Rebecca Massaquoi provides essential guidance and support to students navigating academic and personal challenges. Her open-door policy and compassionate approach make her a trusted resource for the entire school community.',
    education: ['M.A. in Counseling Psychology', 'B.A. in Psychology'],
    specializations: ['Academic Counseling', 'Career Guidance', 'Mental Health Support'],
    yearsAtSchool: 4,
  },
  {
    id: '9',
    slug: 'joseph-gaye',
    name: 'Mr. Joseph Gaye',
    title: 'Computer Science Teacher',
    department: 'Technology Department',
    imageSrc: '/images/staff/cs-teacher.jpg',
    email: 'j.gaye@annsandell.edu',
    bio: 'Mr. Joseph Gaye prepares students for the digital age through comprehensive computer science education. He manages the school\'s computer lab and has introduced coding and robotics programs.',
    education: ['B.Sc. in Computer Science', 'Certified Microsoft Educator'],
    specializations: ['Programming', 'Digital Literacy', 'Robotics'],
    yearsAtSchool: 3,
  },
  {
    id: '10',
    slug: 'mary-harris',
    name: 'Ms. Mary Harris',
    title: 'Art Teacher',
    department: 'Arts Department',
    imageSrc: '/images/staff/art-teacher.jpg',
    email: 'm.harris@annsandell.edu',
    bio: 'Ms. Mary Harris inspires creativity and self-expression through visual arts. Her students\' work has been exhibited in galleries across Monrovia, and she organizes the annual school art show.',
    education: ['B.F.A. in Visual Arts', 'Art Education Certificate'],
    specializations: ['Painting', 'Sculpture', 'Art History'],
    yearsAtSchool: 4,
  },
];

export const featuredStaff = staff.slice(0, 4);

export function getStaffBySlug(slug: string): StaffMember | undefined {
  return staff.find((member) => member.slug === slug);
}

export function getStaffByDepartment(department: string): StaffMember[] {
  return staff.filter((member) => member.department === department);
}

export const departments = [...new Set(staff.map((member) => member.department))];
