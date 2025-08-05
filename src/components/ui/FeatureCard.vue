<template>
  <div :class="[
    'bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
    className
  ]">
    <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
      <slot name="icon">
        <component :is="icon" class="w-6 h-6" />
      </slot>
    </div>
    <h3 class="text-xl font-bold mb-2 text-gray-800">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon?: any
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: ''
})
</script>