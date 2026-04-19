import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 2500);
      return () => clearTimeout(timer);
    } else if (consent === 'granted') {
      updateGtagConsent('granted');
    }
  }, []);

  const updateGtagConsent = (status: 'granted' | 'denied') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': status,
        'ad_storage': status,
        'ad_user_data': status,
        'ad_personalization': status
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'granted');
    updateGtagConsent('granted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'denied');
    updateGtagConsent('denied');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/95 dark:bg-dark-800/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mt-1">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Configuración de Cookies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  Utilizamos cookies analíticas de Google para entender cómo interactúas con nuestro sitio web y mejorar tu experiencia. Al hacer clic en "Aceptar", permites el uso de estas cookies. Puedes rechazar su uso si lo deseas.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 transition-colors w-full sm:w-auto text-center"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-xl font-semibold bg-brand-500 hover:bg-brand-600 text-white transition-colors shadow-lg shadow-brand-500/20 w-full sm:w-auto text-center"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;
