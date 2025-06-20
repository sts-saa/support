import React from 'react';
import SectionTitle from '../components/SectionTitle';

const SupportSection: React.FC = () => {
  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Запуск — за день. Помощь — всегда рядом."
          center
        />

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h2 className="font-semibold text-gray-800 mb-2">Настроим под ваши задачи</h2>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h2 className="font-semibold text-gray-800 mb-2">Объясним всё понятно</h2>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h2 className="font-semibold text-gray-800 mb-2">Будем сопровождать в работе</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;