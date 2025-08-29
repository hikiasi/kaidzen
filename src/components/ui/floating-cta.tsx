'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, X } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Show after scrolling 50% of viewport height

      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-6 max-w-sm border border-white/20 backdrop-blur-sm">
              {/* Close Button */}
              <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Content */}
              <div className="text-white">
                <h3 className="font-bold text-lg mb-2">Нужна помощь с 1С?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Получите бесплатную консультацию от экспертов
                </p>

                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-lg"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Получить консультацию
                  </Button>

                  <a
                    href="tel:+74012520073"
                    className="flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    +7 (4012) 520-073
                  </a>
                </div>
              </div>

              {/* Pulse Animation */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 animate-pulse -z-10"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized State */}
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => setIsMinimized(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
            >
              <Phone className="h-6 w-6 text-white" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse -z-10"></div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Бесплатная консультация"
        description="Расскажите о вашей задаче, и мы предложим решение"
      />
    </>
  );
}
