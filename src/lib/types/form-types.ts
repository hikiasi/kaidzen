// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
  message?: string;
  role?: string;
}

// Lead magnet form types
export interface LeadMagnetFormData {
  name: string;
  email: string;
  position?: string;
  company?: string;
  type: 'checklist' | 'webinar';
}

// Calculator form types
export interface CalculatorFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  answers: CalculatorAnswer[];
  estimatedCost: number;
}

export interface CalculatorAnswer {
  question: string;
  answer: string;
  value?: number;
}

// Exit intent form types
export interface ExitIntentFormData {
  name: string;
  email: string;
  phone: string;
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
}

// Form submission result
export interface FormSubmissionResult {
  success: boolean;
  error?: string;
  data?: any;
}

// Form field validation result
export interface FieldValidationResult {
  isValid: boolean;
  error?: string;
}
