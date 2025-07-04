import React from 'react';
import SectionTitle from '../components/SectionTitle';

const ServiceHistorySection: React.FC = () => {

  return (
    <section id="service-history" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Мы сделали такую поддержку, какой пользуемся сами"
          center
        />
        
        <div className="max-w-4xl mx-auto transition-all duration-500 overflow-hidden">
          <div className="bg-primary/10 rounded-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 text-xl">
                Без порталов, сложных систем и бюрократии. Просто диалог — и решение.
              </p>

              <div className="border-l-4 border-gray-400 pl-4 my-6 italic">
                <p className="text-gray-800 text-xl">
                  Каждый день наши специалисты отвечают клиентам через Support360. <br />
                  Поэтому мы знаем: простота работает.
                </p>
              </div>

              <p className="text-gray-700 text-xl">
                Человек пишет — человек получает ответ. Остальное — автоматизация.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHistorySection;