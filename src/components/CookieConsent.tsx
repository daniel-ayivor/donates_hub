import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CONSENT_KEY = 'aap_cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    localStorage.setItem(CONSENT_KEY, choice);
    localStorage.setItem(`${CONSENT_KEY}_date`, new Date().toISOString());
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
              <Cookie className="h-6 w-6 text-brand-blue" />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">We value your privacy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies to improve your browsing experience, analyze site traffic, and
                personalize content. By clicking "Accept", you consent to our use of cookies.
                Read our{' '}
                <a href="/privacy-policy" className="text-brand-blue underline hover:text-brand-gold">
                  Privacy Policy
                </a>{' '}
                to learn more.
              </p>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleChoice('declined')}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => handleChoice('accepted')}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-brand-gold text-brand-blue font-bold text-sm hover:bg-yellow-500 transition-colors"
              >
                Accept
              </button>
            </div>

            <button
              onClick={() => handleChoice('declined')}
              aria-label="Close"
              className="absolute top-3 right-3 sm:hidden text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;