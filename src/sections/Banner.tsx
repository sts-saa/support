import React, { useEffect, useRef } from 'react';
import Button from '../components/Button';
import { CheckCircle2, ArrowDown } from 'lucide-react';

const Banner: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl parallax-element"
          data-speed="30"
        ></div>
        <div 
          className="absolute top-1/3 -left-24 w-48 h-48 rounded-full bg-primary/20 blur-3xl parallax-element"
          data-speed="20"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-primary/20 blur-3xl parallax-element"
          data-speed="40"
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Поддержка начинается с первого сообщения
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
              Support360 — современная поддержка для бизнеса. <br />
              Общение так же просто, как в чате. <br />
              Без сложных форм и ожидания.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start relative">
              <div className="relative">
                <a href="https://t.me/dev_support360_bot" target="_blank" rel="noopener noreferrer">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 ">
                  <ArrowDown className="w-10 h-10 text-white animate-bounce" />
                </div>
                  <Button className="text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] w-full !bg-primary !text-white hover:!bg-primary-dark">
                    Попробовать демо
                  </Button>
                </a>
              </div>
              <Button onClick={scrollToContact} className="text-[calc(0.8rem_+_0.3vw)] px-[calc(1rem_+_0.5vw)] py-[calc(0.5rem_+_0.3vw)] w-full !text-white border-white hover:!bg-white/10">
                Оставить заявку
              </Button>
            </div>
          </div>

          {/* Картинка справа снизу */}
          <div className="lg:w-1/2 relative">
            <div className="absolute bottom-0 right-0 w-full max-w-2xl parallax-element" data-speed="-15">
              <img 
                src="mockup.png" 
                alt="Support360 Dashboard" 
                className="w-full h-auto object-contain"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs animate-bounce-slow parallax-element" data-speed="-10">
                <div className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                  <div>
                    <p className="font-semibold text-gray-800">Запуск за 15 минут</p>
                    <p className="text-sm text-gray-600">Внедрение без IT-отдела</p>
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