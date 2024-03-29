import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './styles/index.scss'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(ElementPlus).use(router).mount('#app')
