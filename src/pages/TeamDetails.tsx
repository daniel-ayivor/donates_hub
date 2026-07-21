import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Linkedin } from 'lucide-react';

const TeamDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Team members data (you can also import this from a shared data file)
  const teamMembers = [
    {
      id: 1,
      name: "Rose Meda Offei-Asare",
      role: "CEO & PRESIDENT",
      image: "https://aapghana.org/wp-content/uploads/2025/05/p-rose-1007x1024.jpg",
      bio: "Rose Meda Donkor Offei-Asare, the Chief Executive Officer, provides overall leadership and direction for Africa Assistance Plan. She offers strategic leadership, oversees programs and staff, strengthens partnerships, and ensures that AAP's vision and mission are effectively carried out in service to communities.",
      expertise: "Strategic Leadership, Program Oversight, Partnership Development",
      fullDetails: "Rose Meda Donkor Offei-Asare brings decades of experience in nonprofit leadership and community development. As CEO, she has been instrumental in expanding AAP's reach across Ghana and into neighboring countries. Her vision for holistic community transformation combines practical interventions with spiritual development, ensuring that every program reflects Christ's love while meeting critical needs. Under her leadership, AAP has grown its impact significantly, empowering thousands of children and youth while strengthening partnerships with churches and communities throughout the region."
    },
    {
      id: 2,
      name: "Harrieta Bosomtwe",
      role: "EXECUTIVE ASSISTANT",
      image: "/images/harriet.jpeg",
      bio: "Harrieta is a dedicated team player with excellent administrative and interpersonal skills. She serves as the Executive Assistant and Children's Ministry Coordinator. She is passionate about nurturing children's spiritual growth while supporting the smooth running of organizational activities.",
      expertise: "Administration, Children's Ministry, Interpersonal Skills",
      fullDetails: "Harrieta's dual role as Executive Assistant and Children's Ministry Coordinator showcases her versatility and commitment to AAP's mission. Her exceptional organizational skills ensure that the office runs smoothly, while her heart for children's ministry enables her to create engaging programs that nurture young people's faith and development. She works closely with the leadership team to coordinate activities, manage communications, and ensure that every child in AAP's programs receives the care and attention they deserve."
    },
    {
      id: 3,
      name: "Maxwell Asuenabisa",
      role: "DIGITAL MARKETER & FUND RAISING OFFICER",
      image: "/images/maxwellsss.jpeg",
      bio: "Maxwell is a creative digital marketer with strong skills in content creation, social media strategy, and fundraising. He is passionate about using digital tools to drive impact and support community development.",
      expertise: "Digital Marketing, Fundraising, Social Media",
      fullDetails: "Maxwell leverages the power of digital media to amplify AAP's message and mobilize resources for community transformation. His innovative approach to fundraising combines compelling storytelling with strategic campaigns that engage donors and supporters across multiple platforms. Through creative content creation and data-driven strategies, Maxwell has successfully increased AAP's online presence and donor engagement, ensuring that the organization has the resources needed to continue its vital work in communities across Africa."
    },
    {
      id: 4,
      name: "Abraham Akrofi",
      role: "COMMUNITY AND CHURCH MOBILIZATION OFFICER",
      image: "/images/akrofi.jpg",
      bio: "Abraham is a passionate development worker with strong skills in community engagement and faith-based mobilization. He has extensive experience working with churches to promote holistic and sustainable community transformation.",
      expertise: "Community Engagement, Church Mobilization, Development",
      fullDetails: "Abraham serves as the vital link between AAP and the churches and communities we serve. His deep understanding of faith-based development enables him to mobilize local churches as agents of transformation in their communities. Through training, mentorship, and partnership development, Abraham equips church leaders and community members with the tools and resources they need to address local challenges. His work ensures that AAP's programs are culturally appropriate, locally owned, and sustainable long after initial interventions."
    },
    {
      id: 5,
      name: "Alexander Agyei",
      role: "PROGRAMS ASSISTANT",
      image: "/images/agyei.jpg",
      bio: "Alexander is a committed and detail-oriented individual with strong skills in project coordination and community outreach. Alexander holds a degree in Environmental Science and is passionate about supporting impactful programs that promote positive change in underserved communities.",
      expertise: "Project Coordination, Environmental Science, Community Outreach",
      fullDetails: "Alexander brings valuable technical expertise and meticulous attention to detail to AAP's program implementation. His background in Environmental Science adds an important dimension to the organization's water and sanitation programs, ensuring that interventions are environmentally sustainable and scientifically sound. As Programs Assistant, he coordinates multiple projects simultaneously, manages logistics, monitors program progress, and ensures that activities are executed according to plan and on schedule, contributing significantly to the success of AAP's community development initiatives."
    },
    {
      id: 6,
      name: "Benson Henry Asante",
      role: "CHIEF DRILLER & CHRISTIAN WITNESS COORDINATOR",
      image: "/images/Benson Asante- Jesus Film Cordinator.jpg.jpeg",
      bio: "Benson has over 18 years of drilling experience. He has worked with AAP for over 20 years. He is involved in all AAP's drilling projects either as driller and or supervisor of the projects.",
      expertise: "Drilling, Water Systems, Project Supervision",
      fullDetails: "Benson is the backbone of AAP's Water, Sanitation, and Hygiene (WaSH) program. With over two decades of dedicated service to the organization, his expertise in drilling and water systems has brought clean, safe water to countless communities across Ghana. Beyond his technical skills, Benson embodies AAP's Christian mission, using every borehole project as an opportunity to share the love of Christ and witness to communities. His commitment, experience, and spiritual dedication make him an invaluable member of the AAP team and a living testimony to the organization's values."
    }
  ];

  const member = teamMembers.find(m => m.id === parseInt(id || ''));

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Team member not found</h2>
          <button
            onClick={() => navigate('/about')}
            className="text-brand-blue hover:underline"
          >
            Return to About Us
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative py-32 min-h-[60vh] bg-brand-blue">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.43.25 AM.jpeg"
            alt="Community activities"
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
            Our Team
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
          Meet the dedicated individuals behind our mission. Our team brings together diverse skills, shared values, and a deep commitment to transforming lives and empowering communities across Ghana through sustainable development, holistic care, and media ministry.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[600px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pt-8"
            >
              <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
                <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">
                  {member.role}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {member.name}
              </h1>

              {/* <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.split(', ').map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-brand-blue rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Bio */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Full Details - Now directly under bio */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About {member.name.split(' ')[0]}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {member.fullDetails}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <a
                  href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@aapghana.org`}
                  className="flex items-center gap-2 text-brand-blue hover:text-brand-gold transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/77662355/admin/page-posts/published?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_page_posts_published%3Bebdc7271-1896-4b11-8d58-08fd6cd28cd9"
                  className="flex items-center gap-2 text-brand-blue hover:text-brand-gold transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span >LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 text-blue-100">
              Want to work with our amazing team? We're always looking for passionate individuals to join us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Meet the Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TeamDetails;