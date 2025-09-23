import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Globe, Calendar, TrendingUp, Shield } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Akosua Mensah",
      role: "Founder & Executive Director",
      image: "https://images.pexels.com/photos/8853498/pexels-photo-8853498.jpeg",
      bio: "A passionate advocate for children's rights with 15 years of experience in international development.",
      expertise: "Child Development, Policy Advocacy"
    },
    {
      name: "Kwame Osei",
      role: "Program Director",
      image: "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
      bio: "Former business consultant turned social entrepreneur, specializing in sustainable community programs.",
      expertise: "Program Management, Business Development"
    },
    {
      name: "Dr. Ama Asante",
      role: "Health & Education Coordinator",
      image: "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
      bio: "Medical doctor and educator committed to improving healthcare access in rural communities.",
      expertise: "Public Health, Educational Development"
    },
    {
      name: "Joseph Ankrah",
      role: "Community Outreach Manager",
      image: "https://images.pexels.com/photos/8363020/pexels-photo-8363020.jpeg",
      bio: "Local community leader with deep connections across Ghana's regions and villages.",
      expertise: "Community Engagement, Cultural Liaison"
    }
  ];

  const milestones = [
    { year: "2019", event: "Brighter Futures founded", description: "Started with a vision to transform communities" },
    { year: "2020", event: "First 100 children supported", description: "Educational support program launched" },
    { year: "2021", event: "Microfinance program begins", description: "Empowering small business owners" },
    { year: "2022", event: "Mobile health clinic launched", description: "Bringing healthcare to remote areas" },
    { year: "2023", event: "1000+ lives impacted", description: "Major milestone in community transformation" },
    { year: "2024", event: "Digital skills program", description: "Preparing youth for the digital economy" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding, treating every person with dignity and respect."
    },
    {
      icon: Target,
      title: "Impact Focus",
      description: "Every program is designed for measurable, lasting change in the lives of those we serve."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of transparency and accountability in all our operations."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Our programs are designed to create long-term, self-sustaining positive change."
    }
  ];

  const achievements = [
    { icon: Users, number: "2,800+", label: "Lives Transformed" },
    { icon: Award, number: "15", label: "Communities Served" },
    { icon: TrendingUp, number: "92%", label: "Success Rate" },
    { icon: Calendar, number: "5+", label: "Years of Impact" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8853498/pexels-photo-8853498.jpeg"
            alt="Our team"
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
            About Brighter Futures
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Founded in 2019, we are a dedicated team of changemakers committed to empowering 
            children and small businesses across Ghana through education, healthcare, and economic opportunities.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl"
            >
              <Target className="h-12 w-12 text-orange-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create sustainable pathways out of poverty by providing educational opportunities for children 
                and economic empowerment for small business owners in Ghana, fostering self-reliant communities 
                that can thrive independently.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <Globe className="h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Ghana where every child has access to quality education and every entrepreneur has the resources 
                to succeed, creating a ripple effect of positive change that transforms entire communities 
                for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate individuals dedicated to creating positive change</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-3">{member.bio}</p>
                <p className="text-sm text-gray-500 font-medium">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to transform communities</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-orange-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">The impact we've made together</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl"
              >
                <achievement.icon className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-semibold">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 text-purple-100">
              Be part of a team that's making a real difference in communities across Ghana. 
              Together, we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="/donate"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Support Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;