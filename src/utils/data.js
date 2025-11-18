import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Settings,
  Presentation,
  Users,
  CheckCircle2,
} from 'lucide-react';

import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

import PROJECT_IMG_1 from '../assets/Image/project-1.png';
import PROJECT_IMG_2 from '../assets/Image/project-2.png';
import PROJECT_IMG_3 from '../assets/Image/project-3.png';
import PROJECT_IMG_4 from '../assets/Image/project-4.png';
import PROJECT_IMG_5 from '../assets/Image/project-5.png';
import PROJECT_IMG_6 from '../assets/Image/project-6.png';

export const SKILLS_CATEGORY = [
  {
    title: 'Frontend Development',
    icon: Code2,
    description: 'Building fast, beautiful, and responsive user interfaces',
    skills: [
      { name: 'React.js', level: 95, color: 'bg-blue-500' },
      { name: 'Next.js', level: 80, color: 'bg-red-500' },
      { name: 'TypeScript', level: 88, color: 'bg-sky-600' },
      { name: 'Tailwind CSS', level: 93, color: 'bg-cyan-500' },
      { name: 'Framer Motion', level: 85, color: 'bg-pink-500' },
    ],
  },

  {
    title: 'Backend Development',
    icon: Server,
    description: 'Creating scalable and maintainable server-side applications',
    skills: [
      { name: 'Node.js', level: 92, color: 'bg-green-600' },
      { name: 'Express.js', level: 90, color: 'bg-purple-700' },
      { name: 'REST API', level: 95, color: 'bg-blue-600' },
      { name: 'Authentication', level: 85, color: 'bg-orange-500' },
      { name: 'API Security', level: 80, color: 'bg-red-600' },
    ],
  },

  {
    title: 'Database & API',
    icon: Database,
    description: 'Designing optimized databases and efficient data querying',
    skills: [
      { name: 'MongoDB', level: 88, color: 'bg-emerald-500' },
      { name: 'MySQL', level: 85, color: 'bg-blue-700' },
      { name: 'PostgreSQL', level: 82, color: 'bg-indigo-600' },
      { name: 'MariaDB', level: 80, color: 'bg-purple-600' },
      { name: 'Data Modeling', level: 87, color: 'bg-yellow-600' },
    ],
  },

  {
    title: 'Tools & DevOps',
    icon: Settings,
    description: 'Improving workflow, deployment, and version control',
    skills: [
      { name: 'Git & GitHub', level: 95, color: 'bg-orange-500' },
      { name: 'Docker', level: 75, color: 'bg-blue-700' },
      { name: 'CI/CD', level: 80, color: 'bg-green-600' },
      { name: 'Vercel', level: 92, color: 'bg-yellow-500' },
      { name: 'Hostinger', level: 95, color: 'bg-purple-600' },
    ],
  },
];

export const TECH_STACK = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'Sass',
  'PHP',
  'Vite',
  'Frame Motion',
  'Laravel',
  'Figma',
  'Arduino',
  'Notion',
  'Trello',
];

