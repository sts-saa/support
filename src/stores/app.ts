import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)
  const isMobile = ref(false)

  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  const setMobile = (mobile: boolean) => {
    isMobile.value = mobile
  }

  // Проверка мобильного устройства
  const checkMobile = () => {
    setMobile(window.innerWidth < 768)
  }

  return {
    isLoading,
    isMobile,
    setLoading,
    setMobile,
    checkMobile
  }
})