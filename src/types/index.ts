export interface Project {
  id: string;
  title: string;
  category: 'custom-homes' | 'renovations' | 'commercial';
  location: string;
  year: number;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  specs: {
    size: string;
    timeline: string;
    budget: string;
  };
  testimonial?: {
    client: string;
    rating: number;
    text: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'residential' | 'commercial' | 'specialty';
  startingPrice: string;
  timeline: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  certifications: string[];
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  client: string;
  project: string;
  rating: number;
  text: string;
  image?: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image: string;
  readTime: number;
}

export interface QuoteFormData {
  projectType: string;
  location: string;
  squareFootage: number;
  finishLevel: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}