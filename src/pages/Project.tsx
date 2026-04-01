import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Users, GraduationCap, Building2, Stethoscope, Droplets, ExternalLink, Check, Sparkles } from 'lucide-react';

const Project = () => {
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
      impact: ' School supplies for 1 child for a month'
    },
    {
      id: 'water',
      title: 'Clean Water Access',
      icon: Droplets,
      description: 'Install water systems and promote hygiene in communities',
      color: 'from-cyan-500 to-cyan-600',
      impact: ' Clean water access for 10 families'
    },
    {
      id: 'church',
      title: 'Build A New Local Church',
      icon: Building2,
      description: 'Provide A Place of Worship to a Local Church',
      color: 'from-purple-500 to-purple-600',
      impact: ' Support community faith programs'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Success Animation Overlay */}
      {showSuccess && <SuccessAnimation />}

      
    </motion.div>
  );
};

export default Project;