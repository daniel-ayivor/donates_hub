import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedStories = () => {
  const navigate = useNavigate();

  const impactStories = [
    {
      id: 1,
      title: "The Centenarian's Transformation",
      subtitle: "From Timid Farmer to Sanitation Leader",
      image: "/images/mamaHagar.jpg",
      description: "Mama Hagar Kru, a 100-year-old woman, discovered her voice through AAP's hygiene training. She transformed from a timid woman to a bold sanitation advocate and water point manager, now earning her own income and inspiring her community.",
      impact: "Full-time sanitation advocate at age 100",
      category: "Empowerment",
      beneficiary: "Elderly Women Leaders",
      age: "100 years old"
    },
    {
      id: 2,
      title: "Water Brings Community Unity",
      subtitle: "Elderly Women Regain Purpose",
      image: "/images/Mama Abena.jpg",
      description: "Mama Abena, 76, and other elderly women now manage their community's water system. What began as a borehole in 2012 has become a source of employment, respect, and community pride, transforming daily life for everyone in Asuokor.",
      impact: "Community-managed water system",
      category: "Water",
      beneficiary: "Elderly Women Collective",
      age: "70-80 years old"
    },
    {
      id: 3,
      title: "Breaking Menstrual Taboos",
      subtitle: "A Girl's Journey to Confidence",
      image: "/images/Saddique Rashida.jpg",
      description: "14-year-old Rashida grew up believing menstruation was shameful. Through AAP's menstrual hygiene program, she learned it's natural, gained confidence to speak up at home, and now helps other girls overcome cultural stigma.",
      impact: "Ended period-related school absenteeism",
      category: "Health",
      beneficiary: "Adolescent Girls",
      age: "14 years old"
    },
    {
      id: 4,
      title: "From Conflict to Cooperation",
      subtitle: "Pastor Unites Farmers and Herders",
      image: "/images/Abraham Soale.jpg",
      description: "Pastor Abraham Soale used AAP's training to bridge divides between farmers and Fulani herders in Tinga. He helped form a peace council that created community bylaws, mediated disputes, and restored harmony alongside improved sanitation.",
      impact: "Community peace council established",
      category: "Leadership",
      beneficiary: "Tinga Community Leaders",
      age: "45+ years old"
    },
    {
      id: 5,
      title: "Community-Led Sanitation Revolution",
      subtitle: "Tainakura Takes Charge of Health",
      image: "/images/Abena Nyanta.jpg",
      description: "After AAP's training on sanitation risks, Adwoa and her community in Tainakura built their own shared latrine. This collective action dramatically improved community health and sparked ongoing conversations about hygiene.",
      impact: "Community-built sanitation facility",
      category: "Sanitation",
      beneficiary: "Tainakura Residents",
      age: "All ages"
    },
    {
      id: 6,
      title: "Menstrual Dignity in School",
      subtitle: "Sakina's Path to Confidence",
      image: "/images/Sakina.jpg",
      description: "15-year-old Sakina, from a Muslim family where menstruation was taboo, used to miss school monthly. AAP provided her school with facilities and sanitary pads, allowing her to attend regularly and feel included for the first time.",
      impact: "100% school attendance during periods",
      category: "Education",
      beneficiary: "Muslim Adolescent Girls",
      age: "15 years old"
    },
    {
      id: 7,
      title: "A Church is Planted",
      subtitle: "New Fellowship Through Service",
      image: "/images/nyanta2.jpg", // Changed to match your ProjectDetail
      description: "After a successful outreach in Kyebi Nkwanta where 15 people accepted Christ, Pastor Broohm started a church with AAP's support. What began as a cell meeting in the chief's house has grown into a thriving Sunday congregation.",
      impact: "15 new believers, new church planted",
      category: "Spiritual",
      beneficiary: "Kyebi Nkwanta Community",
      age: "All ages"
    }
  ];

  // Select first 3 stories or random 3 stories
  const featuredStories = impactStories.slice(0, 3); // Take first 3 stories
  // OR for random selection:
  // const featuredStories = impactStories.sort(() => 0.5 - Math.random()).slice(0, 3);

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
          {featuredStories.map((story, index) => (
            <motion.div
              key={story.id}
              onClick={() => navigate(`/impact/${story.id}`)}
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden h-96"> {/* Increased from h-64 to h-96 */}
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
                  /* KEY CHANGES BELOW */
                  className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  style={{ imageRendering: 'auto' }}
                />
                {/* The rest of your overlays (gradient and category badge) stay inside this div */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {story.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {story.title}
                </h3>
                <h4 className="text-lg text-brand-blue font-semibold mb-3">{story.subtitle}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3">{story.description}</p>

                <div className="mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-blue-700 font-semibold text-sm">Impact:</div>
                    <div className="text-blue-600 font-bold">{story.impact}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{story.beneficiary}</span>
                  <span className="font-semibold">{story.age}</span>
                </div>

                <div className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-semibold transition-all duration-300 group-hover:translate-x-2">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
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