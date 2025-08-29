import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  phone: z.string().min(10, 'Некорректный номер телефона').optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  message: z.string().optional(),
  role: z.string().optional(),
});

// Lead magnet form validation schema
export const leadMagnetSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  position: z.string().optional(),
  company: z.string().optional(),
});

// Calculator form validation schema
export const calculatorSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  phone: z.string().min(10, 'Некорректный номер телефона'),
  company: z.string().min(2, 'Название компании обязательно'),
});

// Exit intent form validation schema
export const exitIntentSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  phone: z.string().min(10, 'Некорректный номер телефона'),
});

// Form submission function
export async function submitForm(data: any, type: string) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        ...data,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Ошибка отправки формы');
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Неизвестная ошибка' 
    };
  }
}

// Phone number formatting
export function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  
  if (cleaned.startsWith('8')) {
    const withoutFirst = cleaned.slice(1);
    return `+7 ${withoutFirst}`.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2-$3-$4');
  }
  
  if (cleaned.startsWith('7')) {
    return `+${cleaned}`.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3-$4-$5');
  }
  
  return value;
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form field validation
export function validateField(value: string, type: 'name' | 'email' | 'phone' | 'company'): string | null {
  switch (type) {
    case 'name':
      if (!value || value.length < 2) {
        return 'Имя должно содержать минимум 2 символа';
      }
      break;
    case 'email':
      if (!value) {
        return 'Email обязателен';
      }
      if (!isValidEmail(value)) {
        return 'Некорректный email адрес';
      }
      break;
    case 'phone':
      if (!value) {
        return 'Телефон обязателен';
      }
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length < 10) {
        return 'Некорректный номер телефона';
      }
      break;
    case 'company':
      if (!value || value.length < 2) {
        return 'Название компании обязательно';
      }
      break;
  }
  return null;
}
