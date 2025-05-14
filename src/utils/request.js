import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useLanguageStore } from '@/stores/language'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const languageStore = useLanguageStore()
    // 配置接口国际化
    config.headers['Accept-Language'] = languageStore.language
    // 必须返回 config
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
// 1.情况一：请求成功业务成功
// 2.情况二：请求成功业务失败
// 3.情况三：请求失败
service.interceptors.response.use(
  // 请求成功
  (response) => {
    const { success, message, data } = response.data
    // 判断当前请求是否成功
    if (success) {
      // 成功返回解析后的数据
      return data
    } else {
      // 失败（请求成功，业务失败），消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  (error) => {
    // token 过期
    if (error.response && error.response.data && error.response.data.code === 401) {
      // 跳转登录页
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  },
)

export default service
