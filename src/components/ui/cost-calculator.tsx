'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  Building2,
  Users,
  Warehouse,
  Server,
  FileText,
  Zap,
  DollarSign,
  Clock,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    title: 'Отрасль деятельности',
    subtitle: 'Выберите основное направление вашего бизнеса',
    type: 'radio',
    options: [
      {
        value: 'production',
        label: 'Производство',
        icon: Building2,
        color: 'from-blue-500 to-blue-600',
      },
      { value: 'trade', label: 'Торговля', icon: Warehouse, color: 'from-green-500 to-green-600' },
      {
        value: 'services',
        label: 'Услуги',
        icon: FileText,
        color: 'from-purple-500 to-purple-600',
      },
      {
        value: 'mixed',
        label: 'Смешанная',
        icon: TrendingUp,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
  {
    id: 2,
    title: 'Количество сотрудников',
    subtitle: 'Сколько человек работает в вашей компании?',
    type: 'radio',
    options: [
      { value: '1-10', label: '1-10 человек', icon: Users, color: 'from-blue-500 to-blue-600' },
      { value: '11-50', label: '11-50 человек', icon: Users, color: 'from-green-500 to-green-600' },
      {
        value: '51-200',
        label: '51-200 человек',
        icon: Users,
        color: 'from-purple-500 to-purple-600',
      },
      { value: '200+', label: '200+ человек', icon: Users, color: 'from-orange-500 to-orange-600' },
    ],
  },
  {
    id: 3,
    title: 'Количество складов/точек продаж',
    subtitle: 'Сколько у вас складов или торговых точек?',
    type: 'radio',
    options: [
      { value: '1', label: '1 точка', icon: Warehouse, color: 'from-blue-500 to-blue-600' },
      { value: '2-5', label: '2-5 точек', icon: Warehouse, color: 'from-green-500 to-green-600' },
      {
        value: '6-20',
        label: '6-20 точек',
        icon: Warehouse,
        color: 'from-purple-500 to-purple-600',
      },
      { value: '20+', label: '20+ точек', icon: Warehouse, color: 'from-orange-500 to-orange-600' },
    ],
  },
  {
    id: 4,
    title: 'Текущая система 1С',
    subtitle: 'Какая конфигурация 1С у вас уже установлена?',
    type: 'radio',
    options: [
      { value: 'none', label: 'Нет 1С', icon: Server, color: 'from-red-500 to-red-600' },
      {
        value: 'basic',
        label: 'Базовая версия',
        icon: Server,
        color: 'from-yellow-500 to-yellow-600',
      },
      {
        value: 'standard',
        label: 'Стандартная',
        icon: Server,
        color: 'from-green-500 to-green-600',
      },
      {
        value: 'enterprise',
        label: 'Предприятие',
        icon: Server,
        color: 'from-blue-500 to-blue-600',
      },
    ],
  },
  {
    id: 5,
    title: 'Основные проблемы',
    subtitle: 'Выберите проблемы, которые вас беспокоят',
    type: 'checkbox',
    options: [
      {
        value: 'accounting',
        label: 'Проблемы с бухгалтерией',
        icon: FileText,
        color: 'from-red-500 to-red-600',
      },
      {
        value: 'production',
        label: 'Неэффективное производство',
        icon: Building2,
        color: 'from-orange-500 to-orange-600',
      },
      {
        value: 'warehouse',
        label: 'Хаос на складах',
        icon: Warehouse,
        color: 'from-yellow-500 to-yellow-600',
      },
      {
        value: 'reports',
        label: 'Неточные отчеты',
        icon: TrendingUp,
        color: 'from-purple-500 to-purple-600',
      },
      {
        value: 'integration',
        label: 'Проблемы с интеграциями',
        icon: Zap,
        color: 'from-blue-500 to-blue-600',
      },
      {
        value: 'performance',
        label: 'Медленная работа системы',
        icon: Clock,
        color: 'from-green-500 to-green-600',
      },
    ],
  },
  {
    id: 6,
    title: 'Ваши контакты',
    subtitle: 'Оставьте контакты для получения точного расчета',
    type: 'form',
  },
];

const calculateCost = (answers: any) => {
  let baseCost = 0;

  // Базовая стоимость по отрасли
  switch (answers.industry) {
    case 'production':
      baseCost = 800000;
      break;
    case 'trade':
      baseCost = 500000;
      break;
    case 'services':
      baseCost = 300000;
      break;
    case 'mixed':
      baseCost = 600000;
      break;
    default:
      baseCost = 500000;
  }

  // Множитель по количеству сотрудников
  switch (answers.employees) {
    case '1-10':
      baseCost *= 0.8;
      break;
    case '11-50':
      baseCost *= 1.0;
      break;
    case '51-200':
      baseCost *= 1.3;
      break;
    case '200+':
      baseCost *= 1.6;
      break;
  }

  // Множитель по количеству точек
  switch (answers.locations) {
    case '1':
      baseCost *= 0.9;
      break;
    case '2-5':
      baseCost *= 1.0;
      break;
    case '6-20':
      baseCost *= 1.2;
      break;
    case '20+':
      baseCost *= 1.4;
      break;
  }

  // Множитель по текущей системе
  switch (answers.currentSystem) {
    case 'none':
      baseCost *= 1.2;
      break;
    case 'basic':
      baseCost *= 1.1;
      break;
    case 'standard':
      baseCost *= 1.0;
      break;
    case 'enterprise':
      baseCost *= 0.9;
      break;
  }

  // Дополнительная стоимость за проблемы
  if (answers.problems) {
    baseCost += answers.problems.length * 50000;
  }

  return {
    min: Math.round(baseCost * 0.8),
    max: Math.round(baseCost * 1.2),
  };
};

export default function CostCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<any>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const progress = (currentStep / questions.length) * 100;

  const handleAnswer = (questionId: number, value: any) => {
    const fieldName = getFieldName(questionId);
    setAnswers((prev: any) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const getFieldName = (questionId: number) => {
    const fieldNames = ['industry', 'employees', 'locations', 'currentSystem', 'problems'];
    return fieldNames[questionId - 1] || 'unknown';
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const cost = calculateCost(answers);
    console.log('Расчет стоимости:', cost);
    // Здесь будет отправка данных на сервер
  };

  const currentQuestion = questions[currentStep - 1];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
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
            <Calculator className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Калькулятор стоимости</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Узнайте примерную стоимость{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              автоматизации за 2 минуты
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ответьте на несколько вопросов и получите персональный расчет стоимости проекта.
            Результат придет на вашу почту в течение 15 минут.
          </p>
        </motion.div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">
                Шаг {currentStep} из {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Question Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            {/* Question Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{currentQuestion.title}</h3>
              <p className="text-gray-600 text-lg">{currentQuestion.subtitle}</p>
            </div>

            {/* Question Content */}
            <div className="mb-8">
              {currentQuestion.type === 'radio' && currentQuestion.options && (
                <RadioGroup
                  value={answers[getFieldName(currentStep)]}
                  onValueChange={(value) => handleAnswer(currentStep, value)}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {currentQuestion.options.map((option: any, index: number) => (
                    <div key={index} className="relative">
                      <RadioGroupItem
                        value={option.value}
                        id={`option-${index}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-lg"
                        onClick={() => handleAnswer(currentStep, option.value)}
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} text-white flex items-center justify-center mb-4`}
                        >
                          <option.icon className="h-8 w-8" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900 text-center">
                          {option.label}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === 'checkbox' && currentQuestion.options && (
                <div className="grid gap-4 md:grid-cols-2">
                  {currentQuestion.options.map((option: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    >
                      <Checkbox
                        id={`checkbox-${index}`}
                        checked={answers.problems?.includes(option.value) || false}
                        onCheckedChange={(checked) => {
                          const currentProblems = answers.problems || [];
                          if (checked) {
                            handleAnswer(currentStep, [...currentProblems, option.value]);
                          } else {
                            handleAnswer(
                              currentStep,
                              currentProblems.filter((p: string) => p !== option.value)
                            );
                          }
                        }}
                        className="mt-1"
                      />
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-r ${option.color} text-white flex items-center justify-center`}
                        >
                          <option.icon className="h-5 w-5" />
                        </div>
                        <Label
                          htmlFor={`checkbox-${index}`}
                          className="text-base font-medium text-gray-900 cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'form' && (
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
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
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="your@email.com"
                        className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-base font-medium text-gray-700 mb-2 block"
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
                        className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-base font-medium text-gray-700 mb-2 block"
                      >
                        Компания *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, company: e.target.value }))
                        }
                        placeholder="Название компании"
                        className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад
              </Button>

              {currentStep < questions.length ? (
                <Button
                  onClick={handleNext}
                  disabled={!answers[getFieldName(currentStep)]}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Далее
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={
                    !formData.name || !formData.email || !formData.phone || !formData.company
                  }
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  Получить расчет
                </Button>
              )}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Быстрый расчет</h4>
              <p className="text-gray-600">Получите результат за 2 минуты</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Точная оценка</h4>
              <p className="text-gray-600">Учитываем все особенности вашего бизнеса</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Без обязательств</h4>
              <p className="text-gray-600">Расчет предоставляется бесплатно</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
