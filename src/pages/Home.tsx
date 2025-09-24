import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Building2, DollarSign, Heart } from 'lucide-react';
import CountUp from '../components/CountUp';
import FeaturedStories from '../components/FeaturedStories';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Children Supported', value: 1250, suffix: '+' },
    { icon: Building2, label: 'Businesses Empowered', value: 340, suffix: '+' },
    { icon: DollarSign, label: 'Funds Raised', value: 125000, prefix: '$', suffix: '+' },
    { icon: Heart, label: 'Lives Transformed', value: 2800, suffix: '+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Brighter Futures, we believe every child deserves access to education, clean water, healthcare, 
              and spiritual guidance. Through targeted support for schools, orphanages, churches, and community 
              health programs, we're transforming lives and building stronger communities across Ghana.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Making a measurable difference in communities across Ghana</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-orange-50 to-teal-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <stat.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.prefix}
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <FeaturedStories />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of supporters who are helping provide education, clean water, healthcare, and hope to children and families across Ghana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Donating
              </Link>
              <Link
                to="/get-involved"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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