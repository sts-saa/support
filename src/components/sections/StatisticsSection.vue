<template>
  <section 
    ref="elementRef"
    class="py-20 bg-primary text-white"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Результат: всегда довольный клиент
        </h2>
        <p class="text-lg">
          На основе данных Support360
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatisticItem 
          v-for="(stat, index) in statistics" 
          :key="index" 
          :stat="stat" 
          :is-visible="isVisible" 
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '../../composables/useIntersectionObserver'
import { useAnimatedCounter } from '../../composables/useAnimatedCounter'

interface Statistic {
  value?: number
  label: string
  symbol?: string
  text?: string
}

const StatisticItem = defineComponent({
  props: {
    stat: {
      type: Object as PropType<Statistic>,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const animatedValue = useAnimatedCounter({
      end: props.stat.value || 0,
      isActive: computed(() => props.isVisible && !!props.stat.value)
    })

    return () => {
      if (!props.stat.value) {
        return h('div', { class: 'text-center flex flex-col items-center justify-center' }, [
          h('div', { class: 'relative inline-block w-32 h-32' }, [
            h('div', { class: 'absolute inset-0 flex items-center justify-center' }, [
              h('span', { class: 'text-3xl font-bold' }, props.stat.text)
            ])
          ]),
          h('p', { class: 'mt-4 text-lg font-medium' }, props.stat.label)
        ])
      }

      const circumference = 2 * Math.PI * 45
      const strokeDasharray = props.isVisible 
        ? `${(animatedValue.value / 100) * circumference}, ${circumference}` 
        : `0, ${circumference}`

      return h('div', { class: 'text-center flex flex-col items-center justify-center' }, [
        h('div', { class: 'relative inline-block w-32 h-32' }, [
          h('svg', { class: 'w-full h-full', viewBox: '0 0 100 100' }, [
            h('circle', { 
              cx: '50', 
              cy: '50', 
              r: '45', 
              fill: 'none', 
              stroke: 'rgba(255, 255, 255, 0.2)', 
              'stroke-width': '8' 
            }),
            h('circle', { 
              cx: '50', 
              cy: '50', 
              r: '45', 
              fill: 'none', 
              stroke: '#ffffff', 
              'stroke-width': '8', 
              'stroke-dasharray': strokeDasharray,
              'stroke-linecap': 'round', 
              transform: 'rotate(-90 50 50)',
              style: { 
                transition: 'stroke-dasharray 2s ease-in-out'
              }
            })
          ]),
          h('div', { class: 'absolute inset-0 flex items-center justify-center' }, [
            h('span', { class: 'text-3xl font-bold' }, `${animatedValue.value}${props.stat.symbol}`)
          ])
        ]),
        h('p', { class: 'mt-4 text-lg font-medium' }, props.stat.label)
      ])
    }
  }
})

const statistics: Statistic[] = [
  { value: 75, label: 'Быстрее обработка обращений', symbol: '%' },
  { value: 90, label: 'Клиентов довольны поддержкой', symbol: '%' },
  { value: 60, label: 'Меньше рутины для команды', symbol: '%' },
  { label: 'Время запуска', text: '15 мин' }
]

const { elementRef, isVisible } = useIntersectionObserver({
  threshold: 0.2,
  triggerOnce: true
})
</script>