import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Brain, Zap, BarChart3, MessageSquare, Settings, TrendingUp } from 'lucide-react';

const ImplementationSection: React.FC = () => {
  return (
    <section id="implementation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="ИИ-модули, которые делают Support360 умнее"
          subtitle="Искусственный интеллект работает в фоне, не усложняя систему, а делая поддержку быстрее и качественнее"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Автоклассификация заявок</h3>
            <p className="text-gray-600 mb-4">
              ИИ анализирует сообщение и автоматически определяет тип запроса, срочность и нужного исполнителя.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> Оператору не нужно разбираться — сразу понятно, кто берёт в работу
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">ИИ-ответчик на типовые вопросы</h3>
            <p className="text-gray-600 mb-4">
              При поступлении заявки ИИ проверяет базу знаний и предлагает готовый ответ оператору или клиенту.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
              <strong>Результат:</strong> 60% запросов решаются мгновенно без участия оператора
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Умные шаблоны ответов</h3>
            <p className="text-gray-600 mb-4">
              ИИ генерирует персональный ответ на основе контекста: тип клиента, история обращений, SLA.
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
            <h3 className="text-xl font-bold mb-3 text-gray-800">Оценка качества общения</h3>
            <p className="text-gray-600 mb-4">
              ИИ отслеживает вежливость, полноту ответов и даёт рекомендации по улучшению сервиса.
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
              ИИ анализирует пиковые периоды и заранее прогнозирует всплески обращений.
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
            <h3 className="text-xl font-bold mb-3 text-gray-800">ИИ-настройка правил</h3>
            <p className="text-gray-600 mb-4">
              Просто скажите: "Если пишут про лифт — отправляй ЖЭКу". ИИ сам настроит правило.
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
                ИИ как виртуальный руководитель поддержки
              </h3>
              <p className="text-gray-600 mb-6">
                Скоро: ИИ-аналитика будет давать комплексные рекомендации по улучшению работы службы поддержки — как личный консультант, который видит всю картину и подсказывает, что можно сделать лучше.
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
                  <span className="text-gray-700">Рекомендации по оптимизации процессов</span>
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
                alt="Support360 с ИИ на разных устройствах" 
                className="w-auto h-auto mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Полное сопровождение внедрения
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Мы не просто даём доступ к системе — мы помогаем настроить её под ваши процессы и обучаем команду
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Настройка за 15 минут</h4>
                <p className="text-gray-600 text-sm">Подключаем домен, настраиваем QR-коды и интеграции</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Обучение команды</h4>
                <p className="text-gray-600 text-sm">Показываем, как работать с системой эффективно</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Постоянная поддержка</h4>
                <p className="text-gray-600 text-sm">Помогаем решать вопросы и оптимизировать процессы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;