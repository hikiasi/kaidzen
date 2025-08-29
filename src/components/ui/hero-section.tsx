'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ContactModal from '@/components/ui/contact-modal';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Clock, Users, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
      const difference = +endDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute top-32 right-16 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-65 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-32 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-55 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 h-88 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-45 animate-float animation-delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_450px] lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Официальный партнер 1С</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl/none leading-tight">
                Превращаем{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  хаос в 1С
                </span>{' '}
                в стройную систему
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Доделываем за &apos;профессионалами 1С&apos;. Специализируемся на сложных задачах
                производства и торговых сетей в СЗФО
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>12 лет опыт</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>200+ успешных проектов</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span>Официальный партнер 1С</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 px-8 py-6 text-lg font-semibold"
              >
                Получить бесплатный аудит 1С за 3 дня
              </Button>
              <Button 
                onClick={() => {
                  const caseStudiesSection = document.getElementById('case-studies');
                  caseStudiesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-6 text-lg font-semibold"
              >
                Посмотреть кейсы
              </Button>
            </motion.div>

            {/* Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-orange-600" />
                <span className="font-semibold text-gray-900">Аудит действует до конца месяца</span>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{timeLeft.days}</div>
                  <div className="text-sm text-gray-600">дней</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-600">часов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-600">минут</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Получить бесплатный аудит</h3>
                <p className="text-gray-600">Заполните форму и получите персональное предложение</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Имя" 
                    type="text" 
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    type="tel" 
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Название компании" 
                    type="text" 
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                  />
                </div>
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Заказать аудит
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span>NDA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span>Гарантия результата</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Получить бесплатный аудит 1С за 3 дня"
        description="Наш эксперт проведет анализ вашей системы и предложит решения"
      />
    </section>
  );
}
