<template>
  <el-dropdown class="international" trigger="click" @command="handleSetLanguage">
    <div>
      <el-tootip content="国际化" effect="dark">
        <el-buttom>国际化 {{ language }}</el-buttom>
      </el-tootip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { useLanguageStore } from '@/stores/language'
import { ElMessage } from 'element-plus'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const langStore = useLanguageStore()
const language = computed(() => langStore.language)

// 切换语言的方法
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  console.log('切换语言', lang)

  // 切换 i8n 的 locale
  i18n.locale.value = lang

  // 修改 pinia 中保存的 language
  langStore.setLanguage(lang)

  // 提示语言切换成功----组件中使用i18n
  ElMessage.success(`${i18n.t('msg.form.tip')}：${lang}`)
}
</script>
