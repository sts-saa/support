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
          title="Почему выбирают Support360"
          subtitle="Мы убрали всё лишнее — оставили только главное: диалог, автоматизацию внутри, простоту снаружи"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ml-10 mr-10">
          <FeatureCard 
            icon={<MessageSquareIcon />}
            title="Как мессенджер, но с умом"
            description="Клиенты пишут как в WhatsApp, а система автоматически превращает это в тикет с нужным приоритетом и исполнителем."
          />
          
          <FeatureCard 
            icon={<ZapIcon />}
            title="Мгновенный старт"
            description="15 минут — и вы уже принимаете заявки. Никаких месяцев внедрения, обучений и настроек."
          />
          
          <FeatureCard 
            icon={<QrCodeIcon />}
            title="Вход без регистрации"
            description="QR-код или Telegram — клиент сразу попадает в нужный чат. Никаких форм и паролей."
          />
          
          <FeatureCard 
            icon={<Layers />}
            title="Единая база всех обращений"
            description="Конец потерянным сообщениям в разных чатах. Всё в одном месте с полной историей."
          />
          
          <FeatureCard 
            icon={<SmartphoneIcon />}
            title="Работает везде"
            description="Браузер, телефон, планшет — доступ к системе с любого устройства без установки приложений."
          />
          
          <FeatureCard 
            icon={<Bell />}
            title="Умные уведомления"
            description="Система сама напомнит о просроченных заявках и оповестит клиентов о важных событиях."
          />
          
          <FeatureCard 
            icon={<MessageCircle />}
            title="Интеграция с Telegram"
            description="Принимайте заявки прямо в Telegram — там, где ваши клиенты уже общаются."
          />
          
          <FeatureCard 
            icon={<ClockIcon />}
            title="Контроль качества"
            description="Автоматический мониторинг времени реакции и решения. SLA под контролем без лишних усилий."
          />

          <FeatureCard 
            icon={<PieChartIcon />}
            title="Аналитика в реальном времени"
            description="Видите узкие места, пиковые нагрузки и эффективность команды. Данные для принятия решений."
          />

          <FeatureCard 
            icon={<SettingsIcon />}
            title="Настройка без программиста"
            description="Просто скажите системе: 'Если пишут про лифт — отправляй ЖЭКу'. ИИ сам настроит правило."
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Результат: ваша поддержка работает как часы
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Клиенты довольны быстрыми ответами, операторы не тонут в хаосе, а вы видите полную картину работы службы поддержки.
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