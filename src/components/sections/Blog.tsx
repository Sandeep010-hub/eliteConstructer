import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { blogPosts } from '../../data/blog';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatedHeading } from '../ui/AnimatedHeading';

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';
  const postsToShow = isBlogPage ? blogPosts.slice(0, 5) : blogPosts.slice(0, 3);

  return (
    <Section id="blog" background="gray" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatedHeading as="h2" className="text-4xl md:text-5xl mb-6 text-black-900">
            Construction <span className="text-primary-orange">Insights</span> & Tips
          </AnimatedHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest construction trends, <span className="text-secondary-orange font-bold">renovation tips</span>, and industry insights from our expert team.
          </p>
        </motion.div>
      </div>

      <div className={`grid ${postsToShow.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-8 mb-12`}>
        {postsToShow.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover className="h-full border border-gray-100 hover:border-primary-orange/30 hover:shadow-orange-glow transition-all duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <div className="mb-3">
                <span className="inline-block orange-gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-black-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-1 text-primary-orange" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1 text-secondary-orange" />
                  <span className="font-medium">{post.readTime} min read</span>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-gray-500 mb-4">
                <CalendarIcon className="w-4 h-4 mr-1 text-primary-orange" />
                <span className="font-medium">
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full"
                darkBg={false}
              >
                Read More
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          variant="secondary" 
          size="lg"
          darkBg={false}
          onClick={() => navigate('/blog')}
          className="transform hover:scale-105"
        >
          View All Articles
        </Button>
      </div>
    </Section>
  );
};