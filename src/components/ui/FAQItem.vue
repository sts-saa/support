<template>
  <div class="border-b border-gray-200 last:border-b-0">
    <button
      @click="isOpen = !isOpen"
      class="flex justify-between items-center w-full py-4 text-left text-gray-800 hover:text-primary focus:outline-none transition-colors"
    >
      <span class="font-semibold">{{ question }}</span>
      <el-icon :class="['transform transition-transform', { 'rotate-180': isOpen }]">
        <ArrowDown />
      </el-icon>
    </button>
    <div :class="[
      'overflow-hidden transition-all duration-300',
      isOpen ? 'max-h-96 pb-4' : 'max-h-0'
    ]">
      <p class="text-gray-600">
        <span v-for="(line, i) in answer.split('\n')" :key="i">
          {{ line }}
          <br v-if="i < answer.split('\n').length - 1" />
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

interface Props {
  question: string
  answer: string
}

defineProps<Props>()

const isOpen = ref(false)
</script>