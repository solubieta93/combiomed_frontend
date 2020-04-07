import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './utils/router'
import './utils/registerServiceWorker'
import { store } from '@/store/store'
import FormAlert from './components/shared/FormAlert'

// Register Global Component
Vue.component('form-alert', FormAlert)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  created () {
    // execute getCurrentUser query
    if (this.$store.getters.token) {
      this.$store.dispatch('verifyToken')
    }
  },
  render: h => h(App),
}).$mount('#app')
