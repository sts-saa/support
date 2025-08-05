import { ref, watch } from 'vue'

interface UseAnimatedCounterOptions {
  start?: number
  end: number
  duration?: number
  isActive?: boolean
}

export function useAnimatedCounter(options: UseAnimatedCounterOptions) {
  const { start = 0, end, duration = 2000, isActive = true } = options
  const count = ref(start)

  watch(() => isActive, (newIsActive) => {
    if (!newIsActive) return

    let startTime: number
    const startValue = start
    const endValue = end

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentCount = Math.floor(
        startValue + (endValue - startValue) * easeOutQuart
      )
      
      count.value = currentCount

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, { immediate: true })

  return count
}