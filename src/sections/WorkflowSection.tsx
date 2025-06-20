import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ChatDemo from '../components/ChatDemo';

const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Как это работает"
          subtitle="Простая схема, которая решает все проблемы сразу"
          center
        />
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 ml-10 mr-10">
          <div className="lg:w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Пример работы</h3>
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Клиент пишет сообщение</h3>
                  <p className="text-gray-600">
                    Сканирует QR-код или переходит по ссылке. Открывается привычный персональный чат.
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Система передаёт нужному человеку</h3>
                  <p className="text-gray-600">
                    Определяет тип проблемы и автоматически направляет правильному специалисту.
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Сотрудник быстро отвечает</h3>
                  <p className="text-gray-600">
                    Получает уведомление, видит всю информацию. Рутину берёт на себя система.
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Каждый клиент получает ответ</h3>
                  <p className="text-gray-600">
                    Вся переписка хранится и не теряется. Клиент получает ответ в том же чате.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Пример диалога</h3>
              <ChatDemo/>
              <p className="text-gray-600 mt-6 text-sm">
                В примере гость отеля сообщает о проблеме с кондиционером. 
                Система автоматически создаёт заявку, определяет номер комнаты и направляет техническому специалисту.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;