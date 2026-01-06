import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Mail, MapPin, Calendar, Clock, Award, Send } from 'lucide-react';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
    experience: '',
    message: ''
  });

  const volunteerOpportunities = [
    {
      title: "Education Support Volunteer",
      icon: "📚",
      description: "Help children with homework, reading, and educational activities",
      commitment: "4-6 hours per week",
      location: "Accra & Kumasi",
      skills: "Patience, teaching ability, passion for education",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Business Mentorship",
      icon: "💼",
      description: "Guide small business owners with planning and growth strategies",
      commitment: "2-4 hours per week",
      location: "Remote & On-site",
      skills: "Business experience, mentoring skills",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Health & Wellness Assistant",
      icon: "🏥",
      description: "Support mobile health clinics and health education programs",
      commitment: "6-8 hours per week",
      location: "Rural communities",
      skills: "Medical background preferred, compassion",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Community Outreach Coordinator",
      icon: "🤝",
      description: "Build relationships with community leaders and organize events",
      commitment: "8-10 hours per week",
      location: "Various communities",
      skills: "Communication, organization, cultural sensitivity",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Digital Skills Trainer",
      icon: "💻",
      description: "Teach computer literacy and digital marketing skills",
      commitment: "4-6 hours per week",
      location: "Tech hubs & communities",
      skills: "Technology expertise, teaching ability",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Fundraising & Events",
      icon: "🎉",
      description: "Organize fundraising events and awareness campaigns",
      commitment: "Flexible",
      location: "Remote & Events",
      skills: "Event planning, marketing, creativity",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const ways = [
    {
      icon: Users,
      title: "Volunteer Your Time",
      description: "Join our team of dedicated volunteers making direct impact in communities",
      action: "Browse Opportunities"
    },
    {
      icon: Heart,
      title: "Monthly Giving",
      description: "Provide consistent support with a monthly donation that helps us plan long-term",
      action: "Set Up Monthly Giving"
    },
    {
      icon: Mail,
      title: "Spread Awareness",
      description: "Share our story on social media and help us reach more potential supporters",
      action: "Follow & Share"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Volunteer application:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      availability: '',
      experience: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-green-600">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.46.39 AM.jpeg"
            alt="Volunteers helping"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Get Involved & Make a Difference
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Join our community of changemakers. Whether through volunteering, donations, or spreading awareness, 
            there are many ways to contribute to our mission of transforming lives in Ghana.
          </motion.p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ways to Support Our Mission</h2>
            <p className="text-xl text-gray-600">Choose how you'd like to make an impact</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ways.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <way.icon className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{way.title}</h3>
                <p className="text-gray-600 mb-6">{way.description}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                  {way.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">Find the perfect way to use your skills and passion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-2 bg-green-500"></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{opportunity.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      <span className="font-semibold">Commitment:</span>
                      <span className="ml-1">{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-green-500" />
                      <span className="font-semibold">Location:</span>
                      <span className="ml-1">{opportunity.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-2 text-green-500" />
                      <span className="font-semibold">Skills:</span>
                      <span className="ml-1">{opportunity.skills}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Application</h2>
            <p className="text-xl text-gray-600">Ready to join our team? Fill out the form below and we'll be in touch!</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-green-50 p-8 rounded-xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Select an area</option>
                    <option value="education">Education Support</option>
                    <option value="business">Business Mentorship</option>
                    <option value="health">Health & Wellness</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="digital">Digital Skills Training</option>
                    <option value="fundraising">Fundraising & Events</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                >
                  <option value="">Select your availability</option>
                  <option value="2-4-hours">2-4 hours per week</option>
                  <option value="4-6-hours">4-6 hours per week</option>
                  <option value="6-8-hours">6-8 hours per week</option>
                  <option value="8-10-hours">8-10 hours per week</option>
                  <option value="flexible">Flexible/Project-based</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                  placeholder="Tell us about your relevant skills, experience, or education"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with us?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                  placeholder="Share your motivation and what you hope to contribute"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Mail className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for updates on our programs, events, and impact stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-4 border border-gray-300 rounded-full focus:border-green-500 focus:ring focus:ring-green-200"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default GetInvolved;