import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { blogPosts } from '../../data/blog';

export const Blog: React.FC = () => {
  return (
    <Section id="blog" background="gray" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Construction Insights & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest construction trends, renovation tips, and industry insights from our expert team.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover className="h-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <div className="mb-3">
                <span className="inline-block bg-navy-900 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-navy-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {post.readTime} min read
                </div>
              </div>
              
              <div className="flex items-center text-xs text-gray-500 mb-4">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <Button variant="ghost" size="sm" className="w-full">
                Read More
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="secondary" size="lg">
          View All Articles
        </Button>
      </div>
    </Section>
  );
};