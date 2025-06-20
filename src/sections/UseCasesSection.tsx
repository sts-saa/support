import React, { useState, useEffect  } from 'react';
import SectionTitle from '../components/SectionTitle';
import UseCaseCard from '../components/UseCaseCard';
import { BuildingIcon, HomeIcon, ServerIcon, ShoppingBagIcon, Calendar } from 'lucide-react';

const useCases = [
  {
    icon: <ServerIcon className="w-12 h-12" />,
    title: "IT-поддержка",
    description: "Оперативная помощь пользователям, автоматизация частых запросов, отслеживание инцидентов.",
    example: {
      title: "Пример использования в IT",
      description: "Сотрудники пишут в корпоративный Telegram-бот. Система определяет тип проблемы и направляет системному администратору, программисту или в другую службу.",
      features: [
        "Автоматическое определение типа проблемы: оборудование, программы, доступы",
        "Подключение к корпоративным системам",
        "Быстрая передача срочных проблем руководству"
      ],
      message:"Сотрудник: Петров П.П., Отдел: Бухгалтерия",
      image: "it.jpeg"
    }
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Мероприятия и конференции",
    description: "Координация помощников, навигация, техподдержка — всё в одном чате.",
    example: {
      title: "Пример использования на мероприятиях",
      description: "Участники мероприятия обращаются за помощью через QR-код, который ведёт в персональный чат поддержки. Система знает программу и может помочь с навигацией. Запросы автоматически распределяются между волонтерами и организаторами.",
      features: [
        "Персональная поддержка каждого участника",
        "Координация команды помощников",
        "Навигация по площадке мероприятия",
        "Сбор отзывов в реальном времени"
      ],
      message:"Участник: Козлов К.К., Мероприятие: TechConf2024",
      image: "event.jpg"
    }
  },
  {
    icon: <BuildingIcon className="w-12 h-12" />,
    title: "Гостиницы и отели",
    description: "Гости решают проблемы не выходя из номера, а персонал видит точное местоположение.",
    example: {
      title: "Пример использования в отеле",
      description: "В каждом номере отеля размещен уникальный QR-код. Гость сканирует код и попадает в чат с поддержкой. Система автоматически определяет номер комнаты и тип запроса.",
      features: [
        "Мгновенное определение номера и гостя",
        "Автоматическая передача: техслужба, консьерж, администрация",
        "Контроль времени ответа персонала",
        "Статистика по типам обращений для улучшения сервиса"
      ],
      message:"Местоположение: Номер 305, Гость: Иванов И.И.",
      image: "hotel.jpeg"
    }
  },
  {
    icon: <ShoppingBagIcon className="w-12 h-12" />,
    title: "Интернет-магазины и магазины",
    description: "Обработка запросов клиентов по заказам и передача полной истории взаимодействия в CRM.",
    example: {
      title: "Пример использования в интернет-магазине",
      description: "Покупатели попадает в чат прямо из карточки заказа. Система уже знает заказы, статусы доставки и предпочтения, а также помогает с возвратами. ",
      features: [
        "Автоматическая подгрузка информации о заказах",
        "Быстрое оформление возвратов и обменов",
        "Персональные рекомендации",
        "Подключение к системам магазина и склада"
      ],
      message:"Клиент: Сидорова А.В., Заказ: #12345",
      image: "ecommerce.jpg"
    }
  },
  {
    icon: <HomeIcon className="w-12 h-12" />,
    title: "Управляющие компании и ЖКХ",
    description: "Автоматическое создание нарядов на работу, оповещение о плановых работах и авариях.",
    example: {
      title: "Пример использования в ЖКХ",
      description: "Жильцы сканируют QR-код на информационном стенде и сразу попадают в чат с диспетчером. Система знает адрес, квартиру и может сразу создать задание на работу.",
      features: [
        "Автоматическое определение адреса и квартиры",
        "Создание заданий на работу одной кнопкой",
        "Уведомления о плановых отключениях",
        "Контроль качества работ через обратную связь"
      ],
      message:"Местоположение: ул. Ленина 15, кв. 128",
      image: "apartments.jpg"
    }
  }
];

const UseCasesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(useCases[0]);
  const [expandedMobileCard, setExpandedMobileCard] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedCase(useCases[index]);
    if (isMobile) {
      setExpandedMobileCard(expandedMobileCard === index ? null : index);
    }
  };

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Support360 подходит всем, кому важна скорость и простота"
          subtitle="Особенно эффективно там, где нужна мобильность и быстрые решения"
          center
        />
        
        {/* Карточки с вариантами использования */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col">
              <div
                onClick={() => handleCardClick(index)}
                className={`cursor-pointer ${selectedCase.title === useCase.title ? 'ring-2 ring-primary rounded-lg h-full' : 'h-full'}`}
              >
                <UseCaseCard
                  icon={useCase.icon}
                  title={useCase.title}
                  description={useCase.description}
                />
              </div>
              
              {/* Мобильный выпадающий блок */}
              {isMobile && expandedMobileCard === index && (
                <div className="mt-4 bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{useCase.example.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.example.description}</p>
                    <ul className="space-y-2">
                      {useCase.example.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary-dark relative min-h-[250px]">
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
                          <p className="text-gray-800 mb-4">Добрый день! Чем могу помочь?</p>
                          <div className="bg-primary/10 p-3 rounded text-primary text-sm">
                            {selectedCase.example.message}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Десктопный блок с примером */}
        {!isMobile && (
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
                    <p className="text-gray-800 mb-4">Добрый день! Чем могу помочь?</p>
                    <div className="bg-primary/10 p-3 rounded text-primary text-sm">
                      {selectedCase.example.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCasesSection;