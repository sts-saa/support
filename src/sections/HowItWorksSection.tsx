import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ChatDemo from '../components/ChatDemo';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="История создания Support360"
          subtitle="Мы сами прошли через боль хаотичной поддержки и создали решение, которое работает"
          center
        />
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Мы долгое время занимались технической поддержкой в разных компаниях — от IT-отделов и застройщиков до сервисных служб в гостиницах и ЖКХ. Везде картина была одинаковой:
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Люди пишут в WhatsApp, Telegram, звонят, дублируют заявки, теряются обращения, никто не понимает — кто что обработал, кто кому ответил и что вообще происходит.
                </p>
              </div>
              
              <p className="text-gray-700 mb-6">
                Чтобы хоть как-то навести порядок, все начинали внедрять "тяжёлые" системы: HelpDesk, ITSM, CRM. Но всё заканчивалось одинаково — либо никто не хотел ими пользоваться, либо поддержка превращалась в бюрократию: тикеты, статусы, назначенные ответственные, куча кнопок и полей.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <p className="text-gray-800 font-semibold text-xl text-center">
                  И вот тогда мы поняли: людям не нужна "система тикетов". Им нужна просто понятная поддержка — как чат.
                </p>
              </div>
              
              <p className="text-gray-700">
                Так появилась идея Support360: сделать сервис, в котором заявка начинается с одного сообщения, где всё работает привычно, как мессенджер, где пользователь не должен разбираться, а просто пишет — а система сама превращает это в тикет, подсказывает, уведомляет, собирает аналитику.
              </p>
            </div>
          </div>
        </div>
        
        <SectionTitle 
          title="Как это работает на практике"
          subtitle="Простая схема, которая решает все проблемы сразу"
          center
        />
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 ml-10 mr-10">
          <div className="lg:w-1/2">
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Клиент сканирует QR-код</h3>
                  <p className="text-gray-600">
                    Размещённый в нужном месте (номер отеля, офис, на оборудовании). Система сразу понимает, откуда обращение.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Пишет как в мессенджере</h3>
                  <p className="text-gray-600">
                    Открывается привычный чат в Telegram или браузере. Никаких форм — просто описывает проблему.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">ИИ анализирует и направляет</h3>
                  <p className="text-gray-600">
                    Система определяет тип проблемы, срочность и автоматически направляет нужному специалисту.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Быстрое решение</h3>
                  <p className="text-gray-600">
                    Специалист получает уведомление, видит всю информацию и решает проблему. Клиент получает ответ в том же чате.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Пример диалога</h3>
              <ChatDemo/>
              <p className="text-gray-600 mt-6 text-sm">
                Реальный пример: гость отеля сообщает о проблеме с кондиционером. Система автоматически создаёт заявку, определяет номер комнаты и направляет техническому специалисту.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;