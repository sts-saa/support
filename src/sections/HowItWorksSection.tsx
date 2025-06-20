import React from 'react';
import SectionTitle from '../components/SectionTitle';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="История создания Support360"
          subtitle="Мы сами работали в поддержке и знаем все проблемы изнутри"
          center
        />
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Support360 сделали те, кто сами работал в поддержке.
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

export default HowItWorksSection;