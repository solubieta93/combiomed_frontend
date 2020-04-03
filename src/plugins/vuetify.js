import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#AD1457',
        secondary: '#BCAAA4',
        accent: '#880E4F',
        error: '#E91E63',
        warning: '#ffeb3b',
        info: '#666666',
        success: 'rgba(173, 20, 87, 0.77)',
      },
    },
  },
})
