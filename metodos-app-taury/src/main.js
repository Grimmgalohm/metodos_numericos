import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { VNumberInput } from 'vuetify/lib/labs/components.mjs'

const app = createApp(App) 

loadFonts()

app.use(vuetify)
app.component(VNumberInput)
app.mount('#app')