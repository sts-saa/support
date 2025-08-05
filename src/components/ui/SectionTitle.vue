<template>
  <div :class="['mb-12', { 'text-center': center }]">
    <h2 :class="[
      'text-3xl md:text-4xl font-bold mb-4 leading-tight',
      light ? 'text-white' : 'text-gray-900'
    ]">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="subtitle || $slots.subtitle" :class="[
      'text-lg',
      light ? 'text-gray-200' : 'text-gray-600'
    ]">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

withDefaults(defineProps<Props>(), {
  center: false,
  light: false
})
</script>