import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Gift, Users, GraduationCap, Building2, Stethoscope, Droplets } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const donationCategories = [
    {
      id: 'education',
      title: 'Education Support',
      icon: GraduationCap,
      description: 'Fund school supplies, uniforms, and educational programs for children and orphanages',
      color: 'from-blue-500 to-blue-600',
      impact: '$25 = School supplies for 1 child for a month'
    },
    {
      id: 'water',
      title: 'Clean Water Access',
      icon: Droplets,
      description: 'Install water systems and promote hygiene in communities',
      color: 'from-cyan-500 to-cyan-600',
      impact: '$200 = Clean water access for 10 families'
    },
    {
      id: 'health',
      title: 'Healthcare Access',
      icon: Stethoscope,
      description: 'Support mobile clinics, health education, and medical care for orphanages',
      color: 'from-red-500 to-red-600',
      impact: '$75 = Medical care for a family of 5'
    },
    {
      id: 'orphanage',
      title: 'Orphanage Support',
      icon: Heart,
      description: 'Provide food, shelter, and care for orphaned children',
      color: 'from-pink-500 to-pink-600',
      impact: '$50 = Monthly support for 1 orphaned child'
    },
    {
      id: 'church',
      title: 'Church & Faith Programs',
      icon: Building2,
      description: 'Support churches and faith-based community initiatives',
      color: 'from-purple-500 to-purple-600',
      impact: '$100 = Support community faith programs'
    },
    {
      id: 'general',
      title: 'Where Needed Most',
      icon: Heart,
      description: 'Support all our programs and initiatives',
      color: 'from-orange-500 to-pink-500',
      impact: 'Your donation makes the biggest impact'
    }
  ];

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const getImpactMessage = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    if (selectedCategory === 'education') {
      const months = Math.floor(amount / 25);
      return months > 0 ? `Provides school supplies for ${months} child${months > 1 ? 'ren' : ''} for a month` : '';
    } else if (selectedCategory === 'water') {
      const families = Math.floor(amount / 20);
      return families > 0 ? `Provides clean water access for ${families} famil${families > 1 ? 'ies' : 'y'}` : '';
    } else if (selectedCategory === 'health') {
      const families = Math.floor(amount / 75);
      return families > 0 ? `Provides medical care for ${families} famil${families > 1 ? 'ies' : 'y'}` : '';
    } else if (selectedCategory === 'orphanage') {
      const children = Math.floor(amount / 50);
      return children > 0 ? `Provides monthly support for ${children} orphaned child${children > 1 ? 'ren' : ''}` : '';
    } else if (selectedCategory === 'church') {
      const programs = Math.floor(amount / 100);
      return programs > 0 ? `Supports ${programs} community faith program${programs > 1 ? 's' : ''}` : '';
    }
    return 'Makes a significant impact in our communities';
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Stripe or another payment processor
    alert('Donation functionality would be integrated with Stripe here!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-pink-600">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8854447/pexels-photo-8854447.jpeg"
            alt="Donation impact"
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
            Make a Difference Today
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Your donation creates lasting change through education, clean water, healthcare, orphan care, 
            and faith-based programs across Ghana. Every contribution matters, no matter the size.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Donation Categories */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {donationCategories.map((category) => (
                    <div
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category.id
                          ? 'ring-4 ring-orange-500 shadow-xl'
                          : 'shadow-lg hover:shadow-xl'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-10`}></div>
                      <div className="relative">
                        <category.icon className={`h-12 w-12 text-transparent bg-gradient-to-br ${category.color} bg-clip-text mb-4`} />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-gray-600 mb-3">{category.description}</p>
                        <div className="text-sm font-semibold text-orange-600 bg-orange-50 p-2 rounded-lg">
                          {category.impact}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Amount Selection */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-orange-500 text-white transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring focus:ring-orange-200 text-lg"
                  />
                </div>

                {/* Impact Display */}
                <div className="bg-green-50 p-6 rounded-xl mb-8">
                  <h4 className="text-lg font-bold text-green-800 mb-2">Your Impact:</h4>
                  <p className="text-green-700 text-lg">
                    ${customAmount || selectedAmount} {getImpactMessage()}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Donation Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-xl sticky top-24"
              >
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Secure donation powered by Stripe</span>
                </div>

                <form onSubmit={handleDonate} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={donorInfo.firstName}
                      onChange={(e) => setDonorInfo({...donorInfo, firstName: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={donorInfo.lastName}
                      onChange={(e) => setDonorInfo({...donorInfo, lastName: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200"
                      required
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200"
                    required
                  />
                  
                  <textarea
                    placeholder="Personal message (optional)"
                    value={donorInfo.message}
                    onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200"
                  />

                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Donation Amount:</span>
                      <span className="text-2xl font-bold text-orange-600">
                        ${customAmount || selectedAmount}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      100% of your donation goes directly to programs
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Gift className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="text-sm text-gray-600">Tax-deductible donation</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Receipt will be emailed to you for your records
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Other Ways to Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
                <p className="text-gray-600 mb-4">Join our team and contribute your skills directly to our mission.</p>
                <button className="text-blue-500 font-semibold hover:text-blue-600">Learn More</button>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Gift className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Giving</h3>
                <p className="text-gray-600 mb-4">Provide sustained support with a monthly donation plan.</p>
                <button className="text-green-500 font-semibold hover:text-green-600">Set Up Monthly</button>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Share Our Story</h3>
                <p className="text-gray-600 mb-4">Help us reach more people by sharing our mission on social media.</p>
                <button className="text-purple-500 font-semibold hover:text-purple-600">Share Now</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Donate;