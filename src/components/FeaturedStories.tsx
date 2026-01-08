import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedStories = () => {
   const  navigate = useNavigate()
  const stories = [
    {
      id: 1,
      title: "From Street to School",
      subtitle: "Kwame's Educational Journey",
      image: "/images/WhatsApp Image 2026-01-04 at 12.51.09 AM.jpeg",
    
      description: "How a young boy's life was transformed through education support and community care."
    },
    {
      id: 2,
      title: "Community Support, Big Impact",
      subtitle: "Ama's Market Success",
      image: "/images/WhatsApp Image 2026-01-04 at 12.43.19 AM.jpeg",
      description: "How business training and mentorship helped a mother of three build a thriving enterprise."
    },
    {
      id: 3,
      title: "Building Tomorrow's Leaders",
      subtitle: "Youth Leadership Program",
      image: "/images/WhatsApp Image 2026-01-04 at 12.51.10 AM.jpeg",
      description: "Empowering young minds to become change-makers in their communities."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
          <p className="text-xl text-gray-600">Real stories of transformation and impact from our community</p>
        </motion.div>

        <div className="grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              onClick={()=> navigate(`/impact/${story.id}`)}
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 }
              }}
              // onClick={()=> navigate={`/impact/${story.id}`}}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
                <h4 className="text-lg text-brand-blue font-semibold mb-3">{story.subtitle}</h4>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <Link
                  to={`/impact/${story.id}`}
                  className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-semibold transition-all duration-300 group-hover:translate-x-2"
                >
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/impact"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            View All Stories <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedStories;