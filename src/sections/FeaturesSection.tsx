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
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-10 mr-10">
          <FeatureCard 
            icon={<MessageSquareIcon />}
            title="Формат чата"
            description="Всё понятно с первого взгляда — пользователь пишет в привычный чат."
          />
          
          <FeatureCard 
            icon={<ZapIcon />}
            title="Запуск за 1 день"
            description="Никаких месяцев настроек и обучения. Просто включили — и уже принимаете обращения."
          />
          
          <FeatureCard 
            icon={<QrCodeIcon />}
            title="Простая авторизация"
            description="Вход через QR-код или Telegram. Никаких форм и паролей"
          />
          
          <FeatureCard 
            icon={<Layers />}
            title="Все обращения в одном месте"
            description="Конец потерянным сообщениям в разных чатах. Всё собрано в одном месте с полной историей."
          />
          
          <FeatureCard 
            icon={<SmartphoneIcon />}
            title="Работает на любом устройстве"
            description="Телефон, планшет, компьютер — доступ к системе с любого устройства без установки программ."
          />
          
          <FeatureCard 
            icon={<Bell />}
            title="Массовые уведомления"
            description="Оперативное информирование пользователей о важных событиях и плановых работах."
          />
          
          <FeatureCard 
            icon={<MessageCircle />}
            title="Работает с Битрикс24 и Telegram"
            description="Передавайте полную историю взаимодействия в CRM и принимайте заявки прямо в Telegram."
          />
          
          <FeatureCard 
            icon={<ClockIcon />}
            title="Контроль скорости ответа"
            description="Следите за тем, как быстро отвечает команда. Никто не останется без внимания."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;