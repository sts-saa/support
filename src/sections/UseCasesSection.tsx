import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import UseCaseCard from '../components/UseCaseCard';
import { BuildingIcon, HomeIcon, ServerIcon, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

// Добавляем импорты для изображений
import itImage from '/it.jpeg';
import eventImage from '/event.jpg';
import hotelImage from '/hotel.jpeg';
import apartmentsImage from '/apartments.jpg';

const useCases = [
  {
    icon: <ServerIcon className="w-12 h-12" />,
    title: "IT-поддержка",
    example: {
      title: "Поддержка без хаоса",
      description: "Одно окно для любых обращений. Просто пишете в чат — без форм, лишних шагов и долгих инструкций. Система сама определяет суть запроса и направляет его нужному специалисту с помощью ИИ. Каждое обращение фиксируется - всё решается, ничего не теряется!",
      features: [
        "Умная классификация запросов: техника, сервисы, доступы, вопросы по объектам",
        "Интеграции с вашими системами: CRM, Active Directory и др.",
        "Поддержка, которая знает ответы на частые вопросы — система отвечает сама, без участия специалистов",
        "Полный контроль обращений: от сотрудников, жильцов, гостей, участников — всё видно, всё отслеживается"
      ],
      message: "Сотрудник: Петров П.П., Отдел: Бухгалтерия",
      image: itImage // Используем импортированное изображение
    }
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Мероприятия и конференции",
    example: {
      title: "1000 гостей — и каждый получает помощь",
      description: "Участники сканируют QR-код, попадают в чат и получают быстрые ответы. Навигация, техника, помощь — всё в одном месте.",
      features: [
        "Персональная поддержка каждого участника",
        "Координация команды помощников",
        "Навигация по площадке мероприятия",
        "Сбор отзывов в реальном времени"
      ],
      message: "Участник: Козлов К.К., Мероприятие: TechConf2024",
      image: eventImage
    }
  },
  {
    icon: <BuildingIcon className="w-12 h-12" />,
    title: "Гостиницы и отели",
    example: {
      title: "Гости решают проблемы, не выходя из номера",
      description: "Гость сканирует QR-код в номере и пишет в чат. Система знает номер комнаты и тип обращения, сотрудники видят задачу мгновенно.",
      features: [
        "Мгновенное определение номера и гостя",
        "Автоматическая передача: техслужба, консьерж, администрация",
        "Контроль времени ответа персонала",
        "Статистика по типам обращений для улучшения сервиса"
      ],
      message: "Местоположение: Номер 305, Гость: Иванов И.И.",
      image: hotelImage
    }
  },
  {
    icon: <HomeIcon className="w-12 h-12" />,
    title: "ЖКХ и управляющие компании",
    example: {
      title: "Жители пишут — задачи создаются сами",
      description: "Жильцы сканируют QR-код и пишут в чат. Система определяет адрес и тип запроса, создаёт задачу автоматически.",
      features: [
        "Автоматическое определение адреса и квартиры",
        "Создание заданий на работу одной кнопкой",
        "Уведомления о плановых отключениях",
        "Контроль качества работ через обратную связь"
      ],
      message: "Местоположение: ул. Ленина 15, кв. 128",
      image: apartmentsImage
    }
  }
];

const UseCasesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(useCases[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    setSelectedIndex(index);
    if (isMobile) {
      setExpandedMobileCard(expandedMobileCard === index ? null : index);
    }
  };

  const handlePrevious = () => {
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : useCases.length - 1;
    setSelectedIndex(newIndex);
    setSelectedCase(useCases[newIndex]);
  };

  const handleNext = () => {
    const newIndex = selectedIndex < useCases.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setSelectedCase(useCases[newIndex]);
  };

  return (
    <section id="use-cases" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Кому нужен Support360"
          subtitle="Подходит тем, кому важна скорость и простота"
          center
        />
        
        {/* Карточки с вариантами использования */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ml-10 mr-10">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full"
            >
              <div
                data-use-case-card
                onClick={() => handleCardClick(index)}
                className={`cursor-pointer rounded-xl transition-all duration-300 h-full transform hover:-translate-y-1 ${
                  selectedCase.title === useCase.title 
                    ? 'ring-2 ring-primary' 
                    : ''
                }`}
              >
                <UseCaseCard
                  icon={useCase.icon}
                  title={useCase.title}
                />
              </div>
              
              {/* Мобильный выпадающий блок */}
              {isMobile && expandedMobileCard === index && (
                <div className="mt-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{useCase.example.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{useCase.example.description}</p>
                    <ul className="space-y-1">
                      {useCase.example.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary-dark relative h-40">
                    <img 
                      src={useCase.example.image}
                      alt={`Использование Support360 в ${useCase.title}`} 
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="bg-white/90 p-4 rounded shadow max-w-xs">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                            <span className="text-white text-sm font-bold">S</span>
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Support360</p>
                            <p className="text-xs text-gray-600">{useCase.title}</p>
                          </div>
                        </div>
                        <p className="text-gray-800 text-sm mb-2">Добрый день! Чем могу помочь?</p>
                        <div className="bg-primary/10 p-2 rounded text-primary text-xs">
                          {useCase.example.message}
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
          <div className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-md ml-10 mr-10 relative">
            {/* Стрелки навигации */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Предыдущий кейс"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Следующий кейс"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

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

            {/* Индикаторы карточек */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    selectedIndex === index 
                      ? 'bg-primary scale-110' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Перейти к кейсу ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCasesSection;