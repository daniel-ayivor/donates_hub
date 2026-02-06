import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import YouTubeVideos from '../components/YouTubeVideos';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Water, Sanitation, and Hygiene (WASH)",
      date: "Ongoing since 2002",
      location: "Churches, Schools, and Communities across Ghana",
      participants: "Thousands of vulnerable community members",
      image: "/images/wash3.jpg",
      description: "We provide access to clean water and promote proper hygiene and sanitation, demonstrating Christ’s love while improving health, dignity, and community well-being.",
      category: "WaSH",
      status: "Ongoing",
      impact: "22+ years of providing clean water and sanitation",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.15 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.17 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.19 AM.jpeg"
      ]
    },
    {
      id: 2,
      title: "Church and Community Empowerment",
      date: "Ongoing",
      location: "Churches and Communities across Ghana",
      participants: "Multiple Churches and Communities",
      image: "/images/Bible 2 (1).JPG",
      description: "We equip churches and community leaders with the tools, training, and resources needed to lead transformational development and advance the Gospel.",
      category: "Empowerment",
      status: "Ongoing",
      impact: "Building sustainable community development",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.46.23 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.25 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.26 AM.jpeg"
      ]
    },
    {
      id: 3,
      title: "Children and Youth Empowerment",
      date: "Ongoing",
      location: "Youth Centers and Schools across Ghana",
      participants: "50,000+ Children and Youth",
      image: "/images/WhatsApp Image 2026-01-04 at 12.46.43 AM.jpeg",
      description: "We nurture children and youth to know Christ, grow in faith, and realize their God-given potential through education, mentorship, discipleship, and skills development.",
      category: "Youth",
      status: "Ongoing",
      impact: "Empowering 50,000 children and youth for the future",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.07 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg"
      ]
    },
    {
      id: 4,
      title: "Gospel Proclamation through JLife FM Radio Ministry",
      date: "Ongoing",
      location: "Bono Region, Ghana",
      participants: "Regional radio audience",
      image: "/images/african-american-male-friends-standing-park-discussing-bible.jpg",
      description: "We boldly share the message of Jesus Christ through multiple channels. JLife FM reaches communities with Christian teaching, hope-filled messages, and encouragement. In remote and hard-to-reach villages, we use Jesus Film screenings to present the Gospel, calling individuals to salvation, discipleship, and lives transformed by faith.",
      category: "Media",
      status: "Ongoing",
      impact: "Spreading the gospel through radio broadcasting",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.46.27 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.29 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.32 AM.jpeg"
      ]
    }
  ];

  const categoryColors: Record<string, string> = {
    WaSH: 'bg-brand-blue',
    Empowerment: 'bg-brand-gold',
    Youth: 'bg-purple-500',
    Media: 'bg-brand-blue'
  };

  const statusColors: Record<string, string> = {
    Completed: 'bg-yellow-100 text-yellow-800',
    Ongoing: 'bg-blue-100 text-brand-blue',
    Upcoming: 'bg-blue-100 text-blue-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 min-h-[60vh] bg-gradient-to-br from-brand-blue via-blue-700 to-brand-blue overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.43.25 AM.jpeg"
            alt="Community activities"
            className="w-full h-full object-cover opacity-25"
            style={{ filter: 'brightness(1.2) contrast(1.05)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Our Core Programs
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Discover our four flagship programs that are transforming lives and empowering communities across Ghana through sustainable development, holistic care, and media ministry.
          </motion.p>
        </div>
      </section>

      {/* Activities Summary Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-brand-blue mb-2">22+</div>
              <div className="text-gray-700">Years of WaSH Impact</div>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-3xl font-bold text-brand-gold mb-2">50,000+</div>
              <div className="text-gray-700">Youth Empowered</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-700">Churches & Communities</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-brand-blue mb-2">JLife FM</div>
              <div className="text-gray-700">Radio Ministry</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Four Flagship Programs</h2>
            <p className="text-xl text-gray-600">Building a brighter future through WaSH, community empowerment, youth development, and radio ministry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`${categoryColors[activity.category]} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {activity.category}
                    </span>
                    <span className={`${statusColors[activity.status]} px-3 py-1 rounded-full text-sm font-semibold`}>
                      {activity.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  {/* <div className="space-y-2 mb-4">
             
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-brand-gold" />
                      {activity.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2 text-brand-gold" />
                      {activity.participants}
                    </div>
                  </div> */}

                  {/* <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <div className="text-blue-700 font-semibold text-sm">Impact:</div>
                    <div className="text-blue-600 font-bold">{activity.impact}</div>
                  </div> */}
            
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <YouTubeVideos />

      {/* Call to Action */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Next Activity</h2>
            <p className="text-xl mb-8 text-blue-100">
              Be part of the change you want to see. Volunteer with us and make a direct impact in communities across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Volunteer Now
              </Link>
              <Link
                to="/donate"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
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