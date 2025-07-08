import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import { 
  MessageSquareIcon,
  SmartphoneIcon,
  ZapIcon,
  ClockIcon,
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
          title="Почему выбирают Support360"
          subtitle="Современные возможности для эффективной поддержки клиентов"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-10 mr-10">
          <FeatureCard 
            icon={<MessageSquareIcon />}
            title="Формат чата"
            description="Просто пишите в чат или Telegram — без форм и выбора категорий."
          />
          
          <FeatureCard 
            icon={<ZapIcon />}
            title="Запуск за 1 день"
            description="Никаких интеграций на месяцы. Подключили — и уже принимаете обращения."
          />
          
          <FeatureCard 
            icon={<QrCodeIcon />}
            title="Простая авторизация"
            description="Вход через QR-код или Telegram. Без логинов, паролей и лишних действий."
          />
          
          <FeatureCard 
            icon={<Layers />}
            title="Все обращения в одном месте"
            description="Ничего не теряется в личных сообщениях и группах. Вся история обращений хранится централизованно."
          />
          
          <FeatureCard 
            icon={<SmartphoneIcon />}
            title="Работает на любом устройстве"
            description="Телефон, планшет, ноутбук — ничего не нужно устанавливать. Авторизация в 2 клика."
          />
          
          <FeatureCard 
            icon={<Bell />}
            title="Массовые уведомления"
            description="Сообщайте о сбоях, изменениях и новостях. Доставляется быстро, без ручной рассылки."
          />
          
          <FeatureCard 
            icon={<MessageCircle />}
            title="Интеграция с Telegram и CRM"
            description="Упрощённый вход без логинов и паролей. Идентификация по номеру и связь с профилем в CRM."
          />
          
          <FeatureCard 
            icon={<ClockIcon />}
            title="Контроль скорости ответа"
            description="Следите, кто и как отвечает на обращения. Ни один запрос не останется без внимания."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;