'use client';

import { useState } from 'react';
import { Button } from '@/components/shared/ui/button';
import { MapPin } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      id="contact"
      className="relative bg-stone-100 dark:bg-stone-900 py-16 md:py-24 lg:py-32"
    >
      {/* Torn Paper Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-primary-900 dark:bg-black" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2rem))' }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-primary-100 uppercase tracking-wide">
              Contact Us
            </h2>
            <p className="mt-4 text-primary-700 dark:text-primary-300 text-base md:text-lg">
              Ready to start your journey? Get in touch with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-primary-800 dark:bg-primary-950 rounded-lg p-6 md:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-200 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-900 dark:bg-black text-white placeholder-gray-500 dark:placeholder-gray-600 rounded-lg border border-primary-700 dark:border-primary-800 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-200 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-900 dark:bg-black text-white placeholder-gray-500 dark:placeholder-gray-600 rounded-lg border border-primary-700 dark:border-primary-800 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-200 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-900 dark:bg-black text-white placeholder-gray-500 dark:placeholder-gray-600 rounded-lg border border-primary-700 dark:border-primary-800 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400 transition-all resize-none"
                    placeholder="Tell us about your job hunting journey..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Decorative Map Graphic */}
            <div className="hidden lg:flex items-center justify-center bg-stone-200 dark:bg-stone-800 rounded-lg p-8 shadow-lg">
              <div className="text-center space-y-6">
                <MapPin className="w-24 h-24 md:w-32 md:h-32 text-secondary-500 dark:text-secondary-400 mx-auto" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-900 dark:text-primary-100 uppercase tracking-wide mb-2">
                    Find Your Path
                  </h3>
                  <p className="text-primary-700 dark:text-primary-300 text-base leading-relaxed max-w-sm mx-auto">
                    Every journey begins with a single step. Let us help you navigate your career path with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
