import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Luxury Estate',
    category: 'custom-homes',
    location: 'Beverly Hills, CA',
    year: 2024,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A stunning 8,500 sq ft contemporary estate featuring floor-to-ceiling windows, infinity pool, and smart home automation.',
    specs: {
      size: '8,500 sq ft',
      timeline: '18 months',
      budget: '$2.5M - $3M'
    },
    testimonial: {
      client: 'Sarah & Michael Chen',
      rating: 5,
      text: 'Elite Construction exceeded every expectation. The attention to detail and craftsmanship is unparalleled.'
    }
  },
  {
    id: '2',
    title: 'Historic Home Renovation',
    category: 'renovations',
    location: 'San Francisco, CA',
    year: 2023,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete restoration of a 1920s Victorian home, preserving historic character while adding modern amenities.',
    specs: {
      size: '4,200 sq ft',
      timeline: '12 months',
      budget: '$800K - $1.2M'
    },
    testimonial: {
      client: 'Robert Thompson',
      rating: 5,
      text: 'They brought our century-old home into the 21st century while respecting its heritage.'
    }
  },
  {
    id: '3',
    title: 'Corporate Headquarters',
    category: 'commercial',
    location: 'Los Angeles, CA',
    year: 2023,
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'State-of-the-art office building with sustainable design features and flexible workspace solutions.',
    specs: {
      size: '45,000 sq ft',
      timeline: '24 months',
      budget: '$8M - $12M'
    },
    testimonial: {
      client: 'TechFlow Industries',
      rating: 5,
      text: 'Professional, on-time, and delivered exactly what we envisioned for our new headquarters.'
    }
  },
  {
    id: '4',
    title: 'Luxury Kitchen Remodel',
    category: 'renovations',
    location: 'Malibu, CA',
    year: 2024,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    beforeImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete kitchen transformation with custom cabinetry, marble countertops, and professional-grade appliances.',
    specs: {
      size: '800 sq ft',
      timeline: '8 weeks',
      budget: '$150K - $200K'
    }
  },
  {
    id: '5',
    title: 'Oceanfront Villa',
    category: 'custom-homes',
    location: 'Laguna Beach, CA',
    year: 2023,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Breathtaking oceanfront property with panoramic views, infinity pool, and sustainable design elements.',
    specs: {
      size: '6,800 sq ft',
      timeline: '16 months',
      budget: '$3.5M - $4.2M'
    }
  },
  {
    id: '6',
    title: 'Retail Complex',
    category: 'commercial',
    location: 'Santa Monica, CA',
    year: 2024,
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Mixed-use retail and office complex with modern design and sustainable building practices.',
    specs: {
      size: '75,000 sq ft',
      timeline: '30 months',
      budget: '$15M - $20M'
    }
  }
];