import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { QuoteFormData } from '../../types';

const schema = yup.object({
  projectType: yup.string().required('Project type is required'),
  location: yup.string().required('Location is required'),
  squareFootage: yup.number().positive('Square footage must be positive').required('Square footage is required'),
  finishLevel: yup.string().required('Finish level is required'),
  timeline: yup.string().required('Timeline is required'),
  budget: yup.string().required('Budget range is required'),
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup.string()
});

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<QuoteFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setCurrentStep(1);
    }, 3000);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const watchedValues = watch();

  return (
    <Section id="contact" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team for a free consultation and detailed project quote.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneIcon className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <EnvelopeIcon className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@eliteconstruction.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Office</h4>
                  <p className="text-gray-600">123 Construction Ave<br />Los Angeles, CA 90210</p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ClockIcon className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Emergency Contact</h4>
              <p className="text-red-700 text-sm mb-2">
                For existing project emergencies only
              </p>
              <p className="font-semibold text-red-900">(555) 123-HELP</p>
            </div>
          </motion.div>
        </div>

        {/* Quote Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your quote request has been submitted successfully. Our team will review your project details and contact you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    For immediate assistance, please call (555) 123-4567
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">Get Your Free Quote</h3>
                    
                    {/* Progress Bar */}
                    <div className="flex items-center mb-6">
                      {[1, 2, 3, 4].map((step) => (
                        <React.Fragment key={step}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                            step <= currentStep 
                              ? 'bg-navy-900 text-white' 
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            {step}
                          </div>
                          {step < 4 && (
                            <div className={`flex-1 h-1 mx-2 ${
                              step < currentStep ? 'bg-navy-900' : 'bg-gray-200'
                            }`} />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      Step {currentStep} of 4: {
                        currentStep === 1 ? 'Project Details' :
                        currentStep === 2 ? 'Specifications' :
                        currentStep === 3 ? 'Timeline & Budget' :
                        'Contact Information'
                      }
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Step 1: Project Details */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Type *
                          </label>
                          <select
                            {...register('projectType')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          >
                            <option value="">Select project type</option>
                            <option value="custom-home">Custom Home Construction</option>
                            <option value="renovation">Whole Home Renovation</option>
                            <option value="kitchen">Kitchen Remodel</option>
                            <option value="bathroom">Bathroom Renovation</option>
                            <option value="addition">Home Addition</option>
                            <option value="commercial">Commercial Project</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.projectType && (
                            <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Location *
                          </label>
                          <input
                            type="text"
                            {...register('location')}
                            placeholder="City, State"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          />
                          {errors.location && (
                            <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Specifications */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Square Footage *
                          </label>
                          <input
                            type="number"
                            {...register('squareFootage')}
                            placeholder="e.g., 2500"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          />
                          {errors.squareFootage && (
                            <p className="text-red-500 text-sm mt-1">{errors.squareFootage.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Finish Level *
                          </label>
                          <select
                            {...register('finishLevel')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          >
                            <option value="">Select finish level</option>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                            <option value="luxury">Luxury</option>
                            <option value="ultra-luxury">Ultra Luxury</option>
                          </select>
                          {errors.finishLevel && (
                            <p className="text-red-500 text-sm mt-1">{errors.finishLevel.message}</p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Timeline & Budget */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Desired Timeline *
                          </label>
                          <select
                            {...register('timeline')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-3-months">1-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="6-12-months">6-12 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                          {errors.timeline && (
                            <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Budget Range *
                          </label>
                          <select
                            {...register('budget')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-100k">Under $100K</option>
                            <option value="100k-250k">$100K - $250K</option>
                            <option value="250k-500k">$250K - $500K</option>
                            <option value="500k-1m">$500K - $1M</option>
                            <option value="1m-plus">$1M+</option>
                          </select>
                          {errors.budget && (
                            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Contact Information */}
                    {currentStep === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              {...register('name')}
                              placeholder="John Doe"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                            />
                            {errors.name && (
                              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              {...register('phone')}
                              placeholder="(555) 123-4567"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            {...register('email')}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Additional Details
                          </label>
                          <textarea
                            {...register('message')}
                            rows={4}
                            placeholder="Tell us more about your project vision, specific requirements, or any questions you have..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={prevStep}
                        >
                          Previous
                        </Button>
                      )}
                      
                      <div className="ml-auto">
                        {currentStep < 4 ? (
                          <Button
                            type="button"
                            onClick={nextStep}
                            disabled={
                              (currentStep === 1 && (!watchedValues.projectType || !watchedValues.location)) ||
                              (currentStep === 2 && (!watchedValues.squareFootage || !watchedValues.finishLevel)) ||
                              (currentStep === 3 && (!watchedValues.timeline || !watchedValues.budget))
                            }
                          >
                            Next
                          </Button>
                        ) : (
                          <Button type="submit">
                            Submit Quote Request
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};