'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { AlertTriangle, Gift, ArrowRight, X } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        e.preventDefault();
        e.returnValue = '';
      }
    };

    // Add delay to prevent immediate triggering
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Close modal after success
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Эксклюзивное предложение</DialogTitle>
        </DialogHeader>
        <div className="relative bg-gradient-to-br from-red-50 to-orange-50">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Подождите!</h2>
                <p className="text-white/90">Не упустите возможность</p>
              </div>
            </motion.div>
          </div>

          <div className="p-8">
            {!isSubmitted ? (
              <>
                {/* Offer */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center mb-8"
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Gift className="h-4 w-4" />
                    Эксклюзивное предложение
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Получите <span className="text-red-500">бесплатный аудит 1С</span>
                  </h3>

                  <p className="text-lg text-gray-600 mb-6">
                    Оставьте контакты прямо сейчас и получите детальный анализ вашей системы 1С
                    стоимостью 50 000 рублей совершенно бесплатно!
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 text-yellow-800">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="font-semibold">Предложение ограничено!</span>
                    </div>
                    <p className="text-yellow-700 text-sm mt-1">
                      Только для первых 10 заявок в этом месяце
                    </p>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.form
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="exit-name" className="text-sm font-medium text-gray-700">
                        Ваше имя *
                      </Label>
                      <Input
                        id="exit-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Введите ваше имя"
                        className="mt-1 h-12 border-2 border-gray-200 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="exit-phone" className="text-sm font-medium text-gray-700">
                        Телефон *
                      </Label>
                      <Input
                        id="exit-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="+7 (___) ___-__-__"
                        className="mt-1 h-12 border-2 border-gray-200 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="exit-email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="exit-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="mt-1 h-12 border-2 border-gray-200 focus:border-red-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="h-5 w-5 mr-2" />
                        Получить бесплатный аудит
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </motion.form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    ✓
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Спасибо!</h3>
                <p className="text-gray-600">
                  Мы свяжемся с вами в течение 30 минут для проведения бесплатного аудита
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
