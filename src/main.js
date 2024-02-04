import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
// import router from './router'
// import store from './store'


createApp(App).use(Notifications).mount('#app')
// use(store).use(router)