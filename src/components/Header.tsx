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
          <span className={`font-bold text-xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Support360
          </span>
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Функции
          </a>
          <a href="#how-it-works" className={`text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Как это работает
          </a>
          <a href="#use-cases" className={`text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Применение
          </a>
          <a href="#implementation" className={`text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Внедрение
          </a>
          <a href="#faq" className={`text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            FAQ
          </a>
        </nav>
        
        <div className="text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] hidden md:flex items-center space-x-4">
          <Button 
            onClick={scrollToContact}
            className={`${isScrolled 
              ? '!bg-primary !text-white hover:!bg-primary-dark' 
              : '!bg-white !text-primary hover:!bg-gray-100 !border !border-transparent'}`}
          >
            Связаться с нами
          </Button>
          <a href="https://support360.ru/login" target="_blank" rel="noopener noreferrer">
            <Button className={`!bg-transparent border-2 ${
              isScrolled 
                ? '!text-primary border-primary hover:!bg-primary/10' 
                : '!text-white border-white hover:!bg-white/10'
            }`}>
              Вход/Регистрация
            </Button>
          </a>
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
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#features" 
              className="font-medium py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Возможности
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Как это работает
            </a>
            <a 
              href="#use-cases" 
              className="font-medium py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Применение
            </a>
            <a 
              href="#implementation" 
              className="font-medium py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Внедрение
            </a>
            <a 
              href="#faq" 
              className="font-medium py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button onClick={scrollToContact} className="mt-2">Связаться с нами</Button>
            <a href="https://support360.ru/login" target="_blank" rel="noopener noreferrer">
              <Button className="!bg-transparent !text-primary border-2 border-primary hover:!bg-primary/10 w-full">
                Вход/Регистрация
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;