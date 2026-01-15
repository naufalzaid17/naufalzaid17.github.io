import { Project, Technology, SocialLink, NavigationItem } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'React', color: 'bg-blue-100 text-blue-800' },
  { name: 'Next.js', color: 'bg-gray-100 text-gray-800' },
  { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
  { name: 'Node.js', color: 'bg-green-100 text-green-800' },
  { name: 'Python', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Django', color: 'bg-green-100 text-green-800' },
  { name: 'PostgreSQL', color: 'bg-purple-100 text-purple-800' },
  { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and TypeScript, featuring smooth animations and optimized performance.',
    image: '/portfolio.jpg',
    githubUrl: 'https://github.com/naufalzaid17/naufalzaid17.github.io',
    liveUrl: 'https://naufalzaid17.github.io',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A full-stack task management application with user authentication, real-time updates, and collaborative features.',
    image: '/taskapp.jpg',
    githubUrl: 'https://github.com/naufalzaid17/task-manager',
    liveUrl: '#',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
  },
  {
    id: 3,
    title: 'E-commerce Dashboard',
    description: 'An admin dashboard for e-commerce platforms with analytics, inventory management, and order processing capabilities.',
    image: '/dashboard.jpg',
    githubUrl: 'https://github.com/naufalzaid17/ecommerce-dashboard',
    liveUrl: '#',
    technologies: ['React', 'Python', 'Django', 'Chart.js'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/naufalzaid17', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/naufalzaid17', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:naufalzaid17@gmail.com', icon: 'Mail' },
];

export const PERSONAL_INFO = {
  name: 'Naufal Zaid',
  title: 'Full Stack Developer | Software Engineer',
  description: 'Building scalable web applications and digital solutions with modern technologies',
  about: {
    story: "I'm a passionate full-stack developer with experience in modern web technologies. I enjoy building scalable applications and solving complex problems through clean, efficient code.",
    additional: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  },
  email: 'naufalzaid17@gmail.com',
  profileImage: 'https://media.licdn.com/dms/image/D5603AQF9X3XWJz4gWw/profile-displayphoto-shrink_400_400/0/1679846248497?e=1725494400&v=beta&t=example',
};
