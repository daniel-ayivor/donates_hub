import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Building2, DollarSign, Heart } from 'lucide-react';
import CountUp from '../components/CountUp';
import FeaturedStories from '../components/FeaturedStories';
import HeroCarousel from '../components/HeroCarousel';
import ProgressBar from '../components/ProgressBar';

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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
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
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 group"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="h-12 w-12 text-brand-blue mx-auto mb-4 group-hover:text-brand-blue/80 transition-colors" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.4
                  }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.5
                  }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Progress */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Fundraising Goal</h2>
            <p className="text-xl text-gray-600">Help us reach our target to expand our programs</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-2xl shadow-xl"
          >
            <ProgressBar
              current={87500}
              goal={150000}
              label="Education & Water Access Program"
              color="bg-gradient-to-r from-orange-500 to-pink-500"
              height="h-6"
              animationDuration={3000}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <FeaturedStories />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-gold">
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
                className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Donating
              </Link>
              <Link
                to="/get-involved"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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