import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FileText, Video, HeadsetIcon } from 'lucide-react';

const ImplementationSection: React.FC = () => {
  return (
    <section id="implementation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Помощь с внедрением"
          subtitle="Мы обеспечиваем полное сопровождение на всех этапах внедрения Support360"
          center
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-16 relative">
            <img 
              src="devices.png" 
              alt="Support360 на разных устройствах" 
              className="w-auto h-auto"
            />

            <div className="absolute bottom-1/4 left-0 bg-white p-4 rounded-lg shadow-lg animate-bounce-slow parallax-element">
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xl">Support360</p>
                  <p className="text-sm text-gray-600">Ваши клиенты всегда на связи</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-0">
            <div className="grid grid-cols-1 md:grid-row-3 gap-8 mt-12">
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3"> 
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Текстовая инструкция</h3>
                    <p className="text-gray-600">Краткое руководство по настройке и использованию системы.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4"> 
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Видео-инструкция</h3>
                    <p className="text-gray-600">Наглядная демонстрация основных функций сервиса.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4"> 
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <HeadsetIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Сопровождение и помощь</h3>
                    <p className="text-gray-600">Оперативная поддержка при внедрении и использовании.</p>
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

export default ImplementationSection;