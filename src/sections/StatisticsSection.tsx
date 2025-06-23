import React, { useEffect, useRef, useState } from 'react';

const statistics = [
  { value: 75, label: 'быстрее обработка обращений', symbol: '%' },
  { value: 90, label: 'клиентов довольны поддержкой', symbol: '%' },
  { value: 60, label: 'меньше рутины для команды', symbol: '%' },
  { label: 'время запуска', text: '15 мин' }
];

const StatisticsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Результат: всегда довольный клиент
          </h2>
          <p className="text-lg">
            На основе данных Support360
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-center">
              {stat.value ? (
                <div className="relative inline-block w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.2)" 
                      strokeWidth="8" 
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#ffffff" 
                      strokeWidth="8" 
                      strokeDasharray={`${isVisible ? stat.value * 2.83 : 0}, 283`} 
                      strokeLinecap="round" 
                      transform="rotate(-90 50 50)"
                      style={{ 
                        transition: "stroke-dasharray 2s ease-in-out"
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">
                      {isVisible ? stat.value : 0}{stat.symbol}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative inline-block w-32 h-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{stat.text}</span>
                  </div>
                </div>
              )}
              <p className="mt-4 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;