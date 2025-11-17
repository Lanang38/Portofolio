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

import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

import PROJECT_IMG_1 from '../assets/image/project-1.png';
import PROJECT_IMG_2 from '../assets/image/project-2.png';

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

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description: "Began learning web development with HTML, CSS, and JavaScript. Built my first",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description: "Joined as a frontend intern, working with React and learning modern developme",
    icon: Briefcase,
    color: "bg-green-500",
  }
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
    url: 'https://github.com',
    color: 'hover:text-gray-400',
    bgColor: 'hover:bg-gray-800',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://linkedin.com',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://github.com',
    color: 'hover:text-gray-400',
    bgColor: 'hover:bg-gray-800',
  },
  {
    name: 'Mail',
    icon: Mail,
    url: 'https://linkedin.com',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'alex@timetoprogram.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
];
