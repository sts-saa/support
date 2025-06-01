import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ChatDemo from '../components/ChatDemo';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Как работает Support360"
          subtitle="Простая схема взаимодействия между клиентами и службой поддержки"
          center
        />
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Пример взаимодействия</h3> 
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Сканирование QR-кода</h3>
                  <p className="text-gray-600">
                    Клиент сканирует QR-код, размещенный в нужном месте (номер отеля, офис, на устройстве).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Переход в Telegram</h3>
                  <p className="text-gray-600">
                    Автоматическое открытие чат-бота в Telegram и дальнейшее взаимодействие через удобный интерфейс мессенджера.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Обработка запроса</h3>
                  <p className="text-gray-600">
                    Запрос автоматически превращается в тикет и маршрутизируется нужному специалисту.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Быстрое решение</h3>
                  <p className="text-gray-600">
                    Клиент получает решение своей проблемы прямо в чате, без лишних переключений между приложениями.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ChatDemo/>

              <p className="text-gray-600 mt-8">
                В данном примере показано, как гость отеля сообщает о проблеме с кондиционером в своем номере и получает быстрый ответ от службы поддержки.
              </p> 

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;