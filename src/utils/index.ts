import { Technology } from '../types';

export const getTechnologyColor = (techName: string, technologies: Technology[]): string => {
  const tech = technologies.find(t => t.name === techName);
  return tech?.color || 'bg-gray-100 text-gray-800';
};

export const formatUrl = (url: string): string => {
  if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:')) {
    return url;
  }
  return `https://${url}`;
};
