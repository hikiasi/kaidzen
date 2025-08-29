'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { motion } from 'framer-motion';
import {
    HelpCircle,
    ChevronDown,
    ArrowRight,
    CheckCircle,
    Clock,
    Users,
    Shield
} from 'lucide-react';

const faqs = [
  {
    question: 'Сколько времени занимает внедрение 1С?',
    answer: 'Сроки зависят от сложности проекта. Простые внедрения занимают 1-2 месяца, комплексные проекты - 3-6 месяцев. Мы всегда даем точные сроки на этапе планирования.',
    category: 'timing'
  },
  {
    question: 'Какая стоимость внедрения 1С?',
    answer: 'Стоимость зависит от объема работ и конфигурации. Простые внедрения от 300 тыс руб, комплексные проекты от 800 тыс руб. Мы предоставляем детальную смету после анализа требований.',
    category: 'pricing'
  },
  {
    question: 'Вы работаете с существующими системами 1С?',
    answer: 'Да, мы специализируемся на доработке и модернизации существующих систем 1С. Помогаем исправить ошибки, добавить новый функционал и оптимизировать производительность.',
    category: 'technical'
  },
  {
    question: 'Предоставляете ли вы техническую поддержку?',
    answer: 'Да, мы предлагаем различные варианты поддержки: от разовых консультаций до полного абонементного обслуживания 24/7 с мониторингом и автоматическими обновлениями.',
    category: 'support'
  },
  {
    question: 'Можете ли вы интегрировать 1С с другими системами?',
    answer: 'Конечно! Мы интегрируем 1С с сайтами, CRM, банковскими системами, складским оборудованием и другими внешними сервисами. Используем современные API и протоколы обмена данными.',
    category: 'technical'
  },
  {
    question: 'Какие гарантии вы предоставляете?',
    answer: 'Мы предоставляем гарантию на все работы в течение 12 месяцев. Если возникнут проблемы по нашей вине - исправим бесплатно. Также заключаем договор с четкими обязательствами.',
    category: 'guarantees'
  },
  {
    question: 'Работаете ли вы с удаленными клиентами?',
    answer: 'Да, мы успешно работаем с клиентами по всей России. Используем современные инструменты для удаленной работы: видеоконференции, удаленный доступ, облачные решения.',
    category: 'logistics'
  },
  {
    question: 'Можете ли вы обучить наших сотрудников работе с 1С?',
    answer: 'Да, мы проводим обучение персонала работе с внедренными системами. Включаем в проект создание пользовательских инструкций, проведение тренингов и консультации по работе.',
    category: 'training'
  }
];

const categories = [
  { id: 'all', name: 'Все вопросы', icon: HelpCircle, color: 'from-blue-500 to-blue-600' },
  { id: 'timing', name: 'Сроки', icon: Clock, color: 'from-green-500 to-green-600' },
  { id: 'pricing', name: 'Стоимость', icon: Users, color: 'from-purple-500 to-purple-600' },
  { id: 'technical', name: 'Технические', icon: Shield, color: 'from-orange-500 to-orange-600' },
  { id: 'support', name: 'Поддержка', icon: CheckCircle, color: 'from-red-500 to-red-600' }
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Частые вопросы</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Ответы на{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              популярные вопросы
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы собрали ответы на самые частые вопросы наших клиентов. 
            Если не нашли ответ - свяжитесь с нами, и мы ответим лично.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openItems.includes(index) ? 'auto' : 0,
                    opacity: openItems.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="h-8 w-8 text-blue-200" />
              <h3 className="text-3xl font-bold">Не нашли ответ на свой вопрос?</h3>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами, и мы ответим на все ваши вопросы о внедрении 1С
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                Задать вопрос
              </Button>
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Задать вопрос или получить консультацию"
        description="Опишите ваш вопрос, и мы свяжемся с вами для подробной консультации"
      />
    </section>
  );
}
