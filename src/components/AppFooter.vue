<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div class="md:col-span-2 ml-10">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
              <el-icon class="text-white text-xl">
                <LifebuoyIcon />
              </el-icon>
            </div>
            <div>
              <span class="font-bold text-2xl">Support360</span>
              <p class="text-gray-400 text-sm">Поддержка нового поколения</p>
            </div>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
            Превращаем хаос заявок в простой диалог.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <div class="flex items-center text-light">
              <el-icon class="mr-2">
                <ZapIcon />
              </el-icon>
              <span class="font-semibold">Запуск за 1 день</span>
            </div>
            <div class="flex items-center text-light">
              <el-icon class="mr-2">
                <ClockIcon />
              </el-icon>
              <span class="font-semibold">Без месяцев обучения</span>
            </div>
          </div>
          
          <div class="flex space-x-4">
            <el-button
              @click="openTelegramBot"
              type="primary"
              size="large"
            >
              Посмотреть, как работает
            </el-button>
            <el-button
              @click="scrollToContact"
              size="large"
              class="border-primary text-primary hover:bg-primary/10"
              plain
            >
              Задать вопрос
            </el-button>
          </div>
        </div>

        <!-- Остальные колонки футера -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Решение</h3>
          <ul class="space-y-3">
            <li v-for="item in solutionLinks" :key="item.href">
              <el-button 
                @click="scrollToSection(item.href)" 
                link 
                class="text-gray-400 hover:text-white p-0 h-auto text-left"
              >
                {{ item.label }}
              </el-button>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-6">Сферы применения</h3>
          <ul class="space-y-3">
            <li v-for="(item, index) in useCaseLinks" :key="index">
              <el-button 
                @click="scrollToUseCaseAndSelect(index)" 
                link 
                class="text-gray-400 hover:text-white p-0 h-auto text-left"
              >
                {{ item }}
              </el-button>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-6">Контакты</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <el-icon class="text-gray-400 mr-3 mt-0.5 flex-shrink-0">
                <BuildingIcon />
              </el-icon>
              <div>
                <p class="text-white font-medium">ООО "ИТ Лаборатория"</p>
                <p class="text-gray-400 text-sm">Разработчик Support360</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <el-icon class="text-gray-400 mr-3 mt-0.5 flex-shrink-0">
                <PhoneIcon />
              </el-icon>
              <div>
                <el-link href="tel:+73833838004" class="text-white hover:text-primary">
                  +7 (383) 383-80-04
                </el-link>
                <p class="text-gray-400 text-sm">Пн-Вс: 9:00-18:00 (НСК)</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <el-icon class="text-gray-400 mr-3 mt-0.5 flex-shrink-0">
                <MailIcon />
              </el-icon>
              <div>
                <el-link href="mailto:info@support360.ru" class="text-white hover:text-primary">
                  info@support360.ru
                </el-link>
              </div>
            </li>
            
            <li class="flex items-start">
              <el-icon class="text-gray-400 mr-3 mt-0.5 flex-shrink-0">
                <LocationIcon />
              </el-icon>
              <div>
                <p class="text-white">Новосибирск</p>
                <p class="text-gray-400 text-sm">ул. Большевистская, 97</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-800 ml-10 mr-10">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left mb-4 md:mb-0">
            <p class="text-gray-400">
              &copy; {{ new Date().getFullYear() }} Support360. Все права защищены.
            </p>
            <p class="text-gray-500 text-sm mt-1">
              Превращаем хаос заявок в простой диалог с 2024 года
            </p>
          </div>
          
          <div class="flex items-center space-x-6 text-sm">
            <el-button 
              @click="showPrivacyModal = true"
              link
              class="text-gray-400 hover:text-white p-0 h-auto"
            >
              Политика конфиденциальности
            </el-button>
            <el-button 
              @click="showUserAgreementModal = true"
              link
              class="text-gray-400 hover:text-white p-0 h-auto"
            >
              Пользовательское соглашение
            </el-button>
          </div>
        </div>
        
        <div class="mt-8 text-center">
          <el-button
            @click="scrollToContact"
            class="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 max-w-2xl mx-auto block hover:from-primary/30 hover:to-secondary/30"
            text
          >
            <p class="text-white font-medium mb-2">
              🚀 Хватит терять клиентов из-за плохой поддержки
            </p>
            <p class="text-gray-300 text-sm">
              Запустите Support360 сегодня. Без обучения. Без ожиданий.
            </p>
          </el-button>
        </div>
      </div>
    </div>

    <!-- Модальные окна -->
    <el-dialog
      v-model="showPrivacyModal"
      title="Политика в отношении обработки персональных данных"
      width="80%"
    >
      <!-- Контент политики конфиденциальности -->
    </el-dialog>

    <el-dialog
      v-model="showUserAgreementModal"
      title="Пользовательское соглашение"
      width="80%"
    >
      <!-- Контент пользовательского соглашения -->
    </el-dialog>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Иконки
const LifebuoyIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('circle', { cx: '12', cy: '12', r: '10' }),
      h('circle', { cx: '12', cy: '12', r: '4' }),
      h('line', { x1: '4.93', y1: '4.93', x2: '9.17', y2: '9.17' }),
      h('line', { x1: '14.83', y1: '14.83', x2: '19.07', y2: '19.07' }),
      h('line', { x1: '14.83', y1: '9.17', x2: '19.07', y2: '4.93' }),
      h('line', { x1: '4.93', y1: '19.07', x2: '9.17', y2: '14.83' })
    ])
  }
}

const ZapIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
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
}

const ClockIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('circle', { cx: '12', cy: '12', r: '10' }),
      h('polyline', { points: '12 6 12 12 16 14' })
    ])
  }
}

const BuildingIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
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
}

const PhoneIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
    ])
  }
}

const MailIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
      h('polyline', { points: '22,6 12,13 2,6' })
    ])
  }
}

const LocationIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
      h('circle', { cx: '12', cy: '10', r: '3' })
    ])
  }
}

const showPrivacyModal = ref(false)
const showUserAgreementModal = ref(false)

const solutionLinks = [
  { href: 'use-cases', label: 'Применение' },
  { href: 'features', label: 'Возможности' },
  { href: 'workflow', label: 'Как работает' },
  { href: 'statistics', label: 'Результаты' },
  { href: 'service-history', label: 'История создания' },
  { href: 'ai-section', label: 'Умный помощник' },
  { href: 'faq', label: 'Частые вопросы' }
]

const useCaseLinks = [
  'IT-поддержка',
  'Мероприятия и конференции',
  'Гостиницы и отели',
  'ЖКХ и управляющие компании'
]

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToUseCaseAndSelect = (caseIndex: number) => {
  const useCasesSection = document.getElementById('use-cases')
  if (useCasesSection) {
    useCasesSection.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      const cards = document.querySelectorAll('[data-use-case-card]')
      if (cards[caseIndex]) {
        (cards[caseIndex] as HTMLElement).click()
      }
    }, 500)
  }
}

const openTelegramBot = () => {
  window.open('https://t.me/dev_support360_bot', '_blank')
}
</script>