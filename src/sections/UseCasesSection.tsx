import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import UseCaseCard from '../components/UseCaseCard';
import { BuildingIcon, HomeIcon, ServerIcon, ShoppingBagIcon, Calendar } from 'lucide-react';

const useCases = [
  {
    icon: <BuildingIcon className="w-12 h-12" />,
    title: "Гостиницы и отели",
    description: "QR-коды в номерах для мгновенного обращения в службу поддержки. Быстрое решение проблем с номером, заказ услуг и консьерж-сервис.",
    example: {
      title: "Пример использования в отеле",
      description: "В каждом номере отеля размещен уникальный QR-код, связанный с номером комнаты. Гость, столкнувшись с проблемой, сканирует код и попадает в чат с технической поддержкой.",
      features: [
        "Мгновенная идентификация номера комнаты",
        "Автоматическая маршрутизация запроса нужной службе",
        "Отслеживание времени реакции персонала",
        "Повышение удовлетворенности гостей благодаря быстрому решению проблем"
      ],
      image: "/public/hotel.jpeg"
    }
  },
  {
    icon: <HomeIcon className="w-12 h-12" />,
    title: "ЖКХ и управляющие компании",
    description: "Обработка заявок жильцов, автоматическое создание нарядов на работу, оповещение о плановых работах и авариях.",
    example: {
      title: "Пример использования в ЖКХ",
      description: "Жильцы могут отправлять заявки через QR-код на информационном стенде или через Telegram-бот. Система автоматически создает заявку и направляет её ответственному специалисту.",
      features: [
        "Автоматическое создание заявок",
        "Оповещение о плановых работах",
        "Контроль выполнения заявок",
        "Статистика по типам обращений"
      ],
      image: "/public/apartments.jpg"
    }
  },
  {
    icon: <ServerIcon className="w-12 h-12" />,
    title: "IT-поддержка",
    description: "Оперативная помощь пользователям, автоматизация частых запросов, отслеживание инцидентов и контроль SLA.",
    example: {
      title: "Пример использования в IT",
      description: "Сотрудники компании могут обращаться в техподдержку через Telegram-бот. Система автоматически категоризирует запросы и назначает их специалистам соответствующего профиля.",
      features: [
        "Быстрая маршрутизация запросов",
        "Автоматизация типовых проблем",
        "Контроль SLA по категориям",
        "База знаний для самообслуживания"
      ],
      image: "/public/it.jpeg"
    }
  },
  {
    icon: <ShoppingBagIcon className="w-12 h-12" />,
    title: "Электронная коммерция",
    description: "Обработка запросов клиентов по заказам, возвратам и обменам. Интеграция с CRM для полной истории взаимодействия.",
    example: {
      title: "Пример использования в E-commerce",
      description: "Покупатели могут обращаться в поддержку прямо из карточки заказа. Система автоматически подтягивает информацию о заказе и историю покупок.",
      features: [
        "Быстрый доступ к информации о заказе",
        "Автоматизация возвратов",
        "История взаимодействия с клиентом",
        "Интеграция с CRM-системой"
      ],
      image: "/public/e-commerce.jpg"
    }
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Мероприятия",
    description: "Мгновенная техническая поддержка участников мероприятий через Telegram с автоматической маршрутизацией запросов.",
    example: {
      title: "Пример использования на мероприятиях",
      description: "Участники мероприятия могут обращаться за помощью через QR-код на бейдже. Запросы автоматически распределяются между волонтерами и организаторами.",
      features: [
        "Быстрая помощь участникам",
        "Координация работы волонтеров",
        "Статистика по типам обращений",
        "Обратная связь в реальном времени"
      ],
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
    }
  }
];

const UseCasesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(useCases[0]);

  return (
    <section id="use-cases\" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Применение Support360"
          subtitle="Адаптируется под различные сферы бизнеса и сценарии использования"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedCase(useCase)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <UseCaseCard 
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedCase.example.title}</h3>
              <p className="text-gray-600 mb-6">{selectedCase.example.description}</p>
              <ul className="space-y-3">
                {selectedCase.example.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary-dark relative min-h-[300px]">
              <img 
                src={selectedCase.example.image}
                alt={`Использование Support360 в ${selectedCase.title}`} 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <div>
                      <p className="font-semibold">Support360</p>
                      <p className="text-xs text-gray-600">{selectedCase.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4">Добрый день! Чем я могу вам помочь?</p>
                  <div className="bg-primary/10 p-3 rounded text-primary text-sm">
                    Информация о локации: {selectedCase === useCases[0] ? '305' : 'Определена автоматически'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;