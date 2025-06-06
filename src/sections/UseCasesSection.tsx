import React, { useState, useEffect  } from 'react';
import SectionTitle from '../components/SectionTitle';
import UseCaseCard from '../components/UseCaseCard';
import { BuildingIcon, HomeIcon, ServerIcon, ShoppingBagIcon, Calendar } from 'lucide-react';

const useCases = [
  {
    icon: <BuildingIcon className="w-12 h-12" />,
    title: "Гостиницы и отели",
    description: "QR-коды в номерах для мгновенного обращения. Гости решают проблемы не выходя из номера, персонал видит точную локацию.",
    example: {
      title: "Кейс: сеть отелей увеличила NPS на 40%",
      description: "В каждом номере отеля размещен уникальный QR-код. Гость сканирует код и попадает в чат с консьержем. Система автоматически определяет номер комнаты и тип запроса.",
      features: [
        "Мгновенная идентификация номера и гостя",
        "Автоматическая маршрутизация: техслужба, консьерж, ресепшн",
        "Контроль времени реакции персонала",
        "Статистика по типам обращений для улучшения сервиса"
      ],
      message:"Локация: Номер 305, Гость: Иванов И.И.",
      image: "hotel.jpeg"
    }
  },
  {
    icon: <HomeIcon className="w-12 h-12" />,
    title: "ЖКХ и управляющие компании",
    description: "Жильцы подают заявки через QR-код на подъезде. Автоматическое создание нарядов, контроль исполнения, массовые уведомления.",
    example: {
      title: "Кейс: УК сократила время реакции в 3 раза",
      description: "Жильцы сканируют QR-код в подъезде и сразу попадают в чат с диспетчером. Система знает адрес, квартиру и может сразу создать наряд на работу.",
      features: [
        "Автоматическое определение адреса и квартиры",
        "Создание нарядов на работу одной кнопкой",
        "Уведомления о плановых отключениях",
        "Контроль качества работ через обратную связь"
      ],
      message:"Локация: ул. Ленина 15, кв. 128",
      image: "apartments.jpg"
    }
  },
  {
    icon: <ServerIcon className="w-12 h-12" />,
    title: "IT-поддержка",
    description: "Сотрудники обращаются через Telegram или QR-код на рабочем месте. ИИ классифицирует запросы и направляет нужным специалистам.",
    example: {
      title: "Кейс: IT-отдел обрабатывает на 60% больше заявок",
      description: "Сотрудники пишут в корпоративный Telegram-бот. ИИ определяет тип проблемы и направляет системному администратору, программисту или в службу закупок.",
      features: [
        "Автоматическая классификация: железо, ПО, доступы",
        "Интеграция с Active Directory",
        "База знаний для самообслуживания",
        "Эскалация критичных инцидентов"
      ],
      message:"Сотрудник: Петров П.П., Отдел: Бухгалтерия",
      image: "it.jpeg"
    }
  },
  {
    icon: <ShoppingBagIcon className="w-12 h-12" />,
    title: "E-commerce и ритейл",
    description: "Покупатели обращаются прямо из карточки заказа. Система подтягивает историю покупок и автоматизирует возвраты.",
    example: {
      title: "Кейс: интернет-магазин увеличил повторные покупки на 25%",
      description: "В каждом письме с заказом есть ссылка на поддержку. Клиент попадает в чат, где система уже знает его заказы, статусы доставки и предпочтения.",
      features: [
        "Автоматическая подгрузка информации о заказах",
        "Быстрое оформление возвратов и обменов",
        "Персонализированные рекомендации",
        "Интеграция с CRM и складской системой"
      ],
      message:"Клиент: Сидорова А.В., Заказ: #12345",
      image: "ecommerce.jpg"
    }
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Мероприятия и конференции",
    description: "Участники получают помощь через QR-код на бейдже. Координация волонтёров, навигация, техподдержка — всё в одном чате.",
    example: {
      title: "Кейс: конференция на 5000 участников без хаоса",
      description: "QR-код на бейдже каждого участника ведёт в персональный чат поддержки. Система знает программу, локацию участника и может сразу помочь с навигацией.",
      features: [
        "Персональная поддержка каждого участника",
        "Координация команды волонтёров",
        "Навигация по площадке мероприятия",
        "Сбор обратной связи в реальном времени"
      ],
      message:"Участник: Козлов К.К., Мероприятие: TechConf2024",
      image: "event.jpg"
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
    <section id="use-cases" className="py-20 px-4 sm:ml-10 sm:mr-10">
      <div className="container mx-auto">
        <SectionTitle 
          title="Support360 особенно эффективен в этих сферах"
          subtitle="Там, где важна скорость, мобильность и простота — наше решение показывает максимальный результат"
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
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Сколько клиентов вы теряете из-за неудобной поддержки?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Каждый потерянный клиент — это не только упущенная прибыль сегодня, но и негативные отзывы, которые отпугнут новых клиентов завтра.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-500 mb-2">67%</div>
                <div className="text-gray-600">клиентов уходят из-за плохого сервиса</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-500 mb-2">5x</div>
                <div className="text-gray-600">дороже привлечь нового клиента</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-500 mb-2">-12%</div>
                <div className="text-gray-600">падение прибыли от плохих отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;