<template>
  <div class="font-sans">
    <AppHeader />
    <router-view />
    <AppFooter />
    <ScrollToTop />
    <CookieWidget />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from './stores/app'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import CookieWidget from './components/CookieWidget.vue'

const appStore = useAppStore()

const handleResize = () => {
  appStore.checkMobile()
}

onMounted(() => {
  document.title = "Support360 — Поддержка начинается с первого сообщения"
  appStore.checkMobile()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>