import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FAQItem from '../components/FAQItem';

const faqItems = [
  {
    question: "Чем отличается Support360?",
    answer: "У нас всё начинается с первого сообщения. Как в чате."
  },
  {
    question: "А если у нас уже есть система?",
    answer: "Мы не заменяем, а дополняем. Главное — что клиент пишет в одном месте, а не теряется."
  },
  {
    question: "Как быстро начнёт работать?",
    answer: "Support360 не требует сложного внедрения. Мы настраиваем систему под ваш домен за 1-3 дня, и вы сразу можете принимать заявки."
  },
  {
    question: "Как мы защищаем ваши данные?",
    answer: "Мы используем защищённые соединения, регулярное резервное копирование и соответствуем требованиям по защите персональных данных."
  },
  {
    question: "Можно ли настроить систему под наши процессы?",
    answer: "Да, Support360 гибко настраивается под любые бизнес-процессы."
  },
  {
    question: "Сколько стоит?",
    answer: "Зависит от размера компании. Свяжитесь с нами для расчета стоимости."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Вопросы и ответы"
          subtitle="Развеиваем сомнения и показываем, почему Support360 — это правильный выбор"
          center
        />

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;