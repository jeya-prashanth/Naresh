import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for email functionality
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const mailtoLink = `mailto:nobertnaresh03@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-500 mb-6">
            GET IN <span className="text-[#1a0055]">TOUCH</span>
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next CAD project? Let's discuss how I can help bring your ideas to life 
            with precision and creativity.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className=' '>
            <h3 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-[#1a0055] mb-8">Let's Talk</h3>
            
            <div className="space-y-6 text-xl">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <Mail className="text-[#1a0055]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a0055]">Email</h4>
                  <p className="text-gray-500">nobertnaresh03@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <Phone className="text-[#1a0055]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 ">Phone</h4>
                  <p className="text-gray-500">+94 77 2002084</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <MapPin className="text-[#1a0055]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a0055] ">Location</h4>
                  <p className="text-gray-500">Jaffna, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <h4 className="font-semibold text-[#1a0055] mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  Precision and attention to detail
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  Timely project delivery
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  Professional communication
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  Industry-standard practices
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a0055] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a0055] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a0055] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a0055] text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              I'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;