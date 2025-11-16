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
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import PROJECT_IMG_1 from '../assets/images/project-1.png';
import PROJECT_IMG_2 from '../assets/images/project-2.png';
import PROJECT_IMG_3 from '../assets/images/project-3.png';
import PROJECT_IMG_4 from '../assets/images/project-4.png';
import PROJECT_IMG_5 from '../assets/images/project-5.png';
import PROJECT_IMG_6 from '../assets/images/project-6.png';
import PROJECT_IMG_7 from '../assets/images/project-7.png';

export const SKILLS_CATEGORY = [
  {
    title: 'Frontend',
    icon: Code2,
    description: 'Crafting beautiful, responsive user interfaces',
    skills: [
      { name: 'React', level: 95, color: 'bg-blue-500' },
      { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
      { name: 'Next.js', level: 88, color: 'bg-gray-800' },
      { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
      { name: 'Framer Motion', level: 85, color: 'bg-pink-500' },
    ],
  },
];

export const TECH_STACK = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'Sass',
  'Webpack',
  'Vite',
  'Jest',
  'Cypress',
  'Figma',
  'Adobe XD',
  'Notion',
  'Slack',
];

export const STATS = [
  { number: '50+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Technologies' },
  { number: '100%', label: 'Client Satisfaction' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory tracking.',
    image: PROJECT_IMG_1,
    tags: ['React', 'Tailwind', 'Framer motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Full Stack',
  },

  {
    id: 2,
    title: 'Blog App with AI Post Generator',
    description:
      'A full-stack blog app using the MERN stack — with full Markdown support, tag filtering, and an integrated AI post generator.',
    image: PROJECT_IMG_2,
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    liveUrl: 'https://youtu.be/tUnGudI8B0j',
    githubUrl: '#',
    featured: true,
    category: 'Full Stack',
  },
];