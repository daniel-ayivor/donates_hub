import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, TrendingUp, Award } from 'lucide-react';

const OurImpact = () => {
  const impactStories = [
    {
      id: 1,
      title: "From Street to School",
      subtitle: "Kwame's Educational Journey",
      image: "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
      description: "At 8 years old, Kwame was living on the streets of Accra, selling water to survive. Today, he's a top student in his class, dreaming of becoming a doctor.",
      impact: "100% improvement in literacy",
      category: "Education",
      beneficiary: "Kwame Asante",
      age: "Now 12 years old",
      location: "Accra, Ghana"
    },
    {
      id: 2,
      title: "Community Support, Big Impact",
      subtitle: "Ama's Market Success",
      image: "/images/WhatsApp Image 2026-01-04 at 12.43.17 AM.jpeg",
      description: "Through business training and mentorship, Ama transformed her small vegetable stand into a thriving market business, supporting her family of five.",
      impact: "300% income increase",
      category: "Business",
      beneficiary: "Ama Osei",
      age: "35 years old",
      location: "Kumasi, Ghana"
    },
    {
      id: 3,
      title: "Building Tomorrow's Leaders",
      subtitle: "Youth Leadership Program",
      image: "/images/WhatsApp Image 2026-01-04 at 12.46.29 AM.jpeg",
      description: "Our leadership program has mentored 50 young people, with 80% going on to start their own community initiatives.",
      impact: "50 youth leaders trained",
      category: "Leadership",
      beneficiary: "Youth Cohort 2024",
      age: "16-24 years old",
      location: "Multiple regions"
    },
    {
      id: 4,
      title: "Clean Water Changes Everything",
      subtitle: "Adwoa's Village Transformation",
      image: "/images/WhatsApp Image 2026-01-04 at 12.46.32 AM.jpeg",
      description: "Installing a clean water system in Adwoa's village reduced waterborne diseases by 90% and freed up 4 hours daily for children to attend school.",
      impact: "90% reduction in illness",
      category: "Health",
      beneficiary: "Adwoa's Village",
      age: "500 residents",
      location: "Northern Ghana"
    },
    {
      id: 5,
      title: "Mother's Support Circle",
      subtitle: "Empowering Women Together",
      image: "/images/WhatsApp Image 2026-01-04 at 12.46.35 AM.jpeg",
      description: "25 mothers formed a support network, sharing childcare, starting businesses together, and advocating for their children's education.",
      impact: "25 families empowered",
      category: "Community",
      beneficiary: "Mothers' Circle",
      age: "25-45 years old",
      location: "Cape Coast, Ghana"
    },
    {
      id: 6,
      title: "Technology for Tomorrow",
      subtitle: "Digital Skills Training",
      image: "/images/WhatsApp Image 2026-01-04 at 12.46.38 AM.jpeg",
      description: "Teaching computer skills to 100 young adults, with 85% finding employment in tech-related fields within 6 months.",
      impact: "85% employment rate",
      category: "Technology",
      beneficiary: "Tech Training Graduates",
      age: "18-30 years old",
      location: "Accra, Ghana"
    }
  ];

  const impactMetrics = [
    { icon: Users, label: "Lives Directly Impacted", value: "2,800+", color: "text-blue-500" },
    { icon: Heart, label: "Families Supported", value: "650+", color: "text-red-500" },
    { icon: TrendingUp, label: "Income Improvement", value: "85%", color: "text-brand-gold" },
    { icon: Award, label: "Success Rate", value: "92%", color: "text-purple-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-32 min-h-[60vh] bg-brand-blue">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.46.42 AM.jpeg"
            alt="Community impact"
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
            Our Impact Stories
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Real stories of transformation from the communities we serve. Each story represents hope, 
            resilience, and the power of collective action.
          </motion.p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow transition-shadow"
              >
                <metric.icon className={`h-12 w-12 ${metric.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
            <p className="text-xl text-gray-600">Each story represents a life changed, a dream realized, and hope restored</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {story.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <h4 className="text-lg text-brand-gold font-semibold mb-3">{story.subtitle}</h4>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Beneficiary:</span>
                      <span className="font-semibold">{story.beneficiary}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Location:</span>
                      <span className="font-semibold">{story.location}</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-blue-700 font-semibold text-sm">Impact:</div>
                      <div className="text-blue-600 font-bold">{story.impact}</div>
                    </div>
                  </div>

                  <Link
                    to={`/impact/${story.id}`}
                    className="inline-flex items-center text-brand-gold hover:text-yellow-700 font-semibold transition-colors duration-300"
                  >
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Be Part of the Next Success Story</h2>
            <p className="text-xl mb-8 text-yellow-100">
              Every donation creates ripples of change. Help us write more stories of hope and transformation.
            </p>
            <Link
              to="/donate"
              className="bg-white text-brand-gold hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Make a Difference Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurImpact;