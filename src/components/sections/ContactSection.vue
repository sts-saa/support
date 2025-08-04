<template>
  <section id="contact" class="py-20 bg-secondary">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
          Хватит терять клиентов из-за поддержки
        </h2>
        <p class="text-lg text-gray-200">
          Запустите Support360 сегодня. Без обучения. Без сложностей и затяжных интеграций.
        </p>
      </div>
      
      <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/2 p-8 md:p-12">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">Получите персональную консультацию</h3>
            
            <el-alert
              title="Что вы получите:"
              type="success"
              :closable="false"
              class="mb-6"
            >
              <ul class="space-y-2 text-sm text-gray-700 mt-3">
                <li class="flex items-start">
                  <el-icon class="text-green-500 mt-0.5 mr-2">
                    <Check />
                  </el-icon>
                  Анализ ваших текущих процессов поддержки
                </li>
                <li class="flex items-start">
                  <el-icon class="text-green-500 mt-0.5 mr-2">
                    <Check />
                  </el-icon>
                  Демонстрацию системы на ваших примерах
                </li>
                <li class="flex items-start">
                  <el-icon class="text-green-500 mt-0.5 mr-2">
                    <Check />
                  </el-icon>
                  План внедрения
                </li>
              </ul>
              <p class="text-sm text-gray-700 mt-3">
                30 минут — и вы поймёте, как можно упростить поддержку без сложного внедрения.
              </p>
            </el-alert>
            
            <el-alert
              v-if="isSubmitted"
              title="Спасибо за заявку!"
              type="success"
              :closable="false"
              class="mb-6"
            >
              <p>Мы свяжемся с вами в течение 30 минут и покажем, как Support360 решит ваши задачи.</p>
            </el-alert>

            <el-form
              v-else
              ref="formRef"
              :model="formData"
              :rules="rules"
              @submit.prevent="handleSubmit"
              label-position="top"
            >
              <el-form-item label="Ваше имя" prop="name">
                <el-input
                  v-model="formData.name"
                  placeholder="Как к вам обращаться?"
                  size="large"
                />
              </el-form-item>

              <el-form-item label="Телефон для связи" prop="phone">
                <el-input
                  v-model="formData.phone"
                  placeholder="+7-XXX-XXX-XX-XX"
                  size="large"
                  @input="formatPhone"
                />
              </el-form-item>

              <el-form-item prop="acceptTerms">
                <el-checkbox v-model="formData.acceptTerms">
                  Я согласен на обработку персональных данных согласно
                  <el-button 
                    type="primary" 
                    link 
                    @click="showPrivacyModal = true"
                    class="p-0 h-auto"
                  >
                    политике конфиденциальности
                  </el-button>
                </el-checkbox>
              </el-form-item>
              
              <el-button 
                type="primary" 
                size="large" 
                class="w-full"
                @click="handleSubmit"
                :loading="isSubmitting"
              >
                Получить консультацию
              </el-button>
              
              <p class="text-xs text-gray-500 text-center mt-4">
                Никакого спама — только полезная информация о том, как улучшить вашу поддержку
              </p>
            </el-form>
          </div>
          
          <div class="md:w-1/2 bg-gray-50 p-8 md:p-12">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">Свяжитесь с нами прямо сейчас</h3>
            
            <div class="space-y-6">
              <div>
                <p class="font-semibold text-gray-700">Компания:</p>
                <p class="text-gray-600">ООО "ИТ Лаборатория"</p>
              </div>
              
              <div>
                <p class="font-semibold text-gray-700">Email:</p>
                <el-link href="mailto:info@support360.ru" type="primary">info@support360.ru</el-link>
              </div>

              <div>
                <p class="font-semibold text-gray-700">Телефон:</p>
                <el-link href="tel:+73833838004" type="primary">+7 (383) 383-80-04</el-link>
              </div>

              <div>
                <p class="font-semibold text-gray-700">Адрес:</p>
                <p class="text-gray-600">630007, г. Новосибирск, ул. Большевистская, д.97</p>
              </div>

              <div class="pt-4">
                <p class="font-semibold text-gray-700 mb-3">Режим работы:</p>
                <p class="text-gray-600">Пн-Пт: 9:00 - 18:00 (НСК)</p>
                <p class="text-gray-600">Сб-Вс: Выходные</p>
              </div>
              
              <el-alert
                title="Постоянная связь"
                type="info"
                :closable="false"
              >
                <p class="text-sm text-gray-700">
                  Для действующих клиентов доступна поддержка через Support360
                </p>
              </el-alert>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно политики конфиденциальности -->
    <el-dialog
      v-model="showPrivacyModal"
      title="Политика в отношении обработки персональных данных"
      width="80%"
      :before-close="handleClosePrivacy"
    >
      <div class="prose max-w-none text-black max-h-96 overflow-y-auto">
        <h2 class="text-xl font-bold mb-4">1. Общие положения</h2>
        <p class="mb-4">Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО "ИТ ЛАБОРАТОРИЯ" (далее – Оператор).</p>
        
        <p class="mb-4">1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
        
        <p class="mb-4">1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://support360.ru.</p>

        <!-- Остальной контент политики конфиденциальности -->
      </div>
    </el-dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Check } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const formRef = ref<FormInstance>()
const isSubmitted = ref(false)
const isSubmitting = ref(false)
const showPrivacyModal = ref(false)

const formData = reactive({
  name: '',
  phone: '',
  acceptTerms: false
})

const rules: FormRules = {
  name: [
    { required: true, message: 'Пожалуйста, введите ваше имя', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: 'Пожалуйста, введите номер телефона', trigger: 'blur' },
    { pattern: /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/, message: 'Неверный формат телефона', trigger: 'blur' }
  ],
  acceptTerms: [
    { 
      validator: (rule, value, callback) => {
        if (!value) {
          callback(new Error('Необходимо согласие на обработку данных'))
        } else {
          callback()
        }
      }, 
      trigger: 'change' 
    }
  ]
}

const formatPhone = (value: string) => {
  let formattedValue = value.replace(/\D/g, '')
  if (formattedValue.length > 0) {
    formattedValue = formattedValue.substring(0, 11)
    let formatted = '+7'
    if (formattedValue.length > 1) {
      formatted += '-' + formattedValue.substring(1, 4)
    }
    if (formattedValue.length > 4) {
      formatted += '-' + formattedValue.substring(4, 7)
    }
    if (formattedValue.length > 7) {
      formatted += '-' + formattedValue.substring(7, 9)
    }
    if (formattedValue.length > 9) {
      formatted += '-' + formattedValue.substring(9, 11)
    }
    formData.phone = formatted
  }
}

const handleSubmit = async () => {
  if (!formRef.value) return
  
  try {
    await formRef.value.validate()
    isSubmitting.value = true
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    isSubmitted.value = true
    
    // Сброс формы
    Object.assign(formData, {
      name: '',
      phone: '',
      acceptTerms: false
    })
    
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
    
  } catch (error) {
    ElMessage.error('Пожалуйста, заполните все обязательные поля')
  } finally {
    isSubmitting.value = false
  }
}

const handleClosePrivacy = () => {
  showPrivacyModal.value = false
}
</script>