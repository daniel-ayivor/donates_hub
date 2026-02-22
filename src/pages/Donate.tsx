import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Users, GraduationCap, Building2, Stethoscope, Droplets, ExternalLink, Check, Sparkles } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      id: 'church',
      title: 'Build A New Local Church',
      icon: Building2,
      description: 'Provide A Place of Worship to a Local Church',
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

  const handleDonate = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    
    // Create URL with donation details as query parameters
    const stripeUrl = new URL('https://buy.stripe.com/28o4jrdrTcBs8pyeUU');
    
    // Add category and amount as metadata (you can process this in your Node.js backend)
    stripeUrl.searchParams.append('client_reference_id', `${selectedCategory}_${amount}`);
    stripeUrl.searchParams.append('prefilled_email', '');
    
    setIsSubmitting(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message and redirect after animation
      setTimeout(() => {
        setShowSuccess(false);
        // Navigate to Stripe checkout
        window.location.href = stripeUrl.toString();
      }, 2000);
    }, 1000);
  };

  // Success Animation Component
  const SuccessAnimation = () => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-2xl p-8 text-center max-w-md mx-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Check className="h-8 w-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">Redirecting to secure checkout...</p>
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-brand-gold border-t-transparent rounded-full"
          />
        </div>
      </motion.div>
      
      {/* Confetti Effect - Reduced for performance */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-brand-gold rounded-full"
          initial={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 min-h-[60vh] bg-gradient-to-br from-brand-gold via-yellow-500 to-brand-gold overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.43.30 AM.jpeg"
            alt="Donation impact"
            className="w-full h-full object-cover opacity-25"
            style={{ filter: 'brightness(1.2) contrast(1.05)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">Every Gift Matters</span>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Make a <span className="text-brand-blue">Lasting Impact</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Your donation creates lasting change through education, clean water, 
            and build new local churchs across across Ghana. Every contribution matters, no matter the size.
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
                      className={`relative p-6 rounded-xl cursor-pointer transition-shadow bg-white ${
                        selectedCategory === category.id
                          ? 'ring-4 ring-brand-gold shadow-md'
                          : 'shadow-sm hover:shadow'
                      }`}
                    >
                      <category.icon className="h-12 w-12 text-brand-gold mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-3">{category.description}</p>
                      <motion.div
                        className="text-sm font-semibold text-yellow-700 bg-yellow-50 p-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {category.impact}
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* Amount Selection */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                  {presetAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-xl font-semibold transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-brand-gold text-white shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ${amount}
                    </motion.button>
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
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-brand-gold focus:ring focus:ring-yellow-200 text-lg transition-colors"
                  />
                </div>

                {/* Impact Display */}
                <motion.div 
                  className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-200"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-lg font-bold text-blue-800 mb-2">Your Impact:</h4>
                  <p className="text-blue-700 text-lg">
                    ${customAmount || selectedAmount} {getImpactMessage()}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Donation Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-50 p-8 rounded-xl shadow-md sticky top-24 text-center"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Donate?</h3>
                  <motion.div 
                    className="bg-white p-4 rounded-lg shadow mb-6"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-semibold text-yellow-700 capitalize">
                        {donationCategories.find(cat => cat.id === selectedCategory)?.title}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Amount:</span>
                      <span className="text-2xl font-bold text-yellow-700">
                        ${customAmount || selectedAmount}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {getImpactMessage()}
                    </div>
                  </motion.div>
                </div>


                <motion.button
                  onClick={handleDonate}
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold text-white py-3 rounded-xl font-semibold text-base hover:bg-yellow-600 transition-colors flex items-center justify-center mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Proceed to Stripe Checkout
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </>
                    )}
                </motion.button>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    🔒 Secure payment powered by Stripe
                  </p>
                  <p className="text-xs text-gray-500">
                    You'll be redirected to Stripe's secure checkout page
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Animation Overlay */}
      {showSuccess && <SuccessAnimation />}

      {/* Other Ways to Help */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Other Ways to Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow transition-shadow">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
                <p className="text-gray-600 mb-4">Join our team and contribute your skills directly to our mission.</p>
                <button className="text-blue-500 font-semibold hover:text-blue-600">Learn More</button>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow transition-shadow">
                <Gift className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Giving</h3>
                <p className="text-gray-600 mb-4">Provide sustained support with a monthly donation plan.</p>
                <button className="text-brand-gold font-semibold hover:text-yellow-700">Set Up Monthly</button>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow transition-shadow">
                <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Share Our Story</h3>
                <p className="text-gray-600 mb-4">Help us reach more people by sharing our mission on social media.</p>
                <button className="text-purple-500 font-semibold hover:text-purple-600">Share Now</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default Donate;