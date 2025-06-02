import React from 'react';
import { Building, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-10 mr-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                </svg>
              </div>
              <span className="font-bold text-xl">Support360</span>
            </div>
            <p className="text-gray-400 mb-4">
              Современная система технической поддержки в формате мессенджера.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Функции</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Чат-интерфейс</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Аналитика</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Простая авторизация</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Контроль SLA</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Интеграция с Telegram</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Применение</h3>
            <ul className="space-y-2">
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Гостиницы</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">ЖКХ</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">IT-поддержка</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Электронная коммерция</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Мероприятия</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Building className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  ООО "ИТ Лаборатория"
                </span>
              </li>
              
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  630007, г. Новосибирск, ул. Большевистская, д.97
                </span>
              </li>
              
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                <a href="mailto:info@support360.ru" className="text-gray-400 hover:text-white transition-colors">
                  info@support360.ru
                </a>
              </li>
              
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                <a href="tel:+73833838004" className="text-gray-400 hover:text-white transition-colors">
                  +7 (383)-383-80-04
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Support360. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;