import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Placeholder for newsletter subscription functionality
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-blue-50 shadow-4xl text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - About Description */}
          <div className="space-y-6 mt-[-30px] ">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a0055] mb-4">
              BN Naresh
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              CAD Technician based on Jaffna, Sri Lanka, offering precise, high-quality designs based on global standards and innovative solutions.
            </p>
          </div>

          {/* Right Side - Newsletter Subscription */}
          <div className="space-y-6 mt-[-30px] ">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 mb-4">
              Stay <span className="text-[#1a0055]">Connected</span>
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Subscribe to my newsletter to receive updates about new projects, design insights, 
              and the latest trends in CAD technology and architectural design.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="newsletter-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-600 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#1a0055] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                >
                  <Send size={20} />
                  Subscribe
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Side - Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2025 BN Naresh. All rights reserved. Crafted with precision and passion.</p>
            </div>

            {/* Right Side - Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-blue-900 transition-colors duration-200 font-medium">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-blue-900 transition-colors duration-200 font-medium">
                Privacy Policy
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#1a0055] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 transition-colors duration-200 transform hover:scale-105"
              >
                Connect with Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;