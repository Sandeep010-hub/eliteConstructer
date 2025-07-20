import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Home Construction',
    description: 'Build your dream home from the ground up with expert craftsmanship and premium materials.',
    icon: 'home',
    category: 'residential',
    startingPrice: '$500K',
    timeline: '12-24 months',
    features: [
      'Architectural design consultation',
      'Premium material selection',
      'Smart home integration',
      'Energy-efficient systems',
      'Luxury finishes',
      '10-year structural warranty'
    ]
  },
  {
    id: '2',
    title: 'Whole Home Renovations',
    description: 'Transform your entire home with comprehensive renovations for modern comfort and style.',
    icon: 'wrench',
    category: 'residential',
    startingPrice: '$200K',
    timeline: '6-18 months',
    features: [
      'Structural modifications',
      'Kitchen & bathroom remodels',
      'Flooring & finishes',
      'Electrical & plumbing updates',
      'HVAC system upgrades',
      'Permit handling'
    ]
  },
  {
    id: '3',
    title: 'Kitchen Remodeling',
    description: 'Elevate your kitchen with custom design, premium finishes, and seamless installation.',
    icon: 'utensils',
    category: 'residential',
    startingPrice: '$75K',
    timeline: '6-12 weeks',
    features: [
      'Custom cabinetry',
      'Premium countertops',
      'Professional appliances',
      'Designer lighting',
      'Tile & backsplash',
      'Project management'
    ]
  },
  {
    id: '4',
    title: 'Bathroom Renovations',
    description: 'Indulge in luxury with spa-inspired bathroom remodels and high-end modern fixtures.',
    icon: 'bath',
    category: 'residential',
    startingPrice: '$45K',
    timeline: '4-8 weeks',
    features: [
      'Custom vanities',
      'Walk-in showers',
      'Heated floors',
      'Smart fixtures',
      'Natural stone',
      'Waterproofing'
    ]
  },
  {
    id: '5',
    title: 'Commercial Construction',
    description: 'Professional building solutions for offices, retail, and industrial spaces—on time, on budget.',
    icon: 'building',
    category: 'commercial',
    startingPrice: '$2M',
    timeline: '18-36 months',
    features: [
      'Design-build services',
      'Project management',
      'Code compliance',
      'Sustainable building',
      'Technology integration',
      'Post-construction support'
    ]
  },
  {
    id: '6',
    title: 'Home Additions',
    description: 'Expand your living space with seamless additions that blend perfectly with your home.',
    icon: 'plus',
    category: 'residential',
    startingPrice: '$150K',
    timeline: '4-8 months',
    features: [
      'Second story additions',
      'Room extensions',
      'ADU construction',
      'Structural engineering',
      'Permit acquisition',
      'Seamless integration'
    ]
  },
  {
    id: '7',
    title: 'Outdoor Living Spaces',
    description: 'Create stunning outdoor environments with pools, patios, and custom landscaping.',
    icon: 'tree',
    category: 'specialty',
    startingPrice: '$100K',
    timeline: '3-6 months',
    features: [
      'Pool construction',
      'Outdoor kitchens',
      'Fire features',
      'Landscaping design',
      'Lighting systems',
      'Irrigation'
    ]
  },
  {
    id: '8',
    title: 'Green Building Solutions',
    description: 'Build sustainably with eco-friendly materials and practices for a healthier environment.',
    icon: 'leaf',
    category: 'specialty',
    startingPrice: 'Varies',
    timeline: 'Project dependent',
    features: [
      'LEED certification',
      'Solar integration',
      'Energy modeling',
      'Sustainable materials',
      'Water conservation',
      'Indoor air quality'
    ]
  }
];