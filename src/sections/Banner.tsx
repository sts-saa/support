import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { CheckCircle2, ArrowDown } from 'lucide-react';

const Banner: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Определяем мобильное устройство при монтировании
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    // Параллакс-эффект
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0');
        
        element.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-secondary via-secondary to-primary flex items-center overflow-hidden">
      {/* Decorative elements - скрыть на мобильных */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl parallax-element hidden md:block"
          data-speed="30"
        ></div>
        <div 
          className="absolute top-1/3 -left-24 w-48 h-48 rounded-full bg-primary/20 blur-3xl parallax-element hidden md:block"
          data-speed="20"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-primary/20 blur-3xl parallax-element hidden md:block"
          data-speed="40"
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Техподдержка в формате мессенджера
            </h1>
            <p className="text-xl text-gray-200 max-w-lg mx-auto md:mx-0">
              Support360 — современная поддержка для бизнеса.
            </p>
            <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">

              Простое общение в чате без сложных форм и ожидания.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <div className="relative">
                <a href="https://t.me/dev_support360_bot" target="_blank" rel="noopener noreferrer">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-white animate-bounce" />
                  </div>
                  <Button className="w-full !bg-primary !text-white hover:!bg-primary-dark py-3">
                    Попробовать демо
                  </Button>
                </a>
              </div>
              <Button 
                onClick={scrollToContact} 
                className="w-full !text-white border-white hover:!bg-white/10 py-3"
              >
                Оставить заявку
              </Button>
            </div>
          </div>

          {/* Блок с изображением - видим на всех устройствах */}
          <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center md:items-end md:justify-end mt-8 md:mt-0">
            <div className="parallax-element" data-speed="-15">
              <img 
                src="mockup.png" 
                alt="Support360 Dashboard" 
                className="md:max-w-none md:w-auto h-auto object-contain"
                style={{ 
                  maxHeight: isMobile ? '40vh' : '70vh',
                  transform: isMobile ? 'translateX(30%) translateY(30%)' : 'translateX(35%) translateY(25%)'
                }}
              />

              {/* Плашка "Запуск за 1 день" - адаптированная для всех устройств */}
              <div 
                className="absolute bg-white p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-xs animate-bounce-slow parallax-element" 
                data-speed="-10"
                style={{ 
                  zIndex: 10,
                  top: isMobile ? '10px' : '80px',
                  right: isMobile ? '80px' : 'auto',
                  left: isMobile ? '15%' : '25%'
                }}
              >
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Запуск за 1 день</p>
                    <p className="text-xs md:text-sm text-gray-600">Внедрение без IT-отдела</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;