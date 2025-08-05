<template>
  <section id="ai-section" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <SectionTitle center>
        <template #title>
          <span class="text-primary font-bold">Скоро:</span> умный помощник для вашей команды
        </template>
        <template #subtitle>
          Экономит время, решает рутину и помогает отвечать быстрее
        </template>
      </SectionTitle>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ml-10 mr-10">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <BrainIcon class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Автоматическое распределение заявок</h3>
          <p class="text-gray-600 mb-4">
            Анализирует сообщение и определяет тип запроса, срочность и нужного исполнителя.
          </p>
          <div class="bg-gray-50 p-3 rounded text-sm text-gray-700">
            <strong>Результат:</strong> Сотруднику не нужно разбирать заявки вручную
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <ZapIcon class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Быстрые ответы на частые вопросы</h3>
          <p class="text-gray-600 mb-4">
            Проверяет прошлые запросы и предлагает готовый ответ оператору или клиенту.
          </p>
          <div class="bg-gray-50 p-3 rounded text-sm text-gray-700">
            <strong>Результат:</strong> Мгновенное решение повторяющихся запросов
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <SettingsIcon class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Настроить можно простыми словами</h3>
          <p class="text-gray-600 mb-4">
            Просто скажите: "Если пишут про лифт — отправляй в ЖЭК". Система сама настроит правило.
          </p>
          <div class="bg-gray-50 p-3 rounded text-sm text-gray-700">
            <strong>Результат:</strong> Настройка системы без технических знаний
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <BarChartIcon class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Сводка по каждому диалогу</h3>
          <p class="text-gray-600 mb-4">
             Автоматически анализирует диалог и формирует краткое резюме.
          </p>
          <div class="bg-gray-50 p-3 rounded text-sm text-gray-700">
            <strong>Результат:</strong> Мгновенно понимание проблемы без необходимости читать всю переписку.
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <MessageSquareIcon class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Подсказки для сотрудников</h3>
          <p class="text-gray-600 mb-4">
          Генерирует персональный ответ на основе контекста: тип клиента, история обращений, как отвечать лучше.
          </p>
          <div class="bg-gray-50 p-3 rounded text-sm text-gray-700">
            <strong>Результат:</strong> Никаких шаблонных фраз — каждый ответ индивидуален
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <TrendingUpIcon class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Прогноз нагрузки</h3>
          <p class="text-gray-600 mb-4">
            Анализирует пиковые периоды и заранее прогнозирует всплески обращений.
          </p>
          <div class="bg-gray-50 p-3 rounded text-sm text-gray-700">
            <strong>Результат:</strong> Можно заранее усилить смену или включить автоответчик
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 relative ml-10 mr-10"> 
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Личный помощник руководителя
            </h3>
            <p class="text-gray-600 mb-6">
              Система видит всю картину и подсказывает, что можно сделать лучше.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Анализ основных проблем и узких мест</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Рекомендации по улучшению процессов</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Предложения по развитию команды</span>
              </li>
            </ul>
          </div>
          <div class="relative">
            <img
              src="/devices.png" 
              alt="Support360 на разных устройствах" 
              class="w-auto h-auto mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <p class="text-gray-500 italic">Уже в разработке. Запуск в ближайших релизах.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'

// Иконки
const BrainIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4.06 16 2.5 2.5 0 0 1 2 13.5v-1a2.5 2.5 0 0 1 5 0v1a2.5 2.5 0 0 1-2.1 2.46A2.5 2.5 0 0 1 9.5 18c.69 0 1.31-.28 1.76-.73' }),
    h('path', { d: 'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 19.94 16 2.5 2.5 0 0 0 22 13.5v-1a2.5 2.5 0 0 0-5 0v1a2.5 2.5 0 0 0 2.1 2.46A2.5 2.5 0 0 0 14.5 18c-.69 0-1.31-.28-1.76-.73' })
  ])
}

const ZapIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
  ])
}

const SettingsIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' }),
    h('circle', { cx: '12', cy: '12', r: '3' })
  ])
}

const BarChartIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('line', { x1: '12', y1: '20', x2: '12', y2: '10' }),
    h('line', { x1: '18', y1: '20', x2: '18', y2: '4' }),
    h('line', { x1: '6', y1: '20', x2: '6', y2: '16' })
  ])
}

const MessageSquareIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
  ])
}

const TrendingUpIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('polyline', { points: '22 7 13.5 15.5 8.5 10.5 2 17' }),
    h('polyline', { points: '16 7 22 7 22 13' })
  ])
}
</script>