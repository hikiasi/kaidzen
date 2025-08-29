'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { motion } from 'framer-motion';
import {
    Building2,
    Warehouse,
    FileText,
    Zap,
    Shield,
    ArrowRight,
    CheckCircle,
    Clock,
    Users,
    TrendingUp,
    DollarSign
} from 'lucide-react';

const services = [
  {
    title: 'Полный контроль производства',
    subtitle: '1С:ERP',
    description: 'Автоматизация всех процессов производства от планирования до отгрузки готовой продукции',
    features: [
      'Планирование производства',
      'Учет себестоимости',
      'Загрузка оборудования',
      'Контроль качества',
      'Аналитика KPI'
    ],
    price: 'от 800 тыс руб',
    duration: '3-6 месяцев',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    title: 'Прозрачная торговля',
    subtitle: 'Управление торговлей',
    description: 'Автоматизация оптовой и розничной торговли с интеграцией складов и точек продаж',
    features: [
      'Управление закупками',
      'Складской учет',
      'Продажи и CRM',
      'Аналитика продаж',
      'Интеграция с сайтом'
    ],
    price: 'от 500 тыс руб',
    duration: '2-4 месяца',
    icon: Warehouse,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    title: 'Документооборот без бумаг',
    subtitle: '1С:Документооборот',
    description: 'Электронный документооборот с автоматизацией согласований и архивом документов',
    features: [
      'Электронные согласования',
      'Архив документов',
      'Быстрый поиск',
      'Контроль сроков',
      'Интеграция с 1С'
    ],
    price: 'от 300 тыс руб',
    duration: '1-3 месяца',
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    title: 'Интеграция всех систем',
    subtitle: 'API и интеграции',
    description: 'Связываем 1С с сайтами, CRM, банками и другими внешними системами',
    features: [
      'Интеграция с сайтом',
      'Подключение CRM',
      'Банковские интеграции',
      'Госуслуги и ЭДО',
      'Мобильные приложения'
    ],
    price: 'от 200 тыс руб',
    duration: '1-2 месяца',
    icon: Zap,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    title: 'Техподдержка 24/7',
    subtitle: 'Абонемент на спокойствие',
    description: 'Полная техническая поддержка с мониторингом и обновлениями системы',
    features: [
      'Мониторинг 24/7',
      'Автоматические обновления',
      'Консультации экспертов',
      'Резервное копирование',
      'Восстановление данных'
    ],
    price: 'от 25 тыс руб/мес',
    duration: 'Постоянно',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  }
];

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200 mb-6">
            <Zap className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Наши услуги</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Что конкретно мы{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              автоматизируем
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы не просто "внедряем 1С" - мы решаем конкретные бизнес-задачи. 
            Каждый проект - это результат, который вы можете измерить в деньгах.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`relative h-full ${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-700 mb-3">
                      {service.subtitle}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Duration */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-600">Стоимость</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.duration}</div>
                      <div className="text-sm text-gray-600">Срок</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleServiceClick(service.title)}
                    className={`w-full bg-gradient-to-r ${service.color} hover:from-gray-700 hover:to-gray-800 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group-hover:scale-105`}
                  >
                    Обсудить проект
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Почему выбирают нас
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Быстрый результат</h4>
              <p className="text-gray-600">Первый результат уже через 2-4 недели</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Измеримый результат</h4>
              <p className="text-gray-600">Каждый проект окупается за 6-12 месяцев</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Команда экспертов</h4>
              <p className="text-gray-600">12 лет опыта и 200+ успешных проектов</p>
            </div>
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="h-8 w-8 text-green-300" />
              <h3 className="text-3xl font-bold">Получить коммерческое предложение</h3>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Оставьте заявку и получите персональное предложение с точной стоимостью и сроками
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleServiceClick('Коммерческое предложение')}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                Получить предложение
              </Button>
              <Button 
                onClick={() => handleServiceClick('Обсуждение проекта')}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Обсудить проект"
        description={`Расскажите о вашей задаче по направлению: ${selectedService}`}
        prefilledRole={selectedService}
      />
    </section>
  );
}
