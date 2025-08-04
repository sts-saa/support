<template>
  <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex-1">
          <p class="text-sm text-gray-700">
            Мы используем файлы cookie для того, чтобы сайт support360.ru работал стабильно, а вам было максимально удобно.<br>
            Продолжая пользоваться сайтом или нажимая "Принять", вы соглашаетесь на использование всех cookie в соответствии с нашей
            <el-button 
              type="primary" 
              link 
              @click="showCookiePolicy = true"
              class="p-0 h-auto"
            >
              Политикой обработки файлов cookie
            </el-button>
            . Вы всегда можете изменить настройки cookie в своем браузере.
          </p>
        </div>
        <div class="flex-shrink-0">
          <el-button
            @click="handleAccept"
            type="primary"
            size="large"
          >
            Принять
          </el-button>
        </div>
      </div>
    </div>
  </div>

  <!-- Модальное окно политики cookie -->
  <el-dialog
    v-model="showCookiePolicy"
    title="Политика использования файлов cookie"
    width="80%"
    :before-close="handleCloseCookiePolicy"
  >
    <div class="prose max-w-none text-black max-h-96 overflow-y-auto">
      <p class="mb-4">
        Сайт <el-link href="https://support360.ru/" type="primary">https://support360.ru/</el-link> 
        и его поддомены (далее — «Сайт») использует файлы cookie и аналогичные технологии для обеспечения удобства пользователей (далее — «Пользователи»), анализа трафика и улучшения работы сервиса.
      </p>

      <h2 class="text-xl font-bold mb-4">1. Что такое cookie</h2>
      <p class="mb-4">
        Cookie — это небольшой текстовый файл, который сохраняется на вашем устройстве (компьютере, смартфоне, планшете) при посещении сайта. Он помогает:
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Распознавать вас при повторных посещениях</li>
        <li>Запоминать ваши предпочтения</li>
        <li>Анализировать использование сайта</li>
      </ul>

      <!-- Остальной контент политики cookie -->
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const showCookiePolicy = ref(false)

const handleAccept = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  isVisible.value = false
}

const handleCloseCookiePolicy = () => {
  showCookiePolicy.value = false
}

onMounted(() => {
  const cookieConsent = localStorage.getItem('cookieConsent')
  if (!cookieConsent) {
    isVisible.value = true
  }
})
</script>