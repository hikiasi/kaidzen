'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Download, FileText, Users, CheckCircle } from 'lucide-react';

export default function LeadMagnet() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', position: '', company: '' });
    }, 3000);
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
            <Download className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Бесплатные материалы</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Получите{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              бесплатные материалы
            </span>{' '}
            для развития бизнеса
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Скачайте полезные материалы и узнайте, как другие компании автоматизируют
            бизнес-процессы и получают измеримые результаты.
          </p>
        </motion.div>

        {/* Content and Form */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
                  <FileText className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Чек-лист &ldquo;7 критических ошибок в 1С&rdquo;
                </h3>

                <p className="text-gray-700 mb-6">
                  Скачайте чек-лист и проверьте, не совершаете ли вы эти ошибки, которые ежегодно
                  обходятся компаниям в миллионы рублей
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Проверьте 7 критических ошибок</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Узнайте, сколько денег теряете</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Получите план исправления</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Уже скачали 2,847 руководителей</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Скачать чек-лист бесплатно
                  </h3>
                  <p className="text-gray-600">
                    Заполните форму и получите материал на email в течение 5 минут
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-base font-medium text-gray-700 mb-2 block"
                    >
                      Имя *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Ваше имя"
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-base font-medium text-gray-700 mb-2 block"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="position"
                      className="text-base font-medium text-gray-700 mb-2 block"
                    >
                      Должность
                    </Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, position: e.target.value }))
                      }
                      placeholder="Ваша должность"
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="company"
                      className="text-base font-medium text-gray-700 mb-2 block"
                    >
                      Компания
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, company: e.target.value }))
                      }
                      placeholder="Название компании"
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Отправка...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Чек-лист отправлен на email!
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5 mr-2" />
                        Скачать чек-лист бесплатно
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
