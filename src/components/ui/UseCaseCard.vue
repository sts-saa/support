<template>
  <div class="bg-white p-4 md:p-6 shadow-md rounded-xl transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:-translate-y-1">
    <div class="text-primary mb-4 flex justify-center">
      <slot name="icon">
        <component :is="icon" class="w-12 h-12" />
      </slot>
    </div>
    <h3 class="text-lg md:text-xl font-bold mb-3 text-gray-800 text-center min-h-[3rem] flex items-center justify-center">
      {{ title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  icon?: any
}

defineProps<Props>()
</script>