<template>
  <!-- 切换组件 -->
  <lang-selecter />
  <el-config-provider :locale="language">
    <RouterView />
  </el-config-provider>
</template>
<script setup>
// 引入语言切换组件
import langSelecter from '@/components/langSelecter.vue'
import { ElConfigProvider } from 'element-plus'
// 语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/dist/locale/en.mjs'

import { useLanguageStore } from '@/stores/language'
// import { ElMessage } from 'element-plus'
import { computed } from 'vue'
// import { useI18n } from 'vue-i18n'
const langStore = useLanguageStore()
const language = computed(() => (langStore.language === 'zh' ? zhCn : en))
console.log(language.value, 'language')
</script>

<style scoped></style>
