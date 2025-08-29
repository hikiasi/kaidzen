'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, CheckCircle, Star, Clock, Users, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Быстрый старт',
    description: 'Первый результат уже через 2-4 недели',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Команда экспертов',
    description: '12 лет опыта и 200+ успешных проектов',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Shield,
    title: 'Гарантия результата',
    description: '12 месяцев гарантии на все работы',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Измеримый результат',
    description: 'Каждый проект окупается за 6-12 месяцев',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    // Здесь будет отправка данных на сервер
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Rocket className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Финальный призыв к действию</span>
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
            Готовы{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              автоматизировать бизнес
            </span>{' '}
            и начать зарабатывать больше?
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Не откладывайте автоматизацию на потом. Каждый день промедления - это потерянные деньги
            и неэффективные процессы. Начните с бесплатного аудита уже сегодня.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content and Form */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Что вы получите уже через 30 дней:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Детальный анализ текущих проблем в 1С</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">
                        План автоматизации с точными сроками и стоимостью
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Первые результаты автоматизации</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Обучение ваших сотрудников</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <h4 className="text-lg font-semibold text-white">Специальное предложение</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    При заказе до конца месяца получите скидку 15% на внедрение и 3 месяца
                    бесплатной поддержки
                  </p>
                  <div className="text-2xl font-bold text-white">Экономия: до 200,000 ₽</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Без обязательств</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">Ответ за 2 часа</span>
                  </div>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Получить бесплатный аудит</h3>
                  <p className="text-gray-300">
                    Заполните форму и получите персональное предложение в течение 2 часов
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium text-white mb-2 block">
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Ваше имя"
                        className="h-12 text-base border-2 border-white/20 bg-white/10 text-white placeholder-gray-400 focus:border-white/40 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-base font-medium text-white mb-2 block"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="your@email.com"
                        className="h-12 text-base border-2 border-white/20 bg-white/10 text-white placeholder-gray-400 focus:border-white/40 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-base font-medium text-white mb-2 block"
                      >
                        Телефон *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="+7 (999) 123-45-67"
                        className="h-12 text-base border-2 border-white/20 bg-white/10 text-white placeholder-gray-400 focus:border-white/40 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-base font-medium text-white mb-2 block"
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
                        className="h-12 text-base border-2 border-white/20 bg-white/10 text-white placeholder-gray-400 focus:border-white/40 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-base font-medium text-white mb-2 block"
                    >
                      Опишите вашу задачу
                    </Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="Расскажите о проблемах, которые хотите решить..."
                      className="w-full h-24 text-base border-2 border-white/20 bg-white/10 text-white placeholder-gray-400 focus:border-white/40 rounded-xl p-3 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    Получить бесплатный аудит
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Не готовы к полному внедрению?</h3>
            <p className="text-gray-300 mb-6">
              Начните с малого - получите бесплатную консультацию по оптимизации вашей 1С
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Получить бесплатную консультацию"
        description="Расскажите о вашей задаче, и мы предложим оптимальное решение"
      />
    </section>
  );
}
