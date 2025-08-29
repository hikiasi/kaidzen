import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schemas
const contactFormSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  phone: z.string().min(10, 'Некорректный номер телефона').optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  message: z.string().optional(),
  role: z.string().optional(),
  source: z.string().optional(), // Источник заявки (hero, case-study, etc.)
});

const leadMagnetSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  position: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(['checklist', 'webinar']),
});

const calculatorSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  phone: z.string().min(10, 'Некорректный номер телефона'),
  company: z.string().min(2, 'Название компании обязательно'),
  answers: z.array(z.any()),
  estimatedCost: z.number(),
});

// Email template function
function generateEmailTemplate(data: any, type: string) {
  const currentDate = new Date().toLocaleString('ru-RU');

  switch (type) {
    case 'contact':
      return `
        <h2>Новая заявка с сайта Кайдзен-софт</h2>
        <p><strong>Дата:</strong> ${currentDate}</p>
        <p><strong>Источник:</strong> ${data.source || 'Контактная форма'}</p>
        
        <h3>Контактные данные:</h3>
        <ul>
          <li><strong>Имя:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          ${data.phone ? `<li><strong>Телефон:</strong> ${data.phone}</li>` : ''}
          ${data.company ? `<li><strong>Компания:</strong> ${data.company}</li>` : ''}
          ${data.position ? `<li><strong>Должность:</strong> ${data.position}</li>` : ''}
          ${data.role ? `<li><strong>Роль:</strong> ${data.role}</li>` : ''}
        </ul>
        
        ${
          data.message
            ? `
          <h3>Сообщение:</h3>
          <p>${data.message}</p>
        `
            : ''
        }
        
        <hr>
        <p><small>Заявка отправлена с сайта kaizen-soft.com</small></p>
      `;

    case 'lead-magnet':
      return `
        <h2>Новая заявка на лид-магнит</h2>
        <p><strong>Дата:</strong> ${currentDate}</p>
        <p><strong>Тип материала:</strong> ${data.type === 'checklist' ? 'Чек-лист' : 'Вебинар'}</p>
        
        <h3>Контактные данные:</h3>
        <ul>
          <li><strong>Имя:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          ${data.position ? `<li><strong>Должность:</strong> ${data.position}</li>` : ''}
          ${data.company ? `<li><strong>Компания:</strong> ${data.company}</li>` : ''}
        </ul>
        
        <p><strong>Действие:</strong> Отправить материал на email клиента</p>
        
        <hr>
        <p><small>Заявка отправлена с сайта kaizen-soft.com</small></p>
      `;

    case 'calculator':
      return `
        <h2>Новый расчет стоимости проекта</h2>
        <p><strong>Дата:</strong> ${currentDate}</p>
        <p><strong>Предварительная стоимость:</strong> ${data.estimatedCost.toLocaleString('ru-RU')} руб.</p>
        
        <h3>Контактные данные:</h3>
        <ul>
          <li><strong>Имя:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Телефон:</strong> ${data.phone}</li>
          <li><strong>Компания:</strong> ${data.company}</li>
        </ul>
        
        <h3>Ответы на вопросы:</h3>
        <ol>
          ${data.answers
            .map(
              (answer: any, index: number) =>
                `<li>${answer.question}: <strong>${answer.answer}</strong></li>`
            )
            .join('')}
        </ol>
        
        <p><strong>Действие:</strong> Связаться с клиентом для уточнения деталей проекта</p>
        
        <hr>
        <p><small>Заявка отправлена с сайта kaizen-soft.com</small></p>
      `;

    default:
      return `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Дата:</strong> ${currentDate}</p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
  }
}

// Mock email sending function (replace with actual email service)
async function sendEmail(to: string, subject: string, html: string) {
  // In production, integrate with email service like:
  // - Nodemailer with SMTP
  // - SendGrid
  // - AWS SES
  // - Resend

  console.log('Email would be sent to:', to);
  console.log('Subject:', subject);
  console.log('HTML:', html);

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, messageId: `mock-${Date.now()}` };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...data } = body;

    let validatedData;
    let emailSubject;
    let emailHtml;

    // Validate based on form type
    switch (type) {
      case 'contact':
        validatedData = contactFormSchema.parse(data);
        emailSubject = `Новая заявка: ${validatedData.name} (${validatedData.source || 'Контактная форма'})`;
        emailHtml = generateEmailTemplate(validatedData, 'contact');
        break;

      case 'lead-magnet':
        validatedData = leadMagnetSchema.parse(data);
        emailSubject = `Заявка на ${validatedData.type === 'checklist' ? 'чек-лист' : 'вебинар'}: ${validatedData.name}`;
        emailHtml = generateEmailTemplate(validatedData, 'lead-magnet');
        break;

      case 'calculator':
        validatedData = calculatorSchema.parse(data);
        emailSubject = `Расчет стоимости: ${validatedData.name} (${validatedData.estimatedCost.toLocaleString('ru-RU')} руб.)`;
        emailHtml = generateEmailTemplate(validatedData, 'calculator');
        break;

      default:
        return NextResponse.json({ error: 'Неизвестный тип формы' }, { status: 400 });
    }

    // Send email notification
    const emailResult = await sendEmail('mrlusiusi@yandex.ru', emailSubject, emailHtml);

    if (!emailResult.success) {
      throw new Error('Ошибка отправки email');
    }

    // Log successful submission (in production, save to database)
    console.log('Form submission successful:', {
      type,
      email: validatedData.email,
      timestamp: new Date().toISOString(),
      messageId: emailResult.messageId,
    });

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена',
      messageId: emailResult.messageId,
    });
  } catch (error) {
    console.error('Form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Ошибка валидации данных',
          details: error.issues.map((err: any) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'contact-api',
  });
}
