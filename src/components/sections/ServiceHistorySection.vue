<template>
  <section id="service-history" class="py-20">
    <div class="container mx-auto px-4">
      <SectionTitle 
        title="Мы сделали такую поддержку, какой пользуемся сами"
        center
      />
      
      <div class="max-w-4xl mx-auto transition-all duration-500 overflow-hidden">
        <div class="bg-primary/10 rounded-xl p-8 md:p-12">
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 mb-6 text-xl">
              Без порталов, сложных систем и бюрократии. Просто диалог — и решение.
            </p>

            <div class="border-l-4 border-gray-400 pl-4 my-6 italic">
              <p class="text-gray-800 text-xl">
                Каждый день наши специалисты отвечают клиентам через Support360. <br />
                Поэтому мы знаем: простота работает.
              </p>
            </div>

            <p class="text-gray-700 text-xl">
              Человек пишет — человек получает ответ. Остальное — автоматизация.
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