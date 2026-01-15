import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      name: "LEMS Constructions",
      logo: "/images/LEMS.jpeg"
    },
    {
      name: "Living Water International",
      logo: "/images/LWI.png"
    },
    {
      name: "Nowfoods, USA",
      logo: "/images/nowlogo.png"
    },
    {
      name: "Soles4souls",
      logo: "/images/Soles4souls.png"
    },
    {
      name: "CRU ministry",
      logo: "/images/cru.png"
    },
    {
      name: "HeartsAfire",
      logo: "/images/heartfire.png"
    },
    {
      name: "International Children’s Fund (ICF)",
      logo: "/images/ICFlogo.png"
    }
  ];

  // Duplicate the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">
            Working together to transform communities across Africa
          </p>
        </motion.div>
      </div>

      {/* Continuous scrolling partners */}
      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1800], // Adjust based on total width of partners
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-32 flex flex-col items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-16 object-contain mb-3"
                />
                <p className="text-gray-700 font-semibold text-center text-sm">
                  {partner.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Alternative: Grid layout for mobile */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:hidden">
        <div className="grid grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm p-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-16 object-contain mb-3"
              />
              <p className="text-gray-700 font-semibold text-center text-sm">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;