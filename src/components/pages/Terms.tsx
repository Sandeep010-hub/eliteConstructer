import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Terms: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: January 1, 2024
            </p>
          </motion.div>

          <Card className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the Elite Construction & Design website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Services Description</h2>
            <p className="text-gray-600 mb-6">
              Elite Construction & Design provides construction, renovation, and design services including but not limited to custom home construction, home renovations, commercial construction, and related consulting services.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials on Elite Construction & Design's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Project Agreements</h2>
            <p className="text-gray-600 mb-6">
              All construction and renovation projects are subject to separate written agreements that will specify the scope of work, timeline, payment terms, and other project-specific details. These Terms of Service do not constitute a construction contract.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Estimates and Quotes</h2>
            <p className="text-gray-600 mb-6">
              All estimates and quotes provided are preliminary and subject to change based on final project specifications, site conditions, and material costs. Final pricing will be established in the written project agreement.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on Elite Construction & Design's website are provided on an 'as is' basis. Elite Construction & Design makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Elite Construction & Design or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Elite Construction & Design's website, even if Elite Construction & Design or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on Elite Construction & Design's website could include technical, typographical, or photographic errors. Elite Construction & Design does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Links</h2>
            <p className="text-gray-600 mb-6">
              Elite Construction & Design has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Elite Construction & Design of the site.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Modifications</h2>
            <p className="text-gray-600 mb-6">
              Elite Construction & Design may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="text-gray-600">
              <p>Elite Construction & Design</p>
              <p>123 Construction Ave</p>
              <p>Los Angeles, CA 90210</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: legal@eliteconstruction.com</p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
};