import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'
import router from '@/utils/router'
import '@/utils/registerServiceWorker'
import { store } from '@/store/store'
import FormAlert from '@/components/utils/FormAlert'
import Notifications from 'vue-notification';
import { i18n } from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';

// Register Global Component
Vue.component('form-alert', FormAlert)
Vue.use(Notifications);
Vue.use(FlagIcon);
Vue.config.productionTip = false
document.title = 'Combiomed'

new Vue({
  i18n,
  store,
  router,
  vuetify,
  beforeCreate () {
    document.title = 'Combiomed'
  },
  created () {
    // execute getCurrentUser query
    if (this.$store.getters.token) {
      this.$store.dispatch('verifyToken')
      // this.$store.dispatch('getProductsTypes')
    }
  },
  render: h => h(App),
}).$mount('#app')
