<template>
  <section id="use-cases" class="py-16 md:py-20">
    <div class="container mx-auto px-4">
      <SectionTitle 
        title="Кому нужен Support360"
        subtitle="Решения для различных сфер бизнеса — от IT-поддержки до гостиничного сервиса"
        center
      />

      <!-- Сетка карточек кейсов -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ml-10 mr-10">
        <div 
          v-for="(useCase, index) in useCases" 
          :key="index" 
          class="flex flex-col h-full"
        >
          <div
            data-use-case-card
            @click="handleCardClick(index)"
            :class="[
              'cursor-pointer rounded-xl transition-all duration-300 h-full transform hover:-translate-y-1',
              selectedCase.title === useCase.title ? 'ring-2 ring-primary' : ''
            ]"
          >
            <UseCaseCard
              :title="useCase.title"
            >
              <template #icon>
                <component :is="useCase.icon" />
              </template>
            </UseCaseCard>
          </div>

          <!-- Выпадающий контент для мобильных устройств -->
          <div 
            v-if="isMobile && expandedMobileCard === index" 
            class="mt-2 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-2">{{ useCase.example.title }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ useCase.example.description }}</p>
              <ul class="space-y-1">
                <li v-for="(feature, i) in useCase.example.features" :key="i" class="flex items-start">
                  <svg class="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>
            <div class="bg-primary-dark relative h-40">
              <img
                :src="useCase.example.image"
                :alt="`Использование Support360 в ${useCase.title}`" 
                class="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
              <div class="absolute inset-0 flex items-center justify-center p-4">
                <div class="bg-white/90 p-4 rounded shadow max-w-xs">
                  <div class="flex items-center mb-2">
                    <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                      <span class="text-white text-sm font-bold">S</span>
                    </div>
                    <div>
                      <p class="font-semibold text-sm">Support360</p>
                      <p class="text-xs text-gray-600">{{ useCase.title }}</p>
                    </div>
                  </div>
                  <p class="text-gray-800 text-sm mb-2">Добрый день! Чем могу помочь?</p>
                  <div class="bg-primary/10 p-2 rounded text-primary text-xs">
                    {{ useCase.example.message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Детальный просмотр для десктопа -->
      <div v-if="!isMobile" class="mt-5 ml-10 mr-10 relative">
        <!-- Индикаторы активного кейса -->
        <div class="text-center space-x-2">
          <button
            v-for="(_, index) in useCases"
            :key="index"
            @click="handleCardClick(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-200',
              selectedIndex === index ? 'bg-primary scale-110' : 'bg-gray-300'
            ]"
            :aria-label="`Перейти к кейсу ${index + 1}`"
          />
        </div>

        <div class="mt-5">
          <!-- Кнопки навигации -->
          <button
            @click="handlePrevious"
            class="absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110"
            aria-label="Предыдущий кейс"
          >
            <ChevronLeftIcon class="w-10 h-10 text-gray-700" />
          </button>
          
          <button
            @click="handleNext"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110"
            aria-label="Следующий кейс"
          >
            <ChevronRightIcon class="w-10 h-10 text-gray-700" />
          </button>

          <div class="bg-gray-50 rounded-xl overflow-hidden shadow-md ml-10 mr-10 relative">            
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-8 md:p-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ selectedCase.example.title }}</h3>
                <p class="text-gray-600 mb-6">{{ selectedCase.example.description }}</p>
                <ul class="space-y-3">
                  <li v-for="(feature, index) in selectedCase.example.features" :key="index" class="flex items-start">
                    <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <div class="bg-primary-dark relative min-h-[300px]">                      
                <img
                  :src="selectedCase.example.image"
                  :alt="`Использование Support360 в ${selectedCase.title}`" 
                  class="absolute inset-0 w-full h-full object-cover opacity-50"
                  loading="lazy"
                />

                <div class="absolute inset-0 flex items-center justify-center p-8">
                  <div class="bg-white/90 p-6 rounded-lg shadow-lg max-w-sm">
                    <div class="flex items-center mb-4">
                      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                        <span class="text-white font-bold">S</span>
                      </div>
                      <div>
                        <p class="font-semibold">Support360</p>
                        <p class="text-xs text-gray-600">{{ selectedCase.title }}</p>
                      </div>
                    </div>
                    <p class="text-gray-800 mb-4">Добрый день! Чем могу помочь?</p>
                    <div class="bg-primary/10 p-3 rounded text-primary text-sm">
                      {{ selectedCase.example.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'
import UseCaseCard from '../ui/UseCaseCard.vue'
import { useAppStore } from '../../stores/app'

// Импорты изображений
import itImage from '/it.jpeg'
import eventImage from '/event.jpg'
import hotelImage from '/hotel.jpeg'
import apartmentsImage from '/apartments.jpg'

// Иконки
const ServerIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('rect', { x: '2', y: '2', width: '20', height: '8', rx: '2', ry: '2' }),
    h('rect', { x: '2', y: '14', width: '20', height: '8', rx: '2', ry: '2' }),
    h('line', { x1: '6', y1: '6', x2: '6.01', y2: '6' }),
    h('line', { x1: '6', y1: '18', x2: '6.01', y2: '18' })
  ])
}

const CalendarIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', ry: '2' }),
    h('line', { x1: '16', y1: '2', x2: '16', y2: '6' }),
    h('line', { x1: '8', y1: '2', x2: '8', y2: '6' }),
    h('line', { x1: '3', y1: '10', x2: '21', y2: '10' })
  ])
}

const BuildingIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('rect', { x: '4', y: '2', width: '16', height: '20', rx: '2', ry: '2' }),
    h('path', { d: 'M9 22v-4h6v4' }),
    h('path', { d: 'M8 6h.01' }),
    h('path', { d: 'M16 6h.01' }),
    h('path', { d: 'M12 6h.01' }),
    h('path', { d: 'M12 10h.01' }),
    h('path', { d: 'M12 14h.01' }),
    h('path', { d: 'M16 10h.01' }),
    h('path', { d: 'M16 14h.01' }),
    h('path', { d: 'M8 10h.01' }),
    h('path', { d: 'M8 14h.01' })
  ])
}

const HomeIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
    h('polyline', { points: '9 22 9 12 15 12 15 22' })
  ])
}

const ChevronLeftIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '40',
    height: '40',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('polyline', { points: '15 18 9 12 15 6' })
  ])
}

const ChevronRightIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '40',
    height: '40',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('polyline', { points: '9 18 15 12 9 6' })
  ])
}

const useCases = [
  {
    icon: ServerIcon,
    title: "IT-поддержка",
    example: {
      title: "Поддержка без хаоса",
      description: "Одно окно для любых обращений. Просто пишете в чат — без форм, лишних шагов и долгих инструкций. Система сама определяет суть запроса и направляет его нужному специалисту с помощью ИИ. Каждое обращение фиксируется - всё решается, ничего не теряется!",
      features: [
        "Умная классификация запросов: техника, сервисы, доступы, вопросы по объектам",
        "Интеграции с вашими системами: CRM, Active Directory и др.",
        "Поддержка, которая знает ответы на частые вопросы — система отвечает сама, без участия специалистов",
        "Полный контроль обращений: от сотрудников, жильцов, гостей, участников — всё видно, всё отслеживается"
      ],
      message: "Сотрудник: Петров П.П., Отдел: Бухгалтерия",
      image: itImage
    }
  },
  {
    icon: CalendarIcon,
    title: "Мероприятия и конференции",
    example: {
      title: "1000 гостей — и каждый получает помощь",
      description: "Участники сканируют QR-код, попадают в чат и получают быстрые ответы. Навигация, техника, помощь — всё в одном месте.",
      features: [
        "Персональная поддержка каждого участника",
        "Координация команды помощников",
        "Навигация по площадке мероприятия",
        "Сбор отзывов в реальном времени"
      ],
      message: "Участник: Козлов К.К., Мероприятие: TechConf2024",
      image: eventImage
    }
  },
  {
    icon: BuildingIcon,
    title: "Гостиницы и отели",
    example: {
      title: "Гости решают проблемы, не выходя из номера",
      description: "Гость сканирует QR-код в номере и пишет в чат. Система знает номер комнаты и тип обращения, сотрудники видят задачу мгновенно.",
      features: [
        "Мгновенное определение номера и гостя",
        "Автоматическая передача: техслужба, консьерж, администрация",
        "Контроль времени ответа персонала",
        "Статистика по типам обращений для улучшения сервиса"
      ],
      message: "Местоположение: Номер 305, Гость: Иванов И.И.",
      image: hotelImage
    }
  },
  {
    icon: HomeIcon,
    title: "ЖКХ и управляющие компании",
    example: {
      title: "Жители пишут — задачи создаются сами",
      description: "Жильцы сканируют QR-код и пишут в чат. Система определяет адрес и тип запроса, создаёт задачу автоматически.",
      features: [
        "Автоматическое определение адреса и квартиры",
        "Создание заданий на работу одной кнопкой",
        "Уведомления о плановых отключениях",
        "Контроль качества работ через обратную связь"
      ],
      message: "Местоположение: ул. Ленина 15, кв. 128",
      image: apartmentsImage
    }
  }
]

const appStore = useAppStore()
const selectedCase = ref(useCases[0])
const selectedIndex = ref(0)
const expandedMobileCard = ref<number | null>(0)
const isMobile = computed(() => appStore.isMobile)

const handleCardClick = (index: number) => {
  selectedCase.value = useCases[index]
  selectedIndex.value = index
  if (isMobile.value) {
    expandedMobileCard.value = expandedMobileCard.value === index ? null : index
  }
}

const handlePrevious = () => {
  const newIndex = selectedIndex.value > 0 ? selectedIndex.value - 1 : useCases.length - 1
  selectedIndex.value = newIndex
  selectedCase.value = useCases[newIndex]
}

const handleNext = () => {
  const newIndex = selectedIndex.value < useCases.length - 1 ? selectedIndex.value + 1 : 0
  selectedIndex.value = newIndex
  selectedCase.value = useCases[newIndex]
}

onMounted(() => {
  appStore.checkMobile()
})
</script>