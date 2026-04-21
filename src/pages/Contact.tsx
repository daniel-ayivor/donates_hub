import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+233 50 403 7082", "+233 26 284 8837"],
      color: "text-brand-blue"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["aap@aapghana.org"],
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["GNAT ST BS-0064-4803", "Sunyani, Bono Region, Ghana"],
      color: "text-brand-gold"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "text-purple-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      {/* Hero Section */}
      {/* <section className="relative py-24 md:py-32 min-h-[85vh] bg-gradient-to-br from-brand-blue via-blue-600 to-brand-blue overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold opacity-20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0">
          <img
            src="/images/GetOut.jpeg"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
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
            Get in <span className="text-brand-gold">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg max-w-3xl mx-auto text-blue-100"
          >
            Have questions or want to learn more about our work? We'd love to hear from you. 
            Reach out and let's make a difference together.
          </motion.p>
        </div>
      </section> */}
<section className="relative py-24 md:py-32 min-h-screen overflow-hidden">
  {/* Background image — full clarity */}
  <div className="absolute inset-0">
    <img
      src="/images/GetOut.jpeg"
      alt="Contact us"
      className="w-full h-full object-cover"
      style={{ filter: 'brightness(1.1) contrast(1.05)' }}
    />
    {/* Light dark veil for text readability */}
    <div className="absolute inset-0 bg-black/25" />
  </div>

  {/* Single faint light streak */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: 'linear-gradient(120deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
    }}
  />

  {/* Soft ambient orb */}
  <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
    style={{
      background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
    }}
  />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <motion.h1
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
      style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
    >
      Get in <span className="text-brand-gold">Touch</span>
    </motion.h1>

    <motion.p
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-base md:text-lg max-w-3xl mx-auto"
      style={{ 
        color: 'rgba(255,255,255,0.90)',
        textShadow: '0 1px 10px rgba(0,0,0,0.3)' 
      }}
    >
      Have questions or want to learn more about our work? We'd love to hear from you.
      Reach out and let's make a difference together.
    </motion.p>
  </div>
</section>
      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
              >
                <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-4`} />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map with Overlay Design */}
      <section className="relative py-20 bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.46.18 AM.jpeg"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form - Overlay Style */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-strong p-6 border border-gray-200 flex flex-col h-full"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 text-sm">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-yellow-500 text-brand-blue py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-brand flex items-center justify-center group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Google Map - Overlay Style */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Container */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-strong overflow-hidden border border-gray-200">
                <div className="p-5 bg-brand-blue">
                  <h2 className="text-xl font-bold text-white mb-1">Find Us</h2>
                  <p className="text-blue-100 text-sm">Visit our office in Sunyani</p>
                </div>
                <div className="h-[350px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.573421679766!2d-2.3277758!3d7.3368508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjAnMTIuNyJOIDLCsDE5JzQwLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Africa Assistance Plan Office Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;