import React, { useState, useEffect } from 'react';
import Breadcrumbs from './Breadcrumbs';

const BreadcrumbsContainer: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sections = [
      { id: 'home', name: 'Главная' },
      { id: 'use-cases', name: 'Применение' },
      { id: 'features', name: 'Возможности' },
      { id: 'workflow', name: 'Как работает' },
      { id: 'statistics', name: 'Результаты' },
      { id: 'service-history', name: 'История' },
      { id: 'ai-section', name: 'Умный помощник' },
      { id: 'faq', name: 'Вопросы' },
      { id: 'contact', name: 'Контакты' }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id);
            if (section) {
              setCurrentSection(section.id);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getSectionName = (sectionId: string) => {
    const sectionNames: { [key: string]: string } = {
      'home': 'Главная',
      'use-cases': 'Применение',
      'features': 'Возможности',
      'workflow': 'Как работает',
      'statistics': 'Результаты',
      'service-history': 'История',
      'ai-section': 'Умный помощник',
      'faq': 'Вопросы',
      'contact': 'Контакты'
    };
    return sectionNames[sectionId] || 'Главная';
  };

  const breadcrumbItems = [
    { label: 'Главная', href: '#home' }
  ];

  if (currentSection !== 'home') {
    breadcrumbItems.push({
      label: getSectionName(currentSection),
      href: `#${currentSection}`,
      current: true
    });
  }

  // Показываем хлебные крошки только если не на главной странице
  if (currentSection === 'home') {
    return null;
  }

  return (
    <div className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-gray-200">
      <Breadcrumbs items={breadcrumbItems} />
    </div>
  );
};

export default BreadcrumbsContainer;