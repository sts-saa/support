import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const CookieWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли согласие на cookie в localStorage
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const openCookiePolicy = () => {
    setIsModalOpen(true);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                Мы используем файлы cookie для того, чтобы сайт support360.ru работал стабильно, а вам было максимально удобно.<br></br>
                Продолжая пользоваться сайтом или нажимая "Принять", вы соглашаетесь на использование всех cookie в соответствии с нашей{' '}
                <button
                  onClick={openCookiePolicy}
                  className="text-primary hover:underline focus:outline-none"
                >
                  Политикой обработки файлов cookie
                </button>
                . Вы всегда можете изменить настройки cookie в своем браузере.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={handleAccept}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Принять
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Политика использования файлов cookie"
      >
        <div className="prose max-w-none text-black">
          <p className="mb-4">
            Сайт  <a href="https://support360.ru/" className="text-primary transition-colors">
            https://support360.ru/ </a> и его поддомены (далее — «Сайт») использует файлы cookie и аналогичные технологии для обеспечения удобства пользователей (далее — «Пользователи»), анализа трафика и улучшения работы сервиса.
          </p>

          <h2 className="text-xl font-bold mb-4">1. Что такое cookie</h2>
          <p className="mb-4">
            Cookie — это небольшой текстовый файл, который сохраняется на вашем устройстве (компьютере, смартфоне, планшете) при посещении сайта. Он помогает:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Распознавать вас при повторных посещениях</li>
            <li>Запоминать ваши предпочтения</li>
            <li>Анализировать использование сайта</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">2. Как мы используем cookie</h2>
          <p className="mb-4">Мы применяем cookie для следующих целей:</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Категория</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Цель</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Примеры cookie</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Можно ли отключить?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Строго необходимые</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Основная функциональность (безопасность, авторизация, корзина)</td>
                  <td className="border border-gray-300 px-4 py-2"><code>session_id</code>, <code>csrftoken</code></td>
                  <td className="border border-gray-300 px-4 py-2">Нет</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Аналитические</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Анализ посещаемости (страницы, время на сайте, ошибки)</td>
                  <td className="border border-gray-300 px-4 py-2"><code>_ga</code>, <code>_gid</code>, <code>_ym_uid</code></td>
                  <td className="border border-gray-300 px-4 py-2">Да</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Функциональные</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Сохранение настроек (язык, регион, размер текста)</td>
                  <td className="border border-gray-300 px-4 py-2"><code>lang</code>, <code>region</code></td>
                  <td className="border border-gray-300 px-4 py-2">Да</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Маркетинговые</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Показ релевантной рекламы, измерение конверсий</td>
                  <td className="border border-gray-300 px-4 py-2"><code>_fbp</code>, <code>_gcl_au</code></td>
                  <td className="border border-gray-300 px-4 py-2">Да</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mb-4">3. Какие cookie мы используем</h2>
          
          <h3 className="text-lg font-semibold mb-2">Строго необходимые cookie</h3>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Название</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Провайдер</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Назначение</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Срок хранения</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>session_id</code></td>
                  <td className="border border-gray-300 px-4 py-2">support360.ru</td>
                  <td className="border border-gray-300 px-4 py-2">Идентификация пользовательской сессии</td>
                  <td className="border border-gray-300 px-4 py-2">Сессия</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>csrftoken</code></td>
                  <td className="border border-gray-300 px-4 py-2">support360.ru</td>
                  <td className="border border-gray-300 px-4 py-2">Защита от межсайтовой подделки запросов</td>
                  <td className="border border-gray-300 px-4 py-2">1 год</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold mb-2">Аналитические cookie</h3>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Название</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Провайдер</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Назначение</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Срок хранения</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>_ga</code></td>
                  <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                  <td className="border border-gray-300 px-4 py-2">Идентификация уникальных посетителей</td>
                  <td className="border border-gray-300 px-4 py-2">2 года</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>_ym_uid</code></td>
                  <td className="border border-gray-300 px-4 py-2">Яндекс.Метрика</td>
                  <td className="border border-gray-300 px-4 py-2">Анализ поведения пользователей</td>
                  <td className="border border-gray-300 px-4 py-2">1 год</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mb-4">4. Управление cookie</h2>
          
          <h3 className="text-lg font-semibold mb-2">4.1. Через наш сайт</h3>
          <p className="mb-4">
            Ваше первоначальное согласие или отказ регистрируются при первом посещении. Для изменения настроек в дальнейшем используйте инструкции из пункта 4.2.
          </p>

          <h3 className="text-lg font-semibold mb-2">4.2. Через настройки браузера</h3>
          <p className="mb-2">Инструкции для популярных браузеров:</p>
          <ul className="list-disc pl-6 mb-4">
            <li> <a href="https://support.google.com/chrome/answer/95647?hl=ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> 
                <strong>Google Chrome</strong> </a> </li>
            <li> <a href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              <strong>Mozilla Firefox</strong></a></li>
            <li> <a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  <strong>Safari</strong> </a></li>
            <li> <a href="https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>Microsoft Edge</strong> </a>
            </li>
          </ul>
          <p className="mb-4">
            <strong>Важно:</strong> Отключение строго необходимых cookie нарушит работу сайта. Вы не сможете авторизоваться или использовать основные функции.
          </p>

          <h2 className="text-xl font-bold mb-4">5. Сторонние сервисы</h2>
          <p className="mb-2">Мы используем следующие сторонние сервисы, которые также устанавливают cookie:</p>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Сервис</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Тип cookie</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Политика конфиденциальности</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                  <td className="border border-gray-300 px-4 py-2">Аналитические</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://policies.google.com/privacy
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Яндекс.Метрика</td>
                  <td className="border border-gray-300 px-4 py-2">Аналитические</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://yandex.ru/legal/confidential/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mb-4">6. Ваши права</h2>
          <p className="mb-2">В соответствии с GDPR и ФЗ-152 вы имеете право:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Отозвать согласие на обработку cookie</li>
            <li>Запросить информацию о хранимых данных</li>
            <li>Требовать удаления ваших данных</li>
          </ul>
          <p className="mb-4">
            Для реализации прав обращайтесь: <a href="mailto:info@support360.ru" className="text-primary transition-colors"> info@support360.ru</a>
          </p>

          <h2 className="text-xl font-bold mb-4">7. Изменения в политике</h2>
          <p className="mb-4">
            Мы регулярно обновляем эту политику. Все изменения вступают в силу с момента публикации на этой странице. При значительных изменениях мы разместим уведомление на главной странице сайта.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default CookieWidget;