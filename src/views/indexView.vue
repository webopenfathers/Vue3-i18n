<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <!-- 模板中使用i18n -->
    <el-form-item :label="$t('msg.form.name')">
      <el-input v-model="formInline.user" :placeholder="$t('msg.form.placeholderName')" clearable />
    </el-form-item>
    <el-form-item :label="$t('msg.form.region')">
      <el-select
        v-model="formInline.region"
        :placeholder="$t('msg.form.placeholderRegion')"
        clearable
      >
        <el-option :label="$t('msg.form.regionSelect1')" value="shanghai" />
        <el-option :label="$t('msg.form.regionSelect2')" value="nanjing" />
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('msg.form.date')">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        :placeholder="$t('msg.form.placeholderDate')"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{ $t('msg.form.submit') }}</el-button>
    </el-form-item>
  </el-form>
  <el-table mb-1 :data="[]" />
  <el-pagination :total="100" />
  <el-button type="primary" @click="router.push('/test')">调换</el-button>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { watchSwitchLang } from '@/utils/i18n'

const router = useRouter()
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const fetchData = () => {
  setTimeout(() => {
    console.log('获取数据成功')
  }, 1000)
}
fetchData()

watchSwitchLang(fetchData)
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
