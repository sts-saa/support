import React from 'react';
import SectionTitle from '../components/SectionTitle';

const SupportSection: React.FC = () => {
  return (
    <section id="support" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Внедрение и поддержка"
          subtitle="Мы не просто даём доступ к системе — мы помогаем настроить её под ваши процессы и обучаем команду"
          center
        />

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Быстрый запуск</h4>
              <p className="text-gray-600 text-sm">Настраиваем систему и регистрируем пользователей</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Предоставляем инструкции</h4>
              <p className="text-gray-600 text-sm">Готовая документация и видеоинструкции</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Всегда готовы помочь</h4>
              <p className="text-gray-600 text-sm">Помогаем решать вопросы и улучшать процессы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;