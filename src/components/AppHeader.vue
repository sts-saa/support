<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <button 
        @click="refreshPage"
        class="flex items-center hover:opacity-80 transition-opacity"
      >
        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
          <LifebuoyIcon class="w-6 h-6 text-white" />
        </div>
        <div class="flex flex-col">
          <span :class="[
            'font-bold text-xl',
            isScrolled ? 'text-primary' : 'text-white'
          ]">
            Support360
          </span>
        </div>
      </button>
      
      <nav class="hidden md:flex items-center space-x-6 mr-5 ml-5">
        <a 
          v-for="item in navItems" 
          :key="item.href"
          :href="item.href" 
          :class="[
            'text-sm font-medium hover:text-primary transition-colors',
            isScrolled ? 'text-gray-800' : 'text-white'
          ]"
        >
          {{ item.label }}
        </a>
      </nav>
      
      <div class="hidden md:flex items-center space-x-3 mr-10">
        <el-button 
          @click="openLogin"
          :class="[
            'text-sm px-4 py-2',
            isScrolled 
              ? '!bg-transparent !text-primary border-2 border-primary hover:!bg-primary/10' 
              : '!bg-white/10 !text-white border-2 border-white/30 hover:!bg-white/20 backdrop-blur-sm'
          ]"
          plain
        >
          Вход/Регистрация
        </el-button>
        <el-button 
          @click="scrollToContact"
          type="primary"
          class="text-sm px-4 py-2"
        >
          Оставить заявку
        </el-button>
      </div>
      
      <el-button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden text-2xl !p-2"
        text
      >
        <el-icon :color="isScrolled ? '#000000' : '#ffffff'">
          <component :is="isMobileMenuOpen ? Close : Menu" />
        </el-icon>
      </el-button>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg absolute w-full">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a 
          v-for="item in navItems"
          :key="item.href"
          :href="item.href" 
          class="font-medium py-2 hover:text-primary border-b border-gray-100"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
        
        <div class="pt-4 space-y-3">
          <el-button 
            @click="openLogin" 
            class="!bg-transparent !text-primary border-2 border-primary hover:!bg-primary/10 w-full"
            plain
          >
            Вход/Регистрация
          </el-button>
          <el-button 
            @click="scrollToContact" 
            type="primary"
            class="w-full"
          >
            Оставить заявку
          </el-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, Close } from '@element-plus/icons-vue'

const LifebuoyIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2.5',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'w-7 h-7'
  }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('circle', { cx: '12', cy: '12', r: '4' }),
    h('line', { x1: '4.93', y1: '4.93', x2: '9.17', y2: '9.17' }),
    h('line', { x1: '14.83', y1: '14.83', x2: '19.07', y2: '19.07' }),
    h('line', { x1: '14.83', y1: '9.17', x2: '19.07', y2: '4.93' }),
    h('line', { x1: '4.93', y1: '19.07', x2: '9.17', y2: '14.83' })
  ])
}

const navItems = [
  { href: '#use-cases', label: 'Применение' },
  { href: '#features', label: 'Возможности' },
  { href: '#workflow', label: 'Как работает' },
  { href: '#statistics', label: 'Результаты' },
  { href: '#service-history', label: 'История' },
  { href: '#ai-section', label: 'Умный помощник' },
  { href: '#faq', label: 'Вопросы' }
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const openLogin = () => {
  window.open('https://support360.ru/login', '_blank')
}

const refreshPage = () => {
  window.location.reload()
  window.scrollTo(0, 0)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>