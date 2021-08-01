import { createApp } from 'vue'
import App from './App.vue'
import * as mdijs from '@mdi/js'
import mdiVue from 'mdi-vue'

createApp(App).use(mdiVue, {
    icons: mdijs
  }).mount('#app')
