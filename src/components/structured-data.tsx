'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Кайдзен-софт",
    "alternateName": "Kaizen-soft",
    "url": "https://kaizen-soft.com",
    "logo": "https://kaizen-soft.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-4012-520-073",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": "Russian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Примерная, 123",
      "addressLocality": "Калининград",
      "addressRegion": "Калининградская область",
      "postalCode": "236000",
      "addressCountry": "RU"
    },
    "sameAs": [
      "https://vk.com/kaizen_soft",
      "https://t.me/kaizen_soft"
    ],
    "foundingDate": "2012",
    "numberOfEmployees": "10-50"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Внедрение и автоматизация 1С",
    "description": "Профессиональное внедрение, доработка и обслуживание систем 1С Предприятие",
    "provider": {
      "@type": "Organization",
      "name": "Кайдзен-софт"
    },
    "serviceType": "IT Services",
    "areaServed": {
      "@type": "Country",
      "name": "Russia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги по 1С",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Внедрение 1С",
            "description": "Полное внедрение системы 1С с настройкой под бизнес-процессы"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Доработка 1С",
            "description": "Кастомизация и доработка существующих конфигураций 1С"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Обслуживание 1С",
            "description": "Техническая поддержка и сопровождение систем 1С"
          }
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Кайдзен-софт",
    "image": "https://kaizen-soft.com/logo.png",
    "telephone": "+7-4012-520-073",
    "email": "info@kaizen-soft.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Примерная, 123",
      "addressLocality": "Калининград",
      "addressRegion": "Калининградская область",
      "postalCode": "236000",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.7104",
      "longitude": "20.4522"
    },
    "url": "https://kaizen-soft.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://kaizen-soft.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Услуги",
        "item": "https://kaizen-soft.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "О компании",
        "item": "https://kaizen-soft.com/#about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
