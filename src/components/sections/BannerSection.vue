<template>
  <section 
    ref="heroRef"
    class="relative min-h-screen bg-gradient-to-br from-secondary via-secondary to-primary flex items-center overflow-hidden"
  >
    <!-- Декоративные элементы -->
    <div class="absolute inset-0 overflow-hidden">
      <div 
        class="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl parallax-element hidden md:block"
        :style="{ transform: `translate3d(${parallax.x * 30}px, ${parallax.y * 30}px, 0)` }"
      />
      <div 
        class="absolute top-1/3 -left-24 w-48 h-48 rounded-full bg-primary/20 blur-3xl parallax-element hidden md:block"
        :style="{ transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 0)` }"
      />
      <div 
        class="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-primary/20 blur-3xl parallax-element hidden md:block"
        :style="{ transform: `translate3d(${parallax.x * 40}px, ${parallax.y * 40}px, 0)` }"
      />
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center">
      <div class="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl">
        <div id="home" class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Техподдержка в формате мессенджера
          </h1>
          <p class="text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
            Support360 — никаких сложных форм и лишних шагов. Только чат — и решение.
          </p>

          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <div class="relative">
              <el-icon class="absolute -top-5 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce">
                <ArrowDown />
              </el-icon>
              <el-button
                @click="openTelegramBot"
                type="primary"
                size="large"
                class="w-full py-3"
              >
                Посмотреть, как работает
              </el-button>
            </div>
            <el-button
              @click="scrollToContact"
              size="large"
              class="w-full !text-white border-white hover:!bg-white/10 py-3"
              plain
            >
              Задать вопрос
            </el-button>
          </div>
        </div>

        <!-- Блок с изображением -->
        <div class="relative w-full h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center md:items-end md:justify-end mt-8 md:mt-0">
          <div 
            class="parallax-element"
            :style="{ transform: `translate3d(${parallax.x * -15}px, ${parallax.y * -15}px, 0)` }"
          >
            <img
              src="/mockup.png"
              alt="Support360 Dashboard"
              class="md:max-w-none md:w-auto h-auto object-contain"
              :style="{ 
                maxHeight: isMobile ? '60vh' : '90vh',
                transform: isMobile ? 'translateX(20%) translateY(25%)' : 'translateX(15%) translateY(15%)'
              }"
            />

            <!-- Информационная плашка -->
            <div 
              class="absolute bg-white p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-xs animate-bounce-slow"
              :style="{ 
                zIndex: 10,
                top: isMobile ? '10px' : '150px',
                right: isMobile ? '80px' : 'auto',
                left: isMobile ? '15%' : '45%',
                transform: `translate3d(${parallax.x * -10}px, ${parallax.y * -10}px, 0)`
              }"
            >
              <div class="flex items-center">
                <el-icon class="text-green-500 text-xl mr-2">
                  <CheckCircle />
                </el-icon>
                <div>
                  <p class="font-semibold text-gray-800 text-sm md:text-base">Запуск за 1 день</p>
                  <p class="text-xs md:text-sm text-gray-600">Внедрение без IT-отдела</p>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { useAppStore } from '../../stores/app'

// Иконка CheckCircle
const CheckCircle = {
  render() {
    return h('svg', {
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
      h('path', { d: 'm9 12 2 2 4-4' }),
      h('circle', { cx: '21', cy: '12', r: '9' })
    ])
  }
}

const appStore = useAppStore()
const heroRef = ref<HTMLElement>()
const parallax = ref({ x: 0, y: 0 })

const isMobile = computed(() => appStore.isMobile)

const handleMouseMove = (e: MouseEvent) => {
  if (!heroRef.value || isMobile.value) return
  
  const { clientX, clientY } = e
  const { width, height, left, top } = heroRef.value.getBoundingClientRect()
  
  const x = (clientX - left) / width - 0.5
  const y = (clientY - top) / height - 0.5
  
  parallax.value = { x, y }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const openTelegramBot = () => {
  window.open('https://t.me/dev_support360_bot', '_blank')
}

onMounted(() => {
  if (!isMobile.value) {
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>