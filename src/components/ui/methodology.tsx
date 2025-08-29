'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { motion } from 'framer-motion';
import {
    Search,
    Lightbulb,
    Rocket,
    TrendingUp,
    ArrowRight,
    CheckCircle,
    Clock,
    Users
} from 'lucide-react';

const methodologySteps = [
  {
    step: '01',
    title: 'Диагностика',
    subtitle: '5-7 дней',
    description: 'Не выставляем счет за часы, пока не поймем корень проблемы',
    details: [
      'Аудит текущих процессов',
      'Анализ проблемных зон',
      'Выявление узких мест',
      'Оценка рисков'
    ],
    icon: Search,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    step: '02',
    title: 'Архитектура решения',
    subtitle: '2-3 недели',
    description: 'Проектируем не "коробочное внедрение", а систему под ваш бизнес',
    details: [
      'Проектирование архитектуры',
      'Выбор оптимальных решений',
      'Планирование интеграций',
      'Техническое задание'
    ],
    icon: Lightbulb,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    step: '03',
    title: 'Внедрение + обучение',
    subtitle: '2-6 месяцев',
    description: 'Добиваемся, чтобы сотрудники реально работали в системе, а не саботировали',
    details: [
      'Поэтапное внедрение',
      'Обучение персонала',
      'Тестирование процессов',
      'Доработка под потребности'
    ],
    icon: Rocket,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    step: '04',
    title: 'Развитие',
    subtitle: 'Постоянно',
    description: 'Не исчезаем после запуска. Развиваем систему вместе с ростом бизнеса',
    details: [
      'Техническая поддержка',
      'Развитие функционала',
      'Масштабирование системы',
      'Оптимизация процессов'
    ],
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  }
];

export default function Methodology() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200 mb-6">
            <Lightbulb className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Наш подход</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Почему другие не справляются, а мы{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              добиваемся результата
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Наш подход: непрерывное улучшение + погружение в бизнес. 
            Мы не просто программируем - мы решаем бизнес-задачи.
          </p>
        </motion.div>

        {/* Methodology Steps */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4 mb-16">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`relative h-full ${step.bgColor} rounded-2xl p-8 border-2 ${step.borderColor} hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Clock className="h-4 w-4" />
                      <span>{step.subtitle}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden xl:block relative mb-16">
          <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 transform -translate-y-1/2 animate-pulse opacity-30"></div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-8 w-8 text-blue-200" />
              <h3 className="text-3xl font-bold">Готовы начать с диагностики?</h3>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатный аудит вашей 1С и узнайте, какие проблемы мешают бизнесу расти
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Начать с диагностики бесплатно
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Начать с диагностики бесплатно"
        description="Получите бесплатный аудит вашей 1С и узнайте точки роста"
      />
    </section>
  );
}
