'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitForm, validateField, formatPhoneNumber } from '@/lib/utils/form-validation';
import { ContactFormData } from '@/lib/types/form-types';
import PrivacyPolicyModal from '@/components/ui/privacy-policy-modal';
import { motion } from 'framer-motion';
import {
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Building2,
  User,
  MessageSquare,
  Clock,
  Shield,
  Award,
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  prefilledRole?: string;
  caseStudy?: {
    company: string;
    industry: string;
  };
}

export default function ContactModal({
  isOpen,
  onClose,
  title = 'Получить бесплатный аудит 1С за 3 дня',
  description = 'Оставьте заявку и наш эксперт свяжется с вами в течение 15 минут',
  prefilledRole,
  caseStudy,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    message: '',
    role: prefilledRole || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const nameError = validateField(formData.name, 'name');
    if (nameError) newErrors.name = nameError;

    const emailError = validateField(formData.email, 'email');
    if (emailError) newErrors.email = emailError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    const result = await submitForm(
      {
        ...formData,
        source: title || 'Контактная форма',
      },
      'contact'
    );

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          message: '',
          role: prefilledRole || '',
        });
      }, 3000);
    } else {
      setSubmitError(result.error || 'Произошла ошибка при отправке формы');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
            <p className="text-gray-600 mb-4">Наш эксперт свяжется с вами в течение 15 минут</p>
            <div className="text-sm text-gray-500">Автоматическое закрытие через 3 секунды...</div>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 pr-8">{title}</DialogTitle>
          <DialogDescription className="text-gray-600 text-base">{description}</DialogDescription>
        </DialogHeader>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
          <div className="text-center">
            <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
            <div className="text-xs text-gray-600">Ответ за 15 мин</div>
          </div>
          <div className="text-center">
            <Shield className="h-5 w-5 text-green-600 mx-auto mb-1" />
            <div className="text-xs text-gray-600">Конфиденциально</div>
          </div>
          <div className="text-center">
            <Award className="h-5 w-5 text-purple-600 mx-auto mb-1" />
            <div className="text-xs text-gray-600">Партнер 1С</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                Имя *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Ваше имя"
                  className="pl-10 h-11 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Телефон *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', formatPhoneNumber(e.target.value))}
                  placeholder="+7 (___) ___-__-__"
                  className={`h-12 text-base border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="pl-10 h-11 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                Компания *
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Название компании"
                  className="pl-10 h-11 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                  required
                />
              </div>
            </div>
          </div>

          {prefilledRole && (
            <div>
              <Label htmlFor="role" className="text-sm font-medium text-gray-700 mb-2 block">
                Ваша роль
              </Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                placeholder="Должность"
                className="h-11 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
              />
            </div>
          )}

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
              Опишите вашу задачу
            </Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Расскажите о ваших проблемах с 1С или задачах автоматизации..."
                className="pl-10 min-h-[100px] border-2 border-gray-200 focus:border-blue-500 rounded-lg resize-none"
                rows={4}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.name ||
                !formData.phone ||
                !formData.email ||
                !formData.company
              }
              className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Отправляем...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Получить аудит бесплатно
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="sm:w-auto h-12 border-2 border-gray-300 hover:border-gray-400"
            >
              Отмена
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <button
              type="button"
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              политикой конфиденциальности
            </button>
          </div>
        </form>
      </DialogContent>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </Dialog>
  );
}
