# Кайдзен-софт - Лендинг страница

Современный лендинг для компании Кайдзен-софт, специализирующейся на внедрении и автоматизации 1С.

## 🚀 Особенности

- **Современный дизайн** с анимациями и интерактивными элементами
- **Адаптивная верстка** для всех устройств
- **SEO оптимизация** с мета-тегами и структурированными данными
- **Формы обратной связи** с валидацией и API интеграцией
- **Плавающие CTA элементы** и exit-intent модальные окна
- **Политика конфиденциальности** и GDPR соответствие

## 🛠 Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - утилитарный CSS фреймворк
- **Framer Motion** - библиотека анимаций
- **Lucide React** - иконки
- **Zod** - валидация схем

## 📋 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API маршруты
│   │   └── contact/       # Обработка форм
│   ├── layout.tsx         # Корневой layout с SEO
│   ├── page.tsx           # Главная страница
│   ├── globals.css        # Глобальные стили
│   ├── sitemap.ts         # Карта сайта
│   └── robots.ts          # Robots.txt
├── components/ui/         # UI компоненты
│   ├── hero-section.tsx           # Главная секция
│   ├── audience-segmentation.tsx  # Сегментация аудитории
│   ├── case-studies.tsx           # Кейсы клиентов
│   ├── methodology.tsx            # Методология
│   ├── cost-calculator.tsx        # Калькулятор стоимости
│   ├── social-proof.tsx           # Социальные доказательства
│   ├── services-section.tsx       # Услуги
│   ├── lead-magnet.tsx            # Лид-магнит
│   ├── team-section.tsx           # Команда
│   ├── faq-section.tsx            # FAQ
│   ├── final-cta.tsx              # Финальный CTA
│   ├── contact-modal.tsx          # Модальное окно контактов
│   ├── floating-cta.tsx           # Плавающий CTA
│   ├── exit-intent-modal.tsx      # Exit-intent модальное окно
│   ├── privacy-policy-modal.tsx   # Политика конфиденциальности
│   └── footer.tsx                 # Подвал
├── lib/
│   ├── utils/
│   │   └── form-validation.ts     # Валидация форм
│   └── types/
│       └── form-types.ts          # Типы форм
└── components/
    └── structured-data.tsx        # Schema.org разметка
```

## 🎯 Реализованные секции

- [x] **Hero Section** - Главная секция с анимированным фоном
- [x] **Audience Segmentation** - Сегментация целевой аудитории
- [x] **Case Studies** - Кейсы успешных проектов
- [x] **Methodology** - Методология Кайдзен
- [x] **Cost Calculator** - Интерактивный калькулятор стоимости
- [x] **Social Proof** - Логотипы клиентов и сертификаты
- [x] **Services Section** - Описание услуг
- [x] **Lead Magnet** - Чек-лист и вебинар
- [x] **Team Section** - Команда экспертов
- [x] **FAQ Section** - Часто задаваемые вопросы
- [x] **Final CTA** - Финальный призыв к действию
- [x] **Footer** - Подвал с контактами
- [x] **Floating CTA** - Плавающая панель
- [x] **Exit Intent Modal** - Модальное окно при попытке закрыть страницу

## 🔧 Установка и запуск

1. **Клонируйте репозиторий:**
```bash
git clone <repository-url>
cd kaizen-soft-landing
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Настройте переменные окружения:**
```bash
cp .env.example .env.local
```

4. **Запустите проект в режиме разработки:**
```bash
npm run dev
```

5. **Откройте в браузере:**
```
http://localhost:3000
```

## 📧 Настройка email

Для работы форм обратной связи настройте SMTP в `.env.local`:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
CONTACT_EMAIL=mrlusiusi@yandex.ru
```

## 🚀 Деплой

### Vercel (рекомендуется)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Загрузите папку .next на Netlify
```

## 📊 SEO оптимизация

- ✅ Мета-теги и Open Graph
- ✅ Структурированные данные Schema.org
- ✅ Карта сайта (sitemap.xml)
- ✅ Robots.txt
- ✅ Семантическая HTML разметка
- ✅ Оптимизация изображений

## 🎨 Кастомизация

### Цвета и стили
Основные цвета настраиваются в `tailwind.config.js` и `globals.css`.

### Контент
Статический контент находится в компонентах. Для динамического контента создайте файл `lib/constants/content.ts`.

### Анимации
Анимации настраиваются через Framer Motion в каждом компоненте.

## 📱 Адаптивность

Проект полностью адаптивен для:
- 📱 Мобильные устройства (320px+)
- 📱 Планшеты (768px+)
- 💻 Десктоп (1024px+)
- 🖥 Широкие экраны (1440px+)

## 🔒 Безопасность

- Валидация форм на клиенте и сервере
- Защита от XSS атак
- CSRF защита
- Политика конфиденциальности
- GDPR соответствие

## 📈 Аналитика

Для подключения аналитики добавьте в `layout.tsx`:
- Google Analytics
- Яндекс.Метрика
- Facebook Pixel

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Внесите изменения
4. Создайте Pull Request

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE)

## 📞 Контакты

- **Email**: mrlusiusi@yandex.ru
- **Телефон**: +7 (4012) 520-073
- **Сайт**: https://kaizen-soft.com

---

Разработано с ❤️ для Кайдзен-софт
