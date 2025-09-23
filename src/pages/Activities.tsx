import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Back-to-School Drive 2024",
      date: "August 15, 2024",
      location: "Multiple Schools, Accra",
      participants: "500+ Children",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg",
      description: "Distributed school supplies, uniforms, and backpacks to 500 children across 15 schools in Accra.",
      category: "Education",
      status: "Completed",
      impact: "500 children ready for school",
      gallery: [
        "https://images.pexels.com/photos/8363020/pexels-photo-8363020.jpeg",
        "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
        "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg"
      ]
    },
    {
      id: 2,
      title: "Women's Entrepreneurship Workshop",
      date: "September 22, 2024",
      location: "Kumasi Community Center",
      participants: "75 Women",
      image: "https://images.pexels.com/photos/8854447/pexels-photo-8854447.jpeg",
      description: "Three-day intensive workshop on business planning, financial literacy, and marketing for women entrepreneurs.",
      category: "Business",
      status: "Completed",
      impact: "45 new businesses started",
      gallery: [
        "https://images.pexels.com/photos/8854447/pexels-photo-8854447.jpeg",
        "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg",
        "https://images.pexels.com/photos/8853498/pexels-photo-8853498.jpeg"
      ]
    },
    {
      id: 3,
      title: "Clean Water Installation Project",
      date: "October 10, 2024",
      location: "Northern Ghana Villages",
      participants: "1200+ Residents",
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg",
      description: "Installation of 5 clean water systems in remote villages, providing safe drinking water to over 1200 people.",
      category: "Health",
      status: "Completed",
      impact: "1200+ people with clean water access",
      gallery: [
        "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg",
        "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
        "https://images.pexels.com/photos/8853497/pexels-photo-8853497.jpeg"
      ]
    },
    {
      id: 4,
      title: "Youth Leadership Summit",
      date: "November 5, 2024",
      location: "Cape Coast University",
      participants: "120 Youth Leaders",
      image: "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
      description: "Annual summit bringing together young leaders from across Ghana to network, learn, and plan community initiatives.",
      category: "Leadership",
      status: "Completed",
      impact: "25 community projects launched",
      gallery: [
        "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
        "https://images.pexels.com/photos/8363020/pexels-photo-8363020.jpeg",
        "https://images.pexels.com/photos/8853498/pexels-photo-8853498.jpeg"
      ]
    },
    {
      id: 5,
      title: "Mobile Health Clinic",
      date: "December 12, 2024",
      location: "Rural Communities",
      participants: "800+ Patients",
      image: "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
      description: "Monthly mobile health clinic providing free medical check-ups, vaccinations, and health education.",
      category: "Health",
      status: "Ongoing",
      impact: "800+ people served monthly",
      gallery: [
        "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
        "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg",
        "https://images.pexels.com/photos/8853497/pexels-photo-8853497.jpeg"
      ]
    },
    {
      id: 6,
      title: "Digital Skills Training Program",
      date: "January 20, 2025",
      location: "Accra Tech Hub",
      participants: "60 Trainees",
      image: "https://images.pexels.com/photos/8853497/pexels-photo-8853497.jpeg",
      description: "Six-month comprehensive program teaching coding, digital marketing, and computer literacy to unemployed youth.",
      category: "Technology",
      status: "Upcoming",
      impact: "Expected: 50+ job placements",
      gallery: [
        "https://images.pexels.com/photos/8853497/pexels-photo-8853497.jpeg",
        "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
        "https://images.pexels.com/photos/8363020/pexels-photo-8363020.jpeg"
      ]
    }
  ];

  const categoryColors = {
    Education: 'bg-blue-500',
    Business: 'bg-green-500',
    Health: 'bg-red-500',
    Leadership: 'bg-purple-500',
    Technology: 'bg-indigo-500',
    Community: 'bg-yellow-500'
  };

  const statusColors = {
    Completed: 'bg-green-100 text-green-800',
    Ongoing: 'bg-blue-100 text-blue-800',
    Upcoming: 'bg-orange-100 text-orange-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg"
            alt="Community activities"
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
            Our Activities & Events
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            From educational workshops to health clinics, explore how we're making a difference 
            through direct action and community engagement.
          </motion.p>
        </div>
      </section>

      {/* Activities Summary Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">Events This Year</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-700">People Reached</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-700">Communities Served</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-700">Volunteers Engaged</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Activities & Campaigns</h2>
            <p className="text-xl text-gray-600">See how your support translates into meaningful action on the ground</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`${categoryColors[activity.category]} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {activity.category}
                    </span>
                    <span className={`${statusColors[activity.status]} px-3 py-1 rounded-full text-sm font-semibold`}>
                      {activity.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      {activity.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      {activity.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2 text-orange-500" />
                      {activity.participants}
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <div className="text-green-700 font-semibold text-sm">Impact:</div>
                    <div className="text-green-600 font-bold">{activity.impact}</div>
                  </div>

                  <Link
                    to={`/activities/${activity.id}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Next Activity</h2>
            <p className="text-xl mb-8 text-teal-100">
              Be part of the change you want to see. Volunteer with us and make a direct impact in communities across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Volunteer Now
              </Link>
              <Link
                to="/donate"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Support Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Activities;