import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, Mail, Send, ChevronDown, Sparkles, HandHeart, Megaphone, ChevronRight } from 'lucide-react';

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
  const [openPrayerIndex, setOpenPrayerIndex] = useState<number | null>(null);

  const togglePrayer = (index: number) => {
    setOpenPrayerIndex(openPrayerIndex === index ? null : index);
  };

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
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center relative border-t-4 border-brand-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">Thank You!</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">Thank you for your interest! We will contact you soon.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-brand-gold hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 shadow-lg"
                onClick={() => setShowModal(false)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-blue overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-brand-gold" />
            <span className="text-sm font-semibold">Join Our Mission</span>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Get Involved & Make a <span className="text-brand-gold">Difference</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed"
          >
            Join our community of changemakers. Whether through volunteering, donations, or spreading awareness, 
            there are many ways to contribute to our mission of transforming lives in Ghana.
          </motion.p>
        </div>
      </section>


      {/* Volunteer Section */}
      <section className="section-spacing bg-gray-50 relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl shadow-lg mx-auto mb-6"
            >
              <HandHeart className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Volunteer</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Use your time, skills, and compassion to serve communities and advance the work God is doing through Africa Assistance Plan. 
              Volunteers support outreach programs, community development activities, discipleship, and humanitarian efforts on the ground.
            </p>
          </motion.div>

          {/* Volunteer Form with Image - Flex Layout */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] lg:min-h-[600px]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/WhatsApp Image 2026-01-04 at 12.43.30 AM.jpeg"
                  alt="Volunteers helping community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Our Team</h3>
                  <p className="text-base md:text-lg text-blue-100">
                    Make a difference in communities across Ghana
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Compact Form Portal */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-brand-gold"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Volunteer Application
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form below and we'll get in touch with you soon
                </p>

                <div className="space-y-4">
                  {/* Name & Email in Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-300 outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-300 outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Interest in Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-300 outline-none"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-xs font-semibold text-gray-700 mb-1">
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-300 outline-none bg-white"
                      >
                        <option value="">Select area</option>
                        <option value="education">Education</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="water">Water & Sanitation</option>
                        <option value="orphanage">Orphanage</option>
                        <option value="church">Church Programs</option>
                        <option value="community">Community Dev.</option>
                        <option value="media">Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience Field */}
                  <div>
                    <label htmlFor="experience" className="block text-xs font-semibold text-gray-700 mb-1">
                      Relevant Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-300 outline-none resize-none"
                      placeholder="Your skills and experience"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                      Why volunteer with us? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-300 outline-none resize-none"
                      placeholder="Share your motivation"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-brand-gold hover:to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
                  >
                    Submit Application
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="section-spacing bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl shadow-lg mx-auto mb-6"
            >
              <Heart className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pray</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Prayer is central to everything we do. Please stand with us using these prayer points:
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {[
              {
                title: "Children and Youth",
                content: "Pray for children and youth to encounter Jesus and grow in faith and purpose."
              },
              {
                title: "Families and Communities",
                content: "Pray for families and communities to experience peace, healing, and transformation through Christ."
              },
              {
                title: "Churches We Serve",
                content: "Pray for the churches we serve to be strengthened, united, and effective witnesses of the Gospel."
              },
              {
                title: "Gospel Proclamation",
                content: "Pray for Gospel proclamation efforts, including Jesus Film outreaches and media ministry, that many hearts will turn to Christ."
              },
              {
                title: "Clean Water & Sanitation",
                content: "Pray for clean water, sanitation, and hygiene projects to bring dignity, health, and a clear testimony of God's love."
              },
              {
                title: "Leadership and Staff",
                content: "Pray for wisdom, protection, and strength for AAP leadership, staff, and volunteers."
              },
              {
                title: "Provision and Partners",
                content: "Pray for provision and faithful partners to support the work God is doing through Africa Assistance Plan."
              }
            ].map((prayer, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white border-l-4 border-brand-gold rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <button
                  onClick={() => togglePrayer(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md"
                    >
                      {index + 1}
                    </motion.div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">{prayer.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openPrayerIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-brand-gold" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openPrayerIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-18">
                        <p className="text-gray-700 leading-relaxed ml-12">{prayer.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg mx-auto mb-6"
            >
              <Users className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partner With Us</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
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
              },
              {
                title: "As an Advocate",
                description: "Be a voice for the vulnerable. We invite media influencers, creatives, journalists, and activists to use their platforms to share our stories, raise awareness about community needs, and mobilize others to stand for justice, dignity, and hope in Christ.",
                icon: "📢"
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-brand-gold relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-6xl mb-6"
                  >
                    {partner.icon}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors duration-300">{partner.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">{partner.description}</p>
         
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Newsletter Card */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-brand-gold relative overflow-hidden"
          >
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
              />
              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-2xl shadow-lg mb-6"
                >
                  <Mail className="h-10 w-10 text-white" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
                <p className="text-sm md:text-base text-gray-600 mb-8">
                  Subscribe to our newsletter for updates on our programs, events, and impact stories
                </p>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-4 border-2 border-gray-200 rounded-full focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 transition-all duration-300 outline-none"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-brand-gold hover:to-yellow-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Subscribe <Send className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default GetInvolved;