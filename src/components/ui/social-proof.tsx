'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { motion } from 'framer-motion';
import {
    Award,
    Users,
    TrendingUp,
    Star,
    CheckCircle, Building2,
    Globe,
    Shield,
    Zap
} from 'lucide-react';

const clients = [
  { name: 'Velden Carpets', logo: '🏭', industry: 'Производство ковров', color: 'from-blue-500 to-blue-600' },
  { name: 'Суперцены', logo: '🛒', industry: 'Торговая сеть', color: 'from-green-500 to-green-600' },
  { name: 'МеталлПром', logo: '⚙️', industry: 'Металлообработка', color: 'from-purple-500 to-purple-600' },
  { name: 'СтройМастер', logo: '🏗️', industry: 'Строительство', color: 'from-orange-500 to-orange-600' },
  { name: 'АгроТех', logo: '🌾', industry: 'Сельское хозяйство', color: 'from-red-500 to-red-600' },
  { name: 'ЛогистикГрупп', logo: '🚚', industry: 'Логистика', color: 'from-indigo-500 to-indigo-600' },
  { name: 'МедицинЦентр', logo: '🏥', industry: 'Медицина', color: 'from-pink-500 to-pink-600' },
  { name: 'ЭнергоСервис', logo: '⚡', industry: 'Энергетика', color: 'from-yellow-500 to-yellow-600' }
];

const stats = [
  { icon: Users, label: '200+', description: 'успешных проектов', color: 'from-blue-500 to-blue-600' },
  { icon: TrendingUp, label: '98%', description: 'клиентов остаются на поддержке', color: 'from-green-500 to-green-600' },
  { icon: Star, label: '280%', description: 'средний ROI', color: 'from-purple-500 to-purple-600' },
  { icon: Award, label: '12 лет', description: 'опыта на рынке', color: 'from-orange-500 to-orange-600' }
];

const certificates = [
  { name: 'Официальный партнер 1С', icon: Shield, color: 'from-blue-500 to-blue-600' },
  { name: 'Сертифицированный разработчик', icon: CheckCircle, color: 'from-green-500 to-green-600' },
  { name: 'Лицензированный интегратор', icon: Zap, color: 'from-purple-500 to-purple-600' }
];

export default function SocialProof() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
            <Award className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-900">Доверие клиентов</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Нам доверяют{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              лидеры рынка СЗФО
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            За 12 лет работы мы помогли сотням компаний автоматизировать бизнес-процессы. 
            Наши клиенты - это успешные предприятия, которые ценят качество и результат.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Наши клиенты
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{client.logo}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{client.name}</h4>
                  <p className="text-sm text-gray-600">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Сертификаты и лицензии
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{cert.name}</h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-8 w-8 text-yellow-300" />
              <h3 className="text-3xl font-bold">Отзыв от нашего клиента</h3>
            </div>
            <p className="text-xl mb-8 opacity-90">
              "Кайдзен-софт помог нам автоматизировать производство и сократить затраты на 30%. 
              Команда работает профессионально и всегда на связи."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Александр Петров</div>
                <div className="opacity-80">Директор ООО "МеталлПром"</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Готовы стать следующим успешным кейсом?</h3>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Присоединяйтесь к сотням довольных клиентов и получите автоматизацию, которая работает
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Начать проект
              </Button>
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-semibold"
              >
                Обсудить задачу
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Стать следующим успешным кейсом"
        description="Расскажите о вашей задаче, и мы предложим решение"
      />
    </section>
  );
}
