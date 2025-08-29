'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ui/contact-modal';
import PrivacyPolicyModal from '@/components/ui/privacy-policy-modal';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  Shield,
  FileText,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const services = [
    'Внедрение 1С',
    'Доработка 1С',
    'Обслуживание 1С',
    'Обучение 1С',
    'Аудит 1С'
  ];

  const quickLinks = [
    { name: 'О компании', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Команда', href: '#team' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Кайдзен-софт</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Превращаем хаос в 1С в управляемую систему. Более 12 лет опыта в автоматизации бизнеса.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Официальный партнер 1С</span>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Услуги</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Навигация</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.name}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <a 
                    href="tel:+74012520073" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +7 (4012) 520-073
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a 
                    href="mailto:crm@kaizen-soft.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    crm@kaizen-soft.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">
                    г. Калининград,<br />ул. М.Косогорная, д. 11
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">пн-пт 09:30-18:00</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Готовы обсудить ваш проект?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Получите бесплатную консультацию и узнайте, как мы можем помочь автоматизировать ваш бизнес
                </p>
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ООО «Кайдзен-софт». Все права защищены.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <FileText className="h-4 w-4" />
                  Политика конфиденциальности
                </button>
                <a
                  href="https://1c.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  1С:Предприятие
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Получить консультацию"
        description="Расскажите о вашей задаче, и мы предложим оптимальное решение"
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </footer>
  );
}
