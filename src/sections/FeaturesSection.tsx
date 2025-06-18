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
          subtitle="Просто, быстро, понятно"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-10 mr-10">
          <FeatureCard 
            icon={<MessageSquareIcon />}
            title="Формат чата"
            description="Клиенты пишут в чат, а система сама превращает это в заявку и передаёт нужному сотруднику."
          />
          
          <FeatureCard 
            icon={<ZapIcon />}
            title="Запуск за 15 минут"
            description="Никаких месяцев настроек и обучения. Просто включили — и уже принимаете обращения."
          />
          
          <FeatureCard 
            icon={<QrCodeIcon />}
            title="Вход без регистрации"
            description="Клиент сканирует код или переходит по ссылке — и сразу попадает в чат. Никаких паролей."
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
            title="Умные напоминания"
            description="Система сама напомнит о важных заявках и сообщит клиентам о решении проблемы."
          />
          
          <FeatureCard 
            icon={<MessageCircle />}
            title="Работает с Telegram"
            description="Принимайте заявки прямо в Telegram — там, где ваши клиенты уже общаются."
          />
          
          <FeatureCard 
            icon={<ClockIcon />}
            title="Контроль скорости ответа"
            description="Видите, как быстро отвечает команда. Никто не останется без внимания."
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Результат: ваша поддержка работает как часы
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Клиенты довольны быстрыми ответами, сотрудники не тонут в хаосе, а вы видите полную картину работы.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <div className="text-gray-600">быстрее обработка</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-gray-600">потерянных заявок</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15 мин</div>
                <div className="text-gray-600">до запуска</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;