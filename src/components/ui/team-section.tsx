'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Building2,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Александр Петров',
    position: 'CEO & Основатель',
    experience: '15+ лет в 1С',
    specialization: 'Стратегия развития, ключевые клиенты',
    achievements: [
      'Основал компанию в 2012 году',
      '200+ успешных проектов',
      'Эксперт по ERP системам',
    ],
    avatar: '👨‍💼',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    name: 'Мария Сидорова',
    position: 'Технический директор',
    experience: '12+ лет в разработке',
    specialization: 'Архитектура решений, интеграции',
    achievements: [
      'Сертифицированный разработчик 1С',
      'Эксперт по интеграциям',
      '50+ сложных проектов',
    ],
    avatar: '👩‍💻',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    name: 'Дмитрий Козлов',
    position: 'Руководитель проектов',
    experience: '10+ лет в автоматизации',
    specialization: 'Управление проектами, внедрение',
    achievements: ['PMP сертификация', '100+ внедрений', 'Эксперт по методологии'],
    avatar: '👨‍💼',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    name: 'Елена Волкова',
    position: 'Ведущий аналитик',
    experience: '8+ лет в аналитике',
    specialization: 'Бизнес-процессы, требования',
    achievements: [
      'Сертификация по аналитике',
      '80+ проанализированных процессов',
      'Эксперт по оптимизации',
    ],
    avatar: '👩‍💼',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

const companyStats = [
  { icon: Users, label: '25+', description: 'специалистов', color: 'from-blue-500 to-blue-600' },
  { icon: Award, label: '12 лет', description: 'на рынке', color: 'from-green-500 to-green-600' },
  {
    icon: CheckCircle,
    label: '200+',
    description: 'проектов',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    label: '98%',
    description: 'довольных клиентов',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function TeamSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
            <Users className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-900">Наша команда</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Команда{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              профессионалов
            </span>{' '}
            с опытом 12+ лет
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы собрали лучших специалистов по 1С в СЗФО. Каждый член команды - эксперт в своей
            области с многолетним опытом решения сложных бизнес-задач.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`relative h-full ${member.bgColor} rounded-2xl p-8 border-2 ${member.borderColor} hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-700 mb-2">
                    {member.position}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">{member.experience}</div>
                </div>

                {/* Specialization */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Специализация:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.specialization}</p>
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Достижения:</h4>
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Button */}
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full bg-gradient-to-r ${member.color} hover:from-gray-700 hover:to-gray-800 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200`}
                >
                  Связаться
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3 mb-16"
        >
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Надежность</h4>
            <p className="text-gray-600">Каждый проект - это долгосрочное партнерство</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Инновации</h4>
            <p className="text-gray-600">Используем передовые технологии и подходы</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Результат</h4>
            <p className="text-gray-600">Фокусируемся на измеримых бизнес-результатах</p>
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-8 w-8 text-blue-200" />
              <h3 className="text-3xl font-bold">Готовы работать с профессионалами?</h3>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Наша команда готова взяться за ваш проект и довести его до успешного завершения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                Обсудить проект
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
              >
                Познакомиться с командой
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Работа с командой профессионалов"
        description="Расскажите о вашем проекте, и мы подберем подходящих специалистов"
      />
    </section>
  );
}
