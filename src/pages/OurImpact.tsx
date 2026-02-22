import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, TrendingUp, Award } from 'lucide-react';

const OurImpact = () => {
      const navigate = useNavigate();
  const impactStories = [
    // Your existing 6 stories here...
    // Add these new stories after your existing ones:
    {
      id: 1,
      title: "The Centenarian's Transformation",
      subtitle: "From Timid Farmer to Sanitation Leader",
      image: "/images/mamaHagar.jpg", // Update with actual image path
      description: "Mama Hagar Kru, a 100-year-old woman, discovered her voice through AAP's hygiene training. She transformed from a timid woman to a bold sanitation advocate and water point manager, now earning her own income and inspiring her community.",
      impact: "Full-time sanitation advocate at age 100",
      category: "Empowerment",
      beneficiary: "Elderly Women Leaders",
      age: "100 years old"
    },
    {
      id: 2,
      title: "Elderly Women Regain Purpose",
      subtitle: "Elderly Women Regain Purpose",
      image: "/images/Mama Abena.jpg", // Update with actual image path
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
      image: "/images/Saddique Rashida.jpg", // Update with actual image path
      description: "14-year-old Rashida grew up believing menstruation was shameful. Through AAP's menstrual hygiene program, she learned it's natural, gained confidence to speak up at home, and now helps other girls overcome cultural stigma.",
      impact: "Ended period-related school absenteeism",
      category: "Health",
      beneficiary: "Adolescent Girls",
      age: "14 years old"
    },
    {
      id: 4,
      title: "Pastor Resolves Conflicts Between Farmers and Herders",
      subtitle: "Pastor Unites Farmers and Herders",
      image: "/images/Abraham Soale.jpg", // Update with actual image path
      description: "Pastor Abraham Soale used AAP's training to bridge divides between farmers and Fulani herders in Tinga. He helped form a peace council that created community bylaws, mediated disputes, and restored harmony alongside improved sanitation.",
      impact: "Community peace council established",
      category: "Leadership",
      beneficiary: "Tinga Community Leaders",
      age: "45+ years old"
    },
    // {
    //   id: 5,
    //   title: "Community-Led Sanitation Revolution",
    //   subtitle: "Tainakura Takes Charge of Health",
    //   image: "/images/Abena Nyanta.jpg", // Update with actual image path
    //   description: "After AAP's training on sanitation risks, Adwoa and her community in Tainakura built their own shared latrine. This collective action dramatically improved community health and sparked ongoing conversations about hygiene.",
    //   impact: "Community-built sanitation facility",
    //   category: "Sanitation",
    //   beneficiary: "Tainakura Residents",
    //   age: "All ages"
    // },
    {
      id: 5,
      title: "Menstrual Dignity in School",
      subtitle: "Sakina's Path to Confidence",
      image: "/images/Sakina.jpg", // Update with actual image path
      description: "15-year-old Sakina, from a Muslim family where menstruation was taboo, used to miss school monthly. AAP provided her school with facilities and sanitary pads, allowing her to attend regularly and feel included for the first time.",
      impact: "100% school attendance during periods",
      category: "Education",
      beneficiary: "Muslim Adolescent Girls",
      age: "15 years old"
    },
    {
      id: 6,
      title: "A New Church is Planted",
      subtitle: "New Fellowship Through Service",
      image: "/images/nyanta1.jpg", // Update with actual image path
      description: "After a successful outreach in Kyebi Nkwanta where 15 people accepted Christ, Pastor Broohm started a church with AAP's support. What began as a cell meeting in the chief's house has grown into a thriving Sunday congregation.",
      impact: "15 new believers, new church planted",
      category: "Spiritual",
      beneficiary: "Kyebi Nkwanta Community",
      age: "All ages"
    }
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

          <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
               
               onClick={()=> navigate(`/impact/${story.id}`)}
                key={story.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all"
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-96 overflow-hidden"> {/* Fixed height on the container */}
                    <img
                      src={story.image}
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-500"
                    />
                    {/* The category badge and overlay will now sit correctly on top of the image */}
                    {/* <div className="absolute top-4 left-4 z-10">
                      <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {story.category}
                      </span>
                    </div> */}
                    <div className="absolute inset-0 bg-black/20 z-0"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  {/* <h4 className="text-lg text-brand-gold font-semibold mb-3">{story.subtitle}</h4>
                  <p className="text-gray-600 mb-4">{story.description}</p> */}

                  <Link
                    to={`/impact/${story.id}`}
                    className="inline-flex items-center text-brand-gold hover:text-yellow-700 font-semibold transition-colors duration-300"
                  >
                    Read The impact <ArrowRight className="ml-2 h-4 w-4" />
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