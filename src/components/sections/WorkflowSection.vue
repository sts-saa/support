<template>
  <section id="workflow" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <SectionTitle 
        title="Один чат — и всё под контролем"
        subtitle="Простой процесс от обращения до решения проблемы"
        center
      />
      
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12 ml-10 mr-10">
        <div class="lg:w-1/2">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Пример работы</h3>
          <div class="mt-8 space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-xl text-gray-800 mb-2">Клиент сканирует QR и пишет в привычный чат</h3>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-xl text-gray-800 mb-2">Система понимает, с чем обращение, и сразу передаёт его нужному специалисту</h3>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-xl text-gray-800 mb-2">Сотрудник отвечает быстро — система подсказывает</h3>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-xl text-gray-800 mb-2">Вся переписка сохраняется. Обращения не теряются.</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Пример диалога</h3>
            <ChatDemo />
            <p class="text-gray-600 mt-6 text-sm">
              В примере гость отеля сообщает о проблеме с кондиционером. 
              Система автоматически создаёт заявку, определяет номер комнаты и направляет техническому специалисту.
            </p> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'
import ChatDemo from '../ui/ChatDemo.vue'
</script>