import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, TrendingUp, Heart } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const projects = {
    1: {
      title: "From Street to School",
      subtitle: "Kwame's Educational Journey",
      beneficiary: "Kwame Asante",
      age: "Now 12 years old",
      location: "Accra, Ghana",
      date: "Started: March 2022",
      category: "Education",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.07 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.29 AM.jpeg"
      ],
      story: `When we first met Kwame in March 2022, he was just 8 years old, spending his days on the bustling streets of Accra, selling water sachets to help his grandmother put food on the table. Despite his young age, Kwame had never set foot in a classroom.

His grandmother, Akosua, had raised him since he was a toddler after losing both parents in a tragic accident. With no formal income and limited resources, education seemed like an impossible dream for this bright young boy who could count change faster than most adults.

Everything changed when our community outreach team discovered Kwame during a routine visit to the Kaneshie Market area. Despite the challenges he faced, Kwame's curiosity and eagerness to learn were immediately apparent. He would ask endless questions about everything around him and had taught himself to recognize numbers and some letters from the signs around the market.

Our team worked closely with Kwame's grandmother to develop a comprehensive support plan. We enrolled Kwame in a local primary school, provided him with uniforms, books, and school supplies, and arranged for after-school tutoring to help him catch up with his peers.

The transformation has been remarkable. Within his first year, Kwame progressed from not knowing how to write his name to reading simple sentences. His teachers consistently praise his dedication and enthusiasm for learning. He particularly excels in mathematics - those skills he developed counting money in the market have served him well!

Today, Kwame is in his fourth year of primary school and consistently ranks among the top three students in his class. He dreams of becoming a doctor to help other children in his community. His grandmother, Akosua, beams with pride as she talks about her grandson's achievements.

But Kwame's story doesn't end with his personal success. He has become a role model in his community, encouraging other children to prioritize education. He started a small study group in his neighborhood where older children help younger ones with their homework.

Through our continued support, including regular check-ins, nutritional assistance, and mentorship, Kwame is on track to complete his primary education with honors. We're already planning for his transition to secondary school, where we hope to continue supporting his educational journey.

Kwame's transformation from a street vendor to a top student demonstrates the incredible potential that lies within every child, waiting for the right opportunity to shine. Your support makes stories like Kwame's possible.`,
      impact: {
        direct: "1 child's life transformed",
        educational: "4 years of quality education provided",
        community: "15+ children inspired to prioritize education",
        economic: "Family income increased through grandmother's small business support"
      },
      metrics: [
        { label: "Academic Performance", value: "Top 3 in class", icon: TrendingUp },
        { label: "Reading Level", value: "Grade appropriate", icon: Users },
        { label: "Attendance Rate", value: "98%", icon: Calendar },
        { label: "Community Impact", value: "15+ children", icon: Heart }
      ],
      testimonial: {
        text: "I want to become a doctor so I can help other children like me. School has given me hope for a better future.",
        author: "Kwame Asante",
        role: "Beneficiary"
      },
      nextSteps: "Continue supporting Kwame through secondary school and provide career guidance as he works toward his dream of becoming a doctor."
    },
    2: {
      title: "Community Support, Big Impact",
      subtitle: "Ama's Market Success",
      beneficiary: "Ama Osei",
      age: "35 years old",
      location: "Kumasi, Ghana",
      date: "Started: June 2023",
      category: "Business",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.15 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.15 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.32 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.35 AM.jpeg"
      ],
      story: `Ama Osei's journey from struggling single mother to successful entrepreneur began with a dream and comprehensive business training from our Small Business Empowerment Program.

In June 2023, Ama was working as a domestic helper in Kumasi, earning barely enough to feed her three children - Sarah (14), Kofi (10), and little Abena (6). Despite working long hours, she could barely afford their school fees and often had to choose between buying food or keeping her children in school.

Ama had always dreamed of starting her own business. She noticed that fresh vegetables were expensive and often spoiled quickly in the local markets. Having grown up in a farming family, she understood agriculture and saw an opportunity to connect local farmers directly with urban consumers.

When she heard about our business training program through a community meeting, Ama was eager to learn. She attended our three-month entrepreneurship workshop where she learned financial literacy, business planning, marketing, and customer relationship management.

With her newfound knowledge and a small amount of savings she had carefully set aside, Ama started small - purchasing fresh vegetables directly from farmers outside Kumasi and selling them at the local market. She focused on quality and fair prices, quickly building a reputation for offering the freshest produce in her section of the market.

The business grew steadily. Ama reinvested her profits, expanded her variety of vegetables, and even began selling to local restaurants. Her secret weapon was her relationships - she treated both farmers and customers like family, creating loyalty on both sides of her business.

Within six months, Ama's business had grown significantly. She rented a permanent stall in the market and began employing two part-time helpers during peak seasons. Our team continued providing mentorship and guidance as she navigated the challenges of scaling her business.

Today, just over a year later, Ama's vegetable business generates three times her previous income. She is now saving money for her children's university education. Sarah, her eldest, dreams of becoming a teacher and is excelling in school thanks to her mother's ability to pay fees on time.

But Ama's success has rippled beyond her family. She now purchases vegetables from 12 different farmers, providing them with a reliable income source. She has also mentored three other women in her community to start their own small businesses, sharing the knowledge she gained from our program.

Ama's transformation demonstrates how proper training, determination, and ongoing mentorship can create lasting change not just for one family, but for an entire community network.

The most powerful moment came during our annual beneficiary celebration when Ama stood up to speak. With tears in her eyes, she said, "This training didn't just teach me business - it gave me back my dignity and my children their future."`,
      impact: {
        direct: "1 family lifted out of poverty",
        economic: "300% income increase",
        community: "12 farmers supported with reliable income",
        generational: "3 children now have educational opportunities"
      },
      metrics: [
        { label: "Income Growth", value: "300%", icon: TrendingUp },
        { label: "Farmers Supported", value: "12", icon: Users },
        { label: "Training Months", value: "3", icon: Calendar },
        { label: "Women Mentored", value: "3", icon: Heart }
      ],
      testimonial: {
        text: "This training didn't just teach me business - it gave me back my dignity and my children their future. Now I can dream bigger for all of us.",
        author: "Ama Osei",
        role: "Business Owner & Mother"
      },
      nextSteps: "Continue mentorship support as Ama expands her business and help her develop a savings program for her children's higher education."
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Link to="/impact" className="text-brand-gold hover:text-yellow-600">
            Return to Impact Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-32 min-h-[60vh] bg-brand-gold">
        <div className="absolute inset-0">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/impact"
            className="inline-flex items-center text-white hover:text-yellow-200 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Impact Stories
          </Link>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl sm:text-2xl text-yellow-100 mb-8">{project.subtitle}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-300" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-yellow-300" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-yellow-300" />
                <span>{project.beneficiary}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Complete Story</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  {project.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Impact Metrics */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-50 p-6 rounded-xl mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Impact Metrics</h3>
                <div className="space-y-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center">
                      <metric.icon className="h-5 w-5 text-brand-gold mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Impact Areas */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-xl mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Impact Areas</h3>
                <div className="space-y-3">
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm font-semibold text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </div>
                      <div className="text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
                <p className="text-gray-700">{project.nextSteps}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">Visual journey of transformation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow transition-shadow"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover object-center transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-yellow-50 p-12 rounded-xl"
          >
            <div className="text-6xl text-brand-gold mb-6">"</div>
            <blockquote className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              {project.testimonial.text}
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
              <div className="text-brand-gold">{project.testimonial.role}</div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Help Us Create More Success Stories</h2>
            <p className="text-xl mb-8 text-yellow-100">
              Stories like {project.beneficiary.split(' ')[0]}'s are possible because of supporters like you. 
              Your donation can transform another life today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-white text-brand-gold hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                to="/impact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-gold px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Read More Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;