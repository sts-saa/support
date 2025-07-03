import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ChatDemo from '../components/ChatDemo';

const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Один чат — и всё под контролем"
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
                  <h3 className="text-xl text-gray-800 mb-2">Клиент сканирует QR и пишет в привычный чат</h3>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl text-gray-800 mb-2">Система понимает, с чем обращение, и сразу передаёт его нужному специалисту</h3>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl text-gray-800 mb-2">Сотрудник отвечает быстро — система подсказывает</h3>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl text-gray-800 mb-2">Вся переписка сохраняется. Обращения не теряются.</h3>
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