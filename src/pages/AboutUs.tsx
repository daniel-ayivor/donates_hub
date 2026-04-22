import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, Heart, Award, Globe, Calendar, TrendingUp, Shield, Sparkles, UserCheck, UsersRound, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

  const navigate = useNavigate();
  const teamMembers = [
    {id:1,
      name: "Rose Meda Offei-Asare",
      role: "CEO & PRESIDENT",
      image: "https://aapghana.org/wp-content/uploads/2025/05/p-rose-1007x1024.jpg",
      bio: "Rose Meda Donkor Offei-Asare, the Chief Executive Officer, provides overall leadership and direction for Africa Assistance Plan. She offers strategic leadership, oversees programs and staff, strengthens partnerships, and ensures that AAP's vision and mission are effectively carried out in service to communities.",
      expertise: "Strategic Leadership, Program Oversight, Partnership Development"
    },
    {id:2,
      name: "Harrieta Bosomtwe",
      role: "EXECUTIVE ASSISTANT",
      image: "/images/harriet.jpeg",
      bio: "Harrieta is a dedicated team player with excellent administrative and interpersonal skills. She serves as the Executive Assistant and Children's Ministry Coordinator. She is passionate about nurturing children's spiritual growth while supporting the smooth running of organizational activities.",
      expertise: "Administration, Children's Ministry, Interpersonal Skills"
    },
    {id:3,
      name: "Maxwell Asuenabisa",
      role: "DIGITAL MARKETER & FUND RAISING OFFICER",
      image: "/images/maxwellsss.jpeg",
      bio: "Maxwell is a creative digital marketer with strong skills in content creation, social media strategy, and fundraising. He is passionate about using digital tools to drive impact and support community development.",
      expertise: "Digital Marketing, Fundraising, Social Media"
    },
    {id:4,
      name: "Abraham Akrofi",
      role: "COMMUNITY AND CHURCH MOBILIZATION OFFICER",
      image: "/images/akrofi.jpg",
      bio: "Abraham is a passionate development worker with strong skills in community engagement and faith-based mobilization. He has extensive experience working with churches to promote holistic and sustainable community transformation.",
      expertise: "Community Engagement, Church Mobilization, Development"
    },
    {id:5,
      name: "Alexander Agyei",
      role: "PROGRAMS ASSISTANT",
      image: "/images/agyei.jpg",
      bio: "Alexander is a committed and detail-oriented individual with strong skills in project coordination and community outreach. Alexander holds a degree in Environmental Science and is passionate about supporting impactful programs that promote positive change in underserved communities.",
      expertise: "Project Coordination, Environmental Science, Community Outreach"
    },
    {id:6,
      name: "Benson Henry Asante",
      role: "CHIEF DRILLER & CHRISTIAN WITNESS COORDINATOR",
      image: "/images/Benson Asante- Jesus Film Cordinator.jpg.jpeg",
      bio: "Benson has over 18 years of drilling experience. He has worked with AAP for over 20 years. He is involved in all AAP's drilling projects either as driller and or supervisor of the projects.",
      expertise: "Drilling, Water Systems, Project Supervision"
    }
  ];

  const milestones = [
    { year: "1980s", event: "Africa Assistance Plan founded", description: "Started with a vision that 'Africa might be saved'" },
    { year: "2002", event: "WaSH Program Launched", description: "Began providing clean water and sanitation to vulnerable communities" },
    { year: "2010s", event: "Regional Expansion", description: "Extended services to Liberia and Togo" },
    { year: "2020", event: "Church & Community Empowerment", description: "Launched comprehensive program to equip churches and communities" },
    { year: "2022", event: "CYE: 50,000 Empowered Initiative", description: "Major youth empowerment program targeting 50,000 children and youth" },
    { year: "2024", event: "40+ Years of Service", description: "Celebrating over four decades of transforming communities across Africa" }
  ];

  const values = [
    {
      icon: Heart,
      title: "God Factor",
      description: "God the father, the Son, and the Holy Spirit, is at the centre of all we do."
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive to achieve nothing but the best."
    },
    {
      icon: UserCheck,
      title: "Trustworthy",
      description: "We are committed to truthfulness."
    },
    {
      icon: UsersRound,
      title: "Teamwork",
      description: "Working together achieves more than individual effort alone."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Guided by biblical principles, we uphold honesty, moral uprightness, and wholeness."
    },
    {
      icon: Users,
      title: "People",
      description: "Our work is made possible by dedicated and hardworking people."
    }
  ];

  const achievements = [
    { icon: Users, number: "50,000+", label: "Youth Empowered" },
    { icon: Award, number: "100+", label: "Churches & Communities" },
    { icon: TrendingUp, number: "22+", label: "Years of WaSH" },
    { icon: Calendar, number: "40+", label: "Years of Service" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 min-h-[60vh] bg-gradient-to-br from-brand-blue via-blue-600 to-blue-700 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.51.10 AM.jpeg"
            alt="Our team"
            className="w-full h-full object-cover opacity-25"
            style={{ filter: 'brightness(1.2) contrast(1.05)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Who <span className="text-brand-gold">We Are</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg max-w-3xl mx-auto text-blue-100"
          >
            Africa Assistance Plan is a Christian non-governmental organization registered in Ghana and 
            the United States of America. With over 40 years of serving the poor and vulnerable, 
            AAP has worked across Ghana from its base in Sunyani and touching countries such as Liberia and Togo.
          </motion.p>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Blurred World Map Background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/images/world-map-bg.png"
            alt="World map background"
            className="w-full h-full object-cover blur-3xl opacity-20"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-brand-blue mb-4 text-center"
          >
            Our History
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
          >
            Africa Assistance Plan (AAP) was founded in 1983 by Bishop David Donkor on the conviction that lasting transformation is possible only through Jesus Christ, expressed in both word and deed, to share the love of Christ across Africa.<br /><br />
            Over the years, AAP has walked alongside churches, children, families, and communities, responding to practical needs while remaining committed to seeing Jesus lifted up and glorified.
          </motion.p>

             <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 italic py-2 leading-relaxed text-center max-w-3xl mx-auto"
          >
            Africa Assistance Plan serves communities across Ghana, Liberia, and Togo, bringing Christ-centered transformation to vulnerable populations. In Ghana, our programs reach 12 regions, with our operational base in the Bono Region.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <Globe className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
              ...That Africa Might Be Saved!
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-yellow-50 p-8 rounded-2xl"
            >
              <Target className="h-12 w-12 text-brand-gold mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A child-centered Christian organization focused on empowering the Church and communities for holistic development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Strategy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Africa Assistance Plan implements a Christ-centered, holistic approach to community development. Our strategy focuses on empowering the Church, strengthening communities, and serving the most vulnerable through integrated programs in children and youth development, water, sanitation and hygiene, and community empowerment. We combine spiritual discipleship with practical interventions, ensuring that every initiative reflects God's love, builds local capacity, and promotes sustainable transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Faith */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Heart className="h-16 w-16 text-brand-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Faith</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Africa Assistance Plan is rooted in the Christian faith. We believe in Jesus Christ as Lord and Savior, and all our work is an expression of His love. Our programs, partnerships, and services are guided by the teachings of the Bible.
            </p>
          </motion.div>
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
            <div className="text-xl text-gray-600  max-w-2xl mx-auto mb-10">
              <strong>The principles that guide everything we do</strong>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow transition-shadow"
              >
                <value.icon className="h-16 w-16 text-brand-gold mx-auto mb-4" />
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
          {/* Our Leadership */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              Africa Assistance Plan is guided by committed Christian leaders who provide spiritual direction, strategic oversight, and accountability to ensure that all our work remains Christ-centered and mission driven.
            </p>
          </motion.div>

          {/* Board Members */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 bg-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Board Members</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              AAP is governed by a Board of directors who provide governance, policy guidance, and oversight. The Board ensures faithfulness to our Christian values, transparency, and responsible stewardship of resources.
            </p>
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
          </motion.div>

          <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
             
              onClick={()=> navigate(`/team/${member.id}`)}
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="text-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[350px] object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-brand-gold font-semibold mb-1">{member.role}</p>
                  {/* <p className="text-gray-600 mb-3">{member.bio}</p> */}
                  {/* <p className="text-sm text-gray-500 font-medium">{member.expertise}</p> */}
                </div>
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
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-brand-gold"></div>
            
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
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-2xl font-bold text-brand-gold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-gold rounded-full border-4 border-white shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}

      {/* Call to Action */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 text-blue-100">
              Be part of a team that's making a real difference in communities across Ghana. 
              Together, we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="/donate"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
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