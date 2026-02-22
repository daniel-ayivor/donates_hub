

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Building2, DollarSign, Heart, Droplet, BookOpen, Church, TrendingUp } from 'lucide-react';
import CountUp from '../components/CountUp';
import FeaturedStories from '../components/FeaturedStories';
import DonatesHubHero from '../components/DonatesHubHero';
import YouTubeVideos from '../components/YouTubeVideos';
import Partners from './Partners';

const Home = () => {
  const stats = [
    { 
      icon: Droplet, 
      label: 'Boreholes Drilled & Rehabilitated', 
      value: 248,
      description: '180 drilled, 68 rehabilitated',
      suffix: ''
    },
    { 
      icon: Users, 
      label: 'Communities Educated', 
      value: 201,
      description: 'On sanitation and hygiene',
      suffix: ''
    },
    { 
      icon: Heart, 
      label: 'People Reached with the Gospel', 
      value: 875000,
      description: 'Lives touched with the message',
      suffix: '+'
    },
    { 
      icon: BookOpen, 
      label: 'School Children Supported', 
      value: 2143,
      description: 'Receiving educational support',
      suffix: ''
    },
    { 
      icon: DollarSign, 
      label: 'Churches Planted', 
      value: 5,
      description: 'New fellowships established through outreach',
      suffix: ''
    },
    { 
      icon: Church, 
      label: 'Church Partners & Leaders Trained', 
      value: 31220,
      description: '220 partners, 31,000 leaders',
      suffix: '+'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Donates Hub Hero Section */}
      <DonatesHubHero />

      {/* Mission Statement */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src="/images/WhatsApp Image 2026-01-04 at 12.46.38 AM.jpeg" 
                  alt="Clean Water Mission" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-gold rounded-full opacity-20 blur-2xl"></div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                At Africa Assistance Plan, we are committed to eradicating poverty and deprivation among society's most vulnerable.
                We work to ensure the holistic well-being of every individual through programs focused on water access, sanitation, hygiene,
                health, children and youth empowerment, and church and community development across Ghana.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-500 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Impact in Numbers</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Making a measurable difference in communities across Ghana</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 }
                }}
                className="group text-center p-6 md:p-8 bg-brand-blue rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 md:h-12 md:w-12 text-brand-gold mx-auto mb-4" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-blue-200">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Partners />

      {/* YouTube Videos */}
      <YouTubeVideos />

      {/* Featured Stories */}
      <FeaturedStories />

      {/* Call to Action */}
      <section className="section-spacing bg-gradient-to-br from-brand-blue via-brand-blue to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto container-padding text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 drop-shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Make a Difference?
            </motion.h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 md:mb-10 text-yellow-100 max-w-2xl mx-auto leading-relaxed">
              Join supporters helping provide education, clean water, and hope to families across Ghana
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/donate"
                className="group bg-white text-brand-blue hover:bg-brand-gold hover:text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-brand inline-flex items-center justify-center"
              >
                Start Donating
                <Heart className="ml-2 h-5 w-5 group-hover:animate-pulse-soft" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm inline-flex items-center justify-center"
              >
                Volunteer With Us
                <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;