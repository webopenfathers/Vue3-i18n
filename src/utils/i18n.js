import { watch } from 'vue'
import { useLanguageStore } from '@/stores/language'
/**
 * 监听语言变化,同时执行 cb,cb可以时多个参数
 */
export function watchSwitchLang(...cbs) {
  const languageStore = useLanguageStore()
  watch(
    () => languageStore.language,
    () => {
      console.log('语言变化了')
      cbs.forEach((cb) => cb(languageStore.language))
    },
  )
}
