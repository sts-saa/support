import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServiceHistorySection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="service-history" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Мы были по ту сторону поддержки. И сделали лучше."
          center
        />
        
        <div className="max-w-4xl mx-auto text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            {isExpanded ? 'Скрыть историю' : 'Узнать историю создания'}
            {isExpanded ? (
              <ChevronUp className="ml-2 w-5 h-5" />
            ) : (
              <ChevronDown className="ml-2 w-5 h-5" />
            )}
          </button>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Мы знаем, как бывает сложно — и создали решение, которое просто работает.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Люди пишут в WhatsApp, Telegram, звонят, дублируют заявки, теряются обращения. 
                  Никто не понимает — кто что обработал, кто кому ответил и что вообще происходит.
                </p>
              </div>
              
              <p className="text-gray-700 mb-6">
                Чтобы навести порядок, все начинали внедрять сложные системы. 
                Но всё заканчивалось одинаково — либо никто не хотел ими пользоваться, 
                либо поддержка превращалась в бюрократию с кучей кнопок и полей.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <p className="text-gray-800 font-semibold text-xl text-center">
                  И тогда мы поняли: людям не нужна сложная система. 
                  Им нужна просто понятная поддержка — как чат.
                </p>
              </div>
              
              <p className="text-gray-700">
                Так появилась идея Support360: сделать сервис, где заявка начинается с одного сообщения, 
                где всё работает привычно, как в мессенджере, где клиент просто пишет — 
                а система сама превращает это в заявку, подсказывает, уведомляет, собирает статистику.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHistorySection;