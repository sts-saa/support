<template>
  <button 
    :class="[
      'px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base whitespace-nowrap',
      primary 
        ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl' 
        : 'border-2 border-primary text-primary hover:bg-primary/10',
      className
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  primary: { type: Boolean, default: false },
  className: { type: String, default: '' },
  onClick: { type: Function, default: () => {} }
})
</script>