export const STATS = [
  { number: '20+', label: 'Projects Completed' },
  { number: '2+', label: 'Years Experience' },
  { number: '10+', label: 'Technologies' },
  { number: '98%', label: 'Client Satisfaction' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'AI Interview Coach',
    description:
      'An AI-powered platform that helps users practice job interviews with real-time feedback, scoring, and personalized improvement suggestions.',
    image: PROJECT_IMG_1,
    tags: ['React', 'Tailwind', 'Framer Motion', 'OpenAI API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Lanang38/AI-Project',
    featured: true,
    category: 'AI Project',
  },

  {
    id: 2,
    title: 'GoSewa — Rental Service App',
    description:
      'A modern web application designed for renting vehicles and equipment, featuring a responsive UI, category filtering, and smooth animations.',
    image: PROJECT_IMG_2,
    tags: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Lanang38/Gosewa',
    featured: false,
    category: 'Frontend',
  },

  {
    id: 3,
    title: 'Futgro — Agricultural Learning App',
    description:
      'A learning platform designed to support farmers with curated agricultural content, interactive modules, and progress tracking features to enhance productivity and knowledge.',
    image: PROJECT_IMG_3,
    tags: ['React', 'Tailwind', 'Express.js', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Lanang38/IL-project',
    featured: false,
    category: 'Full Stack',
  },

  {
    id: 4,
    title: 'Fashion E-Commerce Website',
    description:
      'A stylish and responsive fashion website showcasing collections, product details, and a clean modern shopping experience.',
    image: PROJECT_IMG_4,
    tags: ['PHP', 'Boostrap', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Lanang38/fashion-full',
    featured: false,
    category: 'Full Stack',
  },

  {
    id: 5,
    title: 'RFID Attendance System',
    description:
      'A real-time attendance system using RFID technology with admin dashboards, user logs, and live monitoring.',
    image: PROJECT_IMG_5,
    tags: ['PHP', 'MySQL', 'RFID', 'Bootstrap'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Lanang38/absensi-esp',
    featured: false,
    category: 'IoT / System',
  },

  {
    id: 6,
    title: 'Warehouse Management System',
    description:
      'A desktop-based warehouse management system built using C#, featuring stock tracking, reporting, and CRUD operations.',
    image: PROJECT_IMG_6,
    tags: ['C#', '.NET', 'SQL Server'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Lanang38/management-app',
    featured: false,
    category: 'Desktop App',
  },
];

export const JOURNEY_STEPS = [
  {
    year: '2022',
    title: 'Started University',
    company: 'Universitas Amikom Yogyakarta',
    description:
      'Began my academic journey in Informatics at Universitas Amikom Yogyakarta, exploring the foundations of technology and computer science.',
    icon: GraduationCap,
    color: 'bg-blue-500',
  },
  {
    year: '2022',
    title: 'First Coding Experience',
    company: 'Self-Learning',
    description:
      'Started learning programming seriously, beginning with HTML, CSS, JavaScript, and building early personal projects.',
    icon: Code2,
    color: 'bg-indigo-500',
  },
  {
    year: '2023 - Present',
    title: 'Practicum Assistant',
    company: 'Universitas Amikom Yogyakarta',
    description:
      'Served as a practicum assistant, helping students understand course materials and supporting hands-on learning sessions.',
    icon: Users,
    color: 'bg-teal-500',
  },
  {
    year: '2024',
    title: 'Independent Study Program',
    company: 'Infinite Learning',
    description:
      'Joined the Independent Study program at Infinite Learning to enhance my development skills through real-world projects and industry-level teamwork.',
    icon: BookOpen,
    color: 'bg-green-500',
  },
  {
    year: '2025',
    title: 'Journal Presenter',
    company: 'Academic Conference',
    description:
      'Presented my academic journal, sharing research findings and contributing to the scientific and academic community.',
    icon: Presentation,
    color: 'bg-yellow-500',
  },
  {
    year: '2025',
    title: 'Graduated Without Thesis',
    company: 'Universitas Amikom Yogyakarta',
    description:
      'Successfully completed my degree through a non-thesis graduation pathway, marking the final milestone of my undergraduate journey.',
    icon: CheckCircle2,
    color: 'bg-purple-500',
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: 'User Experience',
    description: 'Crafting intuitive interfaces that users love',
  },
  {
    icon: Coffee,
    title: 'Problem Solving',
    description: 'Turning complex challenges into elegant solutions',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and best practices',
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/Lanang38',
    color: 'hover:text-gray-400',
    bgColor: 'hover:bg-gray-800',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/cokorda-gde-lanang',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/coklanang_38/',
    color: 'hover:text-gray-400',
    bgColor: 'hover:bg-gray-800',
  },
  {
    name: 'Mail',
    icon: Mail,
    url: 'mailto:cokde38@gmail.com',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bali, Indonesia',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'cokde38@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(+62) 83 8510 0045 505',
  },
];
