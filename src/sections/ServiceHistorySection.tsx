import React from 'react';
import SectionTitle from '../components/SectionTitle';

const ServiceHistorySection: React.FC = () => {

  return (
    <section id="service-history" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Мы были по ту сторону поддержки. И сделали лучше."
          center
        />
        
        <div className="max-w-4xl mx-auto transition-all duration-500 overflow-hidden">
          <div className="bg-primary/10 rounded-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 text-xl">
                Мы сами работаем в поддержке. Видели, как теряются заявки, клиенты, сотрудники. И как «системы тикетов» превращают помощь в бюрократию.
              </p>
              <p className="text-gray-700 text-xl">
              Поэтому мы создали Support360. Чтобы всё работало просто: человек пишет — человек получает ответ. Остальное — автоматизация.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHistorySection;