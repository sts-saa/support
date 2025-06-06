import React, { useState, useEffect } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refreshPage = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={refreshPage}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
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
          <div className="flex flex-col">
            <span className={`font-bold text-xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Support360
            </span>
            <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              Сервис-деск нового поколения
            </span>
          </div>
        </button>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Наша история
          </a>
          <a href="#features" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Возможности
          </a>
          <a href="#use-cases" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Кейсы
          </a>
          <a href="#implementation" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            ИИ-модули
          </a>
          <a href="#faq" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Вопросы
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-3">
          <a href="https://t.me/dev_support360_bot" target="_blank" rel="noopener noreferrer">
            <Button className={`text-sm px-4 py-2 ${isScrolled 
              ? '!bg-transparent !text-primary border-2 border-primary hover:!bg-primary/10' 
              : '!bg-white/10 !text-white border-2 border-white/30 hover:!bg-white/20 backdrop-blur-sm'}`}>
              Демо
            </Button>
          </a>
          <Button 
            onClick={scrollToContact}
            className={`text-sm px-4 py-2 ${isScrolled 
              ? '!bg-primary !text-white hover:!bg-primary-dark' 
              : '!bg-primary !text-white hover:!bg-primary-dark'}`}
          >
            Запустить за 15 минут
          </Button>
        </div>
        
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isScrolled ? "#000000" : "#ffffff"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isScrolled ? "#000000" : "#ffffff"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="font-medium py-2 hover:text-primary border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Наша история
            </a>
            <a 
              href="#features" 
              className="font-medium py-2 hover:text-primary border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Возможности
            </a>
            <a 
              href="#use-cases" 
              className="font-medium py-2 hover:text-primary border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Кейсы
            </a>
            <a 
              href="#implementation" 
              className="font-medium py-2 hover:text-primary border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ИИ-модули
            </a>
            <a 
              href="#faq" 
              className="font-medium py-2 hover:text-primary border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Вопросы
            </a>
            
            <div className="pt-4 space-y-3">
              <a href="https://t.me/dev_support360_bot" target="_blank" rel="noopener noreferrer">
                <Button className="!bg-transparent !text-primary border-2 border-primary hover:!bg-primary/10 w-full">
                  Попробовать демо
                </Button>
              </a>
              <Button onClick={scrollToContact} className="w-full">
                Запустить за 15 минут
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;