'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { motion } from 'framer-motion';
import {
  Building2,
  Factory,
  Calculator,
  Server,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const audienceCards = [
  {
    icon: Building2,
    title: 'Владелец бизнеса',
    subtitle: 'Не знаете реальную прибыльность?',
    description: '1С показывает одни цифры, бухгалтерия - другие, а в кассе - третьи',
    painPoints: [
      'Не видите реальную картину бизнеса',
      'Принимаете решения на основе неточных данных',
      'Теряете деньги из-за ошибок в учете',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Factory,
    title: 'Директор по производству',
    subtitle: 'Не понимаете реальную себестоимость?',
    description: 'Планируете загрузку "на глазок", а не по данным системы',
    painPoints: [
      'Не знаете точную себестоимость продукции',
      'Планируете производство интуитивно',
      'Не видите узкие места в процессах',
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Calculator,
    title: 'Финансовый директор',
    subtitle: 'Тратите дни на сведение отчетов в Excel?',
    description: 'Получаете данные с задержкой в неделю',
    painPoints: [
      'Ручное сведение отчетов занимает дни',
      'Данные устаревают до получения',
      'Высокий риск ошибок в расчетах',
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Server,
    title: 'IT-директор',
    subtitle: 'Система постоянно падает?',
    description: 'Интеграции не работают, а прежние подрядчики исчезли',
    painPoints: [
      'Система нестабильна и часто падает',
      'Интеграции работают с перебоями',
      'Нет поддержки от исполнителей',
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

export default function AudienceSegmentation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
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
            <Target className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Целевая аудитория</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Мы решаем боль руководителей,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              которые уже обожглись
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Каждый день вы сталкиваетесь с проблемами, которые мешают бизнесу расти. Мы знаем, как
            их решить, потому что уже помогли сотням компаний.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {audienceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`relative h-full ${card.bgColor} rounded-2xl p-8 border-2 ${card.borderColor} hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {card.title}
                  </h3>

                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-gray-800">{card.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>

                  {/* Pain Points */}
                  <div className="space-y-2">
                    {card.painPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleRoleClick(card.title)}
                    className={`w-full mt-6 bg-gradient-to-r ${card.color} hover:from-gray-700 hover:to-gray-800 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group-hover:scale-105`}
                  >
                    Это про меня - хочу решение
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">Не нашли свою роль?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Расскажите о своей проблеме, и мы предложим индивидуальное решение
            </p>
            <Button
              onClick={() => handleRoleClick('Другая роль')}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Обсудить мою задачу
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Получить бесплатный аудит 1С за 3 дня"
        description="Расскажите о своей проблеме, и наш эксперт предложит индивидуальное решение"
        prefilledRole={selectedRole}
      />
    </section>
  );
}
