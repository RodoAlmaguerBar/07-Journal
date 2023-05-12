import { createApp } from 'vue'
import './styles/styles.scss'
import App from './App.vue'
import router from './router'
import store from './store/index copy'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
