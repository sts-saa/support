import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import { 
  MessageSquareIcon,
  PieChartIcon,
  SmartphoneIcon,
  ZapIcon,
  ClockIcon,
  SettingsIcon,
  QrCodeIcon,
  MessageCircle,
  Bell,
  Layers
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Функции Support360"
          subtitle="Мощный инструмент технической поддержки в формате привычного мессенджера"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <FeatureCard 
            icon={<MessageSquareIcon />}
            title="Общение как в мессенджере"
            description="Привычный формат чата без сложных форм и заявок."
          />
          
          <FeatureCard 
            icon={<PieChartIcon />}
            title="Аналитика диалогов"
            description="Отслеживайте эффективность работы операторов, анализируйте удовлетворенность клиентов и выявляйте повторяющиеся сбои."
          />
          
          <FeatureCard 
            icon={<SmartphoneIcon />}
            title="Без установки"
            description="Работает на любых устройствах без установки дополнительного ПО. Достаточно интернет-браузера."
          />
          
          <FeatureCard 
            icon={<ZapIcon />}
            title="Высокая скорость"
            description="Мгновенная обработка запросов и автоматическая маршрутизация для быстрого решения проблем."
          />
          
          <FeatureCard 
            icon={<QrCodeIcon />}
            title="Простая авторизация"
            description="Сканируйте QR-код или войдите через Telegram, чтобы мгновенно начать общение с поддержкой."
          />
          
          <FeatureCard 
            icon={<Layers />}
            title="Систематизация обращений"
            description="Снимает необходимость контролировать множество чатов и исключает возможность потери обращений."
          />
          
          <FeatureCard 
            icon={<Bell />}
            title="Оповещение об инцидентах"
            description="Своевременное уведомление пользователей о массовых проблемах."
          />
          
          <FeatureCard 
            icon={<MessageCircle />}
            title="Интеграция с Telegram"
            description="Обращения и решения вопросов в пару кликов — прямо из Telegram."
          />
          
          <FeatureCard 
            icon={<ClockIcon />}
            title="Контроль SLA"
            description="Отслеживание и анализ времени ответа и решения вопросов в соответствии с вашими внутренними стандартами."
          />

          <FeatureCard 
            icon={<SettingsIcon />}
            title="Гибкая настройка"
            description="Адаптация под конкретные бизнес-процессы и потребности вашей компании."
          />

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;