import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Brain, Zap, BarChart3, MessageSquare, Settings, TrendingUp } from 'lucide-react';

const ImplementationSection: React.FC = () => {
  return (
    <section id="implementation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Поддержка, которая помогает и понимает"
          subtitle="Умный помощник работает в фоне, не усложняя систему, а делая поддержку быстрее и качественнее"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Система сама передаёт нужному специалисту</h3>
            <p className="text-gray-600 mb-4">
              Анализирует сообщение и автоматически определяет тип запроса, срочность и нужного исполнителя.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> Сотруднику не нужно разбираться — сразу понятно, кто берёт в работу
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Быстрые ответы на частые вопросы</h3>
            <p className="text-gray-600 mb-4">
              При поступлении заявки система проверяет базу знаний и предлагает готовый ответ сотруднику или клиенту.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> 60% запросов решаются мгновенно без участия сотрудника
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Подсказки для сотрудников</h3>
            <p className="text-gray-600 mb-4">
              Генерирует персональный ответ на основе контекста: тип клиента, история обращений, как отвечать лучше.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> Никаких шаблонных фраз — каждый ответ индивидуален
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative">
            <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
              Скоро
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Вся история общения сохраняется</h3>
            <p className="text-gray-600 mb-4">
              Отслеживает вежливость, полноту ответов и даёт рекомендации по улучшению сервиса.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> Постоянное повышение качества без дополнительного контроля
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative">
            <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
              В разработке
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Прогноз нагрузки</h3>
            <p className="text-gray-600 mb-4">
              Анализирует пиковые периоды и заранее прогнозирует всплески обращений.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> Можно заранее усилить смену или включить автоответчик
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative">
            <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
              Скоро
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Настроить можно простыми словами</h3>
            <p className="text-gray-600 mb-4">
              Просто скажите: "Если пишут про лифт — отправляй в ЖЭК". Система сама настроит правило.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> Настройка системы без технических знаний
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Руководитель видит советы, как сделать поддержку ещё лучше
              </h3>
              <p className="text-gray-600 mb-6">
                Скоро: умная аналитика будет давать комплексные рекомендации по улучшению работы службы поддержки — 
                как личный консультант, который видит всю картину и подсказывает, что можно сделать лучше.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Анализ основных проблем и узких мест</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Рекомендации по улучшению процессов</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Предложения по развитию команды</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="devices.png" 
                alt="Support360 с умным помощником на разных устройствах" 
                className="w-auto h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;