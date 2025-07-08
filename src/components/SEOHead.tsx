import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Support360 — Техподдержка в формате мессенджера | Запуск за 1 день",
  description = "Support360 — современная система техподдержки без сложных форм. Клиенты пишут в чат, получают быстрые ответы. Запуск за 15 минут, без IT-отдела. Попробуйте бесплатно!",
  keywords = "техподдержка, система поддержки клиентов, чат поддержка, helpdesk, CRM, автоматизация поддержки, мессенджер поддержка, Telegram поддержка",
  canonical = "https://support360.ru/",
  ogImage = "https://support360.ru/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;