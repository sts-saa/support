<template>
  <section id="support" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <SectionTitle 
        title="Запускается за день. Без интеграторов."
        center
      />

      <div class="bg-white rounded-xl shadow-lg p-8 md:p-12 relative ml-10 mr-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center mr-5">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-primary">1</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Создаёте портал за 15 минут</h2>
            <p class="text-gray-700 text-justify">
              Простой мастер запуска — всё понятно с первого шага.
              Без кода, без ИТ-специалистов. 
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-primary">2</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Подключаете Telegram и сотрудников</h2>
            <p class="text-gray-700 text-justify"> 
              Пользователь сканирует QR-код или переходит по ссылке.
              Дальше — авторизация по номеру в Telegram.
              Всё работает без паролей и порталов.
            </p>
          </div>
          <div class="text-center ml-5">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-primary">3</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Готово к работе</h2>
            <p class="text-gray-700 text-justify">
              Обращения начинают поступать в тот же день.
              Если нужно — подскажем, как адаптировать под ваши задачи.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'
</script>