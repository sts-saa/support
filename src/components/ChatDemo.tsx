import React, { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, text: "Здравствуйте! Чем я могу вам помочь?", isUser: false, time: "14:30" },
];

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const scenario = [
    {
      userMessage: "В комнате 304 не работает кондиционер",
      response: "Спасибо за обращение. Я создал заявку #2451 по вашему запросу. Технический специалист подойдет в течение 30 минут."
    },
    {
      userMessage: "Как скоро будет решена проблема?",
      response: "Согласно нашему SLA, проблемы с кондиционированием решаются в течение 60 минут. Но специалист уже в пути и будет у вас примерно через 15-20 минут."
    },
    {
      userMessage: "Спасибо за оперативность!",
      response: "Всегда рады помочь! Если возникнут еще вопросы, обращайтесь в любое время."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Спасибо за обращение. Я создал заявку #2451 по вашему запросу. Технический специалист подойдет в течение 30 минут.",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (currentStep >= scenario.length) return;
    
    const timer = setTimeout(() => {
      // Add user message from scenario
      const userMessage = {
        id: messages.length + 1,
        text: scenario[currentStep].userMessage,
        isUser: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);
      
      // Add bot response after delay
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: scenario[currentStep].response,
          isUser: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        
        // Move to next step in scenario
        setCurrentStep(prev => prev + 1);
      }, 1500);
    }, currentStep === 0 ? 2000 : 4000);
    
    return () => clearTimeout(timer);
  }, [currentStep, messages.length]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-primary py-3 px-4 text-white flex items-center">
        <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center mr-3">
          <span className="text-xl">S</span>
        </div>
        <div>
          <p className="font-semibold">Support360</p>
          <p className="text-xs">Комната 304</p>
        </div>
      </div>
      
      <div className="h-72 p-4 overflow-y-auto flex flex-col space-y-3 bg-gray-50">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-lg ${
              msg.isUser 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-white text-gray-800 shadow-sm rounded-tl-none'
            }`}>
              <p>{msg.text}</p>
              <p className={`text-xs mt-1 text-right ${
                msg.isUser ? 'text-white/70' : 'text-gray-500'
              }`}>{msg.time}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 p-3 rounded-lg shadow-sm rounded-tl-none max-w-[70%]">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Напишите сообщение..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button 
          type="submit" 
          className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary-dark transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z"/>
            <path d="M22 2 11 13"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatDemo;