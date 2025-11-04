import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      title: "From Street to School",
      subtitle: "Kwame's Educational Journey",
      image: "https://images.pexels.com/photos/8363020/pexels-photo-8363020.jpeg",
      description: "How a young boy's life was transformed through education support and community care."
    },
    {
      id: 2,
      title: "A Small Loan, A Big Dream",
      subtitle: "Ama's Market Success",
      image: "https://images.pexels.com/photos/8854447/pexels-photo-8854447.jpeg",
      description: "Discover how microfinancing helped a mother of three build a thriving business."
    },
    {
      id: 3,
      title: "Building Tomorrow's Leaders",
      subtitle: "Youth Leadership Program",
      image: "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group"
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
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
                <h4 className="text-lg text-orange-500 font-semibold mb-3">{story.subtitle}</h4>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <Link
                  to={`/impact/${story.id}`}
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-all duration-300 group-hover:translate-x-2"
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
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            View All Stories <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedStories;