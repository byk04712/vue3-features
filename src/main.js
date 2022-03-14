import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

; (async () => {
  const apps = import.meta.glob('./*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  createApp(App).use(ElementPlus).use(createPinia()).mount('#app')
})()
