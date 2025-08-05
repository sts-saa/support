<template>
  <section id="features" class="py-20">
    <div class="container mx-auto px-4">
      <SectionTitle 
        title="Почему выбирают Support360"
        subtitle="Современные возможности для эффективной поддержки клиентов"
        center
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-10 mr-10">
        <FeatureCard 
          title="Формат чата"
          description="Просто пишите в чат или Telegram — без форм и выбора категорий."
        >
          <template #icon>
            <MessageSquareIcon />
          </template>
        </FeatureCard>
        
        <FeatureCard 
          title="Запуск за 1 день"
          description="Никаких интеграций на месяцы. Подключили — и уже принимаете обращения."
        >
          <template #icon>
            <ZapIcon />
          </template>
        </FeatureCard>
        
        <FeatureCard 
          title="Простая авторизация"
          description="Вход через QR-код или Telegram. Без логинов, паролей и лишних действий."
        >
          <template #icon>
            <QrCodeIcon />
          </template>
        </FeatureCard>
        
        <FeatureCard 
          title="Все обращения в одном месте"
          description="Ничего не теряется в личных сообщениях и группах. Вся история обращений хранится централизованно."
        >
          <template #icon>
            <LayersIcon />
          </template>
        </FeatureCard>
        
        <FeatureCard 
          title="Работает на любом устройстве"
          description="Телефон, планшет, ноутбук — ничего не нужно устанавливать. Авторизация в 2 клика."
        >
          <template #icon>
            <SmartphoneIcon />
          </template>
        </FeatureCard>
        
        <FeatureCard 
          title="Массовые уведомления"
          description="Сообщайте о сбоях, изменениях и новостях. Доставляется быстро, без ручной рассылки."
        >
          <template #icon>
            <BellIcon />
          </template>
        </FeatureCard>
        
        <FeatureCard 
          title="Интеграция с Telegram и CRM"
          description="Упрощённый вход без логинов и паролей. Идентификация по номеру и связь с профилем в CRM."
        >
          <template #icon>
            <MessageCircleIcon />
          </template>
        </FeatureCard>
        
        <FeatureCard 
          title="Контроль скорости ответа"
          description="Следите, кто и как отвечает на обращения. Ни один запрос не останется без внимания."
        >
          <template #icon>
            <ClockIcon />
          </template>
        </FeatureCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'
import FeatureCard from '../ui/FeatureCard.vue'

// Иконки как компоненты
const MessageSquareIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
  ])
}

const ZapIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
  ])
}

const QrCodeIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('rect', { x: '3', y: '3', width: '7', height: '7' }),
    h('rect', { x: '14', y: '3', width: '7', height: '7' }),
    h('rect', { x: '14', y: '14', width: '7', height: '7' }),
    h('rect', { x: '3', y: '14', width: '7', height: '7' })
  ])
}

const LayersIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('polygon', { points: '12 2 2 7 12 12 22 7 12 2' }),
    h('polyline', { points: '2 17 12 22 22 17' }),
    h('polyline', { points: '2 12 12 17 22 12' })
  ])
}

const SmartphoneIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
    h('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' })
  ])
}

const BellIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' }),
    h('path', { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0' })
  ])
}

const MessageCircleIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' })
  ])
}

const ClockIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('polyline', { points: '12 6 12 12 16 14' })
  ])
}
</script>