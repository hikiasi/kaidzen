'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import CaseStudyModal from '@/components/ui/case-study-modal';
import { motion } from 'framer-motion';
import {
    TrendingUp, ArrowRight,
    Play,
    Star,
    CheckCircle
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'Velden Carpets',
    industry: 'Производство ковров',
    logo: '🏭',
    problem: 'Складские остатки не соответствовали учетным данным на 2.8 млн руб',
    solution: 'Внедрили систему контроля движения товаров с RFID-метками и автоматизацией процессов',
    results: [
      { metric: 'Расхождения сократились', value: '98%', detail: 'до 50 тыс руб' },
      { metric: 'Скорость обработки', value: 'в 3 раза', detail: 'быстрее' },
      { metric: 'ROI за год', value: '340%', detail: 'от инвестиций' }
    ],
    duration: '4 месяца',
    investment: '2.1 млн руб',
    team: '8 специалистов',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    company: 'Суперцены',
    industry: 'Торговая сеть',
    logo: '🛒',
    problem: 'Ручное распределение товаров на 22 магазина - 8 часов работы ежедневно',
    solution: 'Разработали и внедрили систему автоматического распределения и контроля оплат поставщикам',
    results: [
      { metric: 'Время распределения', value: 'в 16 раз', detail: 'сократилось' },
      { metric: 'Трудозатраты', value: '80%', detail: 'сократились' },
      { metric: 'ROI за год', value: '340%', detail: 'от инвестиций' }
    ],
    duration: '3 месяца',
    investment: '1.8 млн руб',
    team: '6 специалистов',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 3,
    company: 'МеталлПром',
    industry: 'Металлообработка',
    logo: '⚙️',
    problem: 'Не знали реальную себестоимость продукции и убыточные позиции',
    solution: 'Внедрили систему учета затрат и калькуляции себестоимости в реальном времени',
    results: [
      { metric: 'Убыточные позиции', value: '12 млн руб', detail: 'выявили' },
      { metric: 'Точность калькуляции', value: '95%', detail: 'достигли' },
      { metric: 'Экономия за год', value: '8.5 млн руб', detail: 'получили' }
    ],
    duration: '5 месяцев',
    investment: '2.5 млн руб',
    team: '10 специалистов',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  const handleViewCase = (caseStudy: typeof caseStudies[0]) => {
    setSelectedCase(caseStudy);
    setIsCaseModalOpen(true);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <section id="case-studies" className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Кейсы наших клиентов
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-900">Результаты работы</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Мы не обещаем - мы{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              показываем результаты в цифрах
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Каждый проект - это конкретные цифры, реальные результаты и довольные клиенты. 
            Вот что мы смогли сделать для наших партнеров.
          </p>
        </motion.div>

        {/* Case Studies Carousel */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${caseStudy.bgColor} rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
              onClick={() => setActiveCase(index)}
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{caseStudy.logo}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{caseStudy.company}</h3>
                  <p className="text-gray-600">{caseStudy.industry}</p>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Проблема:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{caseStudy.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Решение:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{caseStudy.solution}</p>
              </div>

              {/* Key Results */}
              <div className="space-y-3 mb-6">
                {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold">{result.metric}:</span> {result.value} {result.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-3 gap-4 text-center text-sm mb-6">
                <div>
                  <div className="font-semibold text-gray-800">{caseStudy.duration}</div>
                  <div className="text-gray-600">Срок</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{caseStudy.investment}</div>
                  <div className="text-gray-600">Инвестиции</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{caseStudy.team}</div>
                  <div className="text-gray-600">Команда</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                onClick={() => handleViewCase(caseStudy)}
                className={`w-full bg-gradient-to-r ${caseStudy.color} hover:from-gray-700 hover:to-gray-800 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200`}
              >
                Смотреть полный кейс
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>

              {/* Active Indicator */}
              {activeCase === index && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-8 w-8 text-yellow-300" />
              <h3 className="text-3xl font-bold">Хотите такой же результат?</h3>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Начните с бесплатного аудита вашей 1С и узнайте, сколько денег теряете прямо сейчас
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleContactClick}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <Play className="h-5 w-5 mr-2" />
                Записаться на аудит
              </Button>
              <Button 
                onClick={handleContactClick}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      {selectedCase && (
        <CaseStudyModal
          isOpen={isCaseModalOpen}
          onClose={() => setIsCaseModalOpen(false)}
          caseStudy={selectedCase}
          onContactClick={handleContactClick}
        />
      )}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Получить бесплатный аудит 1С за 3 дня"
        description="Узнайте, как получить такой же результат для вашего бизнеса"
        caseStudy={selectedCase ? { company: selectedCase.company, industry: selectedCase.industry } : undefined}
      />
    </section>
  );
}
