'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Политика конфиденциальности
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="px-6 pb-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-6 text-sm text-gray-700">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Общие положения</h3>
              <p className="mb-3">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах (далее — «Пользователи»), пользующихся услугами ООО «Кайдзен-софт» (далее — «Компания»).
              </p>
              <p>
                Компания обязуется соблюдать конфиденциальность персональных данных и обеспечивать безопасность персональных данных при их обработке.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Персональные данные</h3>
              <p className="mb-3">
                Под персональными данными понимается любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
              </p>
              <p className="mb-3">Компания обрабатывает следующие персональные данные:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Фамилия, имя, отчество</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Название организации и должность</li>
                <li>Информация о проекте или задаче</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Цели обработки персональных данных</h3>
              <p className="mb-3">Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Предоставление консультационных услуг</li>
                <li>Подготовка коммерческих предложений</li>
                <li>Связь с клиентами по вопросам оказания услуг</li>
                <li>Информирование о новых услугах и предложениях</li>
                <li>Проведение маркетинговых исследований</li>
                <li>Исполнение договорных обязательств</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Правовые основания обработки</h3>
              <p className="mb-3">Обработка персональных данных осуществляется на основании:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Согласия субъекта персональных данных</li>
                <li>Исполнения договора, стороной которого является субъект персональных данных</li>
                <li>Осуществления прав и законных интересов оператора</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Способы обработки персональных данных</h3>
              <p className="mb-3">
                Обработка персональных данных осуществляется как с использованием средств автоматизации, так и без их использования. Компания принимает необходимые правовые, организационные и технические меры для защиты персональных данных.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Передача персональных данных третьим лицам</h3>
              <p className="mb-3">
                Компания не передает персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ, или с согласия субъекта персональных данных.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Сроки обработки персональных данных</h3>
              <p>
                Персональные данные обрабатываются в течение срока, необходимого для достижения целей обработки, если иной срок не предусмотрен договором или законодательством РФ.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Права субъекта персональных данных</h3>
              <p className="mb-3">Субъект персональных данных имеет право:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отзывать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие оператора</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">9. Безопасность персональных данных</h3>
              <p>
                Компания применяет технические и организационные меры для обеспечения безопасности персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">10. Контактная информация</h3>
              <p className="mb-3">
                По вопросам обработки персональных данных можно обращаться:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>ООО «Кайдзен-софт»</strong></p>
                <p>Email: crm@kaizen-soft.com</p>
                <p>Телефон: +7 (4012) 520-073</p>
                <p>Адрес: г. Калининград, ул. М.Косогорная, д. 11</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">11. Изменения в политике конфиденциальности</h3>
              <p>
                Компания оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия размещается на официальном сайте компании.
              </p>
            </section>

            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <p className="text-sm text-blue-800">
                <strong>Дата последнего обновления:</strong> {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
