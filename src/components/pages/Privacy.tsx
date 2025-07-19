import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-20">
      <Section padding="xl">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: January 1, 2024
            </p>
          </motion.div>

          <Card className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              Elite Construction & Design ("we," "our," or "us") collects information you provide directly to us, such as when you create an account, request a quote, contact us, or use our services.
            </p>

            <h3 className="text-xl font-bold text-navy-900 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Name, email address, and phone number</li>
              <li>Mailing address and project location</li>
              <li>Project details and preferences</li>
              <li>Payment and billing information</li>
              <li>Communications with our team</li>
            </ul>

            <h3 className="text-xl font-bold text-navy-900 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or search terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Provide and improve our construction services</li>
              <li>Process quotes and project requests</li>
              <li>Communicate with you about your projects</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in our operations</li>
              <li>To comply with legal requirements or protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal information</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="text-gray-600">
              <p>Elite Construction & Design</p>
              <p>123 Construction Ave</p>
              <p>Los Angeles, CA 90210</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: privacy@eliteconstruction.com</p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
};