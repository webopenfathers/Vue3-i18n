import { ref } from 'vue'
import i18n from '@/i18n'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

export const useLanguageStore = defineStore('language', () => {
  const language = ref(localStorage.getItem('language') || 'zh') // 默认语言
  const setLanguage = (lang) => {
    // js文件中使用i18n
    ElMessage.success(i18n.global.t('msg.form.tip'))
    language.value = lang
    localStorage.setItem('language', lang)
  }

  return { language, setLanguage }
})
