import './assets/main.css'
import './main.css'

import { createApp } from 'vue'

import App from './components/app/App.vue'

import store from './stores'

const app = createApp(App)

app.use(store)


app.mount('#app')