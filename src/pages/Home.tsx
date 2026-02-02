

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Building2, DollarSign, Heart, Droplet, BookOpen, Church, TrendingUp } from 'lucide-react';
import CountUp from '../components/CountUp';
import FeaturedStories from '../components/FeaturedStories';
import DonatesHubHero from '../components/DonatesHubHero';
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
      label: 'People Reached with Gospel', 
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
      label: 'People Received Soft Loans', 
      value: 5000,
      description: 'To start businesses',
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Africa Assistance Plan, we are committed to eradicating poverty and deprivation among society's most vulnerable.
              We work to ensure the holistic well-being of every individual through programs focused on water access, sanitation, hygiene,
              health, children and youth empowerment, and church and community development across Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-base md:text-xl text-gray-600">Making a measurable difference in communities across Ghana</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-brand-blue rounded-xl hover:shadow-lg transition-shadow"
              >
                <stat.icon className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-base md:text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Partners />

      {/* Featured Stories */}
      <FeaturedStories />

      {/* Call to Action */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-base md:text-xl mb-8 text-yellow-100">
              Join supporters helping provide education, clean water, and hope to families across Ghana
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-colors"
              >
                Start Donating
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-colors"
              >
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;