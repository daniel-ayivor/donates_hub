import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Mail, Send } from 'lucide-react';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Volunteer application:', formData);
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      experience: '',
      message: ''
    });
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Thank You!</h3>
            <p className="text-lg text-gray-700 mb-6">Thank you for your interest! We will contact you soon.</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-blue-700 opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Get Involved & Make a Difference
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Join our community of changemakers. Whether through volunteering, donations, or spreading awareness, 
            there are many ways to contribute to our mission of transforming lives in Ghana.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              There are many ways to walk with Africa Assistance Plan as we serve communities and proclaim Christ. 
              AAP has projects running throughout the year, and there are always opportunities to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Volunteer</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Use your time, skills, and compassion to serve communities and advance the work God is doing through Africa Assistance Plan. 
              Volunteers support outreach programs, community development activities, discipleship, and humanitarian efforts on the ground.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Heart className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pray</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Prayer is central to everything we do. Please stand with us using these prayer points:
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              "Pray for children and youth to encounter Jesus and grow in faith and purpose.",
              "Pray for families and communities to experience peace, healing, and transformation through Christ.",
              "Pray for the churches we serve to be strengthened, united, and effective witnesses of the Gospel.",
              "Pray for Gospel proclamation efforts, including Jesus Film outreaches and media ministry, that many hearts will turn to Christ.",
              "Pray for clean water, sanitation, and hygiene projects to bring dignity, health, and a clear testimony of God's love.",
              "Pray for wisdom, protection, and strength for AAP leadership, staff, and volunteers.",
              "Pray for provision and faithful partners to support the work God is doing through Africa Assistance Plan."
            ].map((prayer, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{prayer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              You can partner with Africa Assistance Plan in several ways:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "As an Individual",
                description: "Support the work through giving, volunteering, prayer, or sharing your skills to help reach communities and proclaim Christ.",
                icon: "👤"
              },
              {
                title: "As an Organization",
                description: "Collaborate with us through joint programs, technical support, funding, or shared initiatives that advance Christ-centered development.",
                icon: "🏢"
              },
              {
                title: "As a Church",
                description: "Join us in missions, discipleship, community outreach, prayer support, and Gospel proclamation as we serve together.",
                icon: "⛪"
              },
              {
                title: "As a Family",
                description: "Serve together by supporting projects, praying as a family, and modeling Christ's love through generosity and service.",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "As a Business",
                description: "Partner through corporate giving, social responsibility initiatives, in-kind support, or strategic partnerships that create lasting Kingdom impact.",
                icon: "💼"
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{partner.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.title}</h3>
                <p className="text-gray-700 leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advocate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Mail className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advocate</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Be a voice for the vulnerable. We invite media influencers, creatives, journalists, and activists to use their platforms 
              to share our stories, raise awareness about community needs, and mobilize others to stand for justice, dignity, and hope in Christ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Mail className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for updates on our programs, events, and impact stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-4 border border-gray-300 rounded-full focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default GetInvolved;