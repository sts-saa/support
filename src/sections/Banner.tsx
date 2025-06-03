import React from 'react';
import Button from '../components/Button';

const Banner: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mockup.png')] bg-no-repeat bg-center bg-cover opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Техподдержка в формате мессенджера
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Сократите время обработки заявок на 75% и повысьте удовлетворенность клиентов с помощью Support360 — современной системы технической поддержки
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              onClick={scrollToContact}
              className="!bg-white !text-primary hover:!bg-gray-100 !border-0 w-full sm:w-auto"
            >
              Попробовать бесплатно
            </Button>
            <a 
              href="#how-it-works" 
              className="text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto"
            >
              Как это работает
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">75%</div>
              <p className="text-gray-200">Быстрее обработка обращений</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">85%</div>
              <p className="text-gray-200">Выше удовлетворенность</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">1-3 дня</div>
              <p className="text-gray-200">На внедрение системы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;