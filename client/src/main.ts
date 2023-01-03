import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.sass'
import '@/assets/general.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
