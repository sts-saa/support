import React from 'react';
import { Building, MapPin, Mail, Phone, Clock, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-10 mr-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-7 h-7"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-2xl">Support360</span>
                <p className="text-gray-400 text-sm">Сервис-деск нового поколения</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Превращаем хаос заявок в простой диалог. Никаких форм и статусов — только понятное общение, как в мессенджере.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center text-light">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">Запуск за 15 минут</span>
              </div>
              <div className="flex items-center text-light">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Без внедрения и обучения</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://t.me/dev_support360_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Попробовать демо
              </a>
              <a 
                href="#contact"
                className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Связаться
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Решение</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Наша история</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Кейсы применения</a></li>
              <li><a href="#implementation" className="text-gray-400 hover:text-white transition-colors">ИИ-модули</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Частые вопросы</a></li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-8">Сферы применения</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Гостиницы и отели</li>
              <li className="text-gray-400">ЖКХ и управляющие компании</li>
              <li className="text-gray-400">IT-поддержка</li>
              <li className="text-gray-400">E-commerce и ритейл</li>
              <li className="text-gray-400">Мероприятия</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Building className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">ООО "ИТ Лаборатория"</p>
                  <p className="text-gray-400 text-sm">Разработчик Support360</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+73833838004" className="text-white hover:text-primary transition-colors">
                    +7 (383) 383-80-04
                  </a>
                  <p className="text-gray-400 text-sm">Пн-Пт: 9:00-18:00 (МСК)</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@support360.ru" className="text-white hover:text-primary transition-colors">
                    info@support360.ru
                  </a>
                  <p className="text-gray-400 text-sm">Ответим в течение часа</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">Новосибирск</p>
                  <p className="text-gray-400 text-sm">ул. Большевистская, 97</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Support360. Все права защищены.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Превращаем хаос заявок в простой диалог с 2023 года
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button 
                onClick={() => {
                  const modal = document.querySelector('[data-modal="privacy"]');
                  if (modal) modal.classList.remove('hidden');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </button>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-white font-medium mb-2">
                🚀 Хватит терять клиентов из-за плохой поддержки
              </p>
              <p className="text-gray-300 text-sm">
                Запустите Support360 завтра и увидите разницу в первый же день
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;