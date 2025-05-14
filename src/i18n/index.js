import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh.js'
import enLocale from './lang/en.js'
// 1.创建数据源
const messages = {
  en: {
    msg: {
      ...enLocale,
    },
  },
  zh: {
    msg: {
      ...zhLocale,
    },
  },
}

// 获取缓存中的最新数据
function getLanguage() {
  return localStorage.getItem('language') || 'zh'
}

// 3.初始化i8n实例
const i18n = createI18n({
  legacy: false, // 使用组合式API
  silentTranslationWarn: true, // 禁用警告
  globalInjection: true, // 全局使用 t 函数
  locale: getLanguage(), // 设置地区
  messages, // 设置语言环境信息
})

export default i18n
