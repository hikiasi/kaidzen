'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  X,
  TrendingUp,
  Calendar,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Building2,
  Target,
  Zap
} from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    id: number;
    company: string;
    industry: string;
    logo: string;
    problem: string;
    solution: string;
    results: Array<{
      metric: string;
      value: string;
      detail: string;
    }>;
    duration: string;
    investment: string;
    team: string;
    color: string;
    bgColor: string;
    fullDescription?: {
      challenge: string;
      approach: string[];
      implementation: string[];
      outcomes: string[];
      testimonial?: {
        text: string;
        author: string;
        position: string;
      };
    };
  };
  onContactClick: () => void;
}

const fullCaseData = {
  1: {
    challenge: "Российско-бельгийское предприятие Velden Carpets столкнулось с критической проблемой: складские остатки не соответствовали учетным данным на 2.8 млн рублей. Это приводило к срывам поставок, недовольству клиентов и финансовым потерям.",
    approach: [
      "Провели полный аудит складских процессов и выявили 12 критических точек сбоя",
      "Разработали уникальный модуль производства из 4 подсистем",
      "Внедрили систему RFID-меток для отслеживания движения товаров",
      "Создали параметрические спецификации по 3 измерениям расходов материала"
    ],
    implementation: [
      "Настроили автоматическое штрихкодирование изделий в нескольких разрезах",
      "Интегрировали систему с производственным оборудованием",
      "Обучили 25 сотрудников работе с новой системой",
      "Провели 3-месячное сопровождение с еженедельными корректировками"
    ],
    outcomes: [
      "Расхождения в складских остатках сократились с 2.8 млн до 50 тыс руб (98% точности)",
      "Время обработки заказов сократилось в 3 раза",
      "ROI составил 340% за первый год",
      "Полная окупаемость проекта за 8 месяцев"
    ],
    testimonial: {
      text: "Команда Кайдзен-софт не просто внедрила систему, а полностью перестроила наши бизнес-процессы. Теперь мы точно знаем, где находится каждый рулон ковра.",
      author: "Александр Петров",
      position: "Директор по производству, Velden Carpets"
    }
  },
  2: {
    challenge: "Сеть магазинов 'Суперцены' с 22 точками продаж тратила 8 часов ежедневно на ручное распределение товаров. Это приводило к кассовым разрывам и появлению неликвидных остатков.",
    approach: [
      "Проанализировали товарооборот каждого магазина за 2 года",
      "Разработали алгоритм автоматического распределения товаров",
      "Создали 3-уровневую систему контроля оплат поставщикам",
      "Внедрили систему планирования затрат"
    ],
    implementation: [
      "Автоматизировали процесс заказа товаров с центрального склада",
      "Настроили систему ценообразования на товары",
      "Внедрили терминалы сбора данных во всех магазинах",
      "Создали централизованную систему анализа товарооборота"
    ],
    outcomes: [
      "Время распределения товаров сократилось с 8 часов до 30 минут",
      "Трудозатраты на логистику сократились на 80%",
      "Скорость оборачиваемости товара выросла на 17%",
      "ROI составил 340% за год"
    ],
    testimonial: {
      text: "Благодаря автоматизации мы избавились от рутинных операций и можем сосредоточиться на развитии бизнеса. Система окупилась за 6 месяцев.",
      author: "Елена Сидорова",
      position: "Коммерческий директор, Суперцены"
    }
  },
  3: {
    challenge: "Производственная компания МеталлПром не знала реальную себестоимость продукции, что приводило к убыточным сделкам и неэффективному планированию производства.",
    approach: [
      "Провели детальный анализ всех производственных процессов",
      "Разработали систему учета затрат в реальном времени",
      "Создали модуль калькуляции себестоимости по факту",
      "Внедрили систему план-факт анализа"
    ],
    implementation: [
      "Настроили автоматический сбор данных с производственного оборудования",
      "Создали детализированную аналитику по материалам и трудозатратам",
      "Внедрили систему контроля загрузки оборудования",
      "Обучили менеджеров работе с новыми отчетами"
    ],
    outcomes: [
      "Выявили убыточные позиции на сумму 12 млн рублей",
      "Точность калькуляции себестоимости достигла 95%",
      "Экономия за год составила 8.5 млн рублей",
      "Время простоя оборудования сократилось на 25%"
    ],
    testimonial: {
      text: "Теперь мы принимаем решения на основе точных данных, а не интуиции. Это кардинально изменило подход к ценообразованию.",
      author: "Михаил Волков",
      position: "Финансовый директор, МеталлПром"
    }
  }
};

export default function CaseStudyModal({ isOpen, onClose, caseStudy, onContactClick }: CaseStudyModalProps) {
  const fullData = fullCaseData[caseStudy.id as keyof typeof fullCaseData];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{caseStudy.logo}</div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {caseStudy.company}
              </DialogTitle>
              <p className="text-gray-600">{caseStudy.industry}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Overview */}
          <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50 rounded-xl">
            <div className="text-center">
              <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{caseStudy.duration}</div>
              <div className="text-sm text-gray-600">Срок реализации</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{caseStudy.investment}</div>
              <div className="text-sm text-gray-600">Инвестиции</div>
            </div>
            <div className="text-center">
              <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{caseStudy.team}</div>
              <div className="text-sm text-gray-600">Команда</div>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-red-500" />
              <h3 className="text-xl font-bold text-gray-900">Вызов</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{fullData?.challenge || caseStudy.problem}</p>
          </div>

          {/* Approach */}
          {fullData?.approach && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900">Подход к решению</h3>
              </div>
              <div className="space-y-3">
                {fullData.approach.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Implementation */}
          {fullData?.implementation && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">Реализация</h3>
              </div>
              <div className="space-y-3">
                {fullData.implementation.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <h3 className="text-xl font-bold text-gray-900">Результаты</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {(fullData?.outcomes || caseStudy.results.map(r => `${r.metric}: ${r.value} ${r.detail}`)).map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-green-50 rounded-lg border border-green-200"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {fullData?.testimonial && (
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-blue-500">"</div>
                <div>
                  <p className="text-gray-800 italic mb-4 text-lg leading-relaxed">
                    {fullData.testimonial.text}
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{fullData.testimonial.author}</div>
                    <div className="text-gray-600">{fullData.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Хотите такой же результат?</h3>
            <p className="text-lg mb-6 opacity-90">
              Получите бесплатный аудит и узнайте, как мы можем помочь вашему бизнесу
            </p>
            <Button
              onClick={() => {
                onContactClick();
                onClose();
              }}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Получить бесплатный аудит
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
