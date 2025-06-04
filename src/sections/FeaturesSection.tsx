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
          title="Почему бизнес выбирает Support360"
          subtitle="Современное решение, которое трансформирует техническую поддержку в мощный инструмент развития бизнеса"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ml-10 mr-10">
          <FeatureCard 
            icon={<MessageSquareIcon />}
            title="Привычный формат общения"
            description="Клиенты общаются в знакомом интерфейсе мессенджера, что повышает скорость решения проблем на 75%."
          />
          
          <FeatureCard 
            icon={<PieChartIcon />}
            title="Аналитика в реальном времени"
            description="Отслеживайте ключевые метрики, выявляйте узкие места и принимайте данные решения для улучшения сервиса."
          />
          
          <FeatureCard 
            icon={<SmartphoneIcon />}
            title="Работает везде"
            description="Мгновенный доступ с любого устройства через браузер. Никаких установок и сложных настроек."
          />
          
          <FeatureCard 
            icon={<ZapIcon />}
            title="Мгновенная маршрутизация"
            description="Автоматическое распределение запросов нужным специалистам для быстрого решения проблем."
          />
          
          <FeatureCard 
            icon={<QrCodeIcon />}
            title="Умная авторизация"
            description="Вход через QR-код или Telegram для мгновенного начала общения без лишних регистраций."
          />
          
          <FeatureCard 
            icon={<Layers />}
            title="Единая база обращений"
            description="Все запросы в одном месте. Никаких потерянных сообщений и пропущенных обращений."
          />
          
          <FeatureCard 
            icon={<Bell />}
            title="Массовые уведомления"
            description="Оперативное информирование пользователей о важных событиях и плановых работах."
          />
          
          <FeatureCard 
            icon={<MessageCircle />}
            title="Интеграция с Telegram"
            description="Принимайте и обрабатывайте обращения прямо в Telegram без дополнительных приложений."
          />
          
          <FeatureCard 
            icon={<ClockIcon />}
            title="Контроль качества"
            description="Мониторинг времени реакции и решения для соответствия вашим стандартам качества."
          />

          <FeatureCard 
            icon={<SettingsIcon />}
            title="Гибкая настройка"
            description="Адаптация под ваши бизнес-процессы без привлечения программистов."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;