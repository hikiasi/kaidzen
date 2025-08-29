import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Внедрение и автоматизация 1С | Кайдзен-софт - Официальный партнер 1С',
  description: 'Профессиональное внедрение, доработка и обслуживание 1С. Более 12 лет опыта, 200+ успешных проектов. Бесплатный аудит за 3 дня. ☎️ +7 (4012) 520-073',
  keywords: [
    'внедрение 1С',
    '1С предприятие',
    'автоматизация бизнеса',
    'доработка 1С',
    'обслуживание 1С',
    'партнер 1С',
    'Калининград',
    'Кайдзен-софт',
    'консультации 1С',
    'обучение 1С'
  ],
  authors: [{ name: 'Кайдзен-софт' }],
  creator: 'Кайдзен-софт',
  publisher: 'Кайдзен-софт',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://kaizen-soft.com',
    siteName: 'Кайдзен-софт',
    title: 'Внедрение и автоматизация 1С | Кайдзен-софт',
    description: 'Профессиональное внедрение, доработка и обслуживание 1С. Более 12 лет опыта, 200+ успешных проектов. Бесплатный аудит за 3 дня.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Кайдзен-софт - Внедрение 1С',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Внедрение и автоматизация 1С | Кайдзен-софт',
    description: 'Профессиональное внедрение, доработка и обслуживание 1С. Более 12 лет опыта, 200+ успешных проектов.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://kaizen-soft.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